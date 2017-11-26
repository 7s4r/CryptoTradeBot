require("source-map-support").install();
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
/******/ 	__webpack_require__.p = "http://localhost:3001/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(2);

var config = {
  all: {
    env: "development" || 'development',
    isDev: "development" !== 'production',
    basename: "",
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    apiUrl: 'https://jsonplaceholder.typicode.com',
    auth: {
      domain: '7s4r.eu.auth0.com',
      clientId: '9Bo8aOlKhv5IZg7Ju0VC6NLx11EqTCCP',
      clientSecret: '1C5emmwPYnLvfYwyZxRtldN2IBsQw6jjKMFZlL4qS1Rdi_QzQ82sgAA-mrsKMU_6'
    },
    graphcool: {
      endpoint: 'https://api.graph.cool/simple/v1/cjaf6ex243c6r0140g76s3o6n'
    }
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(config, 'config', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/config.js');
}();

;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux-saga-thunk");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(31);

var _path = __webpack_require__(35);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(32);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(45);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _styledComponents = __webpack_require__(8);

var _server = __webpack_require__(37);

var _reactRedux = __webpack_require__(38);

var _reactRouter = __webpack_require__(39);

var _reactRouterServer = __webpack_require__(41);

var _config = __webpack_require__(1);

var _configure = __webpack_require__(21);

var _configure2 = _interopRequireDefault(_configure);

var _api = __webpack_require__(19);

var _api2 = _interopRequireDefault(_api);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

var _Html = __webpack_require__(12);

var _Html2 = _interopRequireDefault(_Html);

var _Error = __webpack_require__(11);

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
var renderApp = function renderApp(_ref) {
  var store = _ref.store,
      context = _ref.context,
      location = _ref.location,
      sheet = _ref.sheet;

  var app = sheet.collectStyles(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouter.StaticRouter,
      { basename: _config.basename, context: context, location: location },
      _react2.default.createElement(_App2.default, null)
    )
  ));
  return (0, _reactRouterServer.renderToString)(app);
};

var renderHtml = function renderHtml(_ref2) {
  var serverState = _ref2.serverState,
      initialState = _ref2.initialState,
      content = _ref2.content,
      sheet = _ref2.sheet;

  var styles = sheet.getStyleElement();
  var _global = global,
      assets = _global.assets;

  var state = '\n    window.__SERVER_STATE__ = ' + (0, _serializeJavascript2.default)(serverState) + ';\n    window.__INITIAL_STATE__ = ' + (0, _serializeJavascript2.default)(initialState) + ';\n  ';
  var props = {
    styles: styles, assets: assets, state: state, content: content
  };
  var html = _react2.default.createElement(_Html2.default, props);
  return '<!doctype html>\n' + (0, _server.renderToStaticMarkup)(html);
};

var app = (0, _express2.default)();

app.use(_config.basename, _express2.default.static(_path2.default.resolve(process.cwd(), 'dist/public')));

app.use(function (req, res, next) {
  var location = req.url;
  var store = (0, _configure2.default)({}, { api: _api2.default.create() });
  var context = {};
  var sheet = new _styledComponents.ServerStyleSheet();

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
  var sheet = new _styledComponents.ServerStyleSheet();
  var content = (0, _server.renderToStaticMarkup)(sheet.collectStyles(_react2.default.createElement(_Error2.default, null)));
  res.status(500).send(renderHtml({ content: content, sheet: sheet }));
  console.error(err);
  next(err);
});

