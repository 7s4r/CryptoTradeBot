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
/******/ 	return __webpack_require__(__webpack_require__.s = 162);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
var req = __webpack_require__(131);

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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-theme");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("styled-tools");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(28);

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
    fbAppId: '',
    gtmId: 'GTM-PGWWBDS',
    bitfinex: {
      uri: 'wss://api.bitfinex.com'
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Actions
var req = __webpack_require__(134);

req.keys().forEach(function (key) {
  var actions = req(key);

  Object.keys(actions).forEach(function (name) {
    module.exports[name] = actions[name];
  });
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/actions.js');
}();

;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Containers
var req = __webpack_require__(133);

req.keys().forEach(function (key) {
  var containerName = key.replace(/^\.\/([^.]+)\.js$/, '$1');
  module.exports[containerName] = req(key).default;
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/index.js');
}();

;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Selectors
var upperFirst = __webpack_require__(145);

var req = __webpack_require__(138);

req.keys().forEach(function (key) {
  var storeName = key.replace(/\.\/(.+)\/.+$/, '$1');
  var fromName = 'from' + upperFirst(storeName);
  var selectors = req(key);
  var getState = function getState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return state[storeName] || {};
  };

  module.exports[fromName] = {};

  Object.keys(selectors).forEach(function (name) {
    var selector = selectors[name];
    if (typeof selector === 'function') {
      module.exports[fromName][name] = function (state) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return selector.apply(undefined, [getState(state)].concat(args));
      };
    }
  });
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/selectors.js');
}();

;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
var ENTITIES_RECEIVE = exports.ENTITIES_RECEIVE = 'ENTITIES_RECEIVE';

var entitiesReceive = exports.entitiesReceive = function entitiesReceive(entities) {
  return {
    type: ENTITIES_RECEIVE,
    payload: entities
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ENTITIES_RECEIVE, 'ENTITIES_RECEIVE', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/actions.js');

  __REACT_HOT_LOADER__.register(entitiesReceive, 'entitiesReceive', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/actions.js');
}();

;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.send = send;
var EXCHANGE_PRICE_READ_REQUEST = exports.EXCHANGE_PRICE_READ_REQUEST = 'EXCHANGE_PRICE_READ_REQUEST';
var EXCHANGE_PRICE_READ_SUCCESS = exports.EXCHANGE_PRICE_READ_SUCCESS = 'EXCHANGE_PRICE_READ_SUCCESS';
var EXCHANGE_PRICE_READ_FAILURE = exports.EXCHANGE_PRICE_READ_FAILURE = 'EXCHANGE_PRICE_READ_FAILURE';

var exchangePriceReadRequest = exports.exchangePriceReadRequest = function exchangePriceReadRequest(exchange, needle) {
  return {
    type: EXCHANGE_PRICE_READ_REQUEST,
    payload: { needle: needle },
    meta: {
      exchange: exchange,
      thunk: exchange + 'PriceRead'
    }
  };
};

var exchangePriceReadSuccess = exports.exchangePriceReadSuccess = function exchangePriceReadSuccess(exchange, price, request, thunk) {
  return {
    type: EXCHANGE_PRICE_READ_SUCCESS,
    payload: price,
    meta: {
      request: request,
      thunk: thunk,
      exchange: exchange
    }
  };
};

var exchangePriceReadFailure = exports.exchangePriceReadFailure = function exchangePriceReadFailure(exchange, error, request, thunk) {
  return {
    type: EXCHANGE_PRICE_READ_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk,
      exchange: exchange
    }
  };
};

function send(chatId, content) {
  var message = { chatId: chatId, content: content };
  return {
    type: 'socket',
    types: [SEND, SEND_SUCCESS, SEND_FAIL],
    promise: function promise(socket) {
      return socket.emit('SendMessage', message);
    }
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(EXCHANGE_PRICE_READ_REQUEST, 'EXCHANGE_PRICE_READ_REQUEST', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/exchange/actions.js');

  __REACT_HOT_LOADER__.register(EXCHANGE_PRICE_READ_SUCCESS, 'EXCHANGE_PRICE_READ_SUCCESS', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/exchange/actions.js');

  __REACT_HOT_LOADER__.register(EXCHANGE_PRICE_READ_FAILURE, 'EXCHANGE_PRICE_READ_FAILURE', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/exchange/actions.js');

  __REACT_HOT_LOADER__.register(exchangePriceReadRequest, 'exchangePriceReadRequest', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/exchange/actions.js');

  __REACT_HOT_LOADER__.register(exchangePriceReadSuccess, 'exchangePriceReadSuccess', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/exchange/actions.js');

  __REACT_HOT_LOADER__.register(exchangePriceReadFailure, 'exchangePriceReadFailure', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/exchange/actions.js');

  __REACT_HOT_LOADER__.register(send, 'send', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/exchange/actions.js');
}();

;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
var RESOURCE_CREATE_REQUEST = exports.RESOURCE_CREATE_REQUEST = 'RESOURCE_CREATE_REQUEST';
var RESOURCE_CREATE_SUCCESS = exports.RESOURCE_CREATE_SUCCESS = 'RESOURCE_CREATE_SUCCESS';
var RESOURCE_CREATE_FAILURE = exports.RESOURCE_CREATE_FAILURE = 'RESOURCE_CREATE_FAILURE';

var resourceCreateRequest = exports.resourceCreateRequest = function resourceCreateRequest(resource, data) {
  return {
    type: RESOURCE_CREATE_REQUEST,
    payload: { data: data },
    meta: {
      resource: resource,
      // https://github.com/diegohaz/arc/wiki/Actions#async-actions
      thunk: resource + 'Create'
    }
  };
};

var resourceCreateSuccess = exports.resourceCreateSuccess = function resourceCreateSuccess(resource, detail, request, thunk) {
  return {
    type: RESOURCE_CREATE_SUCCESS,
    payload: detail,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource,
      // https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
      entities: resource
    }
  };
};

var resourceCreateFailure = exports.resourceCreateFailure = function resourceCreateFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_CREATE_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      resource: resource,
      // https://github.com/diegohaz/arc/wiki/Actions#async-actions
      thunk: thunk
    }
  };
};

var RESOURCE_LIST_READ_REQUEST = exports.RESOURCE_LIST_READ_REQUEST = 'RESOURCE_LIST_READ_REQUEST';
var RESOURCE_LIST_READ_SUCCESS = exports.RESOURCE_LIST_READ_SUCCESS = 'RESOURCE_LIST_READ_SUCCESS';
var RESOURCE_LIST_READ_FAILURE = exports.RESOURCE_LIST_READ_FAILURE = 'RESOURCE_LIST_READ_FAILURE';

var resourceListReadRequest = exports.resourceListReadRequest = function resourceListReadRequest(resource, params) {
  return {
    type: RESOURCE_LIST_READ_REQUEST,
    payload: { params: params },
    meta: {
      resource: resource,
      thunk: resource + 'ListRead'
    }
  };
};

var resourceListReadSuccess = exports.resourceListReadSuccess = function resourceListReadSuccess(resource, list, request, thunk) {
  return {
    type: RESOURCE_LIST_READ_SUCCESS,
    payload: list,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource,
      entities: resource
    }
  };
};

var resourceListReadFailure = exports.resourceListReadFailure = function resourceListReadFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_LIST_READ_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var RESOURCE_DETAIL_READ_REQUEST = exports.RESOURCE_DETAIL_READ_REQUEST = 'RESOURCE_DETAIL_READ_REQUEST';
var RESOURCE_DETAIL_READ_SUCCESS = exports.RESOURCE_DETAIL_READ_SUCCESS = 'RESOURCE_DETAIL_READ_SUCCESS';
var RESOURCE_DETAIL_READ_FAILURE = exports.RESOURCE_DETAIL_READ_FAILURE = 'RESOURCE_DETAIL_READ_FAILURE';

var resourceDetailReadRequest = exports.resourceDetailReadRequest = function resourceDetailReadRequest(resource, needle) {
  return {
    type: RESOURCE_DETAIL_READ_REQUEST,
    payload: { needle: needle },
    meta: {
      resource: resource,
      thunk: resource + 'DetailRead'
    }
  };
};

var resourceDetailReadSuccess = exports.resourceDetailReadSuccess = function resourceDetailReadSuccess(resource, detail, request, thunk) {
  return {
    type: RESOURCE_DETAIL_READ_SUCCESS,
    payload: detail,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource,
      entities: resource
    }
  };
};

var resourceDetailReadFailure = exports.resourceDetailReadFailure = function resourceDetailReadFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_DETAIL_READ_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var RESOURCE_UPDATE_REQUEST = exports.RESOURCE_UPDATE_REQUEST = 'RESOURCE_UPDATE_REQUEST';
var RESOURCE_UPDATE_SUCCESS = exports.RESOURCE_UPDATE_SUCCESS = 'RESOURCE_UPDATE_SUCCESS';
var RESOURCE_UPDATE_FAILURE = exports.RESOURCE_UPDATE_FAILURE = 'RESOURCE_UPDATE_FAILURE';

var resourceUpdateRequest = exports.resourceUpdateRequest = function resourceUpdateRequest(resource, needle, data) {
  return {
    type: RESOURCE_UPDATE_REQUEST,
    payload: { needle: needle, data: data },
    meta: {
      resource: resource,
      thunk: resource + 'Update'
    }
  };
};

var resourceUpdateSuccess = exports.resourceUpdateSuccess = function resourceUpdateSuccess(resource, detail, request, thunk) {
  return {
    type: RESOURCE_UPDATE_SUCCESS,
    payload: detail,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource,
      entities: resource
    }
  };
};

var resourceUpdateFailure = exports.resourceUpdateFailure = function resourceUpdateFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_UPDATE_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var RESOURCE_DELETE_REQUEST = exports.RESOURCE_DELETE_REQUEST = 'RESOURCE_DELETE_REQUEST';
var RESOURCE_DELETE_SUCCESS = exports.RESOURCE_DELETE_SUCCESS = 'RESOURCE_DELETE_SUCCESS';
var RESOURCE_DELETE_FAILURE = exports.RESOURCE_DELETE_FAILURE = 'RESOURCE_DELETE_FAILURE';

var resourceDeleteRequest = exports.resourceDeleteRequest = function resourceDeleteRequest(resource, needle) {
  return {
    type: RESOURCE_DELETE_REQUEST,
    payload: { needle: needle },
    meta: {
      resource: resource,
      thunk: resource + 'Delete'
    }
  };
};

var resourceDeleteSuccess = exports.resourceDeleteSuccess = function resourceDeleteSuccess(resource, request, thunk) {
  return {
    type: RESOURCE_DELETE_SUCCESS,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var resourceDeleteFailure = exports.resourceDeleteFailure = function resourceDeleteFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_DELETE_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RESOURCE_CREATE_REQUEST, 'RESOURCE_CREATE_REQUEST', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_CREATE_SUCCESS, 'RESOURCE_CREATE_SUCCESS', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_CREATE_FAILURE, 'RESOURCE_CREATE_FAILURE', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceCreateRequest, 'resourceCreateRequest', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceCreateSuccess, 'resourceCreateSuccess', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceCreateFailure, 'resourceCreateFailure', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_LIST_READ_REQUEST, 'RESOURCE_LIST_READ_REQUEST', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_LIST_READ_SUCCESS, 'RESOURCE_LIST_READ_SUCCESS', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_LIST_READ_FAILURE, 'RESOURCE_LIST_READ_FAILURE', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceListReadRequest, 'resourceListReadRequest', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceListReadSuccess, 'resourceListReadSuccess', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceListReadFailure, 'resourceListReadFailure', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DETAIL_READ_REQUEST, 'RESOURCE_DETAIL_READ_REQUEST', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DETAIL_READ_SUCCESS, 'RESOURCE_DETAIL_READ_SUCCESS', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DETAIL_READ_FAILURE, 'RESOURCE_DETAIL_READ_FAILURE', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDetailReadRequest, 'resourceDetailReadRequest', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDetailReadSuccess, 'resourceDetailReadSuccess', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDetailReadFailure, 'resourceDetailReadFailure', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_UPDATE_REQUEST, 'RESOURCE_UPDATE_REQUEST', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_UPDATE_SUCCESS, 'RESOURCE_UPDATE_SUCCESS', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_UPDATE_FAILURE, 'RESOURCE_UPDATE_FAILURE', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceUpdateRequest, 'resourceUpdateRequest', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceUpdateSuccess, 'resourceUpdateSuccess', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceUpdateFailure, 'resourceUpdateFailure', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DELETE_REQUEST, 'RESOURCE_DELETE_REQUEST', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DELETE_SUCCESS, 'RESOURCE_DELETE_SUCCESS', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DELETE_FAILURE, 'RESOURCE_DELETE_FAILURE', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDeleteRequest, 'resourceDeleteRequest', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDeleteSuccess, 'resourceDeleteSuccess', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDeleteFailure, 'resourceDeleteFailure', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/actions.js');
}();

;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
var SOCIAL_LOGIN = exports.SOCIAL_LOGIN = 'SOCIAL_LOGIN';
var SOCIAL_LOGIN_PREPARE = exports.SOCIAL_LOGIN_PREPARE = 'SOCIAL_LOGIN_PREPARE';
var SOCIAL_LOGIN_REQUEST = exports.SOCIAL_LOGIN_REQUEST = 'SOCIAL_LOGIN_REQUEST';
var SOCIAL_LOGIN_SUCCESS = exports.SOCIAL_LOGIN_SUCCESS = 'SOCIAL_LOGIN_SUCCESS';
var SOCIAL_LOGIN_FAILURE = exports.SOCIAL_LOGIN_FAILURE = 'SOCIAL_LOGIN_FAILURE';
var SOCIAL_LOGOUT = exports.SOCIAL_LOGOUT = 'SOCIAL_LOGOUT';

var socialLoginPrepare = function socialLoginPrepare(service) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var clientId = _ref.clientId,
      options = _objectWithoutProperties(_ref, ['clientId']);

  return {
    type: SOCIAL_LOGIN_PREPARE,
    payload: _extends({
      service: service,
      clientId: clientId
    }, options)
  };
};

exports.socialLoginPrepare = socialLoginPrepare;
var socialLoginRequest = function socialLoginRequest(service) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var clientId = _ref2.clientId,
      options = _objectWithoutProperties(_ref2, ['clientId']);

  return {
    type: SOCIAL_LOGIN_REQUEST,
    payload: _extends({
      service: service,
      clientId: clientId
    }, options),
    meta: {
      // https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm
      gtm: service
    }
  };
};

exports.socialLoginRequest = socialLoginRequest;
var socialLoginSuccess = exports.socialLoginSuccess = function socialLoginSuccess(user, request) {
  return {
    type: SOCIAL_LOGIN_SUCCESS,
    payload: user,
    meta: {
      request: request
    }
  };
};

var socialLoginFailure = exports.socialLoginFailure = function socialLoginFailure(error, request) {
  return {
    type: SOCIAL_LOGIN_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request
    }
  };
};

var socialLogout = exports.socialLogout = function socialLogout() {
  return { type: SOCIAL_LOGOUT };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SOCIAL_LOGIN, 'SOCIAL_LOGIN', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(SOCIAL_LOGIN_PREPARE, 'SOCIAL_LOGIN_PREPARE', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(SOCIAL_LOGIN_REQUEST, 'SOCIAL_LOGIN_REQUEST', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(SOCIAL_LOGIN_SUCCESS, 'SOCIAL_LOGIN_SUCCESS', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(SOCIAL_LOGIN_FAILURE, 'SOCIAL_LOGIN_FAILURE', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(SOCIAL_LOGOUT, 'SOCIAL_LOGOUT', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(socialLoginPrepare, 'socialLoginPrepare', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(socialLoginRequest, 'socialLoginRequest', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(socialLoginSuccess, 'socialLoginSuccess', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(socialLoginFailure, 'socialLoginFailure', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(socialLogout, 'socialLogout', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/actions.js');
}();

;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux-saga-thunk");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.posts = undefined;

var _normalizr = __webpack_require__(16);

var posts = exports.posts = new _normalizr.schema.Entity('posts'); // https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(posts, 'posts', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/schemas.js');
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDenormalizedList = exports.getDenormalizedDetail = exports.getList = exports.getDetail = exports.getEntity = exports.initialState = undefined;

var _normalizr = __webpack_require__(16);

var _schemas = __webpack_require__(19);

var schemas = _interopRequireWildcard(_schemas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
var initialState = exports.initialState = {};

var getEntity = exports.getEntity = function getEntity() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  return state[entity] || {};
};

var getDetail = exports.getDetail = function getDetail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var id = arguments[2];
  return getEntity(state, entity)[id];
};

var getList = exports.getList = function getList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var ids = arguments[2];
  return (ids || Object.keys(getEntity(state, entity))).map(function (id) {
    return getDetail(state, entity, id);
  });
};

var getDenormalizedDetail = exports.getDenormalizedDetail = function getDenormalizedDetail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var id = arguments[2];
  return (0, _normalizr.denormalize)(getDetail(state, entity, id), schemas[entity], state);
};

var getDenormalizedList = exports.getDenormalizedList = function getDenormalizedList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var ids = arguments[2];
  return (0, _normalizr.denormalize)(getList(state, entity, ids), [schemas[entity]], state);
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/selectors.js');

  __REACT_HOT_LOADER__.register(getEntity, 'getEntity', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/selectors.js');

  __REACT_HOT_LOADER__.register(getDetail, 'getDetail', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/selectors.js');

  __REACT_HOT_LOADER__.register(getList, 'getList', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/selectors.js');

  __REACT_HOT_LOADER__.register(getDenormalizedDetail, 'getDenormalizedDetail', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/selectors.js');

  __REACT_HOT_LOADER__.register(getDenormalizedList, 'getDenormalizedList', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/selectors.js');
}();

;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = exports.initialState = {};

var initialExchangeState = exports.initialExchangeState = {
  price: null
};

var getExchangeState = exports.getExchangeState = function getExchangeState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var exchange = arguments[1];
  return state[exchange] || initialExchangeState;
};

var getPrice = exports.getPrice = function getPrice() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var exchange = arguments[1];
  return getExchangeState(state, exchange).price;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/exchange/selectors.js");

  __REACT_HOT_LOADER__.register(initialExchangeState, "initialExchangeState", "/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/exchange/selectors.js");

  __REACT_HOT_LOADER__.register(getExchangeState, "getExchangeState", "/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/exchange/selectors.js");

  __REACT_HOT_LOADER__.register(getPrice, "getPrice", "/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/exchange/selectors.js");
}();

;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GTM = exports.GTM = 'GTM';
var GTM_START = exports.GTM_START = 'GTM_START';
var GTM_FAILURE = exports.GTM_FAILURE = 'GTM_FAILURE';

var gtmStart = exports.gtmStart = function gtmStart(gtmId) {
  return {
    type: GTM_START,
    payload: {
      gtmId: gtmId
    }
  };
};

var gtmFailure = exports.gtmFailure = function gtmFailure(error, request) {
  return {
    type: GTM_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request
    }
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(GTM, 'GTM', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/gtm/actions.js');

  __REACT_HOT_LOADER__.register(GTM_START, 'GTM_START', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/gtm/actions.js');

  __REACT_HOT_LOADER__.register(GTM_FAILURE, 'GTM_FAILURE', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/gtm/actions.js');

  __REACT_HOT_LOADER__.register(gtmStart, 'gtmStart', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/gtm/actions.js');

  __REACT_HOT_LOADER__.register(gtmFailure, 'gtmFailure', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/gtm/actions.js');
}();

;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
var MODAL_SHOW = exports.MODAL_SHOW = 'MODAL_SHOW';
var MODAL_HIDE = exports.MODAL_HIDE = 'MODAL_HIDE';

var modalShow = exports.modalShow = function modalShow(name) {
  return {
    type: MODAL_SHOW,
    payload: {
      name: name
    },
    meta: {
      gtm: name
    }
  };
};

var modalHide = exports.modalHide = function modalHide(name) {
  return {
    type: MODAL_HIDE,
    payload: {
      name: name
    }
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MODAL_SHOW, 'MODAL_SHOW', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/modal/actions.js');

  __REACT_HOT_LOADER__.register(MODAL_HIDE, 'MODAL_HIDE', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/modal/actions.js');

  __REACT_HOT_LOADER__.register(modalShow, 'modalShow', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/modal/actions.js');

  __REACT_HOT_LOADER__.register(modalHide, 'modalHide', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/modal/actions.js');
}();

;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
var initialState = exports.initialState = {};

var isOpen = exports.isOpen = function isOpen() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var name = arguments[1];
  return !!state[name];
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/modal/selectors.js");

  __REACT_HOT_LOADER__.register(isOpen, "isOpen", "/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/modal/selectors.js");
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
var initialState = exports.initialState = {};

var initialResourceState = exports.initialResourceState = {
  list: [],
  detail: null
};

var getResourceState = exports.getResourceState = function getResourceState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var resource = arguments[1];
  return state[resource] || initialResourceState;
};

var getList = exports.getList = function getList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var resource = arguments[1];
  return getResourceState(state, resource).list;
};

var getDetail = exports.getDetail = function getDetail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var resource = arguments[1];
  return getResourceState(state, resource).detail;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/selectors.js");

  __REACT_HOT_LOADER__.register(initialResourceState, "initialResourceState", "/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/selectors.js");

  __REACT_HOT_LOADER__.register(getResourceState, "getResourceState", "/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/selectors.js");

  __REACT_HOT_LOADER__.register(getList, "getList", "/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/selectors.js");

  __REACT_HOT_LOADER__.register(getDetail, "getDetail", "/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/selectors.js");
}();

;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
var initialState = exports.initialState = {
  user: null
};

var getUser = exports.getUser = function getUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.user || initialState.user;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/selectors.js");

  __REACT_HOT_LOADER__.register(getUser, "getUser", "/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/selectors.js");
}();

;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-router-server");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("simple-load-script");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(139);

var _path = __webpack_require__(146);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(140);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(155);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _styledComponents = __webpack_require__(2);

var _server = __webpack_require__(148);

var _reactRedux = __webpack_require__(5);

var _reactRouter = __webpack_require__(150);

var _reactRouterServer = __webpack_require__(30);

var _config = __webpack_require__(7);

var _configure = __webpack_require__(99);

var _configure2 = _interopRequireDefault(_configure);

var _api = __webpack_require__(96);

var _api2 = _interopRequireDefault(_api);

var _socket = __webpack_require__(97);

var _socket2 = _interopRequireDefault(_socket);

var _App = __webpack_require__(34);

var _App2 = _interopRequireDefault(_App);

var _Html = __webpack_require__(36);

var _Html2 = _interopRequireDefault(_Html);

var _Error = __webpack_require__(35);

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socketClient = new _socket2.default(); /* eslint-disable no-console */


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
  var store = (0, _configure2.default)({}, { api: _api2.default.create(), socket: socketClient });
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

  __REACT_HOT_LOADER__.register(socketClient, 'socketClient', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/server.js');

  __REACT_HOT_LOADER__.register(renderApp, 'renderApp', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/server.js');

  __REACT_HOT_LOADER__.register(renderHtml, 'renderHtml', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/server.js');

  __REACT_HOT_LOADER__.register(app, 'app', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/server.js');
}();

;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  body {\n    margin: 0;\n  }\n'], ['\n  body {\n    margin: 0;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(151);

var _styledComponents = __webpack_require__(2);

var _reactHelmet = __webpack_require__(29);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _components = __webpack_require__(3);

var _containers = __webpack_require__(9);

var _default2 = __webpack_require__(86);

var _default3 = _interopRequireDefault(_default2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject);

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet2.default,
      { titleTemplate: 'CryptoTradeBot - %s' },
      _react2.default.createElement(
        'title',
        null,
        'Atomic React'
      ),
      _react2.default.createElement('meta', { charSet: 'UTF-8' }),
      _react2.default.createElement('meta', { name: 'description', content: '' }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
      _react2.default.createElement('meta', { property: 'og:site_name', content: 'CryptoTradeBot' }),
      _react2.default.createElement('meta', { property: 'og:image', content: 'https://cryptoTradeBot.io/thumbnail.png' }),
      _react2.default.createElement('meta', { property: 'og:image:type', content: 'image/png' }),
      _react2.default.createElement('meta', { property: 'og:image:width', content: '1200' }),
      _react2.default.createElement('meta', { property: 'og:image:height', content: '630' }),
      _react2.default.createElement('link', { rel: 'icon', href: 'icon.png' })
    ),
    _react2.default.createElement(_containers.GoogleTagManager, null),
    _react2.default.createElement(
      _styledComponents.ThemeProvider,
      { theme: _default3.default },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _components.HomePage, exact: true }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard', component: _components.DashboardPage }),
        _react2.default.createElement(_reactRouterDom.Route, { component: _components.NotFoundPage })
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

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/App.js');
}();

;

/***/ }),
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(29);

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Atom = _styledComponents2.default.span.withConfig({
  displayName: 'Atom'
})(['\n  font-family: ', ';\n  color: ', ';\n'], (0, _styledTheme.font)('primary'), (0, _styledTheme.palette)({ grayscale: 0 }, 1));

Atom.propTypes = {
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool
};

Atom.defaultProps = {
  palette: 'grayscale'
};

var _default = Atom;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Atom, 'Atom', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Atom/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Atom/index.js');
}();

;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Badge = _styledComponents2.default.span.withConfig({
  displayName: 'Badge'
})(['\n  font-family: ', ';\n  font-size: 0.75rem;\n  line-height: 1.5em;\n  padding: 0.1em 0.3em;\n  color: ', ';\n  background-color: ', ';\n  border-radius: 0.16667em;\n'], (0, _styledTheme.font)('primary'), (0, _styledTheme.palette)('grayscale', 0, true), (0, _styledTheme.palette)(1));

Badge.propTypes = {
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool
};

Badge.defaultProps = {
  palette: 'primary'
};

var _default = Badge;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Badge, 'Badge', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Badge/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Badge/index.js');
}();

;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

var _styledTools = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Block = _styledComponents2.default.div.withConfig({
  displayName: 'Block'
})(['\n  font-family: ', ';\n  background-color: ', ';\n  color: ', ';\n'], (0, _styledTheme.font)('primary'), (0, _styledTools.ifProp)('opaque', (0, _styledTheme.palette)(0, true), 'transparent'), (0, _styledTheme.palette)({ grayscale: 0 }, 1));

Block.propTypes = {
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  opaque: _propTypes2.default.bool
};

Block.defaultProps = {
  palette: 'grayscale'
};

var _default = Block;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Block, 'Block', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Block/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Block/index.js');
}();

;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Link = __webpack_require__(152);

var _Link2 = _interopRequireDefault(_Link);

var _styledTheme = __webpack_require__(4);

var _styledTools = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var fontSize = function fontSize(_ref) {
  var height = _ref.height;
  return height / 40 + 'rem';
};

var backgroundColor = function backgroundColor(_ref2) {
  var transparent = _ref2.transparent,
      disabled = _ref2.disabled;
  return transparent ? 'transparent' : (0, _styledTheme.palette)(disabled ? 2 : 1);
};

var foregroundColor = function foregroundColor(_ref3) {
  var transparent = _ref3.transparent,
      disabled = _ref3.disabled;
  return transparent ? (0, _styledTheme.palette)(disabled ? 2 : 1) : (0, _styledTheme.palette)('grayscale', 0, true);
};

var hoverBackgroundColor = function hoverBackgroundColor(_ref4) {
  var disabled = _ref4.disabled,
      transparent = _ref4.transparent;
  return !disabled && !transparent && (0, _styledTheme.palette)(0);
};
var hoverForegroundColor = function hoverForegroundColor(_ref5) {
  var disabled = _ref5.disabled,
      transparent = _ref5.transparent;
  return !disabled && transparent && (0, _styledTheme.palette)(0);
};

var styles = (0, _styledComponents.css)(['\n  display: inline-flex;\n  font-family: ', ';\n  align-items: center;\n  white-space: nowrap;\n  font-size: ', ';\n  border: 0.0625em solid ', ';\n  height: 2.5em;\n  justify-content: center;\n  text-decoration: none;\n  cursor: ', ';\n  appearance: none;\n  padding: 0 1em;\n  border-radius: 0.125em;\n  box-sizing: border-box;\n  pointer-events: ', ';\n  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;\n  background-color: ', ';\n  color: ', ';\n\n  &:hover, &:focus, &:active {\n    background-color: ', ';\n    color: ', ';\n  }\n\n  &:focus {\n    outline: none\n  }\n'], (0, _styledTheme.font)('primary'), fontSize, (0, _styledTools.ifProp)('transparent', 'currentcolor', 'transparent'), (0, _styledTools.ifProp)('disabled', 'default', 'pointer'), (0, _styledTools.ifProp)('disabled', 'none', 'auto'), backgroundColor, foregroundColor, hoverBackgroundColor, hoverForegroundColor);

var StyledLink = (0, _styledComponents2.default)(function (_ref6) {
  var disabled = _ref6.disabled,
      transparent = _ref6.transparent,
      reverse = _ref6.reverse,
      palette = _ref6.palette,
      height = _ref6.height,
      theme = _ref6.theme,
      props = _objectWithoutProperties(_ref6, ['disabled', 'transparent', 'reverse', 'palette', 'height', 'theme']);

  return _react2.default.createElement(_Link2.default, props);
}).withConfig({
  displayName: 'Button__StyledLink'
})(['', ''], styles);

var Anchor = _styledComponents2.default.a.withConfig({
  displayName: 'Button__Anchor'
})(['', ''], styles);
var StyledButton = _styledComponents2.default.button.withConfig({
  displayName: 'Button__StyledButton'
})(['', ''], styles);

var Button = function Button(_ref7) {
  var type = _ref7.type,
      props = _objectWithoutProperties(_ref7, ['type']);

  if (props.to) {
    return _react2.default.createElement(StyledLink, props);
  } else if (props.href) {
    return _react2.default.createElement(Anchor, props);
  }
  return _react2.default.createElement(StyledButton, _extends({}, props, { type: type }));
};

Button.propTypes = {
  disabled: _propTypes2.default.bool,
  palette: _propTypes2.default.string,
  transparent: _propTypes2.default.bool,
  reverse: _propTypes2.default.bool,
  height: _propTypes2.default.number,
  type: _propTypes2.default.string,
  to: _propTypes2.default.string,
  href: _propTypes2.default.string
};

Button.defaultProps = {
  palette: 'primary',
  type: 'button',
  height: 40
};

var _default = Button;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fontSize, 'fontSize', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(backgroundColor, 'backgroundColor', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(foregroundColor, 'foregroundColor', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(hoverBackgroundColor, 'hoverBackgroundColor', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(hoverForegroundColor, 'hoverForegroundColor', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(StyledLink, 'StyledLink', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(Anchor, 'Anchor', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(StyledButton, 'StyledButton', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(Button, 'Button', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Button/index.js');
}();

;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Caption = _styledComponents2.default.caption.withConfig({
  displayName: 'Caption'
})(['\n  font-family: ', ';\n  color: ', ';\n  font-weight: 500;\n  line-height: 2rem;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n'], (0, _styledTheme.font)('primary'), (0, _styledTheme.palette)('grayscale', 1));

Caption.propTypes = {
  reverse: _propTypes2.default.bool
};

var _default = Caption;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Caption, 'Caption', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Caption/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Caption/index.js');
}();

;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var fontSize = function fontSize(_ref) {
  var level = _ref.level;
  return 0.75 + 1 * (1 / level) + 'rem';
};

var styles = (0, _styledComponents.css)(['\n  font-family: ', ';\n  font-weight: 500;\n  font-size: ', ';\n  margin: 0;\n  margin-top: 0.85714em;\n  margin-bottom: 0.57142em;\n  color: ', ';\n'], (0, _styledTheme.font)('primary'), fontSize, (0, _styledTheme.palette)({ grayscale: 0 }, 1));

var Heading = (0, _styledComponents2.default)(function (_ref2) {
  var level = _ref2.level,
      children = _ref2.children,
      reverse = _ref2.reverse,
      palette = _ref2.palette,
      theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ['level', 'children', 'reverse', 'palette', 'theme']);

  return _react2.default.createElement('h' + level, props, children);
}).withConfig({
  displayName: 'Heading'
})(['', ''], styles);

Heading.propTypes = {
  level: _propTypes2.default.number,
  children: _propTypes2.default.node,
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool
};

Heading.defaultProps = {
  level: 1,
  palette: 'grayscale'
};

var _default = Heading;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fontSize, 'fontSize', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Heading/index.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Heading/index.js');

  __REACT_HOT_LOADER__.register(Heading, 'Heading', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Heading/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Heading/index.js');
}();

;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HorizontalRule = _styledComponents2.default.hr.withConfig({
  displayName: 'HorizontalRule'
})(['\n  border: 1px solid ', ';\n  border-width: 0 0 1px;\n  width: 100%;\n'], (0, _styledTheme.palette)(1, true));

HorizontalRule.propTypes = {
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool
};

HorizontalRule.defaultProps = {
  palette: 'grayscale'
};

var _default = HorizontalRule;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HorizontalRule, 'HorizontalRule', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/HorizontalRule/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/HorizontalRule/index.js');
}();

;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

var _styledTools = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // https://github.com/diegohaz/arc/wiki/Example-components#icon


var fontSize = function fontSize(_ref) {
  var width = _ref.width,
      height = _ref.height;

  var size = width || height;
  return size ? size / 16 + 'rem' : '1.25em';
};

var Wrapper = _styledComponents2.default.span.withConfig({
  displayName: 'Icon__Wrapper'
})(['\n  display: inline-block;\n  font-size: ', ';\n  color: ', ';\n  width: 1em;\n  height: 1em;\n  margin: 0.1em;\n  box-sizing: border-box;\n\n  & > svg {\n    width: 100%;\n    height: 100%;\n    fill: currentcolor;\n    stroke: currentcolor;\n  }\n'], fontSize, (0, _styledTools.ifProp)('palette', (0, _styledTheme.palette)({ grayscale: 0 }, 1), 'currentcolor'));

var Icon = function Icon(_ref2) {
  var icon = _ref2.icon,
      props = _objectWithoutProperties(_ref2, ['icon']);

  var svg = __webpack_require__(132)("./" + icon + '.svg');
  return _react2.default.createElement(Wrapper, _extends({}, props, { dangerouslySetInnerHTML: { __html: svg } }));
};

Icon.propTypes = {
  icon: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool
};

var _default = Icon;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fontSize, 'fontSize', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Icon/index.js');

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Icon/index.js');

  __REACT_HOT_LOADER__.register(Icon, 'Icon', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Icon/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Icon/index.js');
}();

;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

var _styledTools = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var fontSize = function fontSize(_ref) {
  var height = _ref.height;
  return height / 35.5555555556 + 'rem';
};

var styles = (0, _styledComponents.css)(['\n  font-family: ', ';\n  display: block;\n  width: 100%;\n  margin: 0;\n  box-sizing: border-box;\n  font-size: ', ';\n  padding: ', ';\n  height: ', ';\n  color: ', ';\n  background-color: ', ';\n  border: 1px solid ', ';\n  border-radius: 2px;\n\n  &[type=checkbox], &[type=radio] {\n    display: inline-block;\n    border: 0;\n    border-radius: 0;\n    width: auto;\n    height: auto;\n    margin: 0 0.2rem 0 0;\n  }\n'], (0, _styledTheme.font)('primary'), fontSize, (0, _styledTools.ifProp)({ type: 'textarea' }, '0.4444444444em', '0 0.4444444444em'), (0, _styledTools.ifProp)({ type: 'textarea' }, 'auto', '2.2222222222em'), (0, _styledTheme.palette)('grayscale', 0), (0, _styledTheme.palette)('grayscale', 0, true), (0, _styledTools.ifProp)('invalid', (0, _styledTheme.palette)('danger', 2), (0, _styledTheme.palette)('grayscale', 3)));

var StyledTextarea = _styledComponents2.default.textarea.withConfig({
  displayName: 'Input__StyledTextarea'
})(['', ''], styles);
var StyledSelect = _styledComponents2.default.select.withConfig({
  displayName: 'Input__StyledSelect'
})(['', ''], styles);
var StyledInput = _styledComponents2.default.input.withConfig({
  displayName: 'Input__StyledInput'
})(['', ''], styles);

var Input = function Input(_ref2) {
  var props = _objectWithoutProperties(_ref2, []);

  if (props.type === 'textarea') {
    return _react2.default.createElement(StyledTextarea, props);
  } else if (props.type === 'select') {
    return _react2.default.createElement(StyledSelect, props);
  }
  return _react2.default.createElement(StyledInput, props);
};

Input.propTypes = {
  type: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  height: _propTypes2.default.number,
  invalid: _propTypes2.default.bool
};

Input.defaultProps = {
  type: 'text',
  height: 40
};

var _default = Input;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fontSize, 'fontSize', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Input/index.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Input/index.js');

  __REACT_HOT_LOADER__.register(StyledTextarea, 'StyledTextarea', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Input/index.js');

  __REACT_HOT_LOADER__.register(StyledSelect, 'StyledSelect', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Input/index.js');

  __REACT_HOT_LOADER__.register(StyledInput, 'StyledInput', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Input/index.js');

  __REACT_HOT_LOADER__.register(Input, 'Input', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Input/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Input/index.js');
}();

;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = _styledComponents2.default.label.withConfig({
  displayName: 'Label'
})(['\n  font-family: ', ';\n  color: ', ';\n  font-size: 1rem;\n  line-height: 2em;\n'], (0, _styledTheme.font)('primary'), (0, _styledTheme.palette)('grayscale', 1));

Label.propTypes = {
  reverse: _propTypes2.default.bool
};

var _default = Label;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Label, 'Label', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Label/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Label/index.js');
}();

;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

var _NavLink = __webpack_require__(153);

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = (0, _styledComponents.css)(['\n  font-family: ', ';\n  text-decoration: none;\n  font-weight: 500;\n  color: ', ';\n\n  &:hover {\n    text-decoration: underline;\n  }\n'], (0, _styledTheme.font)('primary'), (0, _styledTheme.palette)({ grayscale: 0 }, 1));

var StyledNavLink = (0, _styledComponents2.default)(function (_ref) {
  var theme = _ref.theme,
      reverse = _ref.reverse,
      palette = _ref.palette,
      props = _objectWithoutProperties(_ref, ['theme', 'reverse', 'palette']);

  return _react2.default.createElement(_NavLink2.default, props);
}).withConfig({
  displayName: 'Link__StyledNavLink'
})(['', ''], styles);

var Anchor = _styledComponents2.default.a.withConfig({
  displayName: 'Link__Anchor'
})(['', ''], styles);

var Link = function Link(_ref2) {
  var props = _objectWithoutProperties(_ref2, []);

  if (props.to) {
    return _react2.default.createElement(StyledNavLink, props);
  }
  return _react2.default.createElement(Anchor, props);
};

Link.propTypes = {
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  to: _propTypes2.default.string
};

Link.defaultProps = {
  palette: 'primary'
};

var _default = Link;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Link/index.js');

  __REACT_HOT_LOADER__.register(StyledNavLink, 'StyledNavLink', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Link/index.js');

  __REACT_HOT_LOADER__.register(Anchor, 'Anchor', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Link/index.js');

  __REACT_HOT_LOADER__.register(Link, 'Link', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Link/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Link/index.js');
}();

;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = (0, _styledComponents.css)(['\n  font-family: ', ';\n  margin: 1rem 0;\n  padding-left: 1.6rem;\n  line-height: 1.7rem;\n  color: ', ';\n'], (0, _styledTheme.font)('primary'), (0, _styledTheme.palette)({ grayscale: 0 }, 1));

var Ol = _styledComponents2.default.ol.withConfig({
  displayName: 'List__Ol'
})(['', ''], styles);
var Ul = _styledComponents2.default.ul.withConfig({
  displayName: 'List__Ul'
})(['', ''], styles);

var List = function List(_ref) {
  var ordered = _ref.ordered,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['ordered', 'children']);

  return _react2.default.createElement(ordered ? Ol : Ul, props, children);
};

List.propTypes = {
  ordered: _propTypes2.default.bool,
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  children: _propTypes2.default.any
};

List.defaultProps = {
  palette: 'grayscale'
};

var _default = List;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/List/index.js');

  __REACT_HOT_LOADER__.register(Ol, 'Ol', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/List/index.js');

  __REACT_HOT_LOADER__.register(Ul, 'Ul', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/List/index.js');

  __REACT_HOT_LOADER__.register(List, 'List', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/List/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/List/index.js');
}();

;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _logo = __webpack_require__(130);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogoImage = function LogoImage(props) {
  return _react2.default.createElement('img', _extends({ alt: 'Logo' }, props, { src: _logo2.default }));
};

var _default = LogoImage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LogoImage, 'LogoImage', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/LogoImage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/LogoImage/index.js');
}();

;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paragraph = _styledComponents2.default.p.withConfig({
  displayName: 'Paragraph'
})(['\n  font-family: ', ';\n  color: ', ';\n  font-size: 1rem;\n  line-height: 1.3;\n  margin: 1rem 0 0;\n'], (0, _styledTheme.font)('primary'), (0, _styledTheme.palette)('grayscale', 0));

Paragraph.propTypes = {
  reverse: _propTypes2.default.bool
};

var _default = Paragraph;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Paragraph, 'Paragraph', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Paragraph/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Paragraph/index.js');
}();

;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

var _styledTools = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreformattedText = _styledComponents2.default.pre.withConfig({
  displayName: 'PreformattedText'
})(['\n  display: ', ';\n  font-family: ', ';\n  color: ', ';\n  background-color: ', ';\n  padding: ', ';\n  white-space: ', ';\n  overflow: auto;\n  line-height: 150%;\n'], (0, _styledTools.ifProp)('block', 'block', 'inline'), (0, _styledTheme.font)('pre'), (0, _styledTheme.palette)({ grayscale: 0 }, 1), (0, _styledTheme.palette)('grayscale', 1, true), (0, _styledTools.ifProp)('block', '1em', '0 0.5em'), (0, _styledTools.ifProp)('wrapped', 'pre-wrap', 'nowrap'));

PreformattedText.propTypes = {
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  block: _propTypes2.default.bool,
  wrapped: _propTypes2.default.bool
};

PreformattedText.defaultProps = {
  palette: 'grayscale'
};

var _default = PreformattedText;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PreformattedText, 'PreformattedText', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/PreformattedText/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/PreformattedText/index.js');
}();

;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spin = (0, _styledComponents.keyframes)(['\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n']);

var Spinner = _styledComponents2.default.div.withConfig({
  displayName: 'Spinner'
})(['\n  position: relative;\n  border: 0.2em solid ', ';\n  border-bottom-color: ', ';\n  border-radius: 50%;\n  margin: 0 auto;\n  width: 1em;\n  height: 1em;\n  animation: ', ' 1s linear infinite;\n'], (0, _styledTheme.palette)('grayscale', 1, true), (0, _styledTheme.palette)(1), spin);

Spinner.propTypes = {
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool
};

Spinner.defaultProps = {
  palette: 'primary'
};

var _default = Spinner;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(spin, 'spin', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Spinner/index.js');

  __REACT_HOT_LOADER__.register(Spinner, 'Spinner', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Spinner/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Spinner/index.js');
}();

;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = (0, _styledComponents.css)(['\n  text-align: left;\n  padding: 0.75em;\n']);

var Th = _styledComponents2.default.th.withConfig({
  displayName: 'TableCell__Th'
})(['', ''], styles);
var Td = _styledComponents2.default.td.withConfig({
  displayName: 'TableCell__Td'
})(['', ''], styles);

var TableCell = function TableCell(_ref) {
  var heading = _ref.heading,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['heading', 'children']);

  return _react2.default.createElement(heading ? Th : Td, props, children);
};

TableCell.propTypes = {
  heading: _propTypes2.default.bool,
  children: _propTypes2.default.any
};

var _default = TableCell;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/TableCell/index.js');

  __REACT_HOT_LOADER__.register(Th, 'Th', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/TableCell/index.js');

  __REACT_HOT_LOADER__.register(Td, 'Td', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/TableCell/index.js');

  __REACT_HOT_LOADER__.register(TableCell, 'TableCell', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/TableCell/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/TableCell/index.js');
}();

;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var backgroundColor = function backgroundColor(_ref) {
  var filled = _ref.filled;
  return (0, _styledTheme.palette)('grayscale', filled ? 1 : 0, true);
};

var TableRow = _styledComponents2.default.tr.withConfig({
  displayName: 'TableRow'
})(['\n  background-color: ', ';\n'], backgroundColor);

TableRow.propTypes = {
  filled: _propTypes2.default.bool,
  reverse: _propTypes2.default.bool
};

var _default = TableRow;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(backgroundColor, 'backgroundColor', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/TableRow/index.js');

  __REACT_HOT_LOADER__.register(TableRow, 'TableRow', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/TableRow/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/TableRow/index.js');
}();

;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.perpendicularAxis = exports.perpendicularOpposite = exports.perpendicular = exports.opposite = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

var _styledTools = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var opposites = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right'
};

var opposite = exports.opposite = function opposite(_ref) {
  var position = _ref.position;
  return opposites[position];
};

var perpendicular = exports.perpendicular = function perpendicular(_ref2) {
  var position = _ref2.position;
  return position === 'left' || position === 'right' ? 'top' : 'left';
};

var perpendicularOpposite = exports.perpendicularOpposite = function perpendicularOpposite(props) {
  return opposites[perpendicular(props)];
};

var perpendicularAxis = exports.perpendicularAxis = function perpendicularAxis(_ref3) {
  var position = _ref3.position;
  return position === 'left' || position === 'right' ? 'Y' : 'X';
};

var backgroundColor = (0, _styledTools.ifProp)('reverse', 'rgba(255, 255, 255, 0.85)', 'rgba(0, 0, 0, 0.85)');

var styles = (0, _styledComponents.css)(['\n  position: relative;\n\n  &:before,\n  &:after {\n    position: absolute;\n    pointer-events: none;\n    display: block;\n    opacity: 0;\n    transition: opacity 100ms ease-in-out, ', ' 100ms ease-in-out;\n    will-change: ', ';\n  }\n\n  &:hover:before,\n  &:focus:before {\n    opacity: 1;\n    ', ': calc(100% + 1rem);\n  }\n\n  &:hover:after,\n  &:focus:after {\n    opacity: 1;\n    ', ': 100%;\n  }\n\n  &:before {\n    content: attr(data-title);\n    font-family: ', ';\n    white-space: nowrap;\n    text-transform: none;\n    font-size: 0.8125rem;\n    line-height: 1.5;\n    text-align: center;\n    color: ', ';\n    background-color: ', ';\n    border-radius: 0.15384em;\n    padding: 0.75em 1em;\n    ', ': calc(100% + 2rem);\n    ', '\n  }\n\n  &:after {\n    ', ': calc(100% + 1rem);\n    ', ': 50%;\n    border: solid transparent;\n    content: \'\';\n    height: 0;\n    width: 0;\n    border-', '-color: ', ';\n    border-width: 0.5rem;\n    margin-', ': -0.5rem;\n  }\n  '], opposite, opposite, opposite, opposite, (0, _styledTheme.font)('primary'), (0, _styledTools.ifProp)('reverse', 'black', 'white'), backgroundColor, opposite, function (_ref4) {
  var align = _ref4.align;

  switch (align) {
    case 'start':
      return (0, _styledComponents.css)(['\n          ', ': 0;\n        '], perpendicular);
    case 'center':
      return (0, _styledComponents.css)(['\n          ', ': 50%;\n          transform: translate', '(-50%);\n        '], perpendicular, perpendicularAxis);
    default:
      return (0, _styledComponents.css)(['\n          ', ': 0;\n        '], perpendicularOpposite);
  }
}, opposite, perpendicular, function (_ref5) {
  var position = _ref5.position;
  return position;
}, backgroundColor, perpendicular);

var Tooltip = (0, _styledComponents2.default)(function (_ref6) {
  var position = _ref6.position,
      align = _ref6.align,
      reverse = _ref6.reverse,
      children = _ref6.children,
      theme = _ref6.theme,
      props = _objectWithoutProperties(_ref6, ['position', 'align', 'reverse', 'children', 'theme']);

  return _react2.default.cloneElement(children, props);
}).withConfig({
  displayName: 'Tooltip'
})(['', ''], styles);

Tooltip.propTypes = {
  position: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),
  align: _propTypes2.default.oneOf(['start', 'center', 'end']),
  reverse: _propTypes2.default.bool,
  'data-title': _propTypes2.default.string.isRequired,
  children: _propTypes2.default.element.isRequired
};

Tooltip.defaultProps = {
  position: 'top',
  align: 'center',
  tabIndex: 0
};

var _default = Tooltip;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(opposites, 'opposites', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Tooltip/index.js');

  __REACT_HOT_LOADER__.register(opposite, 'opposite', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Tooltip/index.js');

  __REACT_HOT_LOADER__.register(perpendicular, 'perpendicular', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Tooltip/index.js');

  __REACT_HOT_LOADER__.register(perpendicularOpposite, 'perpendicularOpposite', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Tooltip/index.js');

  __REACT_HOT_LOADER__.register(perpendicularAxis, 'perpendicularAxis', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Tooltip/index.js');

  __REACT_HOT_LOADER__.register(backgroundColor, 'backgroundColor', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Tooltip/index.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Tooltip/index.js');

  __REACT_HOT_LOADER__.register(Tooltip, 'Tooltip', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Tooltip/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/Tooltip/index.js');
}();

;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var StyledBlockquote = _styledComponents2.default.blockquote.withConfig({
  displayName: 'Blockquote__StyledBlockquote'
})(['\n  position: relative;\n  font-family: ', ';\n  font-style: italic;\n  font-size: 1.2rem;\n  line-height: 2rem;\n  box-sizing: border-box;\n  color: ', ';\n  border-left: 5px solid ', ';\n  margin: 1rem 0;\n  padding: 0.5rem 0 0.5rem 1.5rem;\n'], (0, _styledTheme.font)('quote'), (0, _styledTheme.palette)('grayscale', 1), (0, _styledTheme.palette)('grayscale', 2, true));

var Cite = _styledComponents2.default.cite.withConfig({
  displayName: 'Blockquote__Cite'
})(['\n  display: block;\n  font-family: ', ';\n  font-weight: 300;\n  font-style: normal;\n  margin-top: 0.4rem;\n'], (0, _styledTheme.font)('primary'));

var Blockquote = function Blockquote(_ref) {
  var cite = _ref.cite,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['cite', 'children']);

  return _react2.default.createElement(
    StyledBlockquote,
    props,
    _react2.default.createElement(
      'div',
      null,
      children
    ),
    cite && _react2.default.createElement(
      Cite,
      null,
      cite
    )
  );
};

Blockquote.propTypes = {
  cite: _propTypes2.default.string,
  children: _propTypes2.default.node,
  reverse: _propTypes2.default.bool
};

var _default = Blockquote;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(StyledBlockquote, 'StyledBlockquote', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Blockquote/index.js');

  __REACT_HOT_LOADER__.register(Cite, 'Cite', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Blockquote/index.js');

  __REACT_HOT_LOADER__.register(Blockquote, 'Blockquote', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Blockquote/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Blockquote/index.js');
}();

;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'CodeSponsor__Wrapper'
})(['\n  background-color: ', ';\n  text-align: center;\n'], (0, _styledTheme.palette)(1, true));

var CodeSponsor = function (_React$Component) {
  _inherits(CodeSponsor, _React$Component);

  function CodeSponsor() {
    _classCallCheck(this, CodeSponsor);

    return _possibleConstructorReturn(this, (CodeSponsor.__proto__ || Object.getPrototypeOf(CodeSponsor)).apply(this, arguments));
  }

  _createClass(CodeSponsor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var script = document.createElement('script');

      script.src = 'https://app.codesponsor.io/scripts/-rubqJ_XsKW34vwj9WYShA?theme=light&height=150&width=330';
      script.async = true;

      document.body.appendChild(script);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(Wrapper, _extends({ id: 'code-sponsor-widget' }, this.props));
    }
  }]);

  return CodeSponsor;
}(_react2.default.Component);

CodeSponsor.propTypes = {
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

CodeSponsor.defaultProps = {
  palette: 'grayscale'
};

var _default = CodeSponsor;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/CodeSponsor/index.js');

  __REACT_HOT_LOADER__.register(CodeSponsor, 'CodeSponsor', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/CodeSponsor/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/CodeSponsor/index.js');
}();

;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTools = __webpack_require__(6);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Feature__Wrapper'
})(['\n  position: relative;\n  display: flex;\n  padding: 1rem;\n  box-sizing: border-box;\n  opacity: ', ';\n  @media screen and (max-width: 640px) {\n    padding: 0.5rem;\n  }\n'], (0, _styledTools.ifProp)('soon', 0.4, 1));

var StyledIcon = (0, _styledComponents2.default)(_components.Icon).withConfig({
  displayName: 'Feature__StyledIcon'
})(['\n  flex: none;\n  @media screen and (max-width: 640px) {\n    width: 32px;\n  }\n']);

var Text = _styledComponents2.default.div.withConfig({
  displayName: 'Feature__Text'
})(['\n  margin-left: 1rem;\n  overflow: auto;\n  > :first-child {\n    margin: 0;\n  }\n']);

var StyledBadge = (0, _styledComponents2.default)(_components.Badge).withConfig({
  displayName: 'Feature__StyledBadge'
})(['\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  @media screen and (max-width: 640px) {\n    top: 0.5rem;\n    right: 0.5rem;\n  }\n']);

var Feature = function Feature(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      link = _ref.link,
      code = _ref.code,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['icon', 'title', 'link', 'code', 'children']);

  return _react2.default.createElement(
    Wrapper,
    props,
    icon && _react2.default.createElement(StyledIcon, { icon: icon, width: 64 }),
    _react2.default.createElement(
      Text,
      null,
      _react2.default.createElement(
        _components.Heading,
        { level: 2 },
        link ? _react2.default.createElement(
          _components.Link,
          { href: link },
          title
        ) : title
      ),
      _react2.default.createElement(
        _components.Paragraph,
        null,
        children
      ),
      code && _react2.default.createElement(
        _components.PreformattedText,
        { block: true },
        code
      )
    ),
    props.soon && _react2.default.createElement(
      StyledBadge,
      { palette: 'grayscale' },
      'soon'
    )
  );
};

Feature.propTypes = {
  title: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.string,
  link: _propTypes2.default.string,
  soon: _propTypes2.default.bool,
  children: _propTypes2.default.any,
  code: _propTypes2.default.node
};

var _default = Feature;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Feature/index.js');

  __REACT_HOT_LOADER__.register(StyledIcon, 'StyledIcon', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Feature/index.js');

  __REACT_HOT_LOADER__.register(Text, 'Text', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Feature/index.js');

  __REACT_HOT_LOADER__.register(StyledBadge, 'StyledBadge', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Feature/index.js');

  __REACT_HOT_LOADER__.register(Feature, 'Feature', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Feature/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Feature/index.js');
}();

;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Error = (0, _styledComponents2.default)(_components.Block).withConfig({
  displayName: 'Field__Error'
})(['\n  margin: 0.5rem 0 0;\n']);

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Field__Wrapper'
})(['\n  margin-bottom: 1rem;\n  input[type="checkbox"],\n  input[type="radio"] {\n    margin-right: 0.5rem;\n  }\n  label {\n    vertical-align: middle;\n  }\n']);

var Field = function Field(_ref) {
  var error = _ref.error,
      name = _ref.name,
      invalid = _ref.invalid,
      label = _ref.label,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ['error', 'name', 'invalid', 'label', 'type']);

  var inputProps = _extends({
    id: name, name: name, type: type, invalid: invalid, 'aria-describedby': name + 'Error' }, props);
  var renderInputFirst = type === 'checkbox' || type === 'radio';
  return _react2.default.createElement(
    Wrapper,
    null,
    renderInputFirst && _react2.default.createElement(_components.Input, inputProps),
    label && _react2.default.createElement(
      _components.Label,
      { htmlFor: inputProps.id },
      label
    ),
    renderInputFirst || _react2.default.createElement(_components.Input, inputProps),
    invalid && error && _react2.default.createElement(
      Error,
      { id: name + 'Error', role: 'alert', palette: 'danger' },
      error
    )
  );
};

Field.propTypes = {
  name: _propTypes2.default.string.isRequired,
  invalid: _propTypes2.default.bool,
  error: _propTypes2.default.string,
  label: _propTypes2.default.string,
  type: _propTypes2.default.string
};

Field.defaultProps = {
  type: 'text'
};

var _default = Field;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Error, 'Error', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Field/index.js');

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Field/index.js');

  __REACT_HOT_LOADER__.register(Field, 'Field', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Field/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Field/index.js');
}();

;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTools = __webpack_require__(6);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var fadeIn = (0, _styledComponents.keyframes)(['\n  0% { display: none; opacity: 0; }\n  1% { display: block: opacity: 0; }\n  100% { display: block; opacity: 1; }\n']);

var StyledButton = (0, _styledComponents2.default)(_components.Button).withConfig({
  displayName: 'IconButton__StyledButton'
})(['\n  max-width: ', ';\n  width: ', ';\n  padding: ', ';\n  flex: 0 0 2.5em;\n  box-sizing: border-box;\n  ', '\n  ', '\n'], function (props) {
  return props.hasText && !props.collapsed ? '100%' : '2.5em';
}, (0, _styledTools.ifProp)('hasText', 'auto', '2.5em'), (0, _styledTools.ifProp)('hasText', '0 0.4375em', 0), (0, _styledTools.ifProp)('collapsed', (0, _styledComponents.css)(['\n    overflow: hidden;\n    transition: max-width 250ms ease-in-out;\n    will-change: max-width;\n    & .text {\n      display: none;\n    }\n    &:hover {\n      max-width: 100%;\n      & .text {\n        display: block;\n        animation: ', ' 250ms;\n      }\n    }\n  '], fadeIn)), (0, _styledTools.ifProp)('responsive', (0, _styledComponents.css)(['\n    @media screen and (max-width: ', 'px) {\n      width: auto;\n      flex: 0 !important;\n    }\n  '], (0, _styledTools.prop)('breakpoint'))));

var Text = _styledComponents2.default.span.withConfig({
  displayName: 'IconButton__Text'
})(['\n  padding: 0.4375em;\n  @media screen and (max-width: ', 'px) {\n    display: ', ';\n  }\n'], (0, _styledTools.prop)('breakpoint'), (0, _styledTools.ifProp)('responsive', 'none !important'));

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'IconButton__Wrapper'
})(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n']);

var StyledIcon = (0, _styledComponents2.default)(_components.Icon).withConfig({
  displayName: 'IconButton__StyledIcon'
})(['\n  flex: none;\n']);

var IconButton = function IconButton(_ref) {
  var icon = _ref.icon,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['icon', 'children']);

  var breakpoint = props.breakpoint,
      right = props.right,
      responsive = props.responsive,
      height = props.height;

  var iconElement = _react2.default.createElement(StyledIcon, { height: height ? height / 2.5 : undefined, icon: icon });
  return _react2.default.createElement(
    StyledButton,
    _extends({ hasText: !!children }, props),
    _react2.default.createElement(
      Wrapper,
      null,
      right || iconElement,
      children && _react2.default.createElement(
        Text,
        { className: 'text', responsive: responsive, breakpoint: breakpoint },
        children
      ),
      right && iconElement
    )
  );
};

IconButton.propTypes = {
  icon: _propTypes2.default.string.isRequired,
  responsive: _propTypes2.default.bool,
  breakpoint: _propTypes2.default.number,
  collapsed: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  height: _propTypes2.default.number,
  children: _propTypes2.default.node
};

IconButton.defaultProps = {
  breakpoint: 420
};

var _default = IconButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fadeIn, 'fadeIn', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/IconButton/index.js');

  __REACT_HOT_LOADER__.register(StyledButton, 'StyledButton', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/IconButton/index.js');

  __REACT_HOT_LOADER__.register(Text, 'Text', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/IconButton/index.js');

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/IconButton/index.js');

  __REACT_HOT_LOADER__.register(StyledIcon, 'StyledIcon', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/IconButton/index.js');

  __REACT_HOT_LOADER__.register(IconButton, 'IconButton', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/IconButton/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/IconButton/index.js');
}();

;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var fontSize = function fontSize(_ref) {
  var height = _ref.height;
  return height ? height / 3 / 16 + 'rem' : '0.75em';
};

var margin = function margin(_ref2) {
  var hasText = _ref2.hasText,
      right = _ref2.right;

  if (hasText) {
    return right ? '0 0 0 0.25em' : '0 0.25em 0 0';
  }
  return 0;
};

var StyledIcon = (0, _styledComponents2.default)(_components.Icon).withConfig({
  displayName: 'IconLink__StyledIcon'
})(['\n  font-size: ', ';\n  margin: ', ';\n  @media screen and (max-width: 420px) {\n    margin: ', ';\n  }\n'], fontSize, margin, function (_ref3) {
  var responsive = _ref3.responsive;
  return responsive && 0;
});

var Text = _styledComponents2.default.span.withConfig({
  displayName: 'IconLink__Text'
})(['\n  @media screen and (max-width: 420px) {\n    display: ', ';\n  }\n'], function (_ref4) {
  var responsive = _ref4.responsive;
  return responsive && 'none';
});

var IconLink = function IconLink(_ref5) {
  var height = _ref5.height,
      icon = _ref5.icon,
      right = _ref5.right,
      responsive = _ref5.responsive,
      children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ['height', 'icon', 'right', 'responsive', 'children']);

  var iconElement = _react2.default.createElement(StyledIcon, {
    height: height,
    icon: icon,
    hasText: !!children,
    right: right,
    responsive: responsive,
    palette: props.palette,
    reverse: props.reverse
  });
  return _react2.default.createElement(
    _components.Link,
    props,
    right || iconElement,
    _react2.default.createElement(
      Text,
      { responsive: responsive },
      children
    ),
    right && iconElement
  );
};

IconLink.propTypes = {
  icon: _propTypes2.default.string.isRequired,
  height: _propTypes2.default.number,
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  responsive: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

var _default = IconLink;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fontSize, 'fontSize', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/IconLink/index.js');

  __REACT_HOT_LOADER__.register(margin, 'margin', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/IconLink/index.js');

  __REACT_HOT_LOADER__.register(StyledIcon, 'StyledIcon', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/IconLink/index.js');

  __REACT_HOT_LOADER__.register(Text, 'Text', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/IconLink/index.js');

  __REACT_HOT_LOADER__.register(IconLink, 'IconLink', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/IconLink/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/IconLink/index.js');
}();

;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  body.ReactModal__Body--open {\n    overflow: hidden;\n  }\n'], ['\n  body.ReactModal__Body--open {\n    overflow: hidden;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactModal = __webpack_require__(149);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _styledTheme = __webpack_require__(4);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject);

var overlayStyles = (0, _styledComponents.css)(['\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 9999;\n  transition: opacity 250ms ease-in-out;\n  opacity: 0;\n  &[class*="after-open"] {\n    opacity: 1;\n  }\n  &[class*="before-close"] {\n    opacity: 0;\n  }\n']);

var ModalBox = (0, _styledComponents2.default)(_reactModal2.default).withConfig({
  displayName: 'Modal__ModalBox'
})(['\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  font-family: ', ';\n  font-size: 1rem;\n  background-color: ', ';\n  border-radius: 0.125em;\n  color: ', ';\n  top: calc(50% - 1rem);\n  left: calc(50% - 1rem);\n  right: auto;\n  bottom: auto;\n  margin: 1rem calc(-50% + 1rem) 1rem 1rem;\n  transform: translate(-50%, 100%);\n  transition: transform 250ms ease-in-out;\n  outline: none;\n  box-sizing: border-box;\n  min-width: 320px;\n  max-width: calc(640px - 1rem);\n  max-height: calc(100% - 1rem);\n  padding-top: ', ';\n  @media screen and (max-width: 640px) {\n    width: calc(100% - 1rem);\n    min-width: 0;\n  }\n  &[class*="after-open"] {\n    transform: translate(-50%, -50%);\n  }\n  &[class*="before-close"] {\n    transform: translate(-50%, 100%);\n  }\n'], (0, _styledTheme.font)('primary'), (0, _styledTheme.palette)('grayscale', 0, true), (0, _styledTheme.palette)('grayscale', 0), function (_ref) {
  var hasHeader = _ref.hasHeader;
  return hasHeader ? 0 : '1rem';
});

var Header = _styledComponents2.default.header.withConfig({
  displayName: 'Modal__Header'
})(['\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  > *:first-child {\n    flex: 1;\n  }\n']);

var StyledHeading = (0, _styledComponents2.default)(_components.Heading).withConfig({
  displayName: 'Modal__StyledHeading'
})(['\n  margin: 0 1rem 0 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n']);

var Content = _styledComponents2.default.div.withConfig({
  displayName: 'Modal__Content'
})(['\n  overflow: auto;\n  padding: 0 1rem;\n  margin-bottom: 1rem;\n']);

var StyledReactModal = (0, _styledComponents2.default)(function (_ref2) {
  var className = _ref2.className,
      props = _objectWithoutProperties(_ref2, ['className']);

  return _react2.default.createElement(ModalBox, _extends({ overlayClassName: className, closeTimeoutMS: 250 }, props));
}).withConfig({
  displayName: 'Modal__StyledReactModal'
})(['', ''], overlayStyles);

var Modal = function Modal(_ref3) {
  var children = _ref3.children,
      title = _ref3.title,
      closeable = _ref3.closeable,
      onClose = _ref3.onClose,
      props = _objectWithoutProperties(_ref3, ['children', 'title', 'closeable', 'onClose']);

  var hasHeader = title || closeable;
  return _react2.default.createElement(
    StyledReactModal,
    _extends({
      contentLabel: title || 'Modal',
      onRequestClose: onClose,
      hasHeader: hasHeader
    }, props),
    hasHeader && _react2.default.createElement(
      Header,
      null,
      _react2.default.createElement(
        StyledHeading,
        { level: 2, reverse: props.reverse },
        title
      ),
      closeable && _react2.default.createElement(_components.IconButton, { icon: 'close', onClick: onClose, palette: 'white', reverse: true })
    ),
    _react2.default.createElement(
      Content,
      null,
      children
    )
  );
};

Modal.propTypes = {
  children: _propTypes2.default.node,
  title: _propTypes2.default.string,
  closeable: _propTypes2.default.bool,
  reverse: _propTypes2.default.bool,
  onClose: _propTypes2.default.func.isRequired
};

var _default = Modal;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(overlayStyles, 'overlayStyles', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Modal/index.js');

  __REACT_HOT_LOADER__.register(ModalBox, 'ModalBox', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Modal/index.js');

  __REACT_HOT_LOADER__.register(Header, 'Header', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Modal/index.js');

  __REACT_HOT_LOADER__.register(StyledHeading, 'StyledHeading', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Modal/index.js');

  __REACT_HOT_LOADER__.register(Content, 'Content', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Modal/index.js');

  __REACT_HOT_LOADER__.register(StyledReactModal, 'StyledReactModal', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Modal/index.js');

  __REACT_HOT_LOADER__.register(Modal, 'Modal', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Modal/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Modal/index.js');
}();

;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Molecule__Wrapper'
})(['\n  font-family: ', ';\n  color: ', ';\n'], (0, _styledTheme.font)('primary'), (0, _styledTheme.palette)('grayscale', 0));

var Molecule = function Molecule(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    Wrapper,
    props,
    children
  );
};

Molecule.propTypes = {
  reverse: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

var _default = Molecule;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Molecule/index.js');

  __REACT_HOT_LOADER__.register(Molecule, 'Molecule', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Molecule/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Molecule/index.js');
}();

;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Article = _styledComponents2.default.article.withConfig({
  displayName: 'Post__Article'
})(['']);

var Post = function Post(_ref) {
  var title = _ref.title,
      body = _ref.body,
      props = _objectWithoutProperties(_ref, ['title', 'body']);

  return _react2.default.createElement(
    Article,
    props,
    _react2.default.createElement(
      _components.Heading,
      { level: 2 },
      title
    ),
    _react2.default.createElement(
      _components.Paragraph,
      null,
      body
    )
  );
};

Post.propTypes = {
  title: _propTypes2.default.string.isRequired,
  body: _propTypes2.default.string.isRequired
};

var _default = Post;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Article, 'Article', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Post/index.js');

  __REACT_HOT_LOADER__.register(Post, 'Post', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Post/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Post/index.js');
}();

;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Price = function Price(_ref) {
  var value = _ref.value;

  return _react2.default.createElement(
    _components.Paragraph,
    null,
    value
  );
};

Price.propTypes = {
  value: _propTypes2.default.string.isRequired
};

var _default = Price;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Price, 'Price', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Price/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Price/index.js');
}();

;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = _styledComponents2.default.nav.withConfig({
  displayName: 'PrimaryNavigation__Nav'
})(['\n  display: flex;\n  list-style: none;\n  > :not(:first-child) {\n    margin-left: 1rem;\n  }\n  a {\n    font-weight: 300;\n    color: ', ';\n    font-size: 1.25rem;\n    &.active {\n      color: ', ';\n    }\n  }\n'], (0, _styledTheme.palette)('grayscale', 2), (0, _styledTheme.palette)('grayscale', 0));

var PrimaryNavigation = function PrimaryNavigation(props) {
  return _react2.default.createElement(
    Nav,
    props,
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _components.Link,
        { to: '/', exact: true, activeClassName: 'active' },
        'Home'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _components.Link,
        { to: '/dashboard', activeClassName: 'active' },
        'Dashboard'
      )
    )
  );
};

PrimaryNavigation.propTypes = {
  reverse: _propTypes2.default.bool
};

var _default = PrimaryNavigation;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Nav, 'Nav', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/PrimaryNavigation/index.js');

  __REACT_HOT_LOADER__.register(PrimaryNavigation, 'PrimaryNavigation', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/PrimaryNavigation/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/PrimaryNavigation/index.js');
}();

;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

var _styledTools = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var fontSize = function fontSize(_ref) {
  var height = _ref.height;
  return height / 35.5555555556 + 'rem';
};

var thumbColor = function thumbColor(_ref2) {
  var disabled = _ref2.disabled;
  return (0, _styledTheme.palette)(disabled ? 2 : 1);
};

var barColor = (0, _styledTheme.palette)('grayscale', 2, true);

var hoverThumbColor = function hoverThumbColor(_ref3) {
  var disabled = _ref3.disabled;
  return !disabled && (0, _styledTheme.palette)(0);
};

var thumbHeight = '1.5em';
var thumbWidth = '1.5em';
var barHeight = '0.6em';

var border = '0.0625em solid transparent';
var borderRadius = '0.125em';

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Slider__Wrapper'
})(['\n  font-family: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: ', ';\n  color: ', ';\n  background-color: transparent;\n'], (0, _styledTheme.font)('primary'), fontSize, (0, _styledTheme.palette)('grayscale', 0));

var Range = _styledComponents2.default.input.withConfig({
  displayName: 'Slider__Range'
})(['\n  -webkit-appearance: none;\n  margin: 0 0.4375em;\n  width: 100%;\n  height: 1rem;\n  background: transparent;\n\n  &:focus {\n    outline: none;\n  }\n\n  ', '\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background: ', ';\n    border: ', ';\n    height: ', ';\n    width: ', ';\n    border-radius: ', ';\n    cursor: pointer;\n    margin-top: -0.53em;\n    transition: background .15s ease-in-out;\n    &:hover {\n      background: ', ';\n    }\n  }\n\n  &::-moz-range-thumb {\n    background: ', ';\n    height: ', ';\n    width: ', ';\n    border: ', ';\n    border-radius: ', ';\n    cursor: pointer;\n    transition: background .15s ease-in-out;\n    &:hover {\n      background: ', ';\n    }\n  }\n\n  &::-ms-thumb {\n    height: ', ';\n    width: ', ';\n    cursor: pointer;\n    border: ', ';\n    border-radius: ', ';\n  }\n\n  ', '\n\n  &::-webkit-slider-runnable-track {\n    width: 100%;\n    height: ', ';\n    background: ', ';\n    border-radius: ', ';\n    border: ', ';\n  }\n\n  &::-ms-track {\n    width: 100%;\n    height: ', ';\n    border: ', ';\n    border-radius: ', ';\n    color: transparent;\n  }\n\n  &::-moz-range-track {\n    width: 100%;\n    height: ', ';\n    background: ', ';\n    border-radius: ', ';\n    border: ', ';\n  }\n\n  &::-ms-fill-lower {\n    background: ', ';\n    border: ', ';\n    border-radius: ', ';\n  }\n\n  &::-ms-fill-upper {\n    background: ', ';\n    border: ', ';\n    border-radius: ', '\n  }\n'], '' /* Thumb */, thumbColor, border, thumbHeight, thumbWidth, borderRadius, hoverThumbColor, thumbColor, thumbHeight, thumbWidth, border, borderRadius, hoverThumbColor, thumbHeight, thumbWidth, border, borderRadius, '' /* Track */, barHeight, barColor, borderRadius, border, barHeight, border, borderRadius, barHeight, barColor, borderRadius, border, barColor, border, borderRadius, barColor, border, borderRadius);

var Text = _styledComponents2.default.span.withConfig({
  displayName: 'Slider__Text'
})(['\n  padding: 0.4375em;\n  @media screen and (max-width: ', 'px) {\n    display: ', ';\n  }\n'], (0, _styledTools.prop)('breakpoint'), (0, _styledTools.ifProp)('responsive', 'none !important'));

var Slider = function Slider(_ref4) {
  var id = _ref4.id,
      min = _ref4.min,
      max = _ref4.max,
      defaultValue = _ref4.defaultValue,
      step = _ref4.step,
      props = _objectWithoutProperties(_ref4, ['id', 'min', 'max', 'defaultValue', 'step']);

  var breakpoint = props.breakpoint,
      responsive = props.responsive;

  return _react2.default.createElement(
    Wrapper,
    props,
    _react2.default.createElement(
      Text,
      { responsive: responsive, breakpoint: breakpoint },
      min
    ),
    _react2.default.createElement(Range, _extends({ id: id, min: min, max: max, defaultValue: defaultValue, step: step }, props)),
    _react2.default.createElement(
      Text,
      { responsive: responsive, breakpoint: breakpoint },
      max
    )
  );
};

Slider.propTypes = {
  id: _propTypes2.default.string,
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  defaultValue: _propTypes2.default.number,
  step: _propTypes2.default.number,
  reverse: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  responsive: _propTypes2.default.bool,
  breakpoint: _propTypes2.default.number
};

Slider.defaultProps = {
  min: 0,
  max: 2,
  defaultValue: 1,
  step: 1,
  palette: 'primary',
  type: 'range',
  breakpoint: 420,
  responsive: false
};

var _default = Slider;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fontSize, 'fontSize', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Slider/index.js');

  __REACT_HOT_LOADER__.register(thumbColor, 'thumbColor', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Slider/index.js');

  __REACT_HOT_LOADER__.register(barColor, 'barColor', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Slider/index.js');

  __REACT_HOT_LOADER__.register(hoverThumbColor, 'hoverThumbColor', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Slider/index.js');

  __REACT_HOT_LOADER__.register(thumbHeight, 'thumbHeight', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Slider/index.js');

  __REACT_HOT_LOADER__.register(thumbWidth, 'thumbWidth', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Slider/index.js');

  __REACT_HOT_LOADER__.register(barHeight, 'barHeight', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Slider/index.js');

  __REACT_HOT_LOADER__.register(border, 'border', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Slider/index.js');

  __REACT_HOT_LOADER__.register(borderRadius, 'borderRadius', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Slider/index.js');

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Slider/index.js');

  __REACT_HOT_LOADER__.register(Range, 'Range', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Slider/index.js');

  __REACT_HOT_LOADER__.register(Text, 'Text', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Slider/index.js');

  __REACT_HOT_LOADER__.register(Slider, 'Slider', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Slider/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Slider/index.js');
}();

;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var StyledTable = _styledComponents2.default.table.withConfig({
  displayName: 'Table__StyledTable'
})(['\n  font-family: ', ';\n  border-collapse: collapse;\n  width: 100%;\n  border: 1px solid ', ';\n  color: ', ';\n'], (0, _styledTheme.font)('primary'), (0, _styledTheme.palette)('grayscale', 1, true), (0, _styledTheme.palette)('grayscale', 0));

var Table = function Table(_ref) {
  var caption = _ref.caption,
      head = _ref.head,
      foot = _ref.foot,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['caption', 'head', 'foot', 'children']);

  return _react2.default.createElement(
    StyledTable,
    props,
    caption && _react2.default.createElement(
      _components.Caption,
      { reverse: props.reverse },
      caption
    ),
    head && _react2.default.createElement(
      'thead',
      null,
      head
    ),
    foot && _react2.default.createElement(
      'tfoot',
      null,
      foot
    ),
    _react2.default.createElement(
      'tbody',
      null,
      children
    )
  );
};

Table.propTypes = {
  caption: _propTypes2.default.string,
  head: _propTypes2.default.node,
  foot: _propTypes2.default.node,
  children: _propTypes2.default.any,
  reverse: _propTypes2.default.bool
};

var _default = Table;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(StyledTable, 'StyledTable', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Table/index.js');

  __REACT_HOT_LOADER__.register(Table, 'Table', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Table/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Table/index.js');
}();

;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(3);

var _containers = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Options = _styledComponents2.default.div.withConfig({
  displayName: 'ConfirmModal__Options'
})(['\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1rem;\n  > *:first-child {\n    margin-right: 0.5rem;\n  }\n']);

var ConfirmModal = function ConfirmModal(_ref) {
  var children = _ref.children,
      onConfirm = _ref.onConfirm,
      onClose = _ref.onClose,
      confirmLabel = _ref.confirmLabel,
      cancelLabel = _ref.cancelLabel,
      confirmProps = _ref.confirmProps,
      cancelProps = _ref.cancelProps,
      props = _objectWithoutProperties(_ref, ['children', 'onConfirm', 'onClose', 'confirmLabel', 'cancelLabel', 'confirmProps', 'cancelProps']);

  return _react2.default.createElement(
    _containers.Modal,
    props,
    children || 'Do you want to proceed?',
    _react2.default.createElement(
      Options,
      null,
      _react2.default.createElement(
        _components.Button,
        _extends({ onClick: onConfirm }, confirmProps),
        confirmLabel
      ),
      _react2.default.createElement(
        _components.Button,
        _extends({ onClick: onClose, transparent: true }, cancelProps),
        cancelLabel
      )
    )
  );
};

ConfirmModal.propTypes = {
  children: _propTypes2.default.node,
  name: _propTypes2.default.string.isRequired,
  onConfirm: _propTypes2.default.func.isRequired,
  onClose: _propTypes2.default.func.isRequired,
  confirmLabel: _propTypes2.default.string,
  cancelLabel: _propTypes2.default.string,
  confirmProps: _propTypes2.default.object,
  cancelProps: _propTypes2.default.object
};

ConfirmModal.defaultProps = {
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel',
  confirmProps: {},
  cancelProps: {}
};

var _default = ConfirmModal;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Options, 'Options', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/ConfirmModal/index.js');

  __REACT_HOT_LOADER__.register(ConfirmModal, 'ConfirmModal', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/ConfirmModal/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/ConfirmModal/index.js');
}();

;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Grid = _styledComponents2.default.div.withConfig({
  displayName: 'FeatureList__Grid'
})(['\n  display: flex;\n  flex-flow: row wrap;\n  > * {\n    width: calc(50% - 2rem);\n    @media screen and (max-width: 640px) {\n      width: 100%;\n    }\n  }\n']);

var StyledHeading = (0, _styledComponents2.default)(_components.Heading).withConfig({
  displayName: 'FeatureList__StyledHeading'
})(['\n  text-align: center;\n']);

var Description = (0, _styledComponents2.default)(_components.Paragraph).withConfig({
  displayName: 'FeatureList__Description'
})(['\n  text-align: center;\n  margin: 2rem;\n  @media screen and (max-width: 640px) {\n    margin: 1rem;\n  }\n']);

var StyledFeature = (0, _styledComponents2.default)(_components.Feature).withConfig({
  displayName: 'FeatureList__StyledFeature'
})(['\n  margin: 1rem;\n  @media screen and (max-width: 640px) {\n    margin: 0;\n  }\n']);

var FeatureList = function FeatureList(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(
    'div',
    props,
    _react2.default.createElement(
      StyledHeading,
      null,
      'Basic stack'
    ),
    _react2.default.createElement(
      Description,
      null,
      'It includes everything necessary to build a tipical web app with focus on productivity and developer experience.',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        _components.Link,
        { href: 'https://github.com/diegohaz/arc/wiki/Workflow' },
        'Learn more about the recomended workflow'
      )
    ),
    _react2.default.createElement(
      Grid,
      null,
      _react2.default.createElement(
        StyledFeature,
        {
          icon: 'react',
          link: 'https://facebook.github.io/react',
          title: 'React',
          code: '<MyComponent attr=\'value\' />'
        },
        'The Facebook\'s JavaScript library for building user interfaces using components.'
      ),
      _react2.default.createElement(
        StyledFeature,
        {
          icon: 'react-router',
          link: 'https://github.com/ReactTraining/react-router',
          title: 'React Router',
          code: '<Route path=\'/sample-page\' />'
        },
        'The most popular declarative routing library for React and React Native.'
      ),
      _react2.default.createElement(
        StyledFeature,
        {
          icon: 'webpack',
          link: 'https://webpack.github.io/',
          title: 'Webpack',
          code: 'npm run build'
        },
        'The awesome module bundler with ',
        _react2.default.createElement(
          _components.Link,
          { href: 'https://webpack.github.io/docs/hot-module-replacement.html' },
          'Hot Module Replacement'
        ),
        ' enabled.'
      ),
      _react2.default.createElement(
        StyledFeature,
        {
          icon: 'jest',
          link: 'https://facebook.github.io/jest',
          title: 'Jest',
          code: 'npm run test'
        },
        'The great testing framework used by Facebook to test all their Javascript code.'
      )
    ),
    _react2.default.createElement(
      StyledHeading,
      null,
      'Optional features'
    ),
    _react2.default.createElement(
      Description,
      null,
      'Features separated into another branches so you can use them only if you need to.'
    ),
    _react2.default.createElement(
      Grid,
      null,
      _react2.default.createElement(
        StyledFeature,
        {
          icon: 'redux',
          link: 'https://github.com/diegohaz/arc/tree/redux',
          title: 'Redux',
          code: 'git clone -b redux https://github.com/diegohaz/arc my-app'
        },
        'The predictable state container for JavaScript apps.'
      ),
      _react2.default.createElement(
        StyledFeature,
        {
          icon: 'dist',
          link: 'https://github.com/diegohaz/arc/tree/redux-ssr',
          title: 'Server Side Rendering',
          code: 'git clone -b redux-ssr https://github.com/diegohaz/arc my-app'
        },
        'Write once and run on both server and client.'
      )
    )
  );
};

var _default = FeatureList;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Grid, 'Grid', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/FeatureList/index.js');

  __REACT_HOT_LOADER__.register(StyledHeading, 'StyledHeading', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/FeatureList/index.js');

  __REACT_HOT_LOADER__.register(Description, 'Description', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/FeatureList/index.js');

  __REACT_HOT_LOADER__.register(StyledFeature, 'StyledFeature', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/FeatureList/index.js');

  __REACT_HOT_LOADER__.register(FeatureList, 'FeatureList', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/FeatureList/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/FeatureList/index.js');
}();

;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Footer__Wrapper'
})(['\n  background-color: ', ';\n  padding: 2rem;\n'], (0, _styledTheme.palette)('grayscale', 1, true));

var Credits = (0, _styledComponents2.default)(_components.Paragraph).withConfig({
  displayName: 'Footer__Credits'
})(['\n  vertical-align: center;\n  text-align: center;\n  margin: 0;\n']);

var Footer = function Footer(props) {
  return _react2.default.createElement(
    Wrapper,
    props,
    _react2.default.createElement(
      Credits,
      null,
      'Made with ',
      _react2.default.createElement(_components.Icon, { icon: 'heart' }),
      ' by ',
      _react2.default.createElement(
        _components.Link,
        { href: 'https://github.com/diegohaz' },
        'Haz'
      )
    )
  );
};

var _default = Footer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Footer/index.js');

  __REACT_HOT_LOADER__.register(Credits, 'Credits', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Footer/index.js');

  __REACT_HOT_LOADER__.register(Footer, 'Footer', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Footer/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Footer/index.js');
}();

;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

var _components = __webpack_require__(3);

var _containers = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = (0, _styledComponents2.default)(_components.Block).withConfig({
  displayName: 'Header__Wrapper'
})(['\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  @media screen and (max-width: 640px) {\n    padding: 0.5rem;\n  }\n']);

var InnerWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Header__InnerWrapper'
})(['\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: ', ';\n  > :not(:first-child) {\n    margin-left: 1rem;\n  }\n'], (0, _styledTheme.size)('maxWidth'));

var StyledPrimaryNavigation = (0, _styledComponents2.default)(_components.PrimaryNavigation).withConfig({
  displayName: 'Header__StyledPrimaryNavigation'
})(['\n  flex: 1\n']);

var Header = function Header(props) {
  return _react2.default.createElement(
    Wrapper,
    _extends({ opaque: true, reverse: true }, props),
    _react2.default.createElement(
      InnerWrapper,
      null,
      _react2.default.createElement(_components.IconLink, { to: '/', icon: 'bcc', height: 100 }),
      _react2.default.createElement(StyledPrimaryNavigation, { reverse: true }),
      _react2.default.createElement(_containers.UserButton, { reverse: true, transparent: true })
    )
  );
};

var _default = Header;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Header/index.js');

  __REACT_HOT_LOADER__.register(InnerWrapper, 'InnerWrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Header/index.js');

  __REACT_HOT_LOADER__.register(StyledPrimaryNavigation, 'StyledPrimaryNavigation', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Header/index.js');

  __REACT_HOT_LOADER__.register(Header, 'Header', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Header/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Header/index.js');
}();

;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = (0, _styledComponents2.default)(_components.Block).withConfig({
  displayName: 'Hero__Wrapper'
})(['\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n  box-sizing: border-box;\n  @media screen and (max-width: 640px) {\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n  }\n']);

var InnerWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Hero__InnerWrapper'
})(['\n  display: flex;\n  width: 100%;\n  max-width: ', ';\n  @media screen and (max-width: 640px) {\n    flex-wrap: wrap;\n  }\n'], (0, _styledTheme.size)('maxWidth'));

var Section = _styledComponents2.default.section.withConfig({
  displayName: 'Hero__Section'
})(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem;\n  box-sizing: border-box;\n  &:first-child {\n    flex: none;\n  }\n  @media screen and (max-width: 640px) {\n    padding: 0.25rem;\n    width: 100%;\n  }\n']);

var Text = (0, _styledComponents2.default)(_components.Paragraph).withConfig({
  displayName: 'Hero__Text'
})(['\n  color: ', ';\n  font-weight: 300;\n  font-size: 1.35rem;\n  line-height: 1.35em;\n  width: 100%;\n  letter-spacing: 0.05em;\n  @media screen and (max-width: 640px) {\n    text-align: center;\n    font-size: 1rem;\n  }\n'], (0, _styledTheme.palette)('grayscale', 3, true));

var ButtonGroup = _styledComponents2.default.div.withConfig({
  displayName: 'Hero__ButtonGroup'
})(['\n  margin-top: 2rem;\n  display: flex;\n  > :not(:first-child) {\n    margin-left: 0.5rem;\n  }\n']);

var Instructions = _styledComponents2.default.div.withConfig({
  displayName: 'Hero__Instructions'
})(['\n  width: 100%;\n  margin-top: 2rem;\n  @media screen and (max-width: 640px) {\n    margin-top: 1rem;\n  }\n']);

var Hero = function Hero(props) {
  return _react2.default.createElement(
    Wrapper,
    _extends({ opaque: true, reverse: true }, props),
    _react2.default.createElement(
      InnerWrapper,
      null,
      _react2.default.createElement(
        Section,
        null,
        _react2.default.createElement(_components.LogoImage, { height: 265 }),
        _react2.default.createElement(
          ButtonGroup,
          null,
          _react2.default.createElement(
            _components.Tooltip,
            { reverse: true, 'data-title': 'Just a fancy tooltip \uD83D\uDE04' },
            _react2.default.createElement(
              _components.IconButton,
              { icon: 'github', href: 'https://github.com/diegohaz/arc' },
              'GitHub'
            )
          ),
          _react2.default.createElement(
            _components.Tooltip,
            { reverse: true, 'data-title': 'Another tooltip aligned differently', align: 'end', position: 'bottom' },
            _react2.default.createElement(
              _components.IconButton,
              { icon: 'docs', href: 'https://github.com/diegohaz/arc/wiki' },
              'Docs'
            )
          )
        )
      ),
      _react2.default.createElement(
        Section,
        null,
        _react2.default.createElement(
          Text,
          null,
          _react2.default.createElement(
            'strong',
            null,
            'ARc'
          ),
          ' is a ',
          _react2.default.createElement(
            _components.IconLink,
            { reverse: true, icon: 'react', href: 'https://facebook.github.io/react/' },
            'React'
          ),
          ' starter kit based on the ',
          _react2.default.createElement(
            _components.IconLink,
            { reverse: true, icon: 'atomic-design', href: 'http://bradfrost.com/blog/post/atomic-web-design/' },
            'Atomic Design'
          ),
          ' methodology. It\'s ',
          _react2.default.createElement(
            'strong',
            null,
            'progressive'
          ),
          ', which means that you can start with the basic boilerplate and try the other features when you are comfortable.'
        ),
        _react2.default.createElement(
          Instructions,
          null,
          _react2.default.createElement(
            _components.Heading,
            { level: 2, reverse: true },
            'Install'
          ),
          _react2.default.createElement(
            _components.PreformattedText,
            { block: true, reverse: true, wrapped: true },
            'git clone -b master https://github.com/diegohaz/arc my-app'
          ),
          _react2.default.createElement(
            _components.IconLink,
            {
              icon: 'docs',
              right: true,
              reverse: true,
              href: 'https://github.com/diegohaz/arc/wiki/Setup'
            },
            'Learn more'
          )
        )
      )
    )
  );
};

var _default = Hero;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Hero/index.js');

  __REACT_HOT_LOADER__.register(InnerWrapper, 'InnerWrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Hero/index.js');

  __REACT_HOT_LOADER__.register(Section, 'Section', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Hero/index.js');

  __REACT_HOT_LOADER__.register(Text, 'Text', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Hero/index.js');

  __REACT_HOT_LOADER__.register(ButtonGroup, 'ButtonGroup', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Hero/index.js');

  __REACT_HOT_LOADER__.register(Instructions, 'Instructions', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Hero/index.js');

  __REACT_HOT_LOADER__.register(Hero, 'Hero', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Hero/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Hero/index.js');
}();

;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(3);

var _containers = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'LoginModal__Wrapper'
})(['\n  display: flex;\n  flex-direction: column;\n  > * {\n    margin-bottom: 0.5rem;\n  }\n']);

var LoginModal = function (_Component) {
  _inherits(LoginModal, _Component);

  function LoginModal() {
    _classCallCheck(this, LoginModal);

    return _possibleConstructorReturn(this, (LoginModal.__proto__ || Object.getPrototypeOf(LoginModal)).apply(this, arguments));
  }

  _createClass(LoginModal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.user && nextProps.user) {
        this.props.onClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onFacebookLogin = _props.onFacebookLogin,
          onGoogleLogin = _props.onGoogleLogin,
          props = _objectWithoutProperties(_props, ['onFacebookLogin', 'onGoogleLogin']);

      return _react2.default.createElement(
        _containers.Modal,
        _extends({ title: 'Login', name: 'login', closeable: true }, props),
        _react2.default.createElement(
          Wrapper,
          null,
          _react2.default.createElement(
            _components.IconButton,
            { onClick: onFacebookLogin, icon: 'facebook' },
            'Connect with Facebook'
          ),
          _react2.default.createElement(
            _components.IconButton,
            { onClick: onGoogleLogin, icon: 'google' },
            'Connect with Google'
          )
        )
      );
    }
  }]);

  return LoginModal;
}(_react.Component);

LoginModal.propTypes = {
  user: _propTypes2.default.object,
  onFacebookLogin: _propTypes2.default.func.isRequired,
  onGoogleLogin: _propTypes2.default.func.isRequired,
  onClose: _propTypes2.default.func.isRequired
};
var _default = LoginModal;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/LoginModal/index.js');

  __REACT_HOT_LOADER__.register(LoginModal, 'LoginModal', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/LoginModal/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/LoginModal/index.js');
}();

;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Organism__Wrapper'
})(['\n  font-family: ', ';\n  color: ', ';\n'], (0, _styledTheme.font)('primary'), (0, _styledTheme.palette)('grayscale', 0));

var Organism = function Organism(props) {
  return _react2.default.createElement(
    Wrapper,
    props,
    'content'
  );
};

Organism.propTypes = {
  reverse: _propTypes2.default.bool
};

var _default = Organism;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Organism/index.js');

  __REACT_HOT_LOADER__.register(Organism, 'Organism', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Organism/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/Organism/index.js');
}();

;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(17);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = _styledComponents2.default.form.withConfig({
  displayName: 'PostForm__Form'
})(['\n  width: 100%;\n  box-sizing: border-box;\n  padding: 1rem;\n']);

var PostForm = function PostForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;

  return _react2.default.createElement(
    Form,
    { onSubmit: handleSubmit },
    _react2.default.createElement(
      _components.Heading,
      { level: 2 },
      'Create a post'
    ),
    _react2.default.createElement(_reduxForm.Field, { name: 'title', label: 'Title', component: _components.ReduxField }),
    _react2.default.createElement(_reduxForm.Field, { name: 'body', label: 'Body', type: 'textarea', component: _components.ReduxField }),
    _react2.default.createElement(
      _components.Button,
      { type: 'submit', disabled: submitting },
      'Create'
    )
  );
};

PostForm.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  submitting: _propTypes2.default.bool
};

var _default = PostForm;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Form, 'Form', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/PostForm/index.js');

  __REACT_HOT_LOADER__.register(PostForm, 'PostForm', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/PostForm/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/PostForm/index.js');
}();

;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'PostList__Wrapper'
})(['\n  & > * {\n    margin: 1rem;\n  }\n']);

var PostList = function PostList(_ref) {
  var list = _ref.list,
      loading = _ref.loading,
      failed = _ref.failed,
      props = _objectWithoutProperties(_ref, ['list', 'loading', 'failed']);

  return _react2.default.createElement(
    Wrapper,
    props,
    !list.length && loading && _react2.default.createElement(
      'div',
      null,
      'Loading'
    ),
    failed && _react2.default.createElement(
      'div',
      null,
      'Something went wrong while fetching posts. Please, try again later.'
    ),
    list.map(function (post) {
      return _react2.default.createElement(_components.Post, _extends({ key: post.id }, post));
    })
  );
};

PostList.propTypes = {
  list: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  loading: _propTypes2.default.bool,
  failed: _propTypes2.default.bool
};

var _default = PostList;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/PostList/index.js');

  __REACT_HOT_LOADER__.register(PostList, 'PostList', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/PostList/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/PostList/index.js');
}();

;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ReduxField = function ReduxField(_ref) {
  var meta = _ref.meta,
      input = _ref.input,
      props = _objectWithoutProperties(_ref, ['meta', 'input']);

  var fieldProps = _extends({}, props, input, { invalid: meta.touched && !!meta.error, error: meta.error
  });
  return _react2.default.createElement(_components.Field, fieldProps);
};

ReduxField.propTypes = {
  meta: _propTypes2.default.shape({
    touched: _propTypes2.default.bool,
    error: _propTypes2.default.string
  }).isRequired,
  input: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired
  }).isRequired
};

var _default = ReduxField;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ReduxField, 'ReduxField', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/ReduxField/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/ReduxField/index.js');
}();

;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(3);

var _containers = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var InnerButton = _styledComponents2.default.div.withConfig({
  displayName: 'UserButton__InnerButton'
})(['\n  display: flex;\n  align-items: center;\n']);

var Image = _styledComponents2.default.img.withConfig({
  displayName: 'UserButton__Image'
})(['\n  margin-right: 0.5rem;\n']);

var UserButton = function UserButton(_ref) {
  var user = _ref.user,
      onLogin = _ref.onLogin,
      onLogout = _ref.onLogout,
      props = _objectWithoutProperties(_ref, ['user', 'onLogin', 'onLogout']);

  return _react2.default.createElement(
    'div',
    null,
    user && _react2.default.createElement(
      _components.Button,
      _extends({}, props, { onClick: onLogout }),
      _react2.default.createElement(
        InnerButton,
        null,
        _react2.default.createElement(Image, { src: user.picture, width: 20, height: 20 }),
        'Sign out'
      )
    ),
    !user && _react2.default.createElement(
      _components.Button,
      _extends({}, props, { onClick: onLogin }),
      'Sign in'
    ),
    _react2.default.createElement(_containers.LoginModal, null)
  );
};

UserButton.propTypes = {
  user: _propTypes2.default.shape({
    picture: _propTypes2.default.string.isRequired
  }),
  onLogin: _propTypes2.default.func.isRequired,
  onLogout: _propTypes2.default.func.isRequired
};

var _default = UserButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(InnerButton, 'InnerButton', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/UserButton/index.js');

  __REACT_HOT_LOADER__.register(Image, 'Image', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/UserButton/index.js');

  __REACT_HOT_LOADER__.register(UserButton, 'UserButton', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/UserButton/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/UserButton/index.js');
}();

;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GenericPage = function GenericPage() {
  return _react2.default.createElement(
    'div',
    null,
    'Generic Page'
  );
};

var _default = GenericPage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(GenericPage, 'GenericPage', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/pages/GenericPage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/pages/GenericPage/index.js');
}();

;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/diegohaz/arc/wiki/Atomic-Design
var HomePage = function HomePage() {
  return _react2.default.createElement(
    _components.PageTemplate,
    {
      header: _react2.default.createElement(_components.Header, null),
      hero: _react2.default.createElement(_components.Hero, null),
      sponsor: _react2.default.createElement(_components.CodeSponsor, null),
      footer: _react2.default.createElement(_components.Footer, null)
    },
    _react2.default.createElement(_components.FeatureList, null)
  );
};

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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var staticContext = _ref.staticContext;

  if (staticContext) {
    // eslint-disable-next-line no-param-reassign
    staticContext.status = 404;
  }

  return _react2.default.createElement(
    _components.PageTemplate,
    { header: _react2.default.createElement(_components.Header, null), footer: _react2.default.createElement(_components.Footer, null) },
    _react2.default.createElement(
      _components.Heading,
      null,
      '404 Not Found'
    )
  );
};

NotFoundPage.propTypes = {
  staticContext: _propTypes2.default.object
};

var _default = NotFoundPage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NotFoundPage, 'NotFoundPage', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/pages/NotFoundPage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/pages/NotFoundPage/index.js');
}();

;

/***/ }),
/* 83 */,
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'GenericTemplate__Wrapper'
})(['\n  display: flex;\n  flex-direction: column;\n  padding-top: 3.75rem;\n  min-height: 100vh;\n  box-sizing: border-box;\n']);

var Content = _styledComponents2.default.section.withConfig({
  displayName: 'GenericTemplate__Content'
})(['\n  width: 100%;\n  box-sizing: border-box;\n  margin: 2rem auto;\n  max-width: 920px;\n']);

var GenericTemplate = function GenericTemplate(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    Wrapper,
    props,
    _react2.default.createElement(
      Content,
      null,
      children
    )
  );
};

GenericTemplate.propTypes = {
  children: _propTypes2.default.any.isRequired
};

var _default = GenericTemplate;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/templates/GenericTemplate/index.js');

  __REACT_HOT_LOADER__.register(Content, 'Content', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/templates/GenericTemplate/index.js');

  __REACT_HOT_LOADER__.register(GenericTemplate, 'GenericTemplate', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/templates/GenericTemplate/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/templates/GenericTemplate/index.js');
}();

;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'PageTemplate__Wrapper'
})(['\n  display: flex;\n  flex-direction: column;\n  padding-top: 3.75rem;\n  min-height: 100vh;\n  box-sizing: border-box;\n  @media screen and (max-width: 640px) {\n    padding-top: 3.25rem;\n  }\n']);

var Header = _styledComponents2.default.header.withConfig({
  displayName: 'PageTemplate__Header'
})(['\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 999;\n']);

var Hero = _styledComponents2.default.section.withConfig({
  displayName: 'PageTemplate__Hero'
})(['']);

var Content = _styledComponents2.default.section.withConfig({
  displayName: 'PageTemplate__Content'
})(['\n  width: 100%;\n  box-sizing: border-box;\n  margin: 2rem auto;\n  max-width: ', ';\n'], (0, _styledTheme.size)('maxWidth'));

var Footer = _styledComponents2.default.footer.withConfig({
  displayName: 'PageTemplate__Footer'
})(['\n  margin-top: auto;\n']);

var PageTemplate = function PageTemplate(_ref) {
  var header = _ref.header,
      hero = _ref.hero,
      children = _ref.children,
      footer = _ref.footer,
      props = _objectWithoutProperties(_ref, ['header', 'hero', 'children', 'footer']);

  return _react2.default.createElement(
    Wrapper,
    props,
    _react2.default.createElement(
      Header,
      null,
      header
    ),
    hero && _react2.default.createElement(
      Hero,
      null,
      hero
    ),
    _react2.default.createElement(
      Content,
      null,
      children
    ),
    _react2.default.createElement(
      Footer,
      null,
      footer
    )
  );
};

PageTemplate.propTypes = {
  header: _propTypes2.default.node.isRequired,
  hero: _propTypes2.default.node,
  footer: _propTypes2.default.node.isRequired,
  children: _propTypes2.default.any.isRequired
};

var _default = PageTemplate;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(Header, 'Header', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(Hero, 'Hero', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(Content, 'Content', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(Footer, 'Footer', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(PageTemplate, 'PageTemplate', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/templates/PageTemplate/index.js');
}();

;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _composer = __webpack_require__(157);

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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(5);

var _actions = __webpack_require__(8);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfirmModalContainer = function ConfirmModalContainer(props) {
  return _react2.default.createElement(_components.ConfirmModal, props);
};

ConfirmModalContainer.propTypes = {
  name: _propTypes2.default.string.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var name = _ref.name;
  return {
    onClose: function onClose() {
      return dispatch((0, _actions.modalHide)(name));
    }
  };
};

var _default = (0, _reactRedux.connect)(undefined, mapDispatchToProps)(ConfirmModalContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ConfirmModalContainer, 'ConfirmModalContainer', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/ConfirmModal.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/ConfirmModal.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/ConfirmModal.js');
}();

;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(5);

var _selectors = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GenericContainer = function GenericContainer(_ref) {
  var loading = _ref.loading;
  return _react2.default.createElement('div', { className: loading ? 'loading' : '' });
};

GenericContainer.propTypes = {
  loading: _propTypes2.default.bool
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: _selectors.fromAsync.isPending(state)
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(GenericContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(GenericContainer, 'GenericContainer', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/Generic.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/Generic.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/Generic.js');
}();

;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(5);

var _actions = __webpack_require__(8);

var _config = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-danger */


var GoogleTagManager = function (_Component) {
  _inherits(GoogleTagManager, _Component);

  function GoogleTagManager() {
    _classCallCheck(this, GoogleTagManager);

    return _possibleConstructorReturn(this, (GoogleTagManager.__proto__ || Object.getPrototypeOf(GoogleTagManager)).apply(this, arguments));
  }

  _createClass(GoogleTagManager, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.startGTM();
    }
  }, {
    key: 'render',
    value: function render() {
      var iframe = '\n      <iframe\n        src="//www.googletagmanager.com/ns.html?id=' + _config.gtmId + '"\n        height="0"\n        width="0"\n        style="display:none;visibility:hidden">\n      </iframe>\n    ';
      return _react2.default.createElement('noscript', { dangerouslySetInnerHTML: { __html: iframe } });
    }
  }]);

  return GoogleTagManager;
}(_react.Component);

GoogleTagManager.propTypes = {
  startGTM: _propTypes2.default.func.isRequired
};


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    startGTM: function startGTM() {
      return dispatch((0, _actions.gtmStart)(_config.gtmId));
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(GoogleTagManager);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(GoogleTagManager, 'GoogleTagManager', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/GoogleTagManager.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/GoogleTagManager.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/GoogleTagManager.js');
}();

;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(5);

var _config = __webpack_require__(7);

var _selectors = __webpack_require__(10);

var _actions = __webpack_require__(8);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginModalContainer = function (_Component) {
  _inherits(LoginModalContainer, _Component);

  function LoginModalContainer() {
    _classCallCheck(this, LoginModalContainer);

    return _possibleConstructorReturn(this, (LoginModalContainer.__proto__ || Object.getPrototypeOf(LoginModalContainer)).apply(this, arguments));
  }

  _createClass(LoginModalContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.prepareGoogle();
      this.props.prepareFacebook();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_components.LoginModal, this.props);
    }
  }]);

  return LoginModalContainer;
}(_react.Component);

LoginModalContainer.propTypes = {
  prepareGoogle: _propTypes2.default.func.isRequired,
  prepareFacebook: _propTypes2.default.func.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    user: _selectors.fromSocial.getUser(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    prepareGoogle: function prepareGoogle() {
      return dispatch((0, _actions.socialLoginPrepare)('google', { clientId: _config.googleClientId }));
    },
    prepareFacebook: function prepareFacebook() {
      return dispatch((0, _actions.socialLoginPrepare)('facebook', { clientId: _config.fbAppId }));
    },
    onFacebookLogin: function onFacebookLogin() {
      return dispatch((0, _actions.socialLoginRequest)('facebook'));
    },
    onGoogleLogin: function onGoogleLogin() {
      return dispatch((0, _actions.socialLoginRequest)('google'));
    },
    onClose: function onClose() {
      return dispatch((0, _actions.modalHide)('login'));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoginModalContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LoginModalContainer, 'LoginModalContainer', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/LoginModal.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/LoginModal.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/LoginModal.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/LoginModal.js');
}();

;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(5);

var _selectors = __webpack_require__(10);

var _actions = __webpack_require__(8);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalContainer = function ModalContainer(props) {
  return _react2.default.createElement(_components.Modal, props);
};

ModalContainer.propTypes = {
  name: _propTypes2.default.string.isRequired,
  isOpen: _propTypes2.default.bool
};

var mapStateToProps = function mapStateToProps(state, _ref) {
  var name = _ref.name,
      isOpen = _ref.isOpen;
  return {
    isOpen: isOpen || _selectors.fromModal.isOpen(state, name)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var name = _ref2.name;
  return {
    onClose: function onClose() {
      return dispatch((0, _actions.modalHide)(name));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ModalContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ModalContainer, 'ModalContainer', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/Modal.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/Modal.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/Modal.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/Modal.js');
}();

;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(17);

var _actions = __webpack_require__(8);

var _validation = __webpack_require__(98);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostFormContainer = function PostFormContainer(props) {
  return _react2.default.createElement(_components.PostForm, props);
};

var onSubmit = function onSubmit(data, dispatch) {
  return dispatch((0, _actions.resourceCreateRequest)('posts', data));
};

var validate = (0, _validation.createValidator)({
  title: [_validation.required],
  body: [_validation.required]
});

var _default = (0, _reduxForm.reduxForm)({
  form: 'PostForm',
  destroyOnUnmount: false,
  onSubmit: onSubmit,
  validate: validate
})(PostFormContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PostFormContainer, 'PostFormContainer', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/PostForm.js');

  __REACT_HOT_LOADER__.register(onSubmit, 'onSubmit', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/PostForm.js');

  __REACT_HOT_LOADER__.register(validate, 'validate', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/PostForm.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/PostForm.js');
}();

;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(5);

var _reactRouterServer = __webpack_require__(30);

var _reduxSagaThunk = __webpack_require__(18);

var _selectors = __webpack_require__(10);

var _actions = __webpack_require__(8);

var _config = __webpack_require__(7);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostListContainer = function (_Component) {
  _inherits(PostListContainer, _Component);

  function PostListContainer() {
    _classCallCheck(this, PostListContainer);

    return _possibleConstructorReturn(this, (PostListContainer.__proto__ || Object.getPrototypeOf(PostListContainer)).apply(this, arguments));
  }

  _createClass(PostListContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          readList = _props.readList,
          hasServerState = _props.hasServerState,
          setServerState = _props.setServerState,
          cleanServerState = _props.cleanServerState;


      if (!hasServerState) {
        if (_config.isServer) {
          readList().then(setServerState, setServerState);
        } else {
          readList();
        }
      } else if (_config.isBrowser) {
        cleanServerState();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          list = _props2.list,
          loading = _props2.loading,
          failed = _props2.failed;

      return _react2.default.createElement(_components.PostList, { list: list, loading: loading, failed: failed });
    }
  }]);

  return PostListContainer;
}(_react.Component);

PostListContainer.propTypes = {
  list: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  limit: _propTypes2.default.number,
  loading: _propTypes2.default.bool,
  failed: _propTypes2.default.bool,
  readList: _propTypes2.default.func.isRequired,
  hasServerState: _propTypes2.default.bool,
  setServerState: _propTypes2.default.func.isRequired,
  cleanServerState: _propTypes2.default.func.isRequired
};
PostListContainer.defaultProps = {
  limit: 20
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    list: _selectors.fromEntities.getList(state, 'posts', _selectors.fromResource.getList(state, 'posts')),
    loading: (0, _reduxSagaThunk.isPending)(state, 'postsListRead'),
    failed: (0, _reduxSagaThunk.hasFailed)(state, 'postsListRead')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var limit = _ref.limit;
  return {
    readList: function readList() {
      return dispatch((0, _actions.resourceListReadRequest)('posts', { _limit: limit }));
    }
  };
};

var withServerState = (0, _reactRouterServer.fetchState)(function (state) {
  return {
    hasServerState: !!state.data
  };
}, function (actions) {
  return {
    setServerState: function setServerState(data) {
      return actions.done({ data: data });
    },
    cleanServerState: function cleanServerState() {
      return actions.done();
    }
  };
});

var _default = withServerState((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PostListContainer));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PostListContainer, 'PostListContainer', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/PostList.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/PostList.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/PostList.js');

  __REACT_HOT_LOADER__.register(withServerState, 'withServerState', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/PostList.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/PostList.js');
}();

;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(5);

var _selectors = __webpack_require__(10);

var _actions = __webpack_require__(8);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PriceContainer = function (_Component) {
  _inherits(PriceContainer, _Component);

  function PriceContainer() {
    _classCallCheck(this, PriceContainer);

    return _possibleConstructorReturn(this, (PriceContainer.__proto__ || Object.getPrototypeOf(PriceContainer)).apply(this, arguments));
  }

  _createClass(PriceContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.request();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_components.Price, this.props);
    }
  }]);

  return PriceContainer;
}(_react.Component);

PriceContainer.propTypes = {
  request: _propTypes2.default.func.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    user: _selectors.fromExchange.getPrice(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    request: function request() {
      return dispatch((0, _actions.exchangePriceReadRequest)('bitfinex', { pair: 'BTCUSD' }));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PriceContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PriceContainer, 'PriceContainer', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/Price.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/Price.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/Price.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/Price.js');
}();

;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _selectors = __webpack_require__(10);

var _actions = __webpack_require__(8);

var _components = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserButtonContainer = function UserButtonContainer(props) {
  return _react2.default.createElement(_components.UserButton, props);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: _selectors.fromSocial.getUser(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLogin: function onLogin() {
      return dispatch((0, _actions.modalShow)('login'));
    },
    onLogout: function onLogout() {
      return dispatch((0, _actions.socialLogout)());
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserButtonContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UserButtonContainer, 'UserButtonContainer', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/UserButton.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/UserButton.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/UserButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/UserButton.js');
}();

;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseEndpoint = exports.parseSettings = exports.parseJSON = exports.checkStatus = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(141);

var _queryString = __webpack_require__(147);

var _merge = __webpack_require__(28);

var _merge2 = _interopRequireDefault(_merge);

var _config = __webpack_require__(7);

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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _socket = __webpack_require__(156);

var _socket2 = _interopRequireDefault(_socket);

var _config = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Example conf. You can move this to your config file.
var host = _config.bitfinex.uri;
var socketPath = '/ws';

var socketAPI = function () {
  function socketAPI() {
    _classCallCheck(this, socketAPI);
  }

  _createClass(socketAPI, [{
    key: 'connect',
    value: function connect() {
      var _this = this;

      this.socket = _socket2.default.connect(host, { path: socketPath });

      return new Promise(function (resolve, reject) {
        _this.socket.on('connect', function () {
          return resolve();
        });
        _this.socket.on('connect_error', function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.socket.disconnect(function () {
          _this2.socket = null;
          resolve();
        });
      });
    }
  }, {
    key: 'emit',
    value: function emit(event, data) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        if (!_this3.socket) return reject('No socket connection.');

        return _this3.socket.emit(event, data, function (response) {
          // Response is the optional callback that you can use with socket.io in every request. See 1 above.
          if (response.error) {
            console.error(response.error);
            return reject(response.error);
          }

          return resolve();
        });
      });
    }
  }, {
    key: 'on',
    value: function on(event, fun) {
      var _this4 = this;

      // No promise is needed here, but we're expecting one in the middleware.
      return new Promise(function (resolve, reject) {
        if (!_this4.socket) return reject('No socket connection.');

        _this4.socket.on(event, fun);
        return resolve();
      });
    }
  }]);

  return socketAPI;
}();

var _default = socketAPI;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(host, 'host', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/socket/index.js');

  __REACT_HOT_LOADER__.register(socketPath, 'socketPath', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/socket/index.js');

  __REACT_HOT_LOADER__.register(socketAPI, 'socketAPI', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/socket/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/socket/index.js');
}();

;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createValidator = exports.match = exports.oneOf = exports.integer = exports.maxLength = exports.minLength = exports.required = exports.url = exports.email = undefined;

var _isEmail = __webpack_require__(158);

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isInt = __webpack_require__(160);

var _isInt2 = _interopRequireDefault(_isInt);

var _isIn = __webpack_require__(159);

var _isIn2 = _interopRequireDefault(_isIn);

var _isURL = __webpack_require__(161);

var _isURL2 = _interopRequireDefault(_isURL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmpty = function isEmpty(value) {
  return value === undefined || value === null || value === '';
};
var join = function join(rules) {
  return function (value, data) {
    return rules.map(function (rule) {
      return rule(value, data);
    }).filter(function (error) {
      return !!error;
    })[0];
  };
};

var email = exports.email = function email(value) {
  return !isEmpty(value) && !(0, _isEmail2.default)(value) && 'Invalid email address';
};

var url = exports.url = function url(value) {
  return !isEmpty(value) && !(0, _isURL2.default)(value) && 'Invalid URL';
};

var required = exports.required = function required(value) {
  return isEmpty(value) && 'Required field';
};

var minLength = exports.minLength = function minLength(min) {
  return function (value) {
    return !isEmpty(value) && value.length < min && 'Must be at least ' + min + ' characters';
  };
};

var maxLength = exports.maxLength = function maxLength(max) {
  return function (value) {
    return !isEmpty(value) && value.length > max && 'Must be no more than ' + max + ' characters';
  };
};

var integer = exports.integer = function integer(value) {
  return !(0, _isInt2.default)(value) && 'Must be an integer';
};

var oneOf = exports.oneOf = function oneOf(values) {
  return function (value) {
    return !(0, _isIn2.default)(value, values) && 'Must be one of: ' + values.join(', ');
  };
};

var match = exports.match = function match(field) {
  return function (value, data) {
    return data && value !== data[field] && 'Must match';
  };
};

var createValidator = exports.createValidator = function createValidator(rules) {
  return function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var errors = {};
    Object.keys(rules).forEach(function (key) {
      var rule = join([].concat(rules[key]));
      var error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isEmpty, 'isEmpty', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(join, 'join', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(email, 'email', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(url, 'url', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(required, 'required', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(minLength, 'minLength', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(maxLength, 'maxLength', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(integer, 'integer', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(oneOf, 'oneOf', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(match, 'match', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(createValidator, 'createValidator', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/services/validation/index.js');
}();

;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(31);

var _reduxSaga = __webpack_require__(154);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _config = __webpack_require__(7);

var _middlewares = __webpack_require__(105);

var _middlewares2 = _interopRequireDefault(_middlewares);

var _reducer = __webpack_require__(107);

var _reducer2 = _interopRequireDefault(_reducer);

var _sagas = __webpack_require__(110);

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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities


var _normalizr = __webpack_require__(16);

var _config = __webpack_require__(7);

var _actions = __webpack_require__(12);

var _schemas = __webpack_require__(19);

var schemas = _interopRequireWildcard(_schemas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var middleware = function middleware(store) {
  return function (next) {
    return function (action) {
      var payload = action.payload,
          meta = action.meta;


      if (meta && meta.entities) {
        var schema = schemas[meta.entities];

        if (schema) {
          var _normalize = (0, _normalizr.normalize)(payload, Array.isArray(payload) ? [schema] : schema),
              result = _normalize.result,
              entities = _normalize.entities;

          store.dispatch((0, _actions.entitiesReceive)(entities));
          return next(_extends({}, action, { payload: result }));
        }
        // istanbul ignore next
        if (_config.env === 'development') {
          // eslint-disable-next-line no-console
          console.warn('[entities] There is no ' + meta.entities + ' schema on schemas.js');
        }
      }
      return next(action);
    };
  };
};

var _default = middleware;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(middleware, 'middleware', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/middleware.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/middleware.js');
}();

;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mergeWith = __webpack_require__(144);

var _mergeWith2 = _interopRequireDefault(_mergeWith);

var _selectors = __webpack_require__(20);

var _actions = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  if (type === _actions.ENTITIES_RECEIVE) {
    return (0, _mergeWith2.default)({}, state, payload, function (objValue, srcValue) {
      if (Array.isArray(srcValue)) {
        return srcValue;
      }
      return undefined;
    });
  }
  return state;
}; // https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities


exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/reducer.js');
}();

;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = __webpack_require__(27);

var _get2 = _interopRequireDefault(_get);

var _selectors = __webpack_require__(21);

var _actions = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload,
      meta = _ref.meta;

  var exchange = (0, _get2.default)(meta, 'exchange');

  if (!exchange) {
    return state;
  }

  switch (type) {
    case _actions.EXCHANGE_PRICE_READ_REQUEST:
      return _extends({}, state, _defineProperty({}, exchange, _extends({}, (0, _selectors.getExchangeState)(state, exchange), {
        price: (0, _selectors.getPrice)(_selectors.initialState, exchange)
      })));
    case _actions.EXCHANGE_PRICE_READ_SUCCESS:
      return _extends({}, state, _defineProperty({}, exchange, _extends({}, (0, _selectors.getExchangeState)(state, exchange), {
        price: payload
      })));

    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/exchange/reducer.js');
}();

;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readExchangePrice = readExchangePrice;
exports.watchExchangePriceReadRequest = watchExchangePriceReadRequest;

var _effects = __webpack_require__(11);

var _actions = __webpack_require__(13);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(readExchangePrice),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchExchangePriceReadRequest);

function readExchangePrice(socket, _ref, _ref2) {
  var needle = _ref.needle;
  var exchange = _ref2.exchange,
      thunk = _ref2.thunk;
  var price;
  return regeneratorRuntime.wrap(function readExchangePrice$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)([socket, socket.get], '/' + exchange + '/' + needle);

        case 3:
          price = _context.sent;
          _context.next = 6;
          return (0, _effects.put)(actions.exchangePriceReadSuccess(exchange, price, { needle: needle }, thunk));

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return (0, _effects.put)(actions.exchangePriceReadFailure(exchange, _context.t0, { needle: needle }, thunk));

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}

function watchExchangePriceReadRequest(socket, _ref3) {
  var payload = _ref3.payload,
      meta = _ref3.meta;
  return regeneratorRuntime.wrap(function watchExchangePriceReadRequest$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.call)(readExchangePrice, socket, payload, meta);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

var _default = /*#__PURE__*/regeneratorRuntime.mark(function _default(_ref4) {
  var socket = _ref4.socket;
  return regeneratorRuntime.wrap(function _default$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.takeEvery)(actions.EXCHANGE_PRICE_READ_REQUEST, watchExchangePriceReadRequest, socket);

        case 2:
        case 'end':
          return _context3.stop();
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

  __REACT_HOT_LOADER__.register(readExchangePrice, 'readExchangePrice', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/exchange/sagas.js');

  __REACT_HOT_LOADER__.register(watchExchangePriceReadRequest, 'watchExchangePriceReadRequest', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/exchange/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/exchange/sagas.js');
}();

;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.track = track;
exports.startGTM = startGTM;
exports.watchAllActions = watchAllActions;
exports.watchGTMStart = watchGTMStart;

var _simpleLoadScript = __webpack_require__(32);

var _simpleLoadScript2 = _interopRequireDefault(_simpleLoadScript);

var _effects = __webpack_require__(11);

var _actions = __webpack_require__(22);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(track),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(startGTM),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(watchAllActions),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(watchGTMStart);

function track(type) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      gtm = _ref.gtm;

  var payload;
  return regeneratorRuntime.wrap(function track$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = { event: type, label: gtm };
          _context.prev = 1;

          // istanbul ignore next
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push(payload);
          _context.next = 6;
          return payload;

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](1);
          _context.next = 12;
          return (0, _effects.put)(actions.gtmFailure(_context.t0, payload));

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[1, 8]]);
}

function startGTM(_ref2) {
  var gtmId = _ref2.gtmId;
  return regeneratorRuntime.wrap(function startGTM$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;

          // istanbul ignore next
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'gtm.js',
            'gtm.start': new Date().getTime()
          });
          _context2.next = 5;
          return (0, _effects.call)(_simpleLoadScript2.default, '//www.googletagmanager.com/gtm.js?id=' + gtmId);

        case 5:
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 11;
          return (0, _effects.put)(actions.gtmFailure(_context2.t0, { gtmId: gtmId }));

        case 11:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 7]]);
}

function watchAllActions() {
  var _ref3, type, meta;

  return regeneratorRuntime.wrap(function watchAllActions$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (false) {
            _context3.next = 10;
            break;
          }

          _context3.next = 3;
          return (0, _effects.take)('*');

        case 3:
          _ref3 = _context3.sent;
          type = _ref3.type;
          meta = _ref3.meta;
          _context3.next = 8;
          return (0, _effects.call)(track, type, meta);

        case 8:
          _context3.next = 0;
          break;

        case 10:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function watchGTMStart() {
  var _ref4, payload;

  return regeneratorRuntime.wrap(function watchGTMStart$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.take)(actions.GTM_START);

        case 2:
          _ref4 = _context4.sent;
          payload = _ref4.payload;
          _context4.next = 6;
          return (0, _effects.all)([(0, _effects.call)(startGTM, payload), (0, _effects.call)(watchAllActions)]);

        case 6:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

var _default = /*#__PURE__*/regeneratorRuntime.mark(function _default() {
  return regeneratorRuntime.wrap(function _default$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.fork)(watchGTMStart);

        case 2:
        case 'end':
          return _context5.stop();
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

  __REACT_HOT_LOADER__.register(track, 'track', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/gtm/sagas.js');

  __REACT_HOT_LOADER__.register(startGTM, 'startGTM', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/gtm/sagas.js');

  __REACT_HOT_LOADER__.register(watchAllActions, 'watchAllActions', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/gtm/sagas.js');

  __REACT_HOT_LOADER__.register(watchGTMStart, 'watchGTMStart', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/gtm/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/gtm/sagas.js');
}();

;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(18),
    thunkMiddleware = _require.middleware;

var req = __webpack_require__(135);

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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal


var _selectors = __webpack_require__(24);

var _actions = __webpack_require__(23);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      _ref$payload = _ref.payload,
      payload = _ref$payload === undefined ? {} : _ref$payload;

  switch (type) {
    case _actions.MODAL_SHOW:
      return _extends({}, state, _defineProperty({}, payload.name, true));
    case _actions.MODAL_HIDE:
      if (payload.name) {
        return _extends({}, state, _defineProperty({}, payload.name, false));
      }
      return _selectors.initialState;
    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/modal/reducer.js');
}();

;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _camelCase = __webpack_require__(142);

var _camelCase2 = _interopRequireDefault(_camelCase);

var _redux = __webpack_require__(31);

var _reduxForm = __webpack_require__(17);

var _reduxSagaThunk = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/diegohaz/arc/wiki/Reducers
var reducers = {
  form: _reduxForm.reducer,
  thunk: _reduxSagaThunk.reducer
};

var req = __webpack_require__(136);

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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource


var _findIndex = __webpack_require__(143);

var _findIndex2 = _interopRequireDefault(_findIndex);

var _get = __webpack_require__(27);

var _get2 = _interopRequireDefault(_get);

var _selectors = __webpack_require__(25);

var _actions = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var updateOrDeleteReducer = function updateOrDeleteReducer(state, _ref) {
  var type = _ref.type,
      payload = _ref.payload,
      meta = _ref.meta;

  var resource = (0, _get2.default)(meta, 'resource');
  var needle = (0, _get2.default)(meta, 'request.needle');
  var needleIsObject = (typeof needle === 'undefined' ? 'undefined' : _typeof(needle)) === 'object';
  var list = (0, _selectors.getList)(state, resource);
  var index = needleIsObject ? (0, _findIndex2.default)(list, needle) : list.indexOf(needle);

  if (index < 0) {
    return state;
  }

  switch (type) {
    case _actions.RESOURCE_UPDATE_SUCCESS:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        list: [].concat(_toConsumableArray(list.slice(0, index)), [needleIsObject ? _extends({}, list[index], payload) : payload], _toConsumableArray(list.slice(index + 1)))
      })));
    case _actions.RESOURCE_DELETE_SUCCESS:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        list: [].concat(_toConsumableArray(list.slice(0, index)), _toConsumableArray(list.slice(index + 1)))
      })));
    // istanbul ignore next
    default:
      return state;
  }
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var _ref2 = arguments[1];
  var type = _ref2.type,
      payload = _ref2.payload,
      meta = _ref2.meta;

  var resource = (0, _get2.default)(meta, 'resource');

  if (!resource) {
    return state;
  }

  switch (type) {
    case _actions.RESOURCE_CREATE_SUCCESS:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        list: [payload].concat(_toConsumableArray((0, _selectors.getList)(state, resource)))
      })));

    case _actions.RESOURCE_LIST_READ_REQUEST:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        list: (0, _selectors.getList)(_selectors.initialState, resource)
      })));
    case _actions.RESOURCE_LIST_READ_SUCCESS:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        list: payload
      })));

    case _actions.RESOURCE_DETAIL_READ_REQUEST:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        detail: (0, _selectors.getDetail)(_selectors.initialState, resource)
      })));
    case _actions.RESOURCE_DETAIL_READ_SUCCESS:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        detail: payload
      })));

    case _actions.RESOURCE_UPDATE_SUCCESS:
    case _actions.RESOURCE_DELETE_SUCCESS:
      return updateOrDeleteReducer(state, { type: type, payload: payload, meta: meta });

    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(updateOrDeleteReducer, 'updateOrDeleteReducer', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/reducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/reducer.js');
}();

;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createResource = createResource;
exports.readResourceList = readResourceList;
exports.readResourceDetail = readResourceDetail;
exports.updateResource = updateResource;
exports.deleteResource = deleteResource;
exports.watchResourceCreateRequest = watchResourceCreateRequest;
exports.watchResourceListReadRequest = watchResourceListReadRequest;
exports.watchResourceDetailReadRequest = watchResourceDetailReadRequest;
exports.watchResourceUpdateRequest = watchResourceUpdateRequest;
exports.watchResourceDeleteRequest = watchResourceDeleteRequest;

var _effects = __webpack_require__(11);

var _actions = __webpack_require__(14);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(createResource),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(readResourceList),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(readResourceDetail),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(updateResource),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(deleteResource),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(watchResourceCreateRequest),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(watchResourceListReadRequest),
    _marked8 = /*#__PURE__*/regeneratorRuntime.mark(watchResourceDetailReadRequest),
    _marked9 = /*#__PURE__*/regeneratorRuntime.mark(watchResourceUpdateRequest),
    _marked10 = /*#__PURE__*/regeneratorRuntime.mark(watchResourceDeleteRequest); // https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource


function createResource(api, _ref, _ref2) {
  var data = _ref.data;
  var resource = _ref2.resource,
      thunk = _ref2.thunk;
  var detail;
  return regeneratorRuntime.wrap(function createResource$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)([api, api.post], '/' + resource, data);

        case 3:
          detail = _context.sent;
          _context.next = 6;
          return (0, _effects.put)(actions.resourceCreateSuccess(resource, detail, { data: data }, thunk));

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return (0, _effects.put)(actions.resourceCreateFailure(resource, _context.t0, { data: data }, thunk));

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}

function readResourceList(api, _ref3, _ref4) {
  var params = _ref3.params;
  var resource = _ref4.resource,
      thunk = _ref4.thunk;
  var list;
  return regeneratorRuntime.wrap(function readResourceList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.call)([api, api.get], '/' + resource, { params: params });

        case 3:
          list = _context2.sent;
          _context2.next = 6;
          return (0, _effects.put)(actions.resourceListReadSuccess(resource, list, { params: params }, thunk));

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 12;
          return (0, _effects.put)(actions.resourceListReadFailure(resource, _context2.t0, { params: params }, thunk));

        case 12:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 8]]);
}

function readResourceDetail(api, _ref5, _ref6) {
  var needle = _ref5.needle;
  var resource = _ref6.resource,
      thunk = _ref6.thunk;
  var detail;
  return regeneratorRuntime.wrap(function readResourceDetail$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _effects.call)([api, api.get], '/' + resource + '/' + needle);

        case 3:
          detail = _context3.sent;
          _context3.next = 6;
          return (0, _effects.put)(actions.resourceDetailReadSuccess(resource, detail, { needle: needle }, thunk));

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3['catch'](0);
          _context3.next = 12;
          return (0, _effects.put)(actions.resourceDetailReadFailure(resource, _context3.t0, { needle: needle }, thunk));

        case 12:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[0, 8]]);
}

function updateResource(api, _ref7, _ref8) {
  var needle = _ref7.needle,
      data = _ref7.data;
  var resource = _ref8.resource,
      thunk = _ref8.thunk;
  var detail;
  return regeneratorRuntime.wrap(function updateResource$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _effects.call)([api, api.put], '/' + resource + '/' + needle, data);

        case 3:
          detail = _context4.sent;
          _context4.next = 6;
          return (0, _effects.put)(actions.resourceUpdateSuccess(resource, detail, { needle: needle, data: data }, thunk));

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4['catch'](0);
          _context4.next = 12;
          return (0, _effects.put)(actions.resourceUpdateFailure(resource, _context4.t0, { needle: needle, data: data }, thunk));

        case 12:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[0, 8]]);
}

function deleteResource(api, _ref9, _ref10) {
  var needle = _ref9.needle;
  var resource = _ref10.resource,
      thunk = _ref10.thunk;
  return regeneratorRuntime.wrap(function deleteResource$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _effects.call)([api, api.delete], '/' + resource + '/' + needle);

        case 3:
          _context5.next = 5;
          return (0, _effects.put)(actions.resourceDeleteSuccess(resource, { needle: needle }, thunk));

        case 5:
          _context5.next = 11;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5['catch'](0);
          _context5.next = 11;
          return (0, _effects.put)(actions.resourceDeleteFailure(resource, _context5.t0, { needle: needle }, thunk));

        case 11:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this, [[0, 7]]);
}

function watchResourceCreateRequest(api, _ref11) {
  var payload = _ref11.payload,
      meta = _ref11.meta;
  return regeneratorRuntime.wrap(function watchResourceCreateRequest$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.call)(createResource, api, payload, meta);

        case 2:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

function watchResourceListReadRequest(api, _ref12) {
  var payload = _ref12.payload,
      meta = _ref12.meta;
  return regeneratorRuntime.wrap(function watchResourceListReadRequest$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.call)(readResourceList, api, payload, meta);

        case 2:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked7, this);
}

function watchResourceDetailReadRequest(api, _ref13) {
  var payload = _ref13.payload,
      meta = _ref13.meta;
  return regeneratorRuntime.wrap(function watchResourceDetailReadRequest$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _effects.call)(readResourceDetail, api, payload, meta);

        case 2:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked8, this);
}

function watchResourceUpdateRequest(api, _ref14) {
  var payload = _ref14.payload,
      meta = _ref14.meta;
  return regeneratorRuntime.wrap(function watchResourceUpdateRequest$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _effects.call)(updateResource, api, payload, meta);

        case 2:
        case 'end':
          return _context9.stop();
      }
    }
  }, _marked9, this);
}

