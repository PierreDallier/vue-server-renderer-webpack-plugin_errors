/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["app"],{

/***/ "./src/entry-client.js":
/*!*****************************!*\
  !*** ./src/entry-client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '/vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'es6-promise/auto'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n// a global mixin that calls `asyncData` when a route component's params change\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '/vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n  beforeRouteUpdate (to, from, next) {\n    const { asyncData } = this.$options\n    if (asyncData) {\n      asyncData({\n        store: this.$store,\n        route: to\n      }).then(next).catch(next)\n    } else {\n      next()\n    }\n  }\n})\n\nconst { app, router, store } = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()\n\n// prime the store with server-initialized state.\n// the state is determined during SSR and inlined in the page markup.\nif (window.__INITIAL_STATE__) {\n  store.replaceState(window.__INITIAL_STATE__)\n}\n\n// wait until router has resolved all async before hooks\n// and async components...\nrouter.onReady(() => {\n  // Add router hook for handling asyncData.\n  // Doing it after initial route is resolved so that we don't double-fetch\n  // the data that we already have. Using router.beforeResolve() so that all\n  // async components are resolved.\n  router.beforeResolve((to, from, next) => {\n    const matched = router.getMatchedComponents(to)\n    const prevMatched = router.getMatchedComponents(from)\n    let diffed = false\n    const activated = matched.filter((c, i) => {\n      return diffed || (diffed = (prevMatched[i] !== c))\n    })\n    const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _)\n    if (!asyncDataHooks.length) {\n      return next()\n    }\n\n    bar.start()\n    Promise.all(asyncDataHooks.map(hook => hook({ store, route: to })))\n      .then(() => {\n        bar.finish()\n        next()\n      })\n      .catch(next)\n  })\n\n  // actually mount to DOM\n  app.$mount('#app')\n})\n\n// service worker\nif ('https:' === location.protocol && navigator.serviceWorker) {\n  navigator.serviceWorker.register('/service-worker.js')\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/entry-client.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/entry-client.js"));
/******/ }
]);