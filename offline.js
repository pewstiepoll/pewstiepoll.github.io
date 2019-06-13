const CACHE_NAME = "offline-cache-v1";

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      return fetch(event.request).then(function(response) {
        if (!response || response.status !== 200 || response.type !== "basic")
          return response;

        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
