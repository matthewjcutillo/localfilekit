const root = document.getElementById('tool');
if (root) {
  import(`./${root.dataset.family}.js`).then((m) => m.init(root)).catch((e) => {
    root.textContent = 'This tool needs a modern browser (Chrome, Edge, Firefox or Safari).';
    console.error(e);
  });
}

// Instant tool search on the home page
const q = document.getElementById('q');
if (q) {
  const tiles = [...document.querySelectorAll('.tile[data-k]')];
  const none = document.getElementById('qnone');
  const run = () => {
    const words = q.value.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').split(/\s+/).filter(Boolean);
    let shown = 0;
    for (const t of tiles) { const ok = words.every((w) => t.dataset.k.includes(w)); t.hidden = !ok; if (ok) shown++; }
    document.querySelectorAll('section.cat').forEach((s) => (s.hidden = !s.querySelector('.tile:not([hidden])')));
    none.hidden = shown > 0;
  };
  q.addEventListener('input', run);
  q.addEventListener('keydown', (e) => { if (e.key === 'Enter') { const first = tiles.find((t) => !t.hidden); if (first) location.href = first.href; } });
  document.addEventListener('keydown', (e) => { if (e.key === '/' && document.activeElement !== q) { e.preventDefault(); q.focus(); } });
}

// Installable app + offline use
if ('serviceWorker' in navigator) addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
