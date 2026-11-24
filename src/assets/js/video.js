import { frame, el, field, select, fmtBytes, baseName, downloadLink } from './core.js';
import { runFFmpeg, getFFmpeg } from './ffmpeg-loader.js';

export function init(root) {
  const mode = root.dataset.mode; // convert | compress | gif
  const ui = frame(root, {
    accept: 'video/*,.mkv,.mov,.avi,.flv,.wmv,.3gp',
    label: 'Choose a video or drop it here',
    hint: 'MP4, MOV, WebM, MKV, AVI and more. Works best under 500 MB. Nothing is uploaded.',
  });

  let to, crf, height, fps, width, start, dur;
  if (mode === 'convert') {
    to = select('to', [['mp4', 'MP4 (H.264)'], ['webm', 'WebM (VP8)'], ['mov', 'MOV']], root.dataset.to || 'mp4');
    ui.opts.append(field('Convert to', to));
  } else if (mode === 'compress') {
    crf = select('crf', [['24', 'Light (best quality)'], ['28', 'Medium'], ['32', 'Strong (smallest)']], '28');
    height = select('height', [['0', 'Keep size'], ['1080', '1080p'], ['720', '720p'], ['480', '480p']], '720');
    ui.opts.append(field('Compression', crf), field('Max resolution', height));
  } else {
    fps = select('fps', [['10', '10 fps'], ['15', '15 fps'], ['20', '20 fps']], '10');
    width = select('width', [['320', '320 px wide'], ['480', '480 px wide'], ['640', '640 px wide']], '480');
    start = el('input', { type: 'number', min: 0, step: 0.5, value: 0, name: 'start' });
    dur = el('input', { type: 'number', min: 1, max: 60, step: 0.5, value: 5, name: 'dur' });
    ui.opts.append(field('Start (sec)', start), field('Length (sec)', dur), field('Frame rate', fps), field('Size', width));
  }

  // Start fetching the converter as soon as someone shows interest.
  root.addEventListener('pointerenter', () => getFFmpeg().catch(() => {}), { once: true });

  let busy = false;
  const queue = [];
  ui.onFiles((files) => { queue.push(...files); if (!busy) next(); });

  async function next() {
    const file = queue.shift();
    if (!file) { busy = false; return; }
    busy = true;
    const meta = el('span', { class: 'meta' }, 'Loading converter (first time can take a moment)…');
    const row = el('li', {}, el('span', { class: 'name' }, file.name), meta);
    ui.list.prepend(row);
    ui.setProgress(0);
    try {
      const { args, ext, mime } = jobFor();
      const blob = await runFFmpeg(file, args, 'out.' + ext, mime, (p) => {
        ui.setProgress(p); meta.textContent = `Converting… ${Math.round(p * 100)}%`;
      });
      meta.textContent = `${fmtBytes(file.size)} → ${fmtBytes(blob.size)}`;
      const suffix = mode === 'compress' ? '-compressed' : '';
      row.append(downloadLink(blob, baseName(file.name) + suffix + '.' + ext));
      ui.setStatus('Done.');
    } catch (e) {
      meta.replaceWith(el('span', { class: 'meta bad' }, e.message || 'Failed'));
      ui.setStatus('That file could not be converted. Try a smaller or different file.', true);
    }
    ui.setProgress(null);
    next();
  }

  function jobFor() {
    const h264 = ['-c:v', 'libx264', '-preset', 'ultrafast', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '128k', '-movflags', '+faststart'];
    if (mode === 'convert') {
      if (to.value === 'webm') return { args: ['-c:v', 'libvpx', '-b:v', '1.5M', '-deadline', 'realtime', '-cpu-used', '8', '-c:a', 'libvorbis'], ext: 'webm', mime: 'video/webm' };
      if (to.value === 'mov') return { args: [...h264.slice(0, 8), '-c:a', 'aac'], ext: 'mov', mime: 'video/quicktime' };
      return { args: [...h264, '-crf', '23'], ext: 'mp4', mime: 'video/mp4' };
    }
    if (mode === 'compress') {
      const h = parseInt(height.value, 10);
      const vf = h ? ['-vf', `scale=-2:'min(${h},ih)'`] : [];
      return { args: [...vf, ...h264, '-crf', crf.value], ext: 'mp4', mime: 'video/mp4' };
    }
    const vf = `fps=${fps.value},scale=${width.value}:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=128[p];[b][p]paletteuse=dither=bayer`;
    return { args: ['-ss', String(+start.value || 0), '-t', String(Math.min(60, +dur.value || 5)), '-vf', vf, '-loop', '0'], ext: 'gif', mime: 'image/gif' };
  }
}
