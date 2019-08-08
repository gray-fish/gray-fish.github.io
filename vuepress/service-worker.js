/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1faa895732be860205f5e46a18172baf"
  },
  {
    "url": "about/index.html",
    "revision": "e6457811177bf31ada14ff930b68f468"
  },
  {
    "url": "archives/index.html",
    "revision": "ac7856c0b026ac7608cd81c86057bb59"
  },
  {
    "url": "assets/css/0.styles.3a66e113.css",
    "revision": "4ba77f6bf4ea557698334a582f4ff6b0"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.21ca1749.js",
    "revision": "2edd203c356c334f8fa0e76942edfd6f"
  },
  {
    "url": "assets/js/11.31de4233.js",
    "revision": "490e3bd6a2da70486da7821509ad9381"
  },
  {
    "url": "assets/js/12.96dd3055.js",
    "revision": "d547ceccbf792a2a127a356070ae2afd"
  },
  {
    "url": "assets/js/13.c46df1ac.js",
    "revision": "b1b66e95285b366189641d8c1e846cb8"
  },
  {
    "url": "assets/js/14.64e87592.js",
    "revision": "1e55440a3a131ba969fde4ebe99dcc46"
  },
  {
    "url": "assets/js/15.f470b3d2.js",
    "revision": "05b69fde67efd41d20220f3ff783db88"
  },
  {
    "url": "assets/js/16.341c3fc7.js",
    "revision": "5d517ab342d2ffb1c37c566cf6e19361"
  },
  {
    "url": "assets/js/17.dced8793.js",
    "revision": "9192d0df67ea9bbaf01e8dd5329cd221"
  },
  {
    "url": "assets/js/18.1a296bb5.js",
    "revision": "5d83d3934437046a1d2c0bdef14400ad"
  },
  {
    "url": "assets/js/19.d17d13d7.js",
    "revision": "47c35bf540a0b6f00f031fa1c59f84e2"
  },
  {
    "url": "assets/js/2.b51494b4.js",
    "revision": "30cd0ce71871a22d86975be2712be070"
  },
  {
    "url": "assets/js/20.795a991e.js",
    "revision": "b514c4b90a0465f750152cb3bce3ccda"
  },
  {
    "url": "assets/js/21.e0663643.js",
    "revision": "79dab47017678254ecb85c523a6c3d98"
  },
  {
    "url": "assets/js/22.cd92fcdb.js",
    "revision": "7078b9cac3342601caee629bb801f62e"
  },
  {
    "url": "assets/js/23.35e01ef9.js",
    "revision": "1fd41590cdd73628c93abc37f6a65abd"
  },
  {
    "url": "assets/js/3.1638692f.js",
    "revision": "92a9fd9b9e41c76299373a037b4ce67b"
  },
  {
    "url": "assets/js/4.32f63aff.js",
    "revision": "6f91e3f30088e6a865af8786acd401ae"
  },
  {
    "url": "assets/js/5.2f363d82.js",
    "revision": "67f44a2f5e5cad3d326428e98d019c87"
  },
  {
    "url": "assets/js/6.462a9f8e.js",
    "revision": "eab5f2911e4efa51a21a5a497ea07de1"
  },
  {
    "url": "assets/js/7.5d662c5e.js",
    "revision": "25855ca7f0b82dd13aea91124e49423d"
  },
  {
    "url": "assets/js/8.d8848808.js",
    "revision": "eac08f54a88ad68d7a33a77c6262a2e6"
  },
  {
    "url": "assets/js/9.561c982c.js",
    "revision": "4f1bf4e0b5eead48e2df33e59218b944"
  },
  {
    "url": "assets/js/app.040c682d.js",
    "revision": "8a6651458a25c843553cd630fa1b4633"
  },
  {
    "url": "blog/Java/index.html",
    "revision": "dde4fe05c0a6a80e8f7f787a7f11f9e2"
  },
  {
    "url": "friends/index.html",
    "revision": "00d9237d61576b37c2fc9b27d95ffbc1"
  },
  {
    "url": "hero.png",
    "revision": "97e6724c4f5204f87757b8c98490f506"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "79d4437a54e31342c27f5624020c100e"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "54d1cf45243c653ffd1b51d37c7760ef"
  },
  {
    "url": "logo.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "project/index.html",
    "revision": "95e8f55a25a4d02de8f66e6210d39ef6"
  },
  {
    "url": "project/qduoj-add-problem.html",
    "revision": "e6e999738ebc39c5b38721a03e584c3a"
  },
  {
    "url": "share/book/index.html",
    "revision": "e73d246c3d2096ad33ee87f908965395"
  },
  {
    "url": "share/software/index.html",
    "revision": "e90df224b521166c02a68be5f91ed1dd"
  },
  {
    "url": "share/software/index2.html",
    "revision": "f70a7ab5f72f28df5fe0785945e0025e"
  },
  {
    "url": "tags/index.html",
    "revision": "beba25b8034932ba5eaa63c62f7351eb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
