
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("antares-checklist").then(function(cache) {
      return cache.addAll([
        "/",
        "/checklist_interno.html",
        "/checklist_diagnostico.html",
        "/manifest.json",
        "/icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