function watchResourceDeleteRequest(api, _ref15) {
  var payload = _ref15.payload,
      meta = _ref15.meta;
  return regeneratorRuntime.wrap(function watchResourceDeleteRequest$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return (0, _effects.call)(deleteResource, api, payload, meta);

        case 2:
        case 'end':
          return _context10.stop();
      }
    }
  }, _marked10, this);
}

var _default = /*#__PURE__*/regeneratorRuntime.mark(function _default(_ref16) {
  var api = _ref16.api;
  return regeneratorRuntime.wrap(function _default$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _effects.takeEvery)(actions.RESOURCE_CREATE_REQUEST, watchResourceCreateRequest, api);

        case 2:
          _context11.next = 4;
          return (0, _effects.takeEvery)(actions.RESOURCE_LIST_READ_REQUEST, watchResourceListReadRequest, api);

        case 4:
          _context11.next = 6;
          return (0, _effects.takeEvery)(actions.RESOURCE_DETAIL_READ_REQUEST, watchResourceDetailReadRequest, api);

        case 6:
          _context11.next = 8;
          return (0, _effects.takeEvery)(actions.RESOURCE_UPDATE_REQUEST, watchResourceUpdateRequest, api);

        case 8:
          _context11.next = 10;
          return (0, _effects.takeEvery)(actions.RESOURCE_DELETE_REQUEST, watchResourceDeleteRequest, api);

        case 10:
        case 'end':
          return _context11.stop();
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

  __REACT_HOT_LOADER__.register(createResource, 'createResource', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(readResourceList, 'readResourceList', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(readResourceDetail, 'readResourceDetail', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(updateResource, 'updateResource', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(deleteResource, 'deleteResource', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceCreateRequest, 'watchResourceCreateRequest', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceListReadRequest, 'watchResourceListReadRequest', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceDetailReadRequest, 'watchResourceDetailReadRequest', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceUpdateRequest, 'watchResourceUpdateRequest', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceDeleteRequest, 'watchResourceDeleteRequest', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/resource/sagas.js');
}();

;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _effects = __webpack_require__(11);

var req = __webpack_require__(137); // https://github.com/diegohaz/arc/wiki/Sagas


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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social


var _selectors = __webpack_require__(26);

var _actions = __webpack_require__(15);

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actions.SOCIAL_LOGIN_SUCCESS:
      return _extends({}, state, {
        user: payload
      });
    case _actions.SOCIAL_LOGOUT:
      return _extends({}, state, {
        user: _selectors.initialState.user
      });
    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/reducer.js');
}();

;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceAction = exports.appendFbRoot = exports.promises = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.loginFacebook = loginFacebook;
exports.prepareFacebook = prepareFacebook;
exports.watchSocialLoginFacebook = watchSocialLoginFacebook;
exports.loginGoogle = loginGoogle;
exports.prepareGoogle = prepareGoogle;
exports.watchSocialLoginGoogle = watchSocialLoginGoogle;

var _simpleLoadScript = __webpack_require__(32);

var _simpleLoadScript2 = _interopRequireDefault(_simpleLoadScript);

var _effects = __webpack_require__(11);

var _actions = __webpack_require__(15);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(loginFacebook),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(prepareFacebook),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(watchSocialLoginFacebook),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(loginGoogle),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(prepareGoogle),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(watchSocialLoginGoogle);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social


var promises = exports.promises = {
  fbLogin: function fbLogin(options) {
    return new Promise(function (resolve, reject) {
      window.FB.login(function (response) {
        // istanbul ignore else
        if (response.authResponse) {
          resolve(response.authResponse);
        } else {
          reject(response.status);
        }
      }, options);
    });
  },
  fbGetMe: function fbGetMe(options) {
    return new Promise(function (resolve) {
      window.FB.api('/me', options, function (me) {
        return resolve(me);
      });
    });
  },
  loadGoogleAuth2: function loadGoogleAuth2() {
    return new Promise(function (resolve) {
      window.gapi.load('auth2', resolve);
    });
  }
};

var appendFbRoot = exports.appendFbRoot = function appendFbRoot() {
  var fbRoot = document.createElement('div');
  fbRoot.id = 'fb-root';
  document.body.appendChild(fbRoot);
};

var serviceAction = exports.serviceAction = function serviceAction(suffix, service) {
  return function (_ref) {
    var type = _ref.type,
        payload = _ref.payload;
    return type === 'SOCIAL_LOGIN_' + suffix && payload && payload.service === service;
  };
};

function loginFacebook() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref2$scope = _ref2.scope,
      scope = _ref2$scope === undefined ? 'public_profile' : _ref2$scope,
      _ref2$fields = _ref2.fields,
      fields = _ref2$fields === undefined ? 'id,name' : _ref2$fields,
      options = _objectWithoutProperties(_ref2, ['scope', 'fields']);

  var request, data, picture;
  return regeneratorRuntime.wrap(function loginFacebook$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          request = _extends({
            service: 'facebook', scope: scope, fields: fields }, options);
          _context.prev = 1;
          _context.next = 4;
          return (0, _effects.call)(promises.fbLogin, _extends({ scope: scope }, options));

        case 4:
          _context.next = 6;
          return (0, _effects.call)(promises.fbGetMe, { fields: fields });

        case 6:
          data = _context.sent;
          picture = 'https://graph.facebook.com/' + data.id + '/picture?type=normal';
          _context.next = 10;
          return (0, _effects.put)(actions.socialLoginSuccess(_extends({}, data, { picture: picture }), request));

        case 10:
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context['catch'](1);
          _context.next = 16;
          return (0, _effects.put)(actions.socialLoginFailure(_context.t0, request));

        case 16:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[1, 12]]);
}

function prepareFacebook(_ref3) {
  var clientId = _ref3.clientId,
      _ref3$version = _ref3.version,
      version = _ref3$version === undefined ? 'v2.8' : _ref3$version,
      options = _objectWithoutProperties(_ref3, ['clientId', 'version']);

  var request;
  return regeneratorRuntime.wrap(function prepareFacebook$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          request = _extends({
            service: 'facebook', clientId: clientId, version: version }, options);
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _effects.call)(appendFbRoot);

        case 4:
          _context2.next = 6;
          return (0, _effects.call)(_simpleLoadScript2.default, '//connect.facebook.net/en_US/sdk.js');

        case 6:
          _context2.next = 8;
          return (0, _effects.call)([window.FB, window.FB.init], _extends({ appId: clientId, version: version }, options));

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2['catch'](1);
          _context2.next = 14;
          return (0, _effects.put)(actions.socialLoginFailure(_context2.t0, request));

        case 14:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[1, 10]]);
}

function watchSocialLoginFacebook() {
  var _ref4, payload, _ref5, _payload;

  return regeneratorRuntime.wrap(function watchSocialLoginFacebook$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.take)(serviceAction('PREPARE', 'facebook'));

        case 2:
          _ref4 = _context3.sent;
          payload = _ref4.payload;
          _context3.next = 6;
          return (0, _effects.call)(prepareFacebook, payload);

        case 6:
          if (false) {
            _context3.next = 15;
            break;
          }

          _context3.next = 9;
          return (0, _effects.take)(serviceAction('REQUEST', 'facebook'));

        case 9:
          _ref5 = _context3.sent;
          _payload = _ref5.payload;
          _context3.next = 13;
          return (0, _effects.call)(loginFacebook, _payload);

        case 13:
          _context3.next = 6;
          break;

        case 15:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function loginGoogle() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref6$scope = _ref6.scope,
      scope = _ref6$scope === undefined ? 'profile' : _ref6$scope,
      options = _objectWithoutProperties(_ref6, ['scope']);

  var request, auth2, user, profile, name, picture;
  return regeneratorRuntime.wrap(function loginGoogle$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          request = _extends({ service: 'google', scope: scope }, options);
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _effects.call)(window.gapi.auth2.getAuthInstance);

        case 4:
          auth2 = _context4.sent;
          _context4.next = 7;
          return (0, _effects.call)([auth2, auth2.signIn], _extends({ scope: scope }, options));

        case 7:
          user = _context4.sent;
          _context4.next = 10;
          return (0, _effects.call)([user, user.getBasicProfile]);

        case 10:
          profile = _context4.sent;
          _context4.next = 13;
          return (0, _effects.call)([profile, profile.getName]);

        case 13:
          name = _context4.sent;
          _context4.next = 16;
          return (0, _effects.call)([profile, profile.getImageUrl]);

        case 16:
          picture = _context4.sent;
          _context4.next = 19;
          return (0, _effects.put)(actions.socialLoginSuccess({ name: name, picture: picture }, request));

        case 19:
          _context4.next = 25;
          break;

        case 21:
          _context4.prev = 21;
          _context4.t0 = _context4['catch'](1);
          _context4.next = 25;
          return (0, _effects.put)(actions.socialLoginFailure(_context4.t0, request));

        case 25:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[1, 21]]);
}

