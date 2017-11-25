global.assets = require("./assets.json");
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var merge = __webpack_require__(2);

var config = {
  all: {
    env: "production" || 'development',
    isDev: "production" !== 'production',
    basename: "",
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    apiUrl: 'https://jsonplaceholder.typicode.com'
  },
  test: {},
  development: {},
  production: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    apiUrl: 'https://jsonplaceholder.typicode.com'
  }
};

module.exports = merge(config.all, config[config.all.env]);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux-saga-thunk");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serialize_javascript__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_components__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom_server__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_server__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_router_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_store_configure__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_services_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_components_App__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_components_Html__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_components_Error__ = __webpack_require__(9);
/* eslint-disable no-console */


















var renderApp = function renderApp(_ref) {
  var store = _ref.store,
      context = _ref.context,
      location = _ref.location,
      sheet = _ref.sheet;

  var app = sheet.collectStyles(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_7_react_redux__["Provider"],
    { store: store },
    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_8_react_router__["StaticRouter"],
      { basename: __WEBPACK_IMPORTED_MODULE_10_config__["basename"], context: context, location: location },
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_components_App__["a" /* default */], null)
    )
  ));
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react_router_server__["renderToString"])(app);
};

var renderHtml = function renderHtml(_ref2) {
  var serverState = _ref2.serverState,
      initialState = _ref2.initialState,
      content = _ref2.content,
      sheet = _ref2.sheet;

  var styles = sheet.getStyleElement();
  var _global = global,
      assets = _global.assets;

  var state = '\n    window.__SERVER_STATE__ = ' + __WEBPACK_IMPORTED_MODULE_4_serialize_javascript___default()(serverState) + ';\n    window.__INITIAL_STATE__ = ' + __WEBPACK_IMPORTED_MODULE_4_serialize_javascript___default()(initialState) + ';\n  ';
  var props = {
    styles: styles, assets: assets, state: state, content: content
  };
  var html = __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components_Html__["a" /* default */], props);
  return '<!doctype html>\n' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_dom_server__["renderToStaticMarkup"])(html);
};

var app = __WEBPACK_IMPORTED_MODULE_2_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_10_config__["basename"], __WEBPACK_IMPORTED_MODULE_2_express___default.a.static(__WEBPACK_IMPORTED_MODULE_1_path___default.a.resolve(process.cwd(), 'dist/public')));

app.use(function (req, res, next) {
  var location = req.url;
  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_store_configure__["a" /* default */])({}, { api: __WEBPACK_IMPORTED_MODULE_12_services_api__["a" /* default */].create() });
  var context = {};
  var sheet = new __WEBPACK_IMPORTED_MODULE_5_styled_components__["ServerStyleSheet"]();

  renderApp({
    store: store, context: context, location: location, sheet: sheet
  }).then(function (_ref3) {
    var serverState = _ref3.state,
        content = _ref3.html;

    if (context.status) {
      res.status(context.status);
    }
    if (context.url) {
      res.redirect(context.url);
    } else {
      var initialState = store.getState();
      res.send(renderHtml({
        serverState: serverState, initialState: initialState, content: content, sheet: sheet
      }));
    }
  }).catch(next);
});

app.use(function (err, req, res, next) {
  var sheet = new __WEBPACK_IMPORTED_MODULE_5_styled_components__["ServerStyleSheet"]();
  var content = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_dom_server__["renderToStaticMarkup"])(sheet.collectStyles(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15_components_Error__["a" /* default */], null)));
  res.status(500).send(renderHtml({ content: content, sheet: sheet }));
  console.error(err);
  next(err);
});

