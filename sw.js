/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","ae842b337076990d0d8f0e5d35bb7b11"],["css/materialdesignicons.css","956e4e1237f91f18beb12d9738076502"],["css/materialdesignicons.css.map","877c21aec12ec49a6b0318ee180fd357"],["css/materialize.css","bd5780783bebb5a839dd0f14f1d6d037"],["css/style.css","b9566bd18843da9151097f67cd7ff689"],["fonts/materialdesignicons-webfont.eot","f540b423205e383e431bd1df377f09a7"],["fonts/materialdesignicons-webfont.svg","633c9b849b1ed2b5fa1ba7c2a9b22099"],["fonts/materialdesignicons-webfont.ttf","292b2f8e751f877c0892c4376c7c7eef"],["fonts/materialdesignicons-webfont.woff","c28dbbac641f64eaabb9b756f6770619"],["fonts/materialdesignicons-webfont.woff2","7f88c63c8ca619cd1ae4243f6f64f54f"],["fonts/roboto/Roboto-Bold.woff","eed9aab5449cc9c8430d7d258108f602"],["fonts/roboto/Roboto-Bold.woff2","c0f1e4a4fdfb8048c72e86aadb2a247d"],["fonts/roboto/Roboto-Light.woff","ea36cd9a0e9eee97012a67b8a4570d7b"],["fonts/roboto/Roboto-Light.woff2","3c37aa69cd77e6a53a067170fa8fe2e9"],["fonts/roboto/Roboto-Medium.woff","cf4d60bc0b1d4b2314085919a00e1724"],["fonts/roboto/Roboto-Medium.woff2","1561b424aaef2f704bbd89155b3ce514"],["fonts/roboto/Roboto-Regular.woff","3cf6adf61054c328b1b0ddcd8f9ce24d"],["fonts/roboto/Roboto-Regular.woff2","5136cbe62a63604402f2fedb97f246f8"],["fonts/roboto/Roboto-Thin.woff","44b78f142603eb69f593ed4002ed7a4a"],["fonts/roboto/Roboto-Thin.woff2","1f35e6a11d27d2e10d28946d42332dc5"],["gulpfile.js","6e7f1f9fb2849e9e1be857ed345fb18f"],["images/android-icon-144x144.png","0d80c0d802bdc85319caf97f57bc1dde"],["images/android-icon-192x192.png","8fd1c0107e79aa5ee331542600e034e2"],["images/android-icon-36x36.png","c55a531fc6e41f3672e67bd3021d604c"],["images/android-icon-48x48.png","d61caae92a4bcd23c1b11b627006e78b"],["images/android-icon-72x72.png","e04e331011034f064c7e5fbbb8ef2e74"],["images/android-icon-96x96.png","57eea71a4c0f3f7a0b91c061da240a81"],["images/apple-icon-114x114.png","268e145c16f87224fdab7dd3fe8ac2b2"],["images/apple-icon-120x120.png","e3bfd9d89d1fb06f03887084f787a5a7"],["images/apple-icon-144x144.png","0d80c0d802bdc85319caf97f57bc1dde"],["images/apple-icon-152x152.png","93fc855e1c8f229b8f0ca9753d1f7402"],["images/apple-icon-180x180.png","69253f1a1f35c4eebba2109e587aabe7"],["images/apple-icon-57x57.png","d5bd4f36755fa802a7b371f96d7316a8"],["images/apple-icon-60x60.png","563a6f8cd61beae3f02fe42f970fca01"],["images/apple-icon-72x72.png","e04e331011034f064c7e5fbbb8ef2e74"],["images/apple-icon-76x76.png","8c1aa96bcc2620651b4270e89b46e97a"],["images/apple-icon-precomposed.png","24232a620162dc412ce6fa4a8f17b374"],["images/apple-icon.png","24232a620162dc412ce6fa4a8f17b374"],["images/browserconfig.xml","2d0ff060653a76e256c846b93c3f6950"],["images/favicon-16x16.png","89da1420e35ffd558b80f6c629711a9c"],["images/favicon-32x32.png","ed5267429ef5d7b5c10309145823cba1"],["images/favicon-96x96.png","57eea71a4c0f3f7a0b91c061da240a81"],["images/favicon.ico","e86494d6e0b9adaee1216830e315ceef"],["images/ms-icon-144x144.png","0d80c0d802bdc85319caf97f57bc1dde"],["images/ms-icon-150x150.png","b578049ec13eee1e97958a97ccf6f924"],["images/ms-icon-310x310.png","0522039f371c701361b4787d635a4310"],["images/ms-icon-70x70.png","52e03dabd4c6fd61275a90396ec69f9e"],["index.html","937cd9c93b9d30a9b19cf391381a577e"],["index.php","9192cac46257c35e1c65b53f236732c5"],["js/materialize.js","755e791bb16be1416d3cc3ae6cf4c89b"],["manifest.json","8467c5d4091e223e61f95ab19a483cae"],["package-lock.json","c6de3a4a443e3d021360e9eef7f23a29"],["package.json","3d7572041cfa77acb8b5e30601eed42c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







