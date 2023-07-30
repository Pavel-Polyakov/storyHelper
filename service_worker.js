// Cached core static resources
self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open("static").then(cache=>{
      return cache.addAll([
        "./",
        './images/logo_192.png',
        "https://cdn.jsdelivr.net/npm/context-filter-polyfill/dist/index.min.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
      ]);
    })
  );
});

// Fatch resources
self.addEventListener("fetch",e=>{
  e.respondWith(
    caches.match(e.request).then(response=>{
      return response||fetch(e.request);
    })
  );
});