app.listen(__WEBPACK_IMPORTED_MODULE_10_config__["port"], function (error) {
  var boldBlue = function boldBlue(text) {
    return '\x1B[1m\x1B[34m' + text + '\x1B[39m\x1B[22m';
  };
  if (error) {
    console.error(error);
  } else {
    console.info('Server is running at ' + boldBlue('http://' + __WEBPACK_IMPORTED_MODULE_10_config__["host"] + ':' + __WEBPACK_IMPORTED_MODULE_10_config__["port"] + __WEBPACK_IMPORTED_MODULE_10_config__["basename"] + '/'));
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__themes_default__ = __webpack_require__(13);
var _templateObject = _taggedTemplateLiteral(['\n  body {\n    margin: 0;\n  }\n'], ['\n  body {\n    margin: 0;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








// https://github.com/diegohaz/arc/wiki/Styling


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["injectGlobal"])(_templateObject);

var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_react_helmet___default.a,
      { titleTemplate: 'ARc - %s' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        null,
        'Atomic React'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: 'React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more.' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:site_name', content: 'ARc' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image', content: 'https://arc.js.org/thumbnail.png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image:type', content: 'image/png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image:width', content: '1200' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image:height', content: '630' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', href: 'https://arc.js.org/icon.png' })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_styled_components__["ThemeProvider"],
      { theme: __WEBPACK_IMPORTED_MODULE_5__themes_default__["a" /* default */] },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/', component: __WEBPACK_IMPORTED_MODULE_4_components__["HomePage"], exact: true })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var ErrorPage = function ErrorPage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    'Oops! A server error occurred'
  );
};

/* harmony default export */ __webpack_exports__["a"] = (ErrorPage);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable react/no-danger */




var Html = function Html(_ref) {
  var styles = _ref.styles,
      assets = _ref.assets,
      state = _ref.state,
      content = _ref.content;

  var helmet = __WEBPACK_IMPORTED_MODULE_2_react_helmet___default.a.renderStatic();
  var htmlAttrs = helmet.htmlAttributes.toComponent();
  var bodyAttrs = helmet.bodyAttributes.toComponent();

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'html',
    _extends({ lang: 'en' }, htmlAttrs),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'head',
      null,
      helmet.title.toComponent(),
      helmet.meta.toComponent(),
      helmet.link.toComponent(),
      assets.css.map(function (path) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', key: path, href: path });
      }),
      styles
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'body',
      bodyAttrs,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('main', { id: 'app', dangerouslySetInnerHTML: { __html: content } }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { dangerouslySetInnerHTML: { __html: state } }),
      assets.js.map(function (path) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { key: path, src: path });
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
var req = __webpack_require__(19);

req.keys().forEach(function (key) {
  var componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
  module.exports[componentName] = req(key).default;
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
// https://github.com/diegohaz/arc/wiki/Atomic-Design


var HomePage = function HomePage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    'Hello World'
  );
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_theme_composer__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_theme_composer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_theme_composer__);
// https://github.com/diegohaz/arc/wiki/Styling


var theme = {};

theme.palette = {
  primary: ['#1976d2', '#2196f3', '#71bcf7', '#c2e2fb'],
  secondary: ['#c2185b', '#e91e63', '#f06292', '#f8bbd0'],
  danger: ['#d32f2f', '#f44336', '#f8877f', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#fff', '#fff', '#eee'],
  grayscale: ['#212121', '#414141', '#616161', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#eeeeee', '#ffffff']
};

theme.reversePalette = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_styled_theme_composer__["reversePalette"])(theme.palette);

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
};

theme.sizes = {
  maxWidth: '1100px'
};

/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export checkStatus */
/* unused harmony export parseJSON */
/* unused harmony export parseSettings */
/* unused harmony export parseEndpoint */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_query_string__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_merge__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_config__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/diegohaz/arc/wiki/API-service





var checkStatus = function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  var error = new Error(response.status + ' ' + response.statusText);
  error.response = response;
  throw error;
};

var parseJSON = function parseJSON(response) {
  return response.json();
};

var parseSettings = function parseSettings() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref$method = _ref.method,
      method = _ref$method === undefined ? 'get' : _ref$method,
      data = _ref.data,
      locale = _ref.locale,
      otherSettings = _objectWithoutProperties(_ref, ['method', 'data', 'locale']);

  var headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': locale
  };
  var settings = __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default()({
    body: data ? JSON.stringify(data) : undefined,
    method: method,
    headers: headers
  }, otherSettings);
  return settings;
};


var parseEndpoint = function parseEndpoint(endpoint, params) {
  var url = endpoint.indexOf('http') === 0 ? endpoint : __WEBPACK_IMPORTED_MODULE_3_config__["apiUrl"] + endpoint;
  var querystring = params ? '?' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_query_string__["stringify"])(params) : '';
  return '' + url + querystring;
};

var api = {};

