import { frame, el, field, select, fmtBytes, baseName, downloadLink, zipAndDownload, triggerDownload, loadScript, tick } from './core.js';

const lib = () => loadScript('/vendor/pdf-lib.min.js').then(() => window.PDFLib);

async function loadPdf(file) {
  const { PDFDocument } = await lib();
  try {
    return await PDFDocument.load(await file.arrayBuffer());
  } catch (e) {
    if (/encrypt/i.test(e.message)) throw new Error('This PDF is password-protected');
    throw new Error('Could not read this PDF');
  }
}

const pdfBlob = (bytes) => new Blob([bytes], { type: 'application/pdf' });

// Parses "1-3, 5, 8-" into zero-based page indexes.
export function parseRanges(text, count) {
  const out = [];
  for (const part of text.split(',').map((s) => s.trim()).filter(Boolean)) {
    const m = part.match(/^(\d*)\s*-\s*(\d*)$/);
    let a, b;
    if (m) { a = m[1] ? +m[1] : 1; b = m[2] ? +m[2] : count; }
    else if (/^\d+$/.test(part)) a = b = +part;
    else throw new Error(`"${part}" is not a page or range`);
    if (a < 1 || b > count || a > b) throw new Error(`Pages must be between 1 and ${count}`);
    for (let i = a; i <= b; i++) out.push(i - 1);
  }
  if (!out.length) throw new Error('Enter the pages you want');
  return out;
}

// A reorderable list of picked files, used by merge and images-to-PDF.
function orderedList(ui, onChange) {
  const files = [];
  const render = () => {
    ui.list.replaceChildren(...files.map((f, i) => el('li', {},
      el('span', { class: 'move' },
        el('button', { type: 'button', 'aria-label': 'Move up', onclick: () => { if (i) { [files[i - 1], files[i]] = [files[i], files[i - 1]]; render(); } } }, '↑'),
        el('button', { type: 'button', 'aria-label': 'Move down', onclick: () => { if (i < files.length - 1) { [files[i + 1], files[i]] = [files[i], files[i + 1]]; render(); } } }, '↓'),
        el('button', { type: 'button', 'aria-label': 'Remove', onclick: () => { files.splice(i, 1); render(); } }, '✕')),
      el('span', { class: 'name' }, `${i + 1}. ${f.name}`),
      el('span', { class: 'meta' }, fmtBytes(f.size)))));
    onChange(files);
  };
  ui.onFiles((fs) => { files.push(...fs); render(); });
  return files;
}

async function imageToJpegBytes(file) {
  const bmp = await createImageBitmap(file, { imageOrientation: 'from-image' });
  const c = document.createElement('canvas');
  c.width = bmp.width; c.height = bmp.height;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height); ctx.drawImage(bmp, 0, 0);
  const b = await new Promise((r) => c.toBlob(r, 'image/jpeg', 0.92));
  return new Uint8Array(await b.arrayBuffer());
}

