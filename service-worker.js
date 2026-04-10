const CACHE = 'tablas-v1';
const FILES = [
  './',
  './index.html',
  './unicornio1.jpg',
  './unicornio2.jpg',
  './unicornio3.jpg',
  './unicornio4.jpg',
  './unicornio5.jpg',
  './unicornio6.jpg',
  './unicornio7.jpg',
  './unicornio8.jpg',
  './unicornio9.jpg',
  './unicornio10.jpg',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
