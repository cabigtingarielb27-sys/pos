const CACHE_NAME = 'kbq-pos-v2';
const ASSETS = ['/pos/', '/pos/index.html', '/pos/manifest.json', '/pos/icon.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
