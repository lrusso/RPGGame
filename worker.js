const filesToCache = [
	"RPG.htm",
	"RPG.json",
	"RPG.png",
	"RPGFavIcon_16x16.png",
	"RPGFavIcon_192x192.png",
	"RPGFavIcon_512x512.png",
	"RPGGame.htm",
	"RPGGame.js",
	"RPGShare.png"
];

const staticCacheName = "rpggame-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});