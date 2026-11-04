// Offline support: keeps the tool available without signal.
// It caches only the tool itself. Session files are never stored here; they stay where you save them.
// Bump CACHE when you publish changes so installed copies pick up the new version.
const CACHE = "sct-v4.1.0";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png"];
const CACHEABLE = [self.location.origin, "https://fonts.googleapis.com", "https://fonts.gstatic.com"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || !CACHEABLE.some(p => req.url.startsWith(p))) return;
  const own = req.url.startsWith(self.location.origin);
  // Network first for the tool's own files (so updates arrive), cache when offline.
  // Cache first for fonts (they never change).
  e.respondWith(own
    ? fetch(req).then(res => { const copy = res.clone(); if (res.ok) caches.open(CACHE).then(c => c.put(req, copy)); return res; })
        .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match("./index.html")))
    : caches.match(req).then(hit => hit || fetch(req).then(res => { const copy = res.clone(); if (res.ok || res.type === "opaque") caches.open(CACHE).then(c => c.put(req, copy)); return res; }))
  );
});
