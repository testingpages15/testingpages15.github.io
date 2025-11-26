// Simple network-only Service Worker
// This is the safest configuration for GitHub Pages + SPA

self.addEventListener("install", event => {
  console.log("SW installed");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("SW activated");
  event.waitUntil(self.clients.claim());
});

// Always use fresh network responses
self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
