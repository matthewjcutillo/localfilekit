import { frame, el, field, select, fmtBytes, baseName, downloadLink, zipAndDownload, tick } from './core.js';

const MIME = { jpg: 'image/jpeg', png: 'image/png', webp: 'image/webp' };
const EXT = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' };

function typeOf(file) {
  const t = file.type;
  if (EXT[t]) return t;
  const ext = (file.name.split('.').pop() || '').toLowerCase();
  if (ext === 'jpeg' || ext === 'jpg' || ext === 'jfif') return 'image/jpeg';
  if (ext === 'png') return 'image/png';
  if (ext === 'webp') return 'image/webp';
  return 'image/png';
}

async function decode(file) {
  try {
    return await createImageBitmap(file, { imageOrientation: 'from-image' });
  } catch {
    // Fallback through an <img> for formats createImageBitmap rejects (e.g. SVG)
    const url = URL.createObjectURL(file);
    try {
      const img = new Image();
      img.src = url;
      await img.decode();
      return img;
    } catch {
      throw new Error('This browser cannot open this image type');
    } finally { URL.revokeObjectURL(url); }
  }
}

function encode(src, w, h, mime, quality) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  if (mime === 'image/jpeg') { ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); }
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(src, 0, 0, w, h);
  return new Promise((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error('Could not encode image'))), mime, quality));
}

export function init(root) {
  const mode = root.dataset.mode;           // compress | convert | resize
  const preset = root.dataset.to || '';      // jpg | png | webp
  const accept = root.dataset.accept || 'image/*';
  const ui = frame(root, {
    accept,
    label: 'Choose images or drop them here',
    hint: 'JPG, PNG, WebP and more. Batch is fine. Nothing is uploaded.',
  });

  const quality = el('input', { type: 'range', min: 10, max: 100, value: 75 });
  const qLabel = el('span', {}, '75%');
  quality.addEventListener('input', () => (qLabel.textContent = quality.value + '%'));
  const qField = field(el('span', {}, 'Quality ', qLabel), quality);

  let format;
  if (mode === 'compress') {
    format = select('format', [['same', 'Same as original'], ['jpg', 'JPG'], ['webp', 'WebP']], preset || 'same');
    const maxW = el('input', { type: 'number', min: 1, placeholder: 'Original', name: 'maxw' });
    ui.opts.append(qField, field('Output format', format), field('Max width (px)', maxW));
    root._maxW = maxW;
  } else if (mode === 'convert') {
    format = select('format', [['jpg', 'JPG'], ['png', 'PNG'], ['webp', 'WebP']], preset || 'jpg');
    ui.opts.append(field('Convert to', format), qField);
    const sync = () => (qField.style.display = format.value === 'png' ? 'none' : '');
    format.addEventListener('change', sync); sync();
  } else {
    format = select('format', [['same', 'Same as original'], ['jpg', 'JPG'], ['png', 'PNG'], ['webp', 'WebP']], 'same');
    const by = select('by', [['px', 'Pixels'], ['pct', 'Percent']], 'px');
    const w = el('input', { type: 'number', min: 1, placeholder: 'Auto', name: 'w' });
    const h = el('input', { type: 'number', min: 1, placeholder: 'Auto', name: 'h' });
    const pct = el('input', { type: 'number', min: 1, max: 1000, value: 50, name: 'pct' });
    const wF = field('Width', w), hF = field('Height', h), pF = field('Percent', pct);
    const sync = () => { const px = by.value === 'px'; wF.style.display = hF.style.display = px ? '' : 'none'; pF.style.display = px ? 'none' : ''; };
    by.addEventListener('change', sync); sync();
    ui.opts.append(field('Resize by', by), wF, hF, pF, field('Format', format));
    Object.assign(root, { _by: by, _w: w, _h: h, _pct: pct });
  }

  const results = [];
  const zipBtn = el('button', { class: 'btn ghost', type: 'button', disabled: true }, 'Download all (ZIP)');
  zipBtn.addEventListener('click', () => zipAndDownload(results, 'images.zip'));
  ui.actions.append(zipBtn);

  ui.onFiles(async (files) => {
    let done = 0;
    for (const file of files) {
      const row = el('li', {}, el('span', { class: 'name' }, file.name), el('span', { class: 'meta' }, 'Working…'));
      ui.list.prepend(row);
      ui.setProgress(done / files.length);
      await tick();
      try {
        const out = await processOne(file);
        const meta = row.querySelector('.meta');
        const diff = 1 - out.blob.size / file.size;
        meta.textContent = `${fmtBytes(file.size)} → ${fmtBytes(out.blob.size)}`;
        if (mode === 'compress') {
          meta.append(' ', el('span', { class: diff > 0.005 ? 'saved' : '' }, diff > 0.005 ? `−${Math.round(diff * 100)}%` : 'already small'));
        }
        const prev = el('img', { class: 'preview', alt: '', src: URL.createObjectURL(out.blob) });
        row.prepend(prev);
        row.append(downloadLink(out.blob, out.name));
        results.push(out);
        zipBtn.disabled = results.length < 2;
      } catch (e) {
        row.querySelector('.meta').replaceWith(el('span', { class: 'meta bad' }, e.message || 'Failed'));
      }
      done++;
    }
    ui.setProgress(null);
    ui.setStatus(`${done} file${done === 1 ? '' : 's'} done.`);
  });

  async function processOne(file) {
    const src = await decode(file);
    const inMime = typeOf(file);
    let w = src.width, h = src.height;
    let mime, q = quality.value / 100;
    if (mode === 'compress') {
      mime = format.value === 'same' ? inMime : MIME[format.value];
      const mw = parseInt(root._maxW.value, 10);
      if (mw && w > mw) { h = Math.round(h * (mw / w)); w = mw; }
    } else if (mode === 'convert') {
      mime = MIME[format.value];
    } else {
      mime = format.value === 'same' ? inMime : MIME[format.value];
      q = 0.92;
      if (root._by.value === 'pct') {
        const p = Math.max(1, parseFloat(root._pct.value) || 100) / 100;
        w = Math.round(w * p); h = Math.round(h * p);
      } else {
        const tw = parseInt(root._w.value, 10), th = parseInt(root._h.value, 10);
        if (tw && th) { w = tw; h = th; }
        else if (tw) { h = Math.round(h * (tw / w)); w = tw; }
        else if (th) { w = Math.round(w * (th / h)); h = th; }
      }
      w = Math.max(1, w); h = Math.max(1, h);
    }
    let blob = await encode(src, w, h, mime, mime === 'image/png' ? undefined : q);
    let outMime = mime;
    // Never hand back a "compressed" file that is bigger than the original
    if (mode === 'compress' && blob.size >= file.size && mime === inMime && w === src.width) {
      blob = file; outMime = inMime;
    }
    if (src.close) src.close();
    const suffix = mode === 'compress' ? '-compressed' : mode === 'resize' ? `-${w}x${h}` : '';
    return { blob, name: baseName(file.name) + suffix + '.' + (EXT[outMime] || 'png') };
  }
}
