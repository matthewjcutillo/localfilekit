// Shared helpers for every tool. All processing stays in the browser.
export const $ = (sel, root = document) => root.querySelector(sel);

export function fmtBytes(n) {
  if (n < 1024) return n + ' B';
  if (n < 1048576) return (n / 1024).toFixed(1) + ' KB';
  return (n / 1048576).toFixed(2) + ' MB';
}

export function baseName(name) {
  const i = name.lastIndexOf('.');
  return i > 0 ? name.slice(0, i) : name;
}

export function el(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') e.className = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) e.setAttribute(k, v === true ? '' : v);
  }
  for (const kid of kids.flat()) if (kid != null) e.append(kid);
  return e;
}

// Builds the standard tool frame: drop zone, options area, actions, progress, results.
export function frame(root, { accept, multiple = true, label, hint }) {
  const input = el('input', { type: 'file', accept, multiple });
  const drop = el('label', { class: 'drop' }, el('strong', {}, label), el('small', {}, hint), input);
  const opts = el('div', { class: 'opts' });
  const actions = el('div', { class: 'actions' });
  const bar = el('span');
  const progress = el('div', { class: 'progress' }, bar);
  const status = el('div', { class: 'status', role: 'status', 'aria-live': 'polite' });
  const list = el('ul', { class: 'files' });
  root.append(el('div', { class: 'card' }, drop, opts, actions, progress, status, list));

  const listeners = [];
  const emit = (files) => { if (files.length) listeners.forEach((f) => f(files)); };
  input.addEventListener('change', () => { emit([...input.files]); input.value = ''; });
  ['dragenter', 'dragover'].forEach((t) => drop.addEventListener(t, (e) => { e.preventDefault(); drop.classList.add('over'); }));
  ['dragleave', 'drop'].forEach((t) => drop.addEventListener(t, (e) => { e.preventDefault(); drop.classList.remove('over'); }));
  drop.addEventListener('drop', (e) => emit([...e.dataTransfer.files].slice(0, multiple ? 500 : 1)));

  return {
    opts, actions, list,
    onFiles: (f) => listeners.push(f),
    setStatus(text, isErr = false) { status.textContent = text; status.classList.toggle('err', isErr); },
    setProgress(p) {
      if (p == null) { progress.classList.remove('on'); bar.style.width = '0'; return; }
      progress.classList.add('on'); bar.style.width = Math.round(p * 100) + '%';
    },
  };
}

export function downloadLink(blob, name, text = 'Download') {
  const url = URL.createObjectURL(blob);
  return el('a', { class: 'btn small', href: url, download: name }, text);
}

export function triggerDownload(blob, name) {
  const a = downloadLink(blob, name);
  document.body.append(a); a.click(); a.remove();
}

let zipLoader;
export async function zipAndDownload(items, zipName) {
  zipLoader ||= loadScript('/vendor/jszip.min.js');
  await zipLoader;
  const zip = new window.JSZip();
  const used = new Set();
  for (const { blob, name } of items) {
    let n = name, i = 1;
    while (used.has(n)) n = baseName(name) + '-' + i++ + name.slice(baseName(name).length);
    used.add(n); zip.file(n, blob);
  }
  triggerDownload(await zip.generateAsync({ type: 'blob' }), zipName);
}

const loaded = {};
export function loadScript(src) {
  return (loaded[src] ||= new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = src; s.onload = res; s.onerror = () => rej(new Error('Could not load ' + src));
    document.head.append(s);
  }));
}

export function select(name, options, value) {
  const s = el('select', { name });
  for (const [v, t] of options) s.append(el('option', { value: v, selected: v === value }, t));
  return s;
}

export function field(text, control) { return el('label', {}, text, control); }

export const tick = () => new Promise((r) => setTimeout(r, 0));
