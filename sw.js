// This is a simple service worker that will cache all resources
// so that it works offline

const CACHE_NAME = "chat-bot-cache-v1"
const urlsToCache = [
  "https://mths-icd2o-1-2023.github.io/ICD2O-Assignment-06-George-Khalil-29/",
  "index.html", // Update with your actual HTML file name if different
]

self.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache")
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
})
