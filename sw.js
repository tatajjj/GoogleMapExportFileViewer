self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // 保持空邏輯，讓所有請求正常通過，只做為 PWA 的觸發憑證
});
