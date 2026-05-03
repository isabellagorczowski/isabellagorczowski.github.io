const CACHE = 'afterfive-v1';
const FILES = [
  '/', '/index.html', '/explore.html', '/plans.html',
  '/friends.html', '/ai.html', '/map.html', '/auth.html'
];

self.addEventListener('install', e =>
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));

self.addEventListener('fetch', e =>
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