const tools = {
  merge(root, ui) {
    const btn = el('button', { class: 'btn', type: 'button', disabled: true }, 'Merge PDFs');
    ui.actions.append(btn);
    const files = orderedList(ui, (f) => { btn.disabled = f.length < 2; ui.setStatus(f.length < 2 ? 'Add at least two PDFs.' : `${f.length} PDFs ready. Use the arrows to set the order.`); });
    btn.addEventListener('click', async () => {
      btn.disabled = true;
      try {
        const { PDFDocument } = await lib();
        const out = await PDFDocument.create();
        for (let i = 0; i < files.length; i++) {
          ui.setProgress(i / files.length); await tick();
          const src = await loadPdf(files[i]);
          (await out.copyPages(src, src.getPageIndices())).forEach((p) => out.addPage(p));
        }
        triggerDownload(pdfBlob(await out.save()), 'merged.pdf');
        ui.setStatus(`Merged ${files.length} files into merged.pdf (${out.getPageCount()} pages).`);
      } catch (e) { ui.setStatus(e.message, true); }
      ui.setProgress(null); btn.disabled = false;
    });
  },

  split(root, ui) {
    const how = select('how', [['range', 'Extract pages into one PDF'], ['each', 'Every page as its own PDF']], 'range');
    const ranges = el('input', { type: 'text', placeholder: 'e.g. 1-3, 5', name: 'ranges' });
    const rF = field('Pages', ranges);
    how.addEventListener('change', () => (rF.style.display = how.value === 'range' ? '' : 'none'));
    const btn = el('button', { class: 'btn', type: 'button', disabled: true }, 'Split PDF');
    ui.opts.append(field('Mode', how), rF); ui.actions.append(btn);
    let file, doc;
    ui.onFiles(async ([f]) => {
      try {
        doc = await loadPdf(f); file = f;
        ui.list.replaceChildren(el('li', {}, el('span', { class: 'name' }, f.name), el('span', { class: 'meta' }, `${doc.getPageCount()} pages · ${fmtBytes(f.size)}`)));
        btn.disabled = false; ui.setStatus('');
      } catch (e) { ui.setStatus(e.message, true); }
    });
    btn.addEventListener('click', async () => {
      const { PDFDocument } = await lib();
      try {
        const n = doc.getPageCount();
        if (how.value === 'range') {
          const idx = parseRanges(ranges.value, n);
          const out = await PDFDocument.create();
          (await out.copyPages(doc, idx)).forEach((p) => out.addPage(p));
          triggerDownload(pdfBlob(await out.save()), `${baseName(file.name)}-pages.pdf`);
          ui.setStatus(`Saved ${idx.length} page${idx.length > 1 ? 's' : ''}.`);
        } else {
          const items = [];
          for (let i = 0; i < n; i++) {
            ui.setProgress(i / n); await tick();
            const out = await PDFDocument.create();
            out.addPage((await out.copyPages(doc, [i]))[0]);
            items.push({ blob: pdfBlob(await out.save()), name: `${baseName(file.name)}-page-${i + 1}.pdf` });
          }
          await zipAndDownload(items, `${baseName(file.name)}-pages.zip`);
          ui.setStatus(`Split into ${n} files (ZIP).`);
        }
      } catch (e) { ui.setStatus(e.message, true); }
      ui.setProgress(null);
    });
  },

  images(root, ui) {
    const size = select('size', [['fit', 'Same as image'], ['a4', 'A4'], ['letter', 'US Letter']], 'fit');
    const margin = select('margin', [['0', 'No margin'], ['20', 'Small margin'], ['40', 'Big margin']], '0');
    const btn = el('button', { class: 'btn', type: 'button', disabled: true }, 'Create PDF');
    ui.opts.append(field('Page size', size), field('Margin', margin)); ui.actions.append(btn);
    const files = orderedList(ui, (f) => { btn.disabled = !f.length; ui.setStatus(f.length ? `${f.length} image${f.length > 1 ? 's' : ''} ready.` : ''); });
    btn.addEventListener('click', async () => {
      btn.disabled = true;
      try {
        const { PDFDocument } = await lib();
        const out = await PDFDocument.create();
        const m = +margin.value;
        for (let i = 0; i < files.length; i++) {
          ui.setProgress(i / files.length); await tick();
          const f = files[i];
          const isPng = f.type === 'image/png', isJpg = f.type === 'image/jpeg';
          let img;
          try {
            img = isJpg ? await out.embedJpg(await f.arrayBuffer()) : isPng ? await out.embedPng(await f.arrayBuffer()) : await out.embedJpg(await imageToJpegBytes(f));
          } catch { img = await out.embedJpg(await imageToJpegBytes(f)); }
          let pw, ph;
          if (size.value === 'fit') { pw = img.width + 2 * m; ph = img.height + 2 * m; }
          else {
            [pw, ph] = size.value === 'a4' ? [595.28, 841.89] : [612, 792];
            if (img.width > img.height) [pw, ph] = [ph, pw];
          }
          const s = Math.min((pw - 2 * m) / img.width, (ph - 2 * m) / img.height);
          const w = img.width * s, h = img.height * s;
          out.addPage([pw, ph]).drawImage(img, { x: (pw - w) / 2, y: (ph - h) / 2, width: w, height: h });
        }
        triggerDownload(pdfBlob(await out.save()), 'images.pdf');
        ui.setStatus(`Created images.pdf with ${files.length} page${files.length > 1 ? 's' : ''}.`);
      } catch (e) { ui.setStatus(e.message || 'Could not create the PDF', true); }
      ui.setProgress(null); btn.disabled = false;
    });
  },

  rotate(root, ui) {
    const angle = select('angle', [['90', '90° clockwise'], ['180', '180°'], ['270', '90° counter-clockwise']], '90');
    const pages = el('input', { type: 'text', placeholder: 'All pages', name: 'pages' });
    ui.opts.append(field('Rotate', angle), field('Pages (optional)', pages));
    ui.onFiles(async (files) => {
      const { degrees } = await lib();
      for (const f of files) {
        const row = el('li', {}, el('span', { class: 'name' }, f.name));
        ui.list.prepend(row);
        try {
          const doc = await loadPdf(f);
          const idx = pages.value.trim() ? parseRanges(pages.value, doc.getPageCount()) : doc.getPageIndices();
          idx.forEach((i) => { const p = doc.getPage(i); p.setRotation(degrees((p.getRotation().angle + +angle.value) % 360)); });
          const blob = pdfBlob(await doc.save());
          row.append(el('span', { class: 'meta' }, `${idx.length} page${idx.length > 1 ? 's' : ''} rotated`), downloadLink(blob, `${baseName(f.name)}-rotated.pdf`));
        } catch (e) { row.append(el('span', { class: 'meta bad' }, e.message)); }
      }
    });
  },

  toimg(root, ui) {
    const to = select('to', [['jpg', 'JPG'], ['png', 'PNG']], root.dataset.to || 'jpg');
    const scale = select('scale', [['1', 'Normal (72 dpi)'], ['2', 'High (144 dpi)'], ['3', 'Very high (216 dpi)']], '2');
    ui.opts.append(field('Image format', to), field('Quality', scale));
    ui.onFiles(async ([f]) => {
      const row = el('li', {}, el('span', { class: 'name' }, f.name));
      ui.list.prepend(row);
      try {
        const pdfjs = await import('/vendor/pdfjs/pdf.min.mjs');
        pdfjs.GlobalWorkerOptions.workerSrc = '/vendor/pdfjs/pdf.worker.min.mjs';
        let doc;
        try { doc = await pdfjs.getDocument({ data: new Uint8Array(await f.arrayBuffer()) }).promise; }
        catch (e) { throw new Error(/password/i.test(e.message) ? 'This PDF is password-protected' : 'Could not read this PDF'); }
        const items = [];
        const mime = to.value === 'png' ? 'image/png' : 'image/jpeg';
        for (let i = 1; i <= doc.numPages; i++) {
          ui.setProgress((i - 1) / doc.numPages);
          const page = await doc.getPage(i);
          const vp = page.getViewport({ scale: +scale.value });
          const c = document.createElement('canvas');
          c.width = Math.ceil(vp.width); c.height = Math.ceil(vp.height);
          const ctx = c.getContext('2d');
          ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height);
          await page.render({ canvasContext: ctx, viewport: vp }).promise;
          const blob = await new Promise((r) => c.toBlob(r, mime, 0.9));
          items.push({ blob, name: `${baseName(f.name)}-page-${i}.${to.value}` });
        }
        if (items.length === 1) row.append(el('span', { class: 'meta' }, '1 image'), downloadLink(items[0].blob, items[0].name));
        else {
          const b = el('button', { class: 'btn small', type: 'button' }, `Download ${items.length} images (ZIP)`);
          b.addEventListener('click', () => zipAndDownload(items, `${baseName(f.name)}-images.zip`));
          row.append(el('span', { class: 'meta' }, `${items.length} pages`), b);
        }
        ui.setStatus('Done.');
      } catch (e) { row.append(el('span', { class: 'meta bad' }, e.message)); }
      ui.setProgress(null);
    });
  },
};

export function init(root) {
  const mode = root.dataset.mode;
  const isImg = mode === 'images';
  const ui = frame(root, {
    accept: isImg ? 'image/*' : 'application/pdf,.pdf',
    multiple: !(mode === 'split' || mode === 'toimg'),
    label: isImg ? 'Choose images or drop them here' : mode === 'split' || mode === 'toimg' ? 'Choose a PDF or drop it here' : 'Choose PDFs or drop them here',
    hint: 'Your files stay on your device. Nothing is uploaded.',
  });
  tools[mode](root, ui);
}
