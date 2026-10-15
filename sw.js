const CACHE_NAME = 'planner-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/logic.js',
  './img/favicon.svg',
  './img/logo.svg',
  './img/house.svg',
  './img/list-ul.svg',
  './img/plus-square.svg'
];

// Instalação e salvamento de arquivos no cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Intercepta as requisições para responder offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});