api.request = function (endpoint) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var params = _ref2.params,
      settings = _objectWithoutProperties(_ref2, ['params']);

  return fetch(parseEndpoint(endpoint, params), parseSettings(settings)).then(checkStatus).then(parseJSON);
};['delete', 'get'].forEach(function (method) {
  api[method] = function (endpoint, settings) {
    return api.request(endpoint, _extends({ method: method }, settings));
  };
});['post', 'put', 'patch'].forEach(function (method) {
  api[method] = function (endpoint, data, settings) {
    return api.request(endpoint, _extends({ method: method, data: data }, settings));
  };
});

api.create = function () {
  var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    settings: settings,

    setToken: function setToken(token) {
      this.settings.headers = _extends({}, this.settings.headers, {
        Authorization: 'Bearer ' + token
      });
    },
    unsetToken: function unsetToken() {
      this.settings.headers = _extends({}, this.settings.headers, {
        Authorization: undefined
      });
    },
    request: function request(endpoint, settings) {
      return api.request(endpoint, __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default()({}, this.settings, settings));
    },
    post: function post(endpoint, data, settings) {
      return this.request(endpoint, _extends({ method: 'post', data: data }, settings));
    },
    get: function get(endpoint, settings) {
      return this.request(endpoint, _extends({ method: 'get' }, settings));
    },
    put: function put(endpoint, data, settings) {
      return this.request(endpoint, _extends({ method: 'put', data: data }, settings));
    },
    patch: function patch(endpoint, data, settings) {
      return this.request(endpoint, _extends({ method: 'patch', data: data }, settings));
    },
    delete: function _delete(endpoint, settings) {
      return this.request(endpoint, _extends({ method: 'delete' }, settings));
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middlewares__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middlewares___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__middlewares__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sagas__ = __webpack_require__(18);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// https://github.com/diegohaz/arc/wiki/Redux-modules







var devtools = __WEBPACK_IMPORTED_MODULE_2_config__["isDev"] && __WEBPACK_IMPORTED_MODULE_2_config__["isBrowser"] && window.devToolsExtension ? window.devToolsExtension : function () {
  return function (fn) {
    return fn;
  };
};

var configureStore = function configureStore(initialState) {
  var services = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var sagaMiddleware = __WEBPACK_IMPORTED_MODULE_1_redux_saga___default()();

  var enhancers = [__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(undefined, _toConsumableArray(__WEBPACK_IMPORTED_MODULE_3__middlewares___default.a).concat([sagaMiddleware])), devtools()];

  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */], initialState, __WEBPACK_IMPORTED_MODULE_0_redux__["compose"].apply(undefined, enhancers));
  var sagaTask = sagaMiddleware.run(__WEBPACK_IMPORTED_MODULE_5__sagas__["a" /* default */], services);

  if (false) {
    module.hot.accept('./reducer', function () {
      var nextReducer = require('./reducer').default;
      store.replaceReducer(nextReducer);
    });
    module.hot.accept('./sagas', function () {
      var nextSagas = require('./sagas').default;
      sagaTask.cancel();
      sagaTask.done.then(function () {
        sagaTask = sagaMiddleware.run(nextSagas, services);
      });
    });
  }

  return store;
};

/* harmony default export */ __webpack_exports__["a"] = (configureStore);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(5),
    thunkMiddleware = _require.middleware;

var req = __webpack_require__(20);

module.exports = req.keys().map(function (key) {
  return req(key).default;
}).concat([thunkMiddleware]);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_camelCase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_camelCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_camelCase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_saga_thunk__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_saga_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_saga_thunk__);
// https://github.com/diegohaz/arc/wiki/Reducers





var reducers = {
  form: __WEBPACK_IMPORTED_MODULE_2_redux_form__["reducer"],
  thunk: __WEBPACK_IMPORTED_MODULE_3_redux_saga_thunk__["reducer"]
};

var req = __webpack_require__(21);

req.keys().forEach(function (key) {
  var storeName = __WEBPACK_IMPORTED_MODULE_0_lodash_camelCase___default()(key.replace(/\.\/(.+)\/.+$/, '$1'));
  reducers[storeName] = req(key).default;
});

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])(reducers));

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _callee;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(_callee);

// https://github.com/diegohaz/arc/wiki/Sagas


var req = __webpack_require__(22);

var sagas = req.keys().map(function (key) {
  return req(key).default;
});

function _callee() {
  var services = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["all"])(sagas.map(function (saga) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(saga, services);
          }));

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/HomePage/index.js": 12
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 19;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 20;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 21;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 22;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("lodash/camelCase");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-router-server");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("styled-theme/composer");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ })
/******/ ]);