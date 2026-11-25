// Service worker minimo: serve solo perché il telefono riconosca la pagina come app installabile.
// Non salva nulla: ogni richiesta va in rete come sempre.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* nessuna modifica: rete normale */ });
