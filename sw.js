// Simple network-only service worker

self.addEventListener("install", event => {
  console.log("SW installed");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("SW activated");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
