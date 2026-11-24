import { frame, el, field, select, fmtBytes, baseName, downloadLink, zipAndDownload, loadScript, tick } from './core.js';
import { runFFmpeg } from './ffmpeg-loader.js';

async function decodeAudio(file) {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  const ctx = new Ctx({ sampleRate: 44100 });
  try {
    return await ctx.decodeAudioData(await file.arrayBuffer());
  } finally { ctx.close && ctx.close(); }
}

function floatTo16(f32) {
  const out = new Int16Array(f32.length);
  for (let i = 0; i < f32.length; i++) {
    const s = Math.max(-1, Math.min(1, f32[i]));
    out[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }
  return out;
}

async function toMp3(buf, kbps, onProgress) {
  await loadScript('/vendor/lamejs.iife.js');
  const ch = Math.min(2, buf.numberOfChannels);
  const enc = new window.lamejs.Mp3Encoder(ch, buf.sampleRate, kbps);
  const L = floatTo16(buf.getChannelData(0));
  const R = ch > 1 ? floatTo16(buf.getChannelData(1)) : null;
  const parts = [];
  const step = 1152 * 40;
  for (let i = 0; i < L.length; i += step) {
    const l = L.subarray(i, i + step);
    const d = R ? enc.encodeBuffer(l, R.subarray(i, i + step)) : enc.encodeBuffer(l);
    if (d.length) parts.push(new Uint8Array(d));
    onProgress(i / L.length);
    await tick();
  }
  const end = enc.flush();
  if (end.length) parts.push(new Uint8Array(end));
  return new Blob(parts, { type: 'audio/mpeg' });
}

function toWav(buf) {
  const ch = Math.min(2, buf.numberOfChannels), len = buf.length, rate = buf.sampleRate;
  const data = new DataView(new ArrayBuffer(44 + len * ch * 2));
  const w = (o, s) => [...s].forEach((c, i) => data.setUint8(o + i, c.charCodeAt(0)));
  w(0, 'RIFF'); data.setUint32(4, 36 + len * ch * 2, true); w(8, 'WAVE'); w(12, 'fmt ');
  data.setUint32(16, 16, true); data.setUint16(20, 1, true); data.setUint16(22, ch, true);
  data.setUint32(24, rate, true); data.setUint32(28, rate * ch * 2, true);
  data.setUint16(32, ch * 2, true); data.setUint16(34, 16, true); w(36, 'data');
  data.setUint32(40, len * ch * 2, true);
  const chans = [...Array(ch)].map((_, i) => buf.getChannelData(i));
  let o = 44;
  for (let i = 0; i < len; i++) for (let c = 0; c < ch; c++) {
    const s = Math.max(-1, Math.min(1, chans[c][i]));
    data.setInt16(o, s < 0 ? s * 0x8000 : s * 0x7fff, true); o += 2;
  }
  return new Blob([data], { type: 'audio/wav' });
}

export function init(root) {
  const ui = frame(root, {
    accept: root.dataset.accept || 'video/*,audio/*,.mkv,.mov,.m4a',
    label: 'Choose files or drop them here',
    hint: 'MP4, MOV, WebM, M4A, WAV and more. Nothing is uploaded.',
  });
  const fmt = select('format', [['mp3', 'MP3'], ['wav', 'WAV']], root.dataset.to || 'mp3');
  const rate = select('bitrate', [['128', '128 kbps'], ['192', '192 kbps'], ['256', '256 kbps'], ['320', '320 kbps']], '192');
  const rateF = field('MP3 quality', rate);
  fmt.addEventListener('change', () => (rateF.style.display = fmt.value === 'mp3' ? '' : 'none'));
  ui.opts.append(field('Output', fmt), rateF);

  const results = [];
  const zipBtn = el('button', { class: 'btn ghost', type: 'button', disabled: true }, 'Download all (ZIP)');
  zipBtn.addEventListener('click', () => zipAndDownload(results, 'audio.zip'));
  ui.actions.append(zipBtn);

  ui.onFiles(async (files) => {
    for (const file of files) {
      const meta = el('span', { class: 'meta' }, 'Reading…');
      const row = el('li', {}, el('span', { class: 'name' }, file.name), meta);
      ui.list.prepend(row);
      try {
        const out = await convert(file, (p, label) => { ui.setProgress(p); if (label) meta.textContent = label; });
        meta.textContent = `${fmtBytes(file.size)} → ${fmtBytes(out.blob.size)}`;
        row.append(downloadLink(out.blob, out.name));
        results.push(out); zipBtn.disabled = results.length < 2;
      } catch (e) {
        meta.replaceWith(el('span', { class: 'meta bad' }, e.message || 'Failed'));
      }
      ui.setProgress(null);
    }
    ui.setStatus('Done.');
  });

  async function convert(file, prog) {
    const ext = fmt.value;
    const name = baseName(file.name) + '.' + ext;
    let buf;
    try {
      buf = await decodeAudio(file);
    } catch {
      // Browser can't decode this container/codec: fall back to ffmpeg.wasm
      prog(0, 'Loading converter (first time only)…');
      const args = ext === 'mp3' ? ['-vn', '-c:a', 'libmp3lame', '-b:a', rate.value + 'k'] : ['-vn', '-c:a', 'pcm_s16le'];
      const blob = await runFFmpeg(file, args, 'out.' + ext, ext === 'mp3' ? 'audio/mpeg' : 'audio/wav', (p) => prog(p, 'Converting…'));
      return { blob, name };
    }
    if (!buf.length) throw new Error('No audio track found');
    prog(0, 'Converting…');
    const blob = ext === 'mp3' ? await toMp3(buf, parseInt(rate.value, 10), (p) => prog(p)) : toWav(buf);
    return { blob, name };
  }
}