app.listen(_config.port, function (error) {
  var boldBlue = function boldBlue(text) {
    return '\x1B[1m\x1B[34m' + text + '\x1B[39m\x1B[22m';
  };
  if (error) {
    console.error(error);
  } else {
    console.info('Server is running at ' + boldBlue('http://' + _config.host + ':' + _config.port + _config.basename + '/'));
  }
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(renderApp, 'renderApp', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/server.js');

  __REACT_HOT_LOADER__.register(renderHtml, 'renderHtml', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/server.js');

  __REACT_HOT_LOADER__.register(app, 'app', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/server.js');
}();

;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  body {\n    margin: 0;\n  }\n'], ['\n  body {\n    margin: 0;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(40);

var _styledComponents = __webpack_require__(8);

var _reactHelmet = __webpack_require__(5);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _auth = __webpack_require__(20);

var _auth2 = _interopRequireDefault(_auth);

var _components = __webpack_require__(14);

var _default2 = __webpack_require__(18);

var _default3 = _interopRequireDefault(_default2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// https://github.com/diegohaz/arc/wiki/Styling


(0, _styledComponents.injectGlobal)(_templateObject);

var auth = new _auth2.default();

var handleAuthentication = function handleAuthentication(nextState) {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet2.default,
      { titleTemplate: 'ARc - %s' },
      _react2.default.createElement(
        'title',
        null,
        'Atomic React'
      ),
      _react2.default.createElement('meta', { name: 'description', content: 'React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more.' }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
      _react2.default.createElement('meta', { property: 'og:site_name', content: 'ARc' }),
      _react2.default.createElement('meta', { property: 'og:image', content: 'https://arc.js.org/thumbnail.png' }),
      _react2.default.createElement('meta', { property: 'og:image:type', content: 'image/png' }),
      _react2.default.createElement('meta', { property: 'og:image:width', content: '1200' }),
      _react2.default.createElement('meta', { property: 'og:image:height', content: '630' }),
      _react2.default.createElement('link', { rel: 'icon', href: 'https://arc.js.org/icon.png' })
    ),
    _react2.default.createElement(
      _styledComponents.ThemeProvider,
      { theme: _default3.default },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _components.HomePage, exact: true }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/login', render: function render(props) {
            return _react2.default.createElement(_components.LoginPage, _extends({ auth: auth }, props));
          } }),
        _react2.default.createElement(_reactRouterDom.Route, {
          path: '/callback',
          render: function render(props) {
            handleAuthentication(props);
            return _react2.default.createElement(_components.AuthCallbackPage, props);
          }
        })
      )
    )
  );
};

var _default = App;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(auth, 'auth', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/App.js');

  __REACT_HOT_LOADER__.register(handleAuthentication, 'handleAuthentication', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/App.js');

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/App.js');
}();

;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorPage = function ErrorPage() {
  return _react2.default.createElement(
    'div',
    null,
    'Oops! A server error occurred'
  );
};

var _default = ErrorPage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ErrorPage, 'ErrorPage', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/Error.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/Error.js');
}();

;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable react/no-danger */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(5);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function Html(_ref) {
  var styles = _ref.styles,
      assets = _ref.assets,
      state = _ref.state,
      content = _ref.content;

  var helmet = _reactHelmet2.default.renderStatic();
  var htmlAttrs = helmet.htmlAttributes.toComponent();
  var bodyAttrs = helmet.bodyAttributes.toComponent();

  return _react2.default.createElement(
    'html',
    _extends({ lang: 'en' }, htmlAttrs),
    _react2.default.createElement(
      'head',
      null,
      helmet.title.toComponent(),
      helmet.meta.toComponent(),
      helmet.link.toComponent(),
      assets.css.map(function (path) {
        return _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', key: path, href: path });
      }),
      styles
    ),
    _react2.default.createElement(
      'body',
      bodyAttrs,
      _react2.default.createElement('main', { id: 'app', dangerouslySetInnerHTML: { __html: content } }),
      _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: state } }),
      assets.js.map(function (path) {
        return _react2.default.createElement('script', { key: path, src: path });
      })
    )
  );
};

Html.propTypes = {
  styles: _propTypes2.default.node.isRequired,
  assets: _propTypes2.default.shape({
    css: _propTypes2.default.array.isRequired,
    js: _propTypes2.default.array.isRequired
  }).isRequired,
  state: _propTypes2.default.string.isRequired,
  content: _propTypes2.default.string.isRequired
};

