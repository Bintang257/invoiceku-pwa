
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('invoiceku-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/p/generator-struk-kembalian-tagihan.html?m=1'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