function prepareGoogle(_ref7) {
  var clientId = _ref7.clientId,
      options = _objectWithoutProperties(_ref7, ['clientId']);

  var request;
  return regeneratorRuntime.wrap(function prepareGoogle$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          request = _extends({ service: 'google', clientId: clientId }, options);
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _effects.call)(_simpleLoadScript2.default, '//apis.google.com/js/platform.js');

        case 4:
          _context5.next = 6;
          return (0, _effects.call)(promises.loadGoogleAuth2);

        case 6:
          _context5.next = 8;
          return (0, _effects.call)(window.gapi.auth2.init, _extends({ client_id: clientId }, options));

        case 8:
          _context5.next = 14;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5['catch'](1);
          _context5.next = 14;
          return (0, _effects.put)(actions.socialLoginFailure(_context5.t0, request));

        case 14:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this, [[1, 10]]);
}

function watchSocialLoginGoogle() {
  var _ref8, payload, _ref9, _payload2;

  return regeneratorRuntime.wrap(function watchSocialLoginGoogle$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.take)(serviceAction('PREPARE', 'google'));

        case 2:
          _ref8 = _context6.sent;
          payload = _ref8.payload;
          _context6.next = 6;
          return (0, _effects.call)(prepareGoogle, payload);

        case 6:
          if (false) {
            _context6.next = 15;
            break;
          }

          _context6.next = 9;
          return (0, _effects.take)(serviceAction('REQUEST', 'google'));

        case 9:
          _ref9 = _context6.sent;
          _payload2 = _ref9.payload;
          _context6.next = 13;
          return (0, _effects.call)(loginGoogle, _payload2);

        case 13:
          _context6.next = 6;
          break;

        case 15:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

var _default = /*#__PURE__*/regeneratorRuntime.mark(function _default() {
  return regeneratorRuntime.wrap(function _default$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.fork)(watchSocialLoginFacebook);

        case 2:
          _context7.next = 4;
          return (0, _effects.fork)(watchSocialLoginGoogle);

        case 4:
        case 'end':
          return _context7.stop();
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

  __REACT_HOT_LOADER__.register(promises, 'promises', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(appendFbRoot, 'appendFbRoot', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(serviceAction, 'serviceAction', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(loginFacebook, 'loginFacebook', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(prepareFacebook, 'prepareFacebook', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(watchSocialLoginFacebook, 'watchSocialLoginFacebook', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(loginGoogle, 'loginGoogle', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(prepareGoogle, 'prepareGoogle', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(watchSocialLoginGoogle, 'watchSocialLoginGoogle', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/social/sagas.js');
}();

;

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 184 164\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;\">\n    <g transform=\"matrix(1,0,0,1,-4.49912,-15.1442)\">\n        <g id=\"Symbol\" transform=\"matrix(0.446036,2.31112e-32,2.31112e-32,0.446036,-1.17751,-11.7517)\">\n            <g transform=\"matrix(0.730839,0,0,0.730839,-428.272,-103.233)\">\n                <path d=\"M738.748,372.292C743.056,377.12 743.923,383.318 741.56,389.234C673.786,404.652 629.197,430.744 629.197,460.312C629.197,507.636 743.42,546.057 884.109,546.057C1024.8,546.057 1139.02,507.636 1139.02,460.312C1139.02,431.943 1097.97,406.773 1034.79,391.162C1031.65,385.195 1031.87,378.745 1035.66,373.578C1039.88,374.479 1044.08,375.435 1048.27,376.451C1056.47,378.44 1064.62,380.658 1072.68,383.17C1078.62,385.021 1084.51,387.033 1090.33,389.247C1094.69,390.909 1099.01,392.685 1103.27,394.6C1106.44,396.026 1109.58,397.529 1112.66,399.123C1114.94,400.295 1117.18,401.516 1119.4,402.791C1121.01,403.719 1122.61,404.675 1124.18,405.663C1125.32,406.378 1126.45,407.109 1127.57,407.858C1135.27,413.023 1142.47,419.041 1148.47,426.135C1149.42,427.248 1150.33,428.386 1151.21,429.549C1152.34,431.045 1153.41,432.582 1154.42,434.16C1155.8,436.295 1157.06,438.504 1158.19,440.777C1159.65,443.716 1160.89,446.763 1161.89,449.89C1163.27,454.209 1164.17,458.676 1164.57,463.192C1165.09,469.111 1164.73,475.1 1163.52,480.916C1162.61,485.23 1161.25,489.443 1159.47,493.475C1157.96,496.89 1156.16,500.174 1154.12,503.298C1153.3,504.554 1152.44,505.785 1151.54,506.989C1145.61,514.961 1138.16,521.699 1130.06,527.412C1124.81,531.117 1119.27,534.408 1113.58,537.386C1107.35,540.646 1100.93,543.534 1094.4,546.147C1086.73,549.218 1078.91,551.912 1071.01,554.33C1062.5,556.937 1053.89,559.222 1045.22,561.261C1034.15,563.866 1022.99,566.067 1011.77,567.954C998.741,570.147 985.637,571.914 972.497,573.33C958.469,574.841 944.397,575.95 930.308,576.703C914.923,577.525 899.516,577.923 884.109,577.923C868.703,577.923 853.295,577.525 837.911,576.703C823.821,575.95 809.75,574.841 795.721,573.33C782.582,571.914 769.478,570.147 756.445,567.954C745.232,566.067 734.069,563.866 722.999,561.261C714.332,559.222 705.72,556.937 697.206,554.33C689.308,551.912 681.489,549.218 673.82,546.147C667.293,543.533 660.871,540.646 654.64,537.387C648.947,534.409 643.411,531.117 638.159,527.412C630.061,521.7 622.611,514.963 616.679,506.992C615.783,505.788 614.923,504.557 614.102,503.301C612.059,500.176 610.26,496.891 608.752,493.475C606.973,489.442 605.603,485.227 604.701,480.911C603.486,475.096 603.126,469.11 603.647,463.192C604.044,458.675 604.953,454.205 606.333,449.885C607.331,446.759 608.575,443.712 610.035,440.773C611.163,438.502 612.421,436.296 613.791,434.163C614.805,432.584 615.881,431.046 617.012,429.549C617.892,428.385 618.804,427.246 619.747,426.133C625.754,419.04 632.945,413.022 640.652,407.858C641.77,407.109 642.9,406.377 644.04,405.662C645.613,404.675 647.207,403.719 648.817,402.792C651.033,401.516 653.281,400.295 655.554,399.123C658.643,397.53 661.779,396.026 664.95,394.6C669.208,392.685 673.528,390.909 677.892,389.247C683.705,387.033 689.595,385.022 695.534,383.17C703.595,380.658 711.746,378.44 719.951,376.451C726.188,374.939 732.456,373.558 738.748,372.292Z\" />\n            </g>\n            <g transform=\"matrix(-0.365419,-0.632925,0.632925,-0.365419,244.419,974.764)\">\n                <path d=\"M738.748,372.292C743.056,377.12 743.923,383.318 741.56,389.234C673.786,404.652 629.197,430.744 629.197,460.312C629.197,507.636 743.42,546.057 884.109,546.057C1024.8,546.057 1139.02,507.636 1139.02,460.312C1139.02,431.943 1097.97,406.773 1034.79,391.162C1031.65,385.195 1031.87,378.745 1035.66,373.578C1039.88,374.479 1044.08,375.435 1048.27,376.451C1056.47,378.44 1064.62,380.658 1072.68,383.17C1078.62,385.021 1084.51,387.033 1090.33,389.247C1094.69,390.909 1099.01,392.685 1103.27,394.6C1106.44,396.026 1109.58,397.529 1112.66,399.123C1114.94,400.295 1117.18,401.516 1119.4,402.791C1121.01,403.719 1122.61,404.675 1124.18,405.663C1125.32,406.378 1126.45,407.109 1127.57,407.858C1135.27,413.023 1142.47,419.041 1148.47,426.135C1149.42,427.248 1150.33,428.386 1151.21,429.549C1152.34,431.045 1153.41,432.582 1154.42,434.16C1155.8,436.295 1157.06,438.504 1158.19,440.777C1159.65,443.716 1160.89,446.763 1161.89,449.89C1163.27,454.209 1164.17,458.676 1164.57,463.192C1165.09,469.111 1164.73,475.1 1163.52,480.916C1162.61,485.23 1161.25,489.443 1159.47,493.475C1157.96,496.89 1156.16,500.174 1154.12,503.298C1153.3,504.554 1152.44,505.785 1151.54,506.989C1145.61,514.961 1138.16,521.699 1130.06,527.412C1124.81,531.117 1119.27,534.408 1113.58,537.386C1107.35,540.646 1100.93,543.534 1094.4,546.147C1086.73,549.218 1078.91,551.912 1071.01,554.33C1062.5,556.937 1053.89,559.222 1045.22,561.261C1034.15,563.866 1022.99,566.067 1011.77,567.954C998.741,570.147 985.637,571.914 972.497,573.33C958.469,574.841 944.397,575.95 930.308,576.703C914.923,577.525 899.516,577.923 884.109,577.923C868.703,577.923 853.295,577.525 837.911,576.703C823.821,575.95 809.75,574.841 795.721,573.33C782.582,571.914 769.478,570.147 756.445,567.954C745.232,566.067 734.069,563.866 722.999,561.261C714.332,559.222 705.72,556.937 697.206,554.33C689.308,551.912 681.489,549.218 673.82,546.147C667.293,543.533 660.871,540.646 654.64,537.387C648.947,534.409 643.411,531.117 638.159,527.412C630.061,521.7 622.611,514.963 616.679,506.992C615.783,505.788 614.923,504.557 614.102,503.301C612.059,500.176 610.26,496.891 608.752,493.475C606.973,489.442 605.603,485.227 604.701,480.911C603.486,475.096 603.126,469.11 603.647,463.192C604.044,458.675 604.953,454.205 606.333,449.885C607.331,446.759 608.575,443.712 610.035,440.773C611.163,438.502 612.421,436.296 613.791,434.163C614.805,432.584 615.881,431.046 617.012,429.549C617.892,428.385 618.804,427.246 619.747,426.133C625.754,419.04 632.945,413.022 640.652,407.858C641.77,407.109 642.9,406.377 644.04,405.662C645.613,404.675 647.207,403.719 648.817,402.792C651.033,401.516 653.281,400.295 655.554,399.123C658.643,397.53 661.779,396.026 664.95,394.6C669.208,392.685 673.528,390.909 677.892,389.247C683.705,387.033 689.595,385.022 695.534,383.17C703.595,380.658 711.746,378.44 719.951,376.451C726.188,374.939 732.456,373.558 738.748,372.292Z\"/>\n            </g>\n            <g transform=\"matrix(0.365419,-0.632925,-0.632925,-0.365419,191.319,974.764)\">\n                <path d=\"M738.748,372.292C743.056,377.12 743.923,383.318 741.56,389.234C673.786,404.652 629.197,430.744 629.197,460.312C629.197,507.636 743.42,546.057 884.109,546.057C1024.8,546.057 1139.02,507.636 1139.02,460.312C1139.02,431.943 1097.97,406.773 1034.79,391.162C1031.65,385.195 1031.87,378.745 1035.66,373.578C1039.88,374.479 1044.08,375.435 1048.27,376.451C1056.47,378.44 1064.62,380.658 1072.68,383.17C1078.62,385.021 1084.51,387.033 1090.33,389.247C1094.69,390.909 1099.01,392.685 1103.27,394.6C1106.44,396.026 1109.58,397.529 1112.66,399.123C1114.94,400.295 1117.18,401.516 1119.4,402.791C1121.01,403.719 1122.61,404.675 1124.18,405.663C1125.32,406.378 1126.45,407.109 1127.57,407.858C1135.27,413.023 1142.47,419.041 1148.47,426.135C1149.42,427.248 1150.33,428.386 1151.21,429.549C1152.34,431.045 1153.41,432.582 1154.42,434.16C1155.8,436.295 1157.06,438.504 1158.19,440.777C1159.65,443.716 1160.89,446.763 1161.89,449.89C1163.27,454.209 1164.17,458.676 1164.57,463.192C1165.09,469.111 1164.73,475.1 1163.52,480.916C1162.61,485.23 1161.25,489.443 1159.47,493.475C1157.96,496.89 1156.16,500.174 1154.12,503.298C1153.3,504.554 1152.44,505.785 1151.54,506.989C1145.61,514.961 1138.16,521.699 1130.06,527.412C1124.81,531.117 1119.27,534.408 1113.58,537.386C1107.35,540.646 1100.93,543.534 1094.4,546.147C1086.73,549.218 1078.91,551.912 1071.01,554.33C1062.5,556.937 1053.89,559.222 1045.22,561.261C1034.15,563.866 1022.99,566.067 1011.77,567.954C998.741,570.147 985.637,571.914 972.497,573.33C958.469,574.841 944.397,575.95 930.308,576.703C914.923,577.525 899.516,577.923 884.109,577.923C868.703,577.923 853.295,577.525 837.911,576.703C823.821,575.95 809.75,574.841 795.721,573.33C782.582,571.914 769.478,570.147 756.445,567.954C745.232,566.067 734.069,563.866 722.999,561.261C714.332,559.222 705.72,556.937 697.206,554.33C689.308,551.912 681.489,549.218 673.82,546.147C667.293,543.533 660.871,540.646 654.64,537.387C648.947,534.409 643.411,531.117 638.159,527.412C630.061,521.7 622.611,514.963 616.679,506.992C615.783,505.788 614.923,504.557 614.102,503.301C612.059,500.176 610.26,496.891 608.752,493.475C606.973,489.442 605.603,485.227 604.701,480.911C603.486,475.096 603.126,469.11 603.647,463.192C604.044,458.675 604.953,454.205 606.333,449.885C607.331,446.759 608.575,443.712 610.035,440.773C611.163,438.502 612.421,436.296 613.791,434.163C614.805,432.584 615.881,431.046 617.012,429.549C617.892,428.385 618.804,427.246 619.747,426.133C625.754,419.04 632.945,413.022 640.652,407.858C641.77,407.109 642.9,406.377 644.04,405.662C645.613,404.675 647.207,403.719 648.817,402.792C651.033,401.516 653.281,400.295 655.554,399.123C658.643,397.53 661.779,396.026 664.95,394.6C669.208,392.685 673.528,390.909 677.892,389.247C683.705,387.033 689.595,385.022 695.534,383.17C703.595,380.658 711.746,378.44 719.951,376.451C726.188,374.939 732.456,373.558 738.748,372.292Z\"/>\n            </g>\n            <g transform=\"matrix(0.849949,0,0,0.849949,-532.408,-149.626)\">\n                <circle cx=\"882.732\" cy=\"463.109\" r=\"40.177\"/>\n            </g>\n        </g>\n    </g>\n</svg>\n"

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"128.1 125.4 49.2 49.2\" enable-background=\"new 128.1 125.4 49.2 49.2\" xml:space=\"preserve\">\n  <g id=\"atom\">\n  \t<g>\n  \t\t<g>\n  \t\t\t<circle fill=\"none\" stroke-width=\"3\" stroke-miterlimit=\"10\" cx=\"152.7\" cy=\"150\" r=\"21.6\"></circle>\n  \t\t\t<circle stroke=\"none\" fill=\"#BE6700\" cx=\"152.7\" cy=\"150\" r=\"12.4\"></circle>\n  \t\t</g>\n  \t\t<path stroke=\"none\" fill=\"#BE6700\" d=\"M175.1,136.6c0,2.9-2.4,5.3-5.3,5.3s-5.3-2.3-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3\n  \t\t\tC172.7,131.3,175.1,133.7,175.1,136.6z\"></path>\n  \t</g>\n  </g>\n</svg>\n"

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2000 2000\" width=\"2000\" height=\"2000\"><circle cx=\"1000\" cy=\"1000\" r=\"1000\" fill=\"#f7931c\"/><path d=\"m459.44 1207.55c-.53-188.32 132.08-346.31 321.71-381.84 16.23-3 20.82-8.44 20.42-24.33-1.06-42.25-1-84.55 0-126.8.33-15.23-4.52-24.26-17.58-32.78-45.54-29.7-64.15-83.65-47.5-132.22 17.59-51.32 64.25-83.23 118-80.69 48.19 2.28 92.18 38.09 105.2 85.64 13.08 47.78-5.14 99.74-47.51 126.64-15 9.5-19.65 19.11-19.15 36.07 1.26 42.23.76 84.54.19 126.8-.17 12.27 1.65 18.84 16.2 20.73a303.83 303.83 0 0 1 80.41 22.11c9.63 4.12 14.8 1.59 21.24-5.5q134.56-148.25 269.88-295.81c9.3-10.11 6.61-17.09 2.35-27.56-22-54.22-9.13-112.75 32.4-151.49 37.84-35.31 100.5-45.39 145.73-23.46 53.27 25.83 82.51 75.29 78.87 133.41-4.88 77.81-80.46 136.36-157.22 120.4-15.55-3.23-24.61.53-34.67 11.65q-125.22 138.41-251.49 275.87c-10.16 11.06-11.62 17 1.09 28 137.71 120.1 175.22 301.14 96.75 466-5.93 12.46-4.62 19.63 4.94 28.73 23 21.82 45.2 44.4 67.2 67.18 8.75 9.06 16.92 11.47 29.9 8.19 50.68-12.79 103.12 10 128.41 53.89a116.62 116.62 0 0 1 -16.36 138.28c-34.63 36.81-91.14 47.49-135.11 25.54-48-24-74.5-75.35-63.09-128 3.28-15.12-.2-23.74-10.32-33.35-18.6-17.65-36.77-35.8-54.2-54.6-10.17-11-16.49-11.17-28.18-.27-118.63 110.63-256.28 139.26-408.15 85.3-150.99-53.59-249.91-200.38-250.36-361.73\" fill=\"#fefdfc\"/></svg>"

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 250 250\"><defs><style>.cls-1{fill:#2c3e50;}</style></defs><title>fancytest</title><path class=\"cls-1\" d=\"M137.17,92.42l-13.1-4.18L116,113.62,129.74,118q7.71,2.46,12.87.62t7.1-7.9q2.12-6.66-1.05-11.16T137.17,92.42Z\"/><path class=\"cls-1\" d=\"M130.83,133l-19.09-6.09-8.83,27.68,17.64,5.63q7.65,2.44,12.73.39t7.16-8.57q2.25-7.05,0-11.87T130.83,133Z\"/><path class=\"cls-1\" d=\"M155.17,30.42a99.28,99.28,0,1,0,64.41,124.75A99.28,99.28,0,0,0,155.17,30.42Zm14.26,84.93a21.85,21.85,0,0,1-7.32,10.77,22.36,22.36,0,0,1-12.76,4.61q8,4.6,10.43,12a24.76,24.76,0,0,1-.16,15.42q-4.39,13.78-15.75,18t-28-1.14l1.88.57-4.19,13.14-9.77-3.12,4.18-13.11,7.9,2.52-17.64-5.63L94,182.5l-9.77-3.12,4.18-13.12L68.64,160l3.68-11.53,10.85,1.28,22-68.88-9.59-5.24L99.26,64l10.22,3.26,9.56,3,4.22-13.24L133,60.18l-4.22,13.24,9.74,3.11,4.22-13.24,9.77,3.12-4.31,13.5q12.06,5,18,12.71Q173.62,102.24,169.43,115.35Z\"/></svg>"

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32\" xml:space=\"preserve\" fill=\"none\">\n<line style=\"stroke-width:2;stroke-miterlimit:10\" x1=\"8\" y1=\"8\" x2=\"24\" y2=\"24\" fill=\"none\"/>\n<line style=\"stroke-width:2;stroke-miterlimit:10\" x1=\"24\" y1=\"8\" x2=\"8\" y2=\"24\" fill=\"none\"/>\n</svg>\n"

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.0//EN\" \"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.0\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n<g stroke=\"none\">\n\t<path d=\"M18,8v12H9V8H18 M18,6H9C7.9,6,7,6.9,7,8v12c0,1.1,0.9,2,2,2h9c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6L18,6z\" stroke=\"none\"/>\n</g>\n<path d=\"M5,17V4h10V2H5C3.9,2,3,2.9,3,4v13H5z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<svg version=\"1.0\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 48 48\" enable-background=\"new 0 0 48 48\" xml:space=\"preserve\">\n<polygon stroke=\"none\" fill=\"#CFD8DC\" points=\"35,36 39,36 39,22 26,22 26,13 22,13 22,22 9,22 9,36 13,36 13,26 22,26 22,36 26,36 26,26 35,26\n\t\"/>\r\n<rect x=\"17\" y=\"6\" stroke=\"none\" fill=\"#3F51B5\" width=\"14\" height=\"10\"/>\n<rect x=\"32\" y=\"32\" stroke=\"none\" fill=\"#00BCD4\" width=\"10\" height=\"10\"/>\n<rect x=\"6\" y=\"32\" stroke=\"none\" fill=\"#00BCD4\" width=\"10\" height=\"10\"/>\n<rect x=\"19\" y=\"32\" stroke=\"none\" fill=\"#00BCD4\" width=\"10\" height=\"10\"/>\n</svg>\r\n"

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\">\n<path fill-rule=\"evenodd\" d=\"M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Слой_1\" x=\"0px\" y=\"0px\" width=\"50px\" height=\"50px\" viewBox=\"0 0 50 50\" enable-background=\"new 0 0 50 50\" xml:space=\"preserve\">\n<path d=\"M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3  c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 50 50\" enable-background=\"new 0 0 50 50\" xml:space=\"preserve\" stroke=\"none\">\n<path d=\"M25,1C11.8,1,1,11.8,1,25c0,10.2,6.4,18.9,15.3,22.4c0.9-0.2,1.7-1,1.7-2V41h-2.6c-1.9,0-3.5-0.9-4.3-2.3  c-0.2-0.4-0.4-0.9-0.6-1.4c-0.4-1.1-0.9-2.3-1.9-3C8.2,34,8,33.4,8.1,32.9c0.2-0.5,0.7-0.9,1.6-0.8c1,0.1,2.5,1.2,3.4,2.4  c0.8,1,1.4,1.6,2.6,1.6h0.3c0.9,0,3.1,0,3.5-0.4l0,0c0.3-0.4,0.5-0.7,0.8-1c-6-1.2-9.4-4.7-9.4-10c0-1.8,0.5-3.6,1.6-5.2  c-0.4-1.5-1.3-5.4,0.6-7.1l0.3-0.3h0.4c2.6,0,4.5,1.1,5.7,2c3.5-1.3,7.5-1.3,11,0c1.1-0.9,3-2,5.7-2h0.4l0.3,0.3  c1.9,1.8,1,5.6,0.6,7.1c1,1.6,1.6,3.4,1.6,5.2c0,5.3-3.4,8.8-9.3,10c1.5,1.6,2.3,4,2.3,5.9v4.9c0,1,0.7,1.8,1.7,2  C42.6,43.9,49,35.2,49,25C49,11.8,38.2,1,25,1z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24\" xml:space=\"preserve\" stroke=\"none\">\n<path d=\"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032  c0-3.331,2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2  C7.021,2,2.543,6.477,2.543,12c0,5.523,4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" id=\"Слой_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"48px\" height=\"48px\" viewBox=\"0 0 48 48\" enable-background=\"new 0 0 48 48\" xml:space=\"preserve\">\n<path fill=\"#FF3D00\" stroke=\"none\" d=\"M32.635,8C29.027,8,25.855,9.828,24,12.597C22.145,9.828,18.973,8,15.365,8C9.641,8,5,12.598,5,18.269\n\tC5,28.487,21.15,33.411,24,40c2.85-6.589,19-11.428,19-21.731C43,12.598,38.359,8,32.635,8\"/>\n</svg>\n"

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg width=\"256px\" height=\"283px\" viewBox=\"0 0 256 283\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\">\n\t<g>\n\t\t<path d=\"M239.972557,139.203 C239.972557,124.669 228.190557,112.887 213.656557,112.887 C212.721557,112.887 211.799557,112.937 210.890557,113.032 L247.035557,6.427 L93.431557,6.427 L129.525557,112.94 C128.996557,112.908 128.464557,112.887 127.926557,112.887 C113.392557,112.887 101.610557,124.669 101.610557,139.203 C101.610557,150.951 109.309557,160.897 119.936557,164.281 C114.323557,174.003 107.261557,182.759 99.243557,190.323 C88.340557,200.609 75.862557,208.408 62.367557,213.214 C46.299557,204.96 38.711557,186.602 45.558557,170.507 C46.331557,168.69 47.120557,166.847 47.875557,165.013 C59.515557,162.296 68.189557,151.86 68.189557,139.392 C68.189557,124.858 56.407557,113.076 41.873557,113.076 C27.338557,113.076 15.556557,124.858 15.556557,139.392 C15.556557,148.305 19.991557,156.176 26.769557,160.937 C20.255557,175.768 10.681557,191.288 7.69855701,209.276 C4.12355701,230.835 7.68755701,253.719 26.332557,266.642 C69.756557,296.738 116.892557,247.985 166.591557,235.729 C184.602557,231.287 204.373557,232.003 220.242557,222.812 C232.159557,215.91 240.015557,204.472 242.245557,191.63 C244.447557,178.944 241.236557,166.313 233.852557,156.071 C237.671557,151.503 239.972557,145.623 239.972557,139.203 L239.972557,139.203 Z M154.240557,139.296 C154.240557,139.265 154.243557,139.234 154.243557,139.203 C154.243557,129.659 149.161557,121.301 141.557557,116.688 L170.285557,58.597 L199.063557,117.304 C191.996557,122.022 187.339557,130.068 187.339557,139.203 C187.339557,139.395 187.350557,139.584 187.354557,139.775 L154.240557,139.296 L154.240557,139.296 Z\" stroke=\"none\" fill=\"#C63D14\"></path>\n\t\t<path d=\"M246.399036,139.203 C246.399036,123.218 234.882036,109.88 219.711036,107.031 L256.000036,0 L84.4660355,0 L120.810036,107.248 C106.167036,110.507 95.1830355,123.593 95.1830355,139.203 C95.1830355,150.926 101.378036,161.223 110.663036,167.009 C106.197036,173.662 100.901036,179.923 94.8320355,185.648 C85.2080355,194.728 74.4850355,201.614 62.9250355,206.144 C51.2820355,198.83 46.3600355,185.038 51.4720355,173.022 L51.8720355,172.082 C52.1220355,171.494 52.3730355,170.904 52.6230355,170.314 C65.4110355,165.855 74.6160355,153.682 74.6160355,139.392 C74.6160355,121.337 59.9270355,106.649 41.8720355,106.649 C23.8170355,106.649 9.12903553,121.337 9.12903553,139.392 C9.12903553,148.505 12.8740355,156.757 18.9020355,162.699 C17.8090355,165.029 16.6600355,167.397 15.4790355,169.823 C9.96703553,181.144 3.72003553,193.976 1.35703553,208.225 C-3.33596447,236.524 4.23303553,259.146 22.6700355,271.924 C33.8580355,279.678 45.2190355,282.728 56.6520355,282.727 C78.1810355,282.726 99.9580355,271.911 121.258036,261.331 C136.599036,253.712 152.461036,245.833 168.130036,241.969 C173.960036,240.531 179.959036,239.666 186.310036,238.75 C198.904036,236.933 211.928036,235.055 223.464036,228.374 C236.835036,220.629 245.989036,207.637 248.577036,192.73 C250.799036,179.933 248.124036,167.117 241.602036,156.247 C244.643036,151.279 246.399036,145.443 246.399036,139.203 L246.399036,139.203 Z M233.545036,139.203 C233.545036,150.17 224.623036,159.093 213.655036,159.093 C202.689036,159.093 193.766036,150.17 193.766036,139.203 C193.766036,128.236 202.689036,119.314 213.655036,119.314 C224.623036,119.314 233.545036,128.236 233.545036,139.203 L233.545036,139.203 Z M238.069036,12.854 L206.024036,107.367 C204.635036,107.7 203.281036,108.12 201.966036,108.625 L170.310036,44.047 L138.562036,108.243 C137.190036,107.77 135.778036,107.381 134.330036,107.093 L102.395036,12.854 L238.069036,12.854 L238.069036,12.854 Z M127.926036,119.314 C138.893036,119.314 147.815036,128.236 147.815036,139.203 C147.815036,150.17 138.893036,159.093 127.926036,159.093 C116.960036,159.093 108.037036,150.17 108.037036,139.203 C108.037036,128.236 116.960036,119.314 127.926036,119.314 L127.926036,119.314 Z M41.8720355,119.503 C52.8400355,119.503 61.7620355,128.425 61.7620355,139.392 C61.7620355,150.359 52.8400355,159.282 41.8720355,159.282 C30.9060355,159.282 21.9830355,150.359 21.9830355,139.392 C21.9830355,128.425 30.9060355,119.503 41.8720355,119.503 L41.8720355,119.503 Z M235.912036,190.531 C233.977036,201.679 227.091036,211.418 217.021036,217.25 C207.634036,222.687 196.385036,224.31 184.475036,226.027 C178.095036,226.947 171.497036,227.899 165.052036,229.489 C148.010036,233.691 131.503036,241.89 115.540036,249.819 C83.5950355,265.686 56.0060355,279.388 29.9930355,261.359 C10.9380355,248.153 11.8180355,223.718 14.0380355,210.328 C16.0950355,197.923 21.6570355,186.498 27.0360355,175.449 C27.9670355,173.537 28.8710355,171.664 29.7580355,169.803 C32.4260355,170.87 35.2630355,171.597 38.2200355,171.927 C32.7450355,189.998 41.3560355,209.646 59.4290355,218.931 L61.9020355,220.202 L64.5220355,219.269 C78.8100355,214.181 91.9750355,206.015 103.653036,194.998 C111.202036,187.877 117.689036,179.998 123.023036,171.579 C124.623036,171.82 126.260036,171.947 127.926036,171.947 C145.981036,171.947 160.670036,157.259 160.670036,139.203 C160.670036,129.493 156.417036,120.761 149.681036,114.759 L170.259036,73.147 L191.046036,115.552 C184.809036,121.518 180.912036,129.911 180.912036,139.203 C180.912036,157.259 195.600036,171.947 213.655036,171.947 C220.592036,171.947 227.027036,169.773 232.327036,166.079 C236.007036,173.612 237.378036,182.088 235.912036,190.531 L235.912036,190.531 Z\" stroke=\"none\" fill=\"#FFFFFF\"></path>\n\t</g>\n</svg>\n"

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg width=\"256px\" height=\"140px\" viewBox=\"0 0 256 140\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\">\n\t<g>\n\t\t<path d=\"M190.317684,91.214 C185.491684,92.789 180.302684,93.273 175.261684,94.156 C173.889684,94.396 172.442684,94.182 171.056684,94.374 C160.303684,95.866 156.240684,100.173 154.721684,111.623 C153.913684,117.718 152.309684,123.511 148.811684,128.697 C142.901684,137.456 131.420684,141.431 121.594684,138.009 C111.076684,134.346 104.705684,124.759 105.555684,113.874 C106.320684,104.067 114.066684,95.403 124.945684,92.885 C130.038684,91.706 135.323684,91.245 140.549684,90.769 C150.304684,89.882 154.613684,85.605 156.238684,76.013 C157.173684,70.494 156.340684,65.287 155.116684,60.081 C153.247684,52.124 147.453684,48.427 137.726684,47.719 C132.418684,47.332 127.018684,46.562 121.939684,45.036 C111.247684,41.821 105.022684,32.539 105.515684,21.65 C105.947684,12.115 113.712684,2.831 123.039684,0.699 C134.089684,-1.828 145.090684,2.591 149.789684,12.432 C152.255684,17.596 153.610684,23.446 154.575684,29.137 C156.304684,39.341 160.358684,43.3 170.536684,44.406 C177.118684,45.122 183.825684,45.938 190.102684,47.902 C199.634684,50.885 205.360684,59.768 205.358684,69.64 C205.357684,79.297 199.447684,88.235 190.317684,91.214 Z\" stroke=\"none\" fill=\"#CF0920\"></path>\n\t\t<path d=\"M78.0720006,92.782 C65.2940006,92.784 54.8620006,82.355 54.8600006,69.579 C54.8580006,56.802 65.2870006,46.369 78.0630006,46.367 C90.8400006,46.365 101.272001,56.794 101.274001,69.57 C101.276001,82.347 90.8470006,92.78 78.0720006,92.782 Z\" stroke=\"none\" fill=\"#000000\"></path>\n\t\t<path d=\"M23.1300737,139.2 C10.3630737,139.168 -0.0319263159,128.703 7.36840638e-05,115.915 C0.0320736841,103.148 10.4960737,92.753 23.2840737,92.786 C36.0510737,92.817 46.4460737,103.282 46.4140737,116.07 C46.3820737,128.837 35.9180737,139.232 23.1300737,139.2 Z\" stroke=\"none\" fill=\"#000000\"></path>\n\t\t<path d=\"M232.962386,139.2 C220.162386,139.273 209.653386,128.92 209.580386,116.167 C209.507386,103.368 219.860386,92.858 232.613386,92.786 C245.412386,92.712 255.921386,103.064 255.995386,115.818 C256.068386,128.617 245.715386,139.127 232.962386,139.2 Z\" stroke=\"none\" fill=\"#000000\"></path>\n\t</g>\n</svg>\n"

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns=\"http://www.w3.org/2000/svg\" height=\"780.18\" viewBox=\"0 0 875.02936 780.17639\" width=\"875.03\" version=\"1.1\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\">\n <g stroke=\"none\" fill=\"#61dafb\">\n  <path d=\"m512.45 391.21a76.266 77.855 0 0 1 -76.266 77.855 76.266 77.855 0 0 1 -76.266 -77.855 76.266 77.855 0 0 1 76.266 -77.855 76.266 77.855 0 0 1 76.266 77.855z\"/>\n  <g fill-rule=\"evenodd\">\n   <path d=\"m277.8 477.26a437.52 180.08 59.793 0 1 -61.2 -466.18 437.52 180.08 59.793 0 1 376.3 291.6 437.52 180.08 59.793 0 1 61.2 466.18 437.52 180.08 59.793 0 1 -376.3 -291.6zm34.163-17.99a399.46 141.49 59.831 0 1 -75.73 -414.16 399.46 141.49 59.831 0 1 323.72 277.69 399.46 141.49 59.831 0 1 75.73 414.16 399.46 141.49 59.831 0 1 -323.72 -277.69z\"/>\n   <path d=\"m282.04 297.29a180.08 437.52 29.793 0 1 373.12 -286.09 180.08 437.52 29.793 0 1 -64.38 471.69 180.08 437.52 29.793 0 1 -373.12 286.09 180.08 437.52 29.793 0 1 64.38 -471.69zm32.661 20.591a141.49 399.46 29.831 0 1 320.81 -272.66 141.49 399.46 29.831 0 1 -78.63 419.19 141.49 399.46 29.831 0 1 -320.81 272.66 141.49 399.46 29.831 0 1 78.63 -419.19z\"/>\n   <path d=\"m440.7 210.54a180.08 437.52 89.793 0 1 434.32 180.09 180.08 437.52 89.793 0 1 -440.69 180.08 180.08 437.52 89.793 0 1 -434.32 -180.08 180.08 437.52 89.793 0 1 440.69 -180.09zm-1.5016 38.581a141.49 399.46 89.831 0 1 396.53 141.5 141.49 399.46 89.831 0 1 -402.35 141.5 141.49 399.46 89.831 0 1 -396.53 -141.5 141.49 399.46 89.831 0 1 402.35 -141.5z\"/>\n  </g>\n </g>\n</svg>\n"

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\n  <g stroke=\"none\" fill=\"#764ABC\">\n    <path d=\"M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z\"/>\n    <path d=\"M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z\"/>\n    <path d=\"M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z\"/>\n  </g>\n</svg>\n"

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 1200\">\n<title>icon-square-big</title>\n<path stroke=\"none\" fill=\"#FFF\" d=\"M600 0l530.3 300v600L600 1200 69.7 900V300z\"/>\n<path stroke=\"none\" fill=\"#8ED6FB\" class=\"st1\" d=\"M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z\"/>\n<path stroke=\"none\" fill=\"#1C78C0\" d=\"M580.8 889.7l-257-141.3v-280l257 148.4v272.9zm36.7 0l257-141.3v-280l-257 148.4v272.9zm-18.3-283.6zM341.2 436l258-141.9 258 141.9-258 149-258-149z\"/>\n</svg>\n"

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjEiCiAgIHdpZHRoPSIyMDg5LjMxOTEiCiAgIGhlaWdodD0iMjA4OS4zMTkxIgogICBpZD0ic3ZnMzA3NyI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMzA5MSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMKICAgICBpZD0iZGVmczMwODkiIC8+CiAgPHBhdGgKICAgICBkPSJtIDEwNDQuNjYsMjI1LjUzNiBjIDQ1NC43LDAgODIzLjMwOCwzNjguNjA4IDgyMy4zMDgsODIzLjMwOCAwLDQ1NC43IC0zNjguNjA4LDgyMy4zMDkgLTgyMy4zMDgsODIzLjMwOSAtNDU0LjcsMCAtODIzLjMwOCwtMzY4LjYwOSAtODIzLjMwOCwtODIzLjMwOSAwLC00NTQuNyAzNjguNjA4LC04MjMuMzA4IDgyMy4zMDgsLTgyMy4zMDggeiIKICAgICBpZD0icGF0aDMwNzkiCiAgICAgc3R5bGU9Im9wYWNpdHk6MC4yO2ZpbGw6IzAwOGZiYjtmaWxsLXJ1bGU6ZXZlbm9kZCIgLz4KICA8cGF0aAogICAgIGQ9Im0gMTA0NC42NiwxMDAgYyA1MjEuNzIxLDAgOTQ0LjY1OSw0MjIuOTM4IDk0NC42NTksOTQ0LjY2IDAsNTIxLjcyMSAtNDIyLjkzOCw5NDQuNjU5IC05NDQuNjU5LDk0NC42NTkgQyA1MjIuOTM4LDE5ODkuMzE5IDEwMCwxNTY2LjM4MSAxMDAsMTA0NC42NiAxMDAsNTIyLjkzOCA1MjIuOTM4LDEwMCAxMDQ0LjY2LDEwMCB6IgogICAgIGlkPSJwYXRoMzA4MSIKICAgICBzdHlsZT0ib3BhY2l0eTowLjI7ZmlsbDojMDA4ZmJiO2ZpbGwtcnVsZTpldmVub2RkIiAvPgogIDxwYXRoCiAgICAgZD0ibSAxMDQ2Ljc1MiwzNjQuNjczIGMgMzg1LjM2OCwwIDY5Ny43NzIsMzEyLjQwMiA2OTcuNzcyLDY5Ny43NzEgMCwzODUuMzY5IC0zMTIuNDA0LDY5Ny43NzMgLTY5Ny43NzIsNjk3Ljc3MyAtMzg1LjM2OSwwIC02OTcuNzcyLC0zMTIuNDA0IC02OTcuNzcyLC02OTcuNzczIDAsLTM4NS4zNjkgMzEyLjQwMywtNjk3Ljc3MSA2OTcuNzcyLC02OTcuNzcxIHoiCiAgICAgaWQ9InBhdGgzMDgzIgogICAgIHN0eWxlPSJmaWxsOiMwMDhmYmI7ZmlsbC1ydWxlOmV2ZW5vZGQiIC8+CiAgPHBhdGgKICAgICBkPSJtIDE0MDguMzksMTA4NC4zNjUgYyAtMTcuMjA1LDAgLTMxLjE2NCwtMTMuOTQ1IC0zMS4xNjQsLTMxLjE1OSAwLDAgMCwtMzEuMTU0IDAsLTMxLjE1NCAwLDAgLTE1Ni41NzgsMCAtMTU2LjU3OCwwIC0xNy4yMDUsMCAtMzEuMTUsLTEzLjk0NiAtMzEuMTUsLTMxLjE0MyAwLC0xNy4yMDggMTMuOTQ1LC0zMS4xNTQgMzEuMTUsLTMxLjE1NCAwLDAgMTg3Ljc0MiwwIDE4Ny43NDIsMCAxNy4yMSwwIDMxLjE1NywxMy45NDYgMzEuMTU3LDMxLjE1NCAwLDAgMCw2Mi4yOTcgMCw2Mi4yOTcgMCwxNy4yMTQgLTEzLjk0NywzMS4xNTkgLTMxLjE1NywzMS4xNTkgeiBtIC0xNTQuNDMzLDAgYyAwLDAgMjguOTkyLDAgMjguOTkyLDAgMCwwIDMzLjMxNiwwIDMzLjMxNiwwIDE3LjE5NywwIDMxLjE0NCwxMy45NDcgMzEuMTQ0LDMxLjE0NSAwLDE3LjIxMyAtMTMuOTQ3LDMxLjE2IC0zMS4xNDQsMzEuMTYgMCwwIC0zMy4zMTYsMCAtMzMuMzE2LDAgMCwwIC0yOC45OTIsMCAtMjguOTkyLDAgMCwwIC0zMy4zMDksMCAtMzMuMzA5LDAgLTUuMTgzLDAgLTEwLjA1OSwtMS4yNjYgLTE0LjM1NCwtMy41MDIgMCwwIC0xODEuNjgxLC0xMjEuMTE2IC0xODEuNjgxLC0xMjEuMTE2IDAsMCAtNTIuMzY0LDAgLTUyLjM2NCwwIC0xNy4yMDYsMCAtMzEuMTUzLC0xMy45NDYgLTMxLjE1MywtMzEuMTQzIDAsLTE3LjIwOCAxMy45NDcsLTMxLjE1NCAzMS4xNTMsLTMxLjE1NCAwLDAgNjIuMzA1LDAgNjIuMzA1LDAgNi43MTEsMCAxMi45MzksMi4xMjMgMTguMDI3LDUuNzM4IDAsMCAxNzcuNjEzLDExOC44NzIgMTc3LjYxMywxMTguODcyIDAsMCAyMy43NjMsMCAyMy43NjMsMCB6IG0gLTIxOS40LDAgYyAxNy4xOTgsMCAzMS4xNDcsMTMuOTQ3IDMxLjE0NywzMS4xNDUgMCwxNy4yMTMgLTEzLjk0OSwzMS4xNiAtMzEuMTQ3LDMxLjE2IDAsMCAtNjIuMzEzLDAgLTYyLjMxMywwIC01LjE2OSwwIC0xMC4wNTksLTEuMjY2IC0xNC4zNSwtMy41MDIgMCwwIC0xODEuNjg0LC0xMjEuMTE2IC0xODEuNjg0LC0xMjEuMTE2IDAsMCAtNTIuMzU0LDAgLTUyLjM1NCwwIC0xNy4yMDgsMCAtMzEuMTU0LC0xMy45NDYgLTMxLjE1NCwtMzEuMTQzIDAsLTE3LjIwOCAxMy45NDYsLTMxLjE1NCAzMS4xNTQsLTMxLjE1NCAwLDAgNjIuMzAzLDAgNjIuMzAzLDAgNi43MTEsMCAxMi45NCwyLjEyMyAxOC4wMzUsNS43MzggMCwwIDE3Ny42MDUsMTE4Ljg3MiAxNzcuNjA1LDExOC44NzIgMCwwIDUyLjc1OCwwIDUyLjc1OCwwIHogbSAtMzEwLjcwMSwwIGMgMCwwIDYyLjMwMywwIDYyLjMwMywwIDE3LjIwOCwwIDMxLjE1MywxMy45NDcgMzEuMTUzLDMxLjE1NCAwLDE3LjIwNCAtMTMuOTQ1LDMxLjE1MSAtMzEuMTUzLDMxLjE1MSAwLDAgLTYyLjMwMywwIC02Mi4zMDMsMCAtMTcuMjA4LDAgLTMxLjE1NCwtMTMuOTQ3IC0zMS4xNTQsLTMxLjE1MSAwLC0xNy4yMDcgMTMuOTQ2LC0zMS4xNTQgMzEuMTU0LC0zMS4xNTQgeiIKICAgICBpZD0icGF0aDMwODUiCiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLXJ1bGU6ZXZlbm9kZCIgLz4KPC9zdmc+Cg=="

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./atoms/Atom/index.js": 37,
	"./atoms/Badge/index.js": 38,
	"./atoms/Block/index.js": 39,
	"./atoms/Button/index.js": 40,
	"./atoms/Caption/index.js": 41,
	"./atoms/Heading/index.js": 42,
	"./atoms/HorizontalRule/index.js": 43,
	"./atoms/Icon/index.js": 44,
	"./atoms/Input/index.js": 45,
	"./atoms/Label/index.js": 46,
	"./atoms/Link/index.js": 47,
	"./atoms/List/index.js": 48,
	"./atoms/LogoImage/index.js": 49,
	"./atoms/Paragraph/index.js": 50,
	"./atoms/PreformattedText/index.js": 51,
	"./atoms/Spinner/index.js": 52,
	"./atoms/TableCell/index.js": 53,
	"./atoms/TableRow/index.js": 54,
	"./atoms/Tooltip/index.js": 55,
	"./molecules/Blockquote/index.js": 56,
	"./molecules/CodeSponsor/index.js": 57,
	"./molecules/Feature/index.js": 58,
	"./molecules/Field/index.js": 59,
	"./molecules/IconButton/index.js": 60,
	"./molecules/IconLink/index.js": 61,
	"./molecules/Modal/index.js": 62,
	"./molecules/Molecule/index.js": 63,
	"./molecules/Post/index.js": 64,
	"./molecules/Price/index.js": 65,
	"./molecules/PrimaryNavigation/index.js": 66,
	"./molecules/Slider/index.js": 67,
	"./molecules/Table/index.js": 68,
	"./organisms/ConfirmModal/index.js": 69,
	"./organisms/FeatureList/index.js": 70,
	"./organisms/Footer/index.js": 71,
	"./organisms/Header/index.js": 72,
	"./organisms/Hero/index.js": 73,
	"./organisms/LoginModal/index.js": 74,
	"./organisms/Organism/index.js": 75,
	"./organisms/PostForm/index.js": 76,
	"./organisms/PostList/index.js": 77,
	"./organisms/ReduxField/index.js": 78,
	"./organisms/UserButton/index.js": 79,
	"./pages/DashboardPage/index.js": 163,
	"./pages/GenericPage/index.js": 80,
	"./pages/HomePage/index.js": 81,
	"./pages/NotFoundPage/index.js": 82,
	"./templates/GenericTemplate/index.js": 84,
	"./templates/PageTemplate/index.js": 85
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
webpackContext.id = 131;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arc.svg": 113,
	"./atomic-design.svg": 114,
	"./bcc.svg": 115,
	"./btc.svg": 116,
	"./close.svg": 117,
	"./copy.svg": 118,
	"./dist.svg": 119,
	"./docs.svg": 120,
	"./facebook.svg": 121,
	"./github.svg": 122,
	"./google.svg": 123,
	"./heart.svg": 124,
	"./jest.svg": 125,
	"./react-router.svg": 126,
	"./react.svg": 127,
	"./redux.svg": 128,
	"./webpack.svg": 129
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
webpackContext.id = 132;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ConfirmModal.js": 87,
	"./Generic.js": 88,
	"./GoogleTagManager.js": 89,
	"./LoginModal.js": 90,
	"./Modal.js": 91,
	"./PostForm.js": 92,
	"./PostList.js": 93,
	"./Price.js": 94,
	"./UserButton.js": 95
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
webpackContext.id = 133;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./entities/actions.js": 12,
	"./exchange/actions.js": 13,
	"./gtm/actions.js": 22,
	"./modal/actions.js": 23,
	"./resource/actions.js": 14,
	"./social/actions.js": 15
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
webpackContext.id = 134;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./entities/middleware.js": 100
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
webpackContext.id = 135;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./entities/reducer.js": 101,
	"./exchange/reducer.js": 102,
	"./modal/reducer.js": 106,
	"./resource/reducer.js": 108,
	"./social/reducer.js": 111
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
webpackContext.id = 136;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./exchange/sagas.js": 103,
	"./gtm/sagas.js": 104,
	"./resource/sagas.js": 109,
	"./social/sagas.js": 112
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
webpackContext.id = 137;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./entities/selectors.js": 20,
	"./exchange/selectors.js": 21,
	"./modal/selectors.js": 24,
	"./resource/selectors.js": 25,
	"./social/selectors.js": 26
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
webpackContext.id = 138;

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = require("lodash/camelCase");

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = require("lodash/findIndex");

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = require("lodash/mergeWith");

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = require("lodash/upperFirst");

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Link");

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/NavLink");

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = require("styled-theme/composer");

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmail");

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isIn");

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isInt");

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isURL");

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(3);

var _containers = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DashboardPage = function DashboardPage() {
  return _react2.default.createElement(
    _components.PageTemplate,
    { header: _react2.default.createElement(_components.Header, null), footer: _react2.default.createElement(_components.Footer, null) },
    _react2.default.createElement(_containers.Price, null)
  );
};

var _default = DashboardPage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DashboardPage, 'DashboardPage', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/pages/DashboardPage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/pages/DashboardPage/index.js');
}();

;

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map