var _default = Html;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Html, 'Html', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/Html.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/Html.js');
}();

;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonType = function ButtonType(text) {
  return _react2.default.createElement(
    _Button2.default,
    { raised: true, color: 'primary' },
    text
  );
};

var _default = ButtonType;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ButtonType, 'ButtonType', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Button/index.js');
}();

;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
var req = __webpack_require__(26);

req.keys().forEach(function (key) {
  var componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
  module.exports[componentName] = req(key).default;
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/index.js');
}();

;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _loading = __webpack_require__(25);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Callback = function (_Component) {
  _inherits(Callback, _Component);

  function Callback() {
    _classCallCheck(this, Callback);

    return _possibleConstructorReturn(this, (Callback.__proto__ || Object.getPrototypeOf(Callback)).apply(this, arguments));
  }

  _createClass(Callback, [{
    key: 'render',
    value: function render() {
      var style = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white'
      };

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement('img', { src: _loading2.default, alt: 'loading' })
      );
    }
  }]);

  return Callback;
}(_react.Component);

var _default = Callback;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Callback, 'Callback', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/pages/AuthCallbackPage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/pages/AuthCallbackPage/index.js');
}();

;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    'div',
    null,
    'Hello World'
  );
}; // https://github.com/diegohaz/arc/wiki/Atomic-Design
var _default = HomePage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HomePage, 'HomePage', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/pages/HomePage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/pages/HomePage/index.js');
}();

;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_Component) {
  _inherits(LoginPage, _Component);

  function LoginPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LoginPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call.apply(_ref, [this].concat(args))), _this), _this.login = function () {
      var _this2;

      return (_this2 = _this).__login__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LoginPage, [{
    key: '__login__REACT_HOT_LOADER__',
    value: function __login__REACT_HOT_LOADER__() {
      return this.__login__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__login__REACT_HOT_LOADER__',
    value: function __login__REACT_HOT_LOADER__() {
      this.props.auth.login();
    }
  }, {
    key: 'render',
    value: function render() {
      var isAuthenticated = this.props.auth.isAuthenticated;


      return _react2.default.createElement(
        'div',
        null,
        isAuthenticated() && _react2.default.createElement(
          'h4',
          null,
          'You are logged in!'
        ),
        !isAuthenticated() && _react2.default.createElement(
          'h4',
          null,
          'You are not logged in! Please',
          ' ',
          _react2.default.createElement(
            _Button2.default,
            { raised: true, color: 'primary', onClick: this.login },
            'Log In'
          ),
          ' ',
          'to continue.'
        )
      );
    }
  }]);

  return LoginPage;
}(_react.Component);

LoginPage.propTypes = {
  auth: _propTypes2.default.object
};
var _default = LoginPage;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LoginPage, 'LoginPage', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/pages/LoginPage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/pages/LoginPage/index.js');
}();

;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _composer = __webpack_require__(46);

var theme = {}; // https://github.com/diegohaz/arc/wiki/Styling


