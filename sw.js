const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    // Request to React's assets
    fetch('/asset-manifest.json').then(r => r.json()).then((assets) => {
        event.waitUntil(
            addResourcesToCache([
                "/",
                "/index.html",
                ...(assets.entrypoints || []),
                "/logo-white.png",
                "/logo64.png",
                "/logo192.png",
                "/512.png",
                "/manifest.json",
                "/robots.txt",
                "/asset-manifest.json",
            ])
        );
    });
});
