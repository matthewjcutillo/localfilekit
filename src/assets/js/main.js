const root = document.getElementById('tool');
// Translate the tool's own words on non-English pages
const T = window.LFK_T;
if (T && root) {
  const pats = T.p.map(([re, to]) => [new RegExp(re), to]);
  const long = Object.keys(T.s).filter((k) => k.length > 15 && /\.$/.test(k));
  const tr = (txt) => {
    const k = txt.trim();
    if (!k) return txt;
    let out = T.s[k];
    if (out == null) for (const [re, to] of pats) if (re.test(k)) { out = k.replace(re, to); break; }
    if (out == null) { let x = k; for (const l of long) if (x.includes(l)) x = x.split(l).join(T.s[l]); if (x !== k) out = x; }
    return out == null ? txt : txt.replace(k, out);
  };
  const walk = (n) => {
    if (n.nodeType === 3) { const v = tr(n.nodeValue); if (v !== n.nodeValue) n.nodeValue = v; return; }
    if (n.nodeType !== 1) return;
    if (n.placeholder) { const v = tr(n.placeholder); if (v !== n.placeholder) n.placeholder = v; }
    n.childNodes.forEach(walk);
  };
  new MutationObserver((ms) => ms.forEach((m) => (m.type === 'characterData' ? walk(m.target) : m.addedNodes.forEach(walk)))).observe(root, { childList: true, subtree: true, characterData: true });
}
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
    const words = q.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]+/g, ' ').split(/\s+/).filter(Boolean);
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