theme.palette = {
  primary: ['#1976d2', '#2196f3', '#71bcf7', '#c2e2fb'],
  secondary: ['#c2185b', '#e91e63', '#f06292', '#f8bbd0'],
  danger: ['#d32f2f', '#f44336', '#f8877f', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#fff', '#fff', '#eee'],
  grayscale: ['#212121', '#414141', '#616161', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#eeeeee', '#ffffff']
};

theme.reversePalette = (0, _composer.reversePalette)(theme.palette);

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
};

theme.sizes = {
  maxWidth: '1100px'
};

var _default = theme;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(theme, 'theme', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/themes/default.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/themes/default.js');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseEndpoint = exports.parseSettings = exports.parseJSON = exports.checkStatus = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(33);

var _queryString = __webpack_require__(36);

var _merge = __webpack_require__(2);

var _merge2 = _interopRequireDefault(_merge);

var _config = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // https://github.com/diegohaz/arc/wiki/API-service


var checkStatus = exports.checkStatus = function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  var error = new Error(response.status + ' ' + response.statusText);
  error.response = response;
  throw error;
};

var parseJSON = exports.parseJSON = function parseJSON(response) {
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
  var settings = (0, _merge2.default)({
    body: data ? JSON.stringify(data) : undefined,
    method: method,
    headers: headers
  }, otherSettings);
  return settings;
};

exports.parseSettings = parseSettings;
var parseEndpoint = exports.parseEndpoint = function parseEndpoint(endpoint, params) {
  var url = endpoint.indexOf('http') === 0 ? endpoint : _config.apiUrl + endpoint;
  var querystring = params ? '?' + (0, _queryString.stringify)(params) : '';
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
      return api.request(endpoint, (0, _merge2.default)({}, this.settings, settings));
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

var _default = api;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(checkStatus, 'checkStatus', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseJSON, 'parseJSON', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseSettings, 'parseSettings', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseEndpoint, 'parseEndpoint', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(api, 'api', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/api/index.js');
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _auth0Js = __webpack_require__(30);

var _auth0Js2 = _interopRequireDefault(_auth0Js);

var _config = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Auth = function () {
  function Auth() {
    _classCallCheck(this, Auth);

    this.auth0 = new _auth0Js2.default.WebAuth({
      domain: _config.auth.domain,
      clientID: _config.auth.clientId,
      redirectUri: 'http://localhost:3000/callback',
      audience: 'https://7s4r.eu.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid'
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  _createClass(Auth, [{
    key: 'login',
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: 'handleAuthentication',
    value: function handleAuthentication() {
      var _this = this;

      this.auth0.parseHash(function (err, authResult) {
        if (authResult && authResult.accessToken && authResult.idToken) {
          _this.setSession(authResult);
        } else if (err) {
          console.log(err);
          alert('Error: ' + err.error + '. Check the console for further details.');
        }
      });
    }
  }, {
    key: 'setSession',
    value: function setSession(authResult) {
      // Set the time that the access token will expire at
      var expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
    }
  }, {
    key: 'logout',
    value: function logout() {
      // Clear access token and ID token from local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
    }
  }, {
    key: 'isAuthenticated',
    value: function isAuthenticated() {
      // Check whether the current time is past the
      // access token's expiry time
      var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }
  }]);

  return Auth;
}();

var _default = Auth;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Auth, 'Auth', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/auth/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/auth/index.js');
}();

;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _reduxSaga = __webpack_require__(43);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _config = __webpack_require__(1);

var _middlewares = __webpack_require__(22);

var _middlewares2 = _interopRequireDefault(_middlewares);

var _reducer = __webpack_require__(23);

var _reducer2 = _interopRequireDefault(_reducer);

var _sagas = __webpack_require__(24);

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // https://github.com/diegohaz/arc/wiki/Redux-modules


var devtools = _config.isDev && _config.isBrowser && window.devToolsExtension ? window.devToolsExtension : function () {
  return function (fn) {
    return fn;
  };
};

var configureStore = function configureStore(initialState) {
  var services = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var sagaMiddleware = (0, _reduxSaga2.default)();

  var enhancers = [_redux.applyMiddleware.apply(undefined, _toConsumableArray(_middlewares2.default).concat([sagaMiddleware])), devtools()];

  var store = (0, _redux.createStore)(_reducer2.default, initialState, _redux.compose.apply(undefined, enhancers));
  var sagaTask = sagaMiddleware.run(_sagas2.default, services);

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

var _default = configureStore;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(devtools, 'devtools', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/configure.js');

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/configure.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/configure.js');
}();

;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(7),
    thunkMiddleware = _require.middleware;

var req = __webpack_require__(27);

module.exports = req.keys().map(function (key) {
  return req(key).default;
}).concat([thunkMiddleware]);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/middlewares.js');
}();

;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _camelCase = __webpack_require__(34);

var _camelCase2 = _interopRequireDefault(_camelCase);

var _redux = __webpack_require__(6);

var _reduxForm = __webpack_require__(42);

var _reduxSagaThunk = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/diegohaz/arc/wiki/Reducers
var reducers = {
  form: _reduxForm.reducer,
  thunk: _reduxSagaThunk.reducer
};

var req = __webpack_require__(28);

req.keys().forEach(function (key) {
  var storeName = (0, _camelCase2.default)(key.replace(/\.\/(.+)\/.+$/, '$1'));
  reducers[storeName] = req(key).default;
});

var _default = (0, _redux.combineReducers)(reducers);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(reducers, 'reducers', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/reducer.js');

  __REACT_HOT_LOADER__.register(req, 'req', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/reducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/reducer.js');
}();

;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _effects = __webpack_require__(44);

var req = __webpack_require__(29); // https://github.com/diegohaz/arc/wiki/Sagas


var sagas = req.keys().map(function (key) {
  return req(key).default;
});

var _default = /*#__PURE__*/regeneratorRuntime.mark(function _default() {
  var services = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return regeneratorRuntime.wrap(function _default$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)(sagas.map(function (saga) {
            return (0, _effects.fork)(saga, services);
          }));

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _default, this);
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/sagas.js');

  __REACT_HOT_LOADER__.register(sagas, 'sagas', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/sagas.js');
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPScxMjBweCcgaGVpZ2h0PScxMjBweCcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtcmluZyI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9Im5vbmUiIGNsYXNzPSJiayI+PC9yZWN0PjxkZWZzPjxmaWx0ZXIgaWQ9InVpbC1yaW5nLXNoYWRvdyIgeD0iLTEwMCUiIHk9Ii0xMDAlIiB3aWR0aD0iMzAwJSIgaGVpZ2h0PSIzMDAlIj48ZmVPZmZzZXQgcmVzdWx0PSJvZmZPdXQiIGluPSJTb3VyY2VHcmFwaGljIiBkeD0iMCIgZHk9IjAiPjwvZmVPZmZzZXQ+PGZlR2F1c3NpYW5CbHVyIHJlc3VsdD0iYmx1ck91dCIgaW49Im9mZk91dCIgc3RkRGV2aWF0aW9uPSIwIj48L2ZlR2F1c3NpYW5CbHVyPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImJsdXJPdXQiIG1vZGU9Im5vcm1hbCI+PC9mZUJsZW5kPjwvZmlsdGVyPjwvZGVmcz48cGF0aCBkPSJNMTAsNTBjMCwwLDAsMC41LDAuMSwxLjRjMCwwLjUsMC4xLDEsMC4yLDEuN2MwLDAuMywwLjEsMC43LDAuMSwxLjFjMC4xLDAuNCwwLjEsMC44LDAuMiwxLjJjMC4yLDAuOCwwLjMsMS44LDAuNSwyLjggYzAuMywxLDAuNiwyLjEsMC45LDMuMmMwLjMsMS4xLDAuOSwyLjMsMS40LDMuNWMwLjUsMS4yLDEuMiwyLjQsMS44LDMuN2MwLjMsMC42LDAuOCwxLjIsMS4yLDEuOWMwLjQsMC42LDAuOCwxLjMsMS4zLDEuOSBjMSwxLjIsMS45LDIuNiwzLjEsMy43YzIuMiwyLjUsNSw0LjcsNy45LDYuN2MzLDIsNi41LDMuNCwxMC4xLDQuNmMzLjYsMS4xLDcuNSwxLjUsMTEuMiwxLjZjNC0wLjEsNy43LTAuNiwxMS4zLTEuNiBjMy42LTEuMiw3LTIuNiwxMC00LjZjMy0yLDUuOC00LjIsNy45LTYuN2MxLjItMS4yLDIuMS0yLjUsMy4xLTMuN2MwLjUtMC42LDAuOS0xLjMsMS4zLTEuOWMwLjQtMC42LDAuOC0xLjMsMS4yLTEuOSBjMC42LTEuMywxLjMtMi41LDEuOC0zLjdjMC41LTEuMiwxLTIuNCwxLjQtMy41YzAuMy0xLjEsMC42LTIuMiwwLjktMy4yYzAuMi0xLDAuNC0xLjksMC41LTIuOGMwLjEtMC40LDAuMS0wLjgsMC4yLTEuMiBjMC0wLjQsMC4xLTAuNywwLjEtMS4xYzAuMS0wLjcsMC4xLTEuMiwwLjItMS43QzkwLDUwLjUsOTAsNTAsOTAsNTBzMCwwLjUsMCwxLjRjMCwwLjUsMCwxLDAsMS43YzAsMC4zLDAsMC43LDAsMS4xIGMwLDAuNC0wLjEsMC44LTAuMSwxLjJjLTAuMSwwLjktMC4yLDEuOC0wLjQsMi44Yy0wLjIsMS0wLjUsMi4xLTAuNywzLjNjLTAuMywxLjItMC44LDIuNC0xLjIsMy43Yy0wLjIsMC43LTAuNSwxLjMtMC44LDEuOSBjLTAuMywwLjctMC42LDEuMy0wLjksMmMtMC4zLDAuNy0wLjcsMS4zLTEuMSwyYy0wLjQsMC43LTAuNywxLjQtMS4yLDJjLTEsMS4zLTEuOSwyLjctMy4xLDRjLTIuMiwyLjctNSw1LTguMSw3LjEgYy0wLjgsMC41LTEuNiwxLTIuNCwxLjVjLTAuOCwwLjUtMS43LDAuOS0yLjYsMS4zTDY2LDg3LjdsLTEuNCwwLjVjLTAuOSwwLjMtMS44LDAuNy0yLjgsMWMtMy44LDEuMS03LjksMS43LTExLjgsMS44TDQ3LDkwLjggYy0xLDAtMi0wLjItMy0wLjNsLTEuNS0wLjJsLTAuNy0wLjFMNDEuMSw5MGMtMS0wLjMtMS45LTAuNS0yLjktMC43Yy0wLjktMC4zLTEuOS0wLjctMi44LTFMMzQsODcuN2wtMS4zLTAuNiBjLTAuOS0wLjQtMS44LTAuOC0yLjYtMS4zYy0wLjgtMC41LTEuNi0xLTIuNC0xLjVjLTMuMS0yLjEtNS45LTQuNS04LjEtNy4xYy0xLjItMS4yLTIuMS0yLjctMy4xLTRjLTAuNS0wLjYtMC44LTEuNC0xLjItMiBjLTAuNC0wLjctMC44LTEuMy0xLjEtMmMtMC4zLTAuNy0wLjYtMS4zLTAuOS0yYy0wLjMtMC43LTAuNi0xLjMtMC44LTEuOWMtMC40LTEuMy0wLjktMi41LTEuMi0zLjdjLTAuMy0xLjItMC41LTIuMy0wLjctMy4zIGMtMC4yLTEtMC4zLTItMC40LTIuOGMtMC4xLTAuNC0wLjEtMC44LTAuMS0xLjJjMC0wLjQsMC0wLjcsMC0xLjFjMC0wLjcsMC0xLjIsMC0xLjdDMTAsNTAuNSwxMCw1MCwxMCw1MHoiIGZpbGw9IiMzMzdhYjciIGZpbHRlcj0idXJsKCN1aWwtcmluZy1zaGFkb3cpIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCA1MCA1MCIgdG89IjM2MCA1MCA1MCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L3BhdGg+PC9zdmc+"

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./atoms/Button/index.js": 13,
	"./pages/AuthCallbackPage/index.js": 15,
	"./pages/HomePage/index.js": 16,
	"./pages/LoginPage/index.js": 17
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
webpackContext.id = 26;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 27;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 28;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 29;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("auth0-js");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("lodash/camelCase");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-router-server");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("styled-theme/composer");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map