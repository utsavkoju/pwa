


/**
 * The install event is fired when the registration succeeds. 
 * After the install step, the browser tries to activate the service worker.
 * Generally, we cache static resources that allow the website to run offline
 */
self.addEventListener('install', function(event){
    console.log('[service Worker] Installing Service Worker ... ', event);

});

self.addEventListener('activate', function(event){
    console.log('[service worker] activating service worker', event);
    return self.clients.claim();
});

/**
 * The fetch event is fired every time the browser sends a request. 
 * In this case, the service worker acts as a proxy. We can for example return the cached
 * version of the ressource matching the request, or send the request to the internet
 * , we can even make our own response from scratch !
 * Here, we are going to use cache first strategy
 */
self.addEventListener('fetch', event => {
    //We defind the promise (the async code block) that return either the cached response or the network one
    //It should return a response object
    const getCustomResponsePromise = async => {
        console.log(`URL ${event.request.url}`, `location origin ${location}`)

    }

    //In order to override the default fetch behavior, we must provide the result of our custom behavoir to the
    //event.respondWith method
    event.respondWith(getCustomResponsePromise())
});




// self.addEventListener('fetch', function(event){
//     console.log('[service worker] fetching service worker', event);
//     event.respondWith(fetch(event.request));
// });


