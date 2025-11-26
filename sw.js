// Simple network-only Service Worker for the SPA
// Ensures install works and keeps app lightweight

self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated");
  return self.clients.claim();
});

// Always fetch fresh content from the network
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
