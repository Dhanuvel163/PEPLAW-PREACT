const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://bit.ly/CRA-PWA'
          );
        });
      } else {
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              console.log(
                'New content is available and will be used when all ' +
                  'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
              );

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}

//-------------------------------------------------------//

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     new Response('Hello')
//   )
//   const url = new URL(event.request.url)
//   if(url.pathname.endsWith('.webp')){
//     event.respondWith(
//       fetch('/assets/lawlogo192.webp')
//     )
//   }
// });

// const PRECACHE = 'precache';
// const RUNTIME = 'runtime';
// const PRECACHE_URLS = [
//   './',
//   '/offline.html',
//   '/assets/add1.svg',
//   '/assets/edit.svg',
//   '/assets/home1.webp',
//   '/assets/home2.webp',
//   '/assets/home3.webp',
//   '/assets/home4.webp',
//   '/assets/homecardbg.webp',
//   '/assets/lawlogo64.webp',
//   '/assets/lawlogo192.webp',
//   '/assets/lawlogo512.webp',
//   '/assets/lawyersignup.svg',
//   '/assets/loginlawyer.svg',
//   '/assets/userlogin.svg',
//   '/assets/usersignup.svg',
// ];

// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open(PRECACHE)
//       .then(cache => cache.addAll(PRECACHE_URLS))
//       .then(self.skipWaiting())
//   );
// });

// self.addEventListener('activate', event => {
//   const currentCaches = [PRECACHE, RUNTIME];
//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
//     }).then(cachesToDelete => {
//       return Promise.all(cachesToDelete.map(cacheToDelete => {
//         return caches.delete(cacheToDelete);
//       }));
//     }).then(() => self.clients.claim())
//   );
// });

// self.addEventListener('fetch', event => {
//   if (event.request.url.startsWith(self.location.origin)) {
//     event.respondWith(
//       caches.match(event.request).then(cachedResponse => {
//         if (cachedResponse) {
//           return cachedResponse;
//         }
//         return caches.open(RUNTIME).then(cache => {
//           return fetch(event.request).then(response => {
//             return cache.put(event.request, response.clone()).then(() => {
//               return response;
//             });
//           });
//         });
//       }).catch(()=>{
//         if(event.request.mode == 'navigate'){
//           return caches.match('/offline.html')
//         }
//       })
//     );
//   }
// });



// -------------------------------------------------------------------------------

// const staticCacheName = 'site-static-v1';
// const dynamicCacheName = 'site-dynamic-v1';
// const assets = [
//   '/',
//   '/index.html',
//   '/offline.html',
//   '/assets/add1.svg',
//   '/assets/edit.svg',
//   '/assets/home1.webp',
//   '/assets/home2.webp',
//   '/assets/home3.webp',
//   '/assets/home4.webp',
//   '/assets/homecardbg.webp',
//   '/assets/lawlogo64.jpg',
//   '/assets/lawlogo192.jpg',
//   '/assets/lawlogo512.jpg',
//   '/assets/lawyersignup.svg',
//   '/assets/loginlawyer.svg',
//   '/assets/userlogin.svg',
//   '/assets/usersignup.svg',

//   '/assets/shortcuts/loginlawyer192.png',
//   '/assets/shortcuts/loginlawyer96.png',
//   '/assets/shortcuts/userlogin192.png',
//   '/assets/shortcuts/userlogin96.png'

// ];

// // cache size limit function
// const limitCacheSize = (name, size) => {
//   caches.open(name).then(cache => {
//     cache.keys().then(keys => {
//       if(keys.length > size){
//         cache.delete(keys[0]).then(limitCacheSize(name, size));
//       }
//     });
//   });
// };

// // install event
// self.addEventListener('install', evt => {
//   //console.log('service worker installed');
//   evt.waitUntil(
//     caches.open(staticCacheName).then((cache) => {
//       console.log('caching shell assets');
//       cache.addAll(assets);
//     })
//   );
// });

// // activate event
// self.addEventListener('activate', evt => {
//   //console.log('service worker activated');
//   evt.waitUntil(
//     caches.keys().then(keys => {
//       //console.log(keys);
//       return Promise.all(keys
//         .filter(key => key !== staticCacheName && key !== dynamicCacheName)
//         .map(key => caches.delete(key))
//       );
//     })
//   );
// });

// // fetch events
// self.addEventListener('fetch', evt => {
//   if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
//     evt.respondWith(
//       caches.match(evt.request).then(cacheRes => {
//         return cacheRes || fetch(evt.request).then(fetchRes => {
//           return caches.open(dynamicCacheName).then(cache => {
//             cache.put(evt.request.url, fetchRes.clone());
//             // check cached items size
//             limitCacheSize(dynamicCacheName, 15);
//             return fetchRes;
//           })
//         });
//       }).catch(() => {
//         if(evt.request.url.indexOf('.html') > -1){
//           return caches.match('/pages/fallback.html');
//         } 
//       })
//     );
//   }
// });