// LocalFileKit service worker: makes the site installable and usable offline.
const V = 'lfk-v1';
const CORE = ['/', '/assets/style.css', '/assets/js/main.js', '/assets/js/core.js', '/manifest.webmanifest', '/favicon.svg', '/favicon.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(V).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin) return; // never touch ads or other sites
  if (r.mode === 'navigate') {
    // Pages: fresh from the network, saved copy when offline
    e.respondWith(fetch(r).then((res) => { const c = res.clone(); caches.open(V).then((ca) => ca.put(r, c)); return res; })
      .catch(() => caches.match(r).then((m) => m || caches.match('/'))));
    return;
  }
  if (u.pathname.startsWith('/vendor/')) {
    // Big libraries never change: cache once, reuse forever
    e.respondWith(caches.match(r).then((m) => m || fetch(r).then((res) => { if (res.ok) { const c = res.clone(); caches.open(V).then((ca) => ca.put(r, c)); } return res; })));
    return;
  }
  // Scripts, styles, icons: serve saved copy at once, refresh it in the background
  e.respondWith(caches.match(r).then((m) => {
    const net = fetch(r).then((res) => { if (res.ok) { const c = res.clone(); caches.open(V).then((ca) => ca.put(r, c)); } return res; }).catch(() => m);
    return m || net;
  }));
});
