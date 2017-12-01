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
/******/ 	return __webpack_require__(__webpack_require__.s = 118);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
var req = __webpack_require__(73);

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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(25);

var config = {
  all: {
    env: "development" || 'development',
    isDev: "development" !== 'production',
    basename: "",
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    fbAppId: '',
    gtmId: 'GTM-PGWWBDS',
    bitfinex: {
      apiUrl: 'https://api.bitfinex.com/v2/',
      symbols: 'tBTCUSD'
    }
  },
  test: {},
  development: {},
  production: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Actions
var req = __webpack_require__(75);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Selectors
var upperFirst = __webpack_require__(87);

var req = __webpack_require__(79);

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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux-saga-thunk");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-router-server");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Containers
var req = __webpack_require__(74);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tickers = exports.askSize = exports.askPeriod = exports.ask = exports.bidSize = exports.bidPeriod = exports.bid = exports.posts = undefined;

var _normalizr = __webpack_require__(14);

var posts = exports.posts = new _normalizr.schema.Entity('posts'); // https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
var bid = exports.bid = new _normalizr.schema.Entity('bid');
var bidPeriod = exports.bidPeriod = new _normalizr.schema.Entity('bidPeriod');
var bidSize = exports.bidSize = new _normalizr.schema.Entity('bidSize');
var ask = exports.ask = new _normalizr.schema.Entity('ask');
var askPeriod = exports.askPeriod = new _normalizr.schema.Entity('baskPeriod');
var askSize = exports.askSize = new _normalizr.schema.Entity('askSize');

var tickers = exports.tickers = new _normalizr.schema.Array({
  bid: bid,
  bidPeriod: bidPeriod,
  bidSize: bidSize
}, function (input) {
  console.log('input = ', input);
  return input;
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(posts, 'posts', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/schemas.js');

  __REACT_HOT_LOADER__.register(bid, 'bid', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/schemas.js');

  __REACT_HOT_LOADER__.register(bidPeriod, 'bidPeriod', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/schemas.js');

  __REACT_HOT_LOADER__.register(bidSize, 'bidSize', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/schemas.js');

  __REACT_HOT_LOADER__.register(ask, 'ask', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/schemas.js');

  __REACT_HOT_LOADER__.register(askPeriod, 'askPeriod', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/schemas.js');

  __REACT_HOT_LOADER__.register(askSize, 'askSize', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/schemas.js');

  __REACT_HOT_LOADER__.register(tickers, 'tickers', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/store/entities/schemas.js');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDenormalizedList = exports.getDenormalizedDetail = exports.getList = exports.getDetail = exports.getEntity = exports.initialState = undefined;

var _normalizr = __webpack_require__(14);

var _schemas = __webpack_require__(18);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Dialog");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Typography");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("simple-load-script");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(80);

var _path = __webpack_require__(107);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(81);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(113);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _styledComponents = __webpack_require__(16);

var _server = __webpack_require__(109);

var _reactRedux = __webpack_require__(3);

var _reactRouter = __webpack_require__(110);

var _reactRouterServer = __webpack_require__(15);

var _config = __webpack_require__(4);

var _configure = __webpack_require__(61);

var _configure2 = _interopRequireDefault(_configure);

var _api = __webpack_require__(59);

var _api2 = _interopRequireDefault(_api);

var _App = __webpack_require__(33);

var _App2 = _interopRequireDefault(_App);

var _Html = __webpack_require__(35);

var _Html2 = _interopRequireDefault(_Html);

var _Error = __webpack_require__(34);

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(111);

var _reactHelmet = __webpack_require__(28);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _components = __webpack_require__(2);

var _containers = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        'CryptoTradeBot'
      ),
      _react2.default.createElement('meta', { charSet: 'UTF-8' }),
      _react2.default.createElement('meta', { name: 'description', content: '' }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
      _react2.default.createElement('meta', { property: 'og:site_name', content: 'CryptoTradeBot' }),
      _react2.default.createElement('meta', { property: 'og:image', content: 'thumbnail.png' }),
      _react2.default.createElement('meta', { property: 'og:image:type', content: 'image/png' }),
      _react2.default.createElement('meta', { property: 'og:image:width', content: '1200' }),
      _react2.default.createElement('meta', { property: 'og:image:height', content: '630' }),
      _react2.default.createElement('link', { rel: 'icon', href: 'icon.png' })
    ),
    _react2.default.createElement(_containers.GoogleTagManager, null),
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _components.HomePage, exact: true }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard', component: _components.DashboardPage }),
      _react2.default.createElement(_reactRouterDom.Route, { component: _components.NotFoundPage })
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
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable react/no-danger */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(28);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(7);

var _Table = __webpack_require__(103);

var _Table2 = _interopRequireDefault(_Table);

var _Paper = __webpack_require__(101);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    table: {
      minWidth: 700
    }
  };
};

var id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id: id, name: name, calories: calories, fat: fat, carbs: carbs, protein: protein };
}

var data = [createData('Frozen yoghurt', 159, 6.0, 24, 4.0), createData('Ice cream sandwich', 237, 9.0, 37, 4.3), createData('Eclair', 262, 16.0, 24, 6.0), createData('Cupcake', 305, 3.7, 67, 4.3), createData('Gingerbread', 356, 16.0, 49, 3.9)];

function BasicTable(props) {
  var classes = props.classes;


  return _react2.default.createElement(
    _Paper2.default,
    { className: classes.root },
    _react2.default.createElement(
      _Table2.default,
      { className: classes.table },
      _react2.default.createElement(
        _Table.TableHead,
        null,
        _react2.default.createElement(
          _Table.TableRow,
          null,
          _react2.default.createElement(
            _Table.TableCell,
            null,
            'Dessert (100g serving)'
          ),
          _react2.default.createElement(
            _Table.TableCell,
            { numeric: true },
            'Calories'
          ),
          _react2.default.createElement(
            _Table.TableCell,
            { numeric: true },
            'Fat (g)'
          ),
          _react2.default.createElement(
            _Table.TableCell,
            { numeric: true },
            'Carbs (g)'
          ),
          _react2.default.createElement(
            _Table.TableCell,
            { numeric: true },
            'Protein (g)'
          )
        )
      ),
      _react2.default.createElement(
        _Table.TableBody,
        null,
        data.map(function (n) {
          return _react2.default.createElement(
            _Table.TableRow,
            { key: n.id },
            _react2.default.createElement(
              _Table.TableCell,
              null,
              n.name
            ),
            _react2.default.createElement(
              _Table.TableCell,
              { numeric: true },
              n.calories
            ),
            _react2.default.createElement(
              _Table.TableCell,
              { numeric: true },
              n.fat
            ),
            _react2.default.createElement(
              _Table.TableCell,
              { numeric: true },
              n.carbs
            ),
            _react2.default.createElement(
              _Table.TableCell,
              { numeric: true },
              n.protein
            )
          );
        })
      )
    )
  );
}

BasicTable.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(BasicTable);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/BasicTable/index.js');

  __REACT_HOT_LOADER__.register(id, 'id', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/BasicTable/index.js');

  __REACT_HOT_LOADER__.register(createData, 'createData', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/BasicTable/index.js');

  __REACT_HOT_LOADER__.register(data, 'data', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/BasicTable/index.js');

  __REACT_HOT_LOADER__.register(BasicTable, 'BasicTable', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/BasicTable/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/BasicTable/index.js');
}();

;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(13);

var _Button2 = _interopRequireDefault(_Button);

var _TextField = __webpack_require__(104);

var _TextField2 = _interopRequireDefault(_TextField);

var _Dialog = __webpack_require__(26);

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormDialog = function (_React$Component) {
  _inherits(FormDialog, _React$Component);

  function FormDialog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormDialog.__proto__ || Object.getPrototypeOf(FormDialog)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleClickOpen = function () {
      var _this2;

      return (_this2 = _this).__handleClickOpen__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleRequestClose = function () {
      var _this3;

      return (_this3 = _this).__handleRequestClose__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormDialog, [{
    key: '__handleRequestClose__REACT_HOT_LOADER__',
    value: function __handleRequestClose__REACT_HOT_LOADER__() {
      return this.__handleRequestClose__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClickOpen__REACT_HOT_LOADER__',
    value: function __handleClickOpen__REACT_HOT_LOADER__() {
      return this.__handleClickOpen__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClickOpen__REACT_HOT_LOADER__',
    value: function __handleClickOpen__REACT_HOT_LOADER__() {
      this.setState({ open: true });
    }
  }, {
    key: '__handleRequestClose__REACT_HOT_LOADER__',
    value: function __handleRequestClose__REACT_HOT_LOADER__() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Button2.default,
          { onClick: this.handleClickOpen },
          'Open form dialog'
        ),
        _react2.default.createElement(
          _Dialog2.default,
          { open: this.state.open, onRequestClose: this.handleRequestClose },
          _react2.default.createElement(
            _Dialog.DialogTitle,
            null,
            'Subscribe'
          ),
          _react2.default.createElement(
            _Dialog.DialogContent,
            null,
            _react2.default.createElement(
              _Dialog.DialogContentText,
              null,
              'To subscribe to this website, please enter your email address here. We will send updates occationally.'
            ),
            _react2.default.createElement(_TextField2.default, {
              autoFocus: true,
              margin: 'dense',
              id: 'name',
              label: 'Email Address',
              type: 'email',
              fullWidth: true
            })
          ),
          _react2.default.createElement(
            _Dialog.DialogActions,
            null,
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.handleRequestClose, color: 'primary' },
              'Cancel'
            ),
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.handleRequestClose, color: 'primary' },
              'Subscribe'
            )
          )
        )
      );
    }
  }]);

  return FormDialog;
}(_react2.default.Component);

var _default = FormDialog;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FormDialog, 'FormDialog', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/FormDialog/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/FormDialog/index.js');
}();

;

/***/ }),
/* 38 */
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

var _styles = __webpack_require__(7);

var _BottomNavigation = __webpack_require__(95);

var _BottomNavigation2 = _interopRequireDefault(_BottomNavigation);

var _Restore = __webpack_require__(93);

var _Restore2 = _interopRequireDefault(_Restore);

var _Favorite = __webpack_require__(90);

var _Favorite2 = _interopRequireDefault(_Favorite);

var _LocationOn = __webpack_require__(91);

var _LocationOn2 = _interopRequireDefault(_LocationOn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    width: '100%'
  }
};

var SimpleBottomNavigation = function (_React$Component) {
  _inherits(SimpleBottomNavigation, _React$Component);

  function SimpleBottomNavigation() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SimpleBottomNavigation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SimpleBottomNavigation.__proto__ || Object.getPrototypeOf(SimpleBottomNavigation)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: 0
    }, _this.handleChange = function () {
      var _this2;

      return (_this2 = _this).__handleChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SimpleBottomNavigation, [{
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__() {
      return this.__handleChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__(event, value) {
      this.setState({ value: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var value = this.state.value;


      return _react2.default.createElement(
        _BottomNavigation2.default,
        {
          value: value,
          onChange: this.handleChange,
          showLabels: true,
          className: classes.root
        },
        _react2.default.createElement(_BottomNavigation.BottomNavigationButton, { label: 'Recents', icon: _react2.default.createElement(_Restore2.default, null) }),
        _react2.default.createElement(_BottomNavigation.BottomNavigationButton, { label: 'Favorites', icon: _react2.default.createElement(_Favorite2.default, null) }),
        _react2.default.createElement(_BottomNavigation.BottomNavigationButton, { label: 'Nearby', icon: _react2.default.createElement(_LocationOn2.default, null) })
      );
    }
  }]);

  return SimpleBottomNavigation;
}(_react2.default.Component);

SimpleBottomNavigation.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(SimpleBottomNavigation);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/SimpleBottomNavigation/index.js');

  __REACT_HOT_LOADER__.register(SimpleBottomNavigation, 'SimpleBottomNavigation', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/SimpleBottomNavigation/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/SimpleBottomNavigation/index.js');
}();

;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(7);

var _Card = __webpack_require__(96);

var _Card2 = _interopRequireDefault(_Card);

var _Button = __webpack_require__(13);

var _Button2 = _interopRequireDefault(_Button);

var _Typography = __webpack_require__(27);

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  card: {
    width: '100%',
    marginTop: 10
  },
  media: {
    height: 200
  }
};

function SimpleMediaCard(props) {
  var classes = props.classes;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Card2.default,
      { className: classes.card },
      _react2.default.createElement(_Card.CardMedia, {
        className: classes.media,
        image: 'https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg',
        title: 'Contemplative Reptile'
      }),
      _react2.default.createElement(
        _Card.CardContent,
        null,
        _react2.default.createElement(
          _Typography2.default,
          { type: 'headline', component: 'h2' },
          'CryptoTradeBot'
        ),
        _react2.default.createElement(
          _Typography2.default,
          { component: 'p' },
          'Manage your cryptocurrency portfolio, trade & receive buy signals'
        )
      ),
      _react2.default.createElement(
        _Card.CardActions,
        null,
        _react2.default.createElement(
          _Button2.default,
          { dense: true, color: 'primary' },
          'Login'
        ),
        _react2.default.createElement(
          _Button2.default,
          { dense: true, color: 'primary' },
          'Create account'
        )
      )
    )
  );
}

SimpleMediaCard.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(SimpleMediaCard);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/SimpleMediaCard/index.js');

  __REACT_HOT_LOADER__.register(SimpleMediaCard, 'SimpleMediaCard', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/SimpleMediaCard/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/SimpleMediaCard/index.js');
}();

;

/***/ }),
/* 40 */
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

var _styles = __webpack_require__(7);

var _Add = __webpack_require__(89);

var _Add2 = _interopRequireDefault(_Add);

var _Button = __webpack_require__(13);

var _Button2 = _interopRequireDefault(_Button);

var _Tooltip = __webpack_require__(106);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Form = __webpack_require__(97);

var _Input = __webpack_require__(99);

var _Input2 = _interopRequireDefault(_Input);

var _Select = __webpack_require__(102);

var _Select2 = _interopRequireDefault(_Select);

var _Dialog = __webpack_require__(26);

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    absolute: {
      flip: false,
      position: 'absolute',
      bottom: 32,
      right: 32
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 150
    }
  };
};

var SimpleTooltips = function (_Component) {
  _inherits(SimpleTooltips, _Component);

  function SimpleTooltips() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SimpleTooltips);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SimpleTooltips.__proto__ || Object.getPrototypeOf(SimpleTooltips)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false,
      currencyPair: ''
    }, _this.handleChange = function () {
      var _this2;

      return (_this2 = _this).__handleChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleClickOpen = function () {
      var _this3;

      return (_this3 = _this).__handleClickOpen__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleRequestClose = function () {
      var _this4;

      return (_this4 = _this).__handleRequestClose__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SimpleTooltips, [{
    key: '__handleRequestClose__REACT_HOT_LOADER__',
    value: function __handleRequestClose__REACT_HOT_LOADER__() {
      return this.__handleRequestClose__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClickOpen__REACT_HOT_LOADER__',
    value: function __handleClickOpen__REACT_HOT_LOADER__() {
      return this.__handleClickOpen__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__() {
      return this.__handleChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__(name) {
      var _this5 = this;

      return function (event) {
        _this5.setState(_defineProperty({}, name, Number(event.target.value)));
      };
    }
  }, {
    key: '__handleClickOpen__REACT_HOT_LOADER__',
    value: function __handleClickOpen__REACT_HOT_LOADER__() {
      this.setState({ open: true });
    }
  }, {
    key: '__handleRequestClose__REACT_HOT_LOADER__',
    value: function __handleRequestClose__REACT_HOT_LOADER__() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Tooltip2.default,
          { placement: 'bottom', title: 'Create order' },
          _react2.default.createElement(
            _Button2.default,
            { onClick: this.handleClickOpen, fab: true, color: 'primary', className: classes.absolute },
            _react2.default.createElement(_Add2.default, null)
          )
        ),
        _react2.default.createElement(
          _Dialog2.default,
          { open: this.state.open, onRequestClose: this.handleRequestClose },
          _react2.default.createElement(
            _Dialog.DialogTitle,
            null,
            'Create order'
          ),
          _react2.default.createElement(
            _Dialog.DialogContent,
            null,
            _react2.default.createElement(
              _Dialog.DialogContentText,
              null,
              'To subscribe to this website, please enter your email address here.'
            ),
            _react2.default.createElement(
              'form',
              { className: classes.container },
              _react2.default.createElement(
                _Form.FormControl,
                { className: classes.formControl },
                _react2.default.createElement(
                  _Input.InputLabel,
                  { htmlFor: 'age-native-simple' },
                  'Select currency pair'
                ),
                _react2.default.createElement(
                  _Select2.default,
                  {
                    native: true,
                    value: this.state.currencyPair,
                    onChange: this.handleChange('currencyPair'),
                    input: _react2.default.createElement(_Input2.default, { id: 'age-native-simple' })
                  },
                  _react2.default.createElement('option', { value: '' }),
                  _react2.default.createElement(
                    'option',
                    { value: 'BTCUSD' },
                    'BTCUSD'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'ETHUSD' },
                    'ETHUSD'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'LTCUSD' },
                    'LTCUSD'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _Dialog.DialogActions,
            null,
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.handleRequestClose, color: 'primary' },
              'Cancel'
            ),
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.handleRequestClose, color: 'primary' },
              'Submit'
            )
          )
        )
      );
    }
  }]);

  return SimpleTooltips;
}(_react.Component);

SimpleTooltips.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(SimpleTooltips);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/SimpleTooltips/index.js');

  __REACT_HOT_LOADER__.register(SimpleTooltips, 'SimpleTooltips', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/SimpleTooltips/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/atoms/SimpleTooltips/index.js');
}();

;

/***/ }),
/* 41 */
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

var _styles = __webpack_require__(7);

var _AppBar = __webpack_require__(94);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(105);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(27);

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = __webpack_require__(98);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = __webpack_require__(92);

var _Menu2 = _interopRequireDefault(_Menu);

var _AccountCircle = __webpack_require__(88);

var _AccountCircle2 = _interopRequireDefault(_AccountCircle);

var _Menu3 = __webpack_require__(100);

var _Menu4 = _interopRequireDefault(_Menu3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles() {
  return {
    root: {
      width: '100%'
    },
    flex: {
      flex: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    }
  };
};

var MenuAppBar = function (_Component) {
  _inherits(MenuAppBar, _Component);

  function MenuAppBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MenuAppBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuAppBar.__proto__ || Object.getPrototypeOf(MenuAppBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      auth: true,
      anchorEl: null
    }, _this.handleChange = function () {
      var _this2;

      return (_this2 = _this).__handleChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleMenu = function () {
      var _this3;

      return (_this3 = _this).__handleMenu__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleRequestClose = function () {
      var _this4;

      return (_this4 = _this).__handleRequestClose__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MenuAppBar, [{
    key: '__handleRequestClose__REACT_HOT_LOADER__',
    value: function __handleRequestClose__REACT_HOT_LOADER__() {
      return this.__handleRequestClose__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleMenu__REACT_HOT_LOADER__',
    value: function __handleMenu__REACT_HOT_LOADER__() {
      return this.__handleMenu__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__() {
      return this.__handleChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__(event, checked) {
      this.setState({ auth: checked });
    }
  }, {
    key: '__handleMenu__REACT_HOT_LOADER__',
    value: function __handleMenu__REACT_HOT_LOADER__(event) {
      this.setState({ anchorEl: event.currentTarget });
    }
  }, {
    key: '__handleRequestClose__REACT_HOT_LOADER__',
    value: function __handleRequestClose__REACT_HOT_LOADER__() {
      this.setState({ anchorEl: null });
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          auth = _state.auth,
          anchorEl = _state.anchorEl;

      var open = Boolean(anchorEl);

      return _react2.default.createElement(
        _AppBar2.default,
        { position: 'static', className: classes.root },
        _react2.default.createElement(
          _Toolbar2.default,
          null,
          _react2.default.createElement(
            _IconButton2.default,
            { className: classes.menuButton, color: 'contrast', 'aria-label': 'Menu' },
            _react2.default.createElement(_Menu2.default, null)
          ),
          _react2.default.createElement(
            _Typography2.default,
            { type: 'title', color: 'inherit', className: classes.flex },
            'CryptoBot'
          ),
          auth && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _IconButton2.default,
              {
                'aria-owns': open ? 'menu-appbar' : null,
                'aria-haspopup': 'true',
                onClick: this.handleMenu,
                color: 'contrast'
              },
              _react2.default.createElement(_AccountCircle2.default, null)
            ),
            _react2.default.createElement(
              _Menu4.default,
              {
                id: 'menu-appbar',
                anchorEl: anchorEl,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right'
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'right'
                },
                open: open,
                onRequestClose: this.handleRequestClose
              },
              _react2.default.createElement(
                _Menu3.MenuItem,
                { onClick: this.handleRequestClose },
                'Profile'
              ),
              _react2.default.createElement(
                _Menu3.MenuItem,
                { onClick: this.handleRequestClose },
                'My account'
              )
            )
          )
        )
      );
    }
  }]);

  return MenuAppBar;
}(_react.Component);

MenuAppBar.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(MenuAppBar);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/AppBar/index.js');

  __REACT_HOT_LOADER__.register(MenuAppBar, 'MenuAppBar', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/AppBar/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/AppBar/index.js');
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Currency = function Currency(data) {
  return _react2.default.createElement(
    'p',
    null,
    data
  );
};

Currency.propTypes = {
  data: _propTypes2.default.array.isRequired
};

var _default = Currency;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Currency, 'Currency', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Currency/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Currency/index.js');
}();

;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Post = function Post(_ref) {
  var title = _ref.title,
      body = _ref.body,
      props = _objectWithoutProperties(_ref, ['title', 'body']);

  return _react2.default.createElement(
    'div',
    props,
    _react2.default.createElement(
      'h2',
      null,
      title
    ),
    _react2.default.createElement(
      'p',
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

  __REACT_HOT_LOADER__.register(Post, 'Post', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Post/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/molecules/Post/index.js');
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

var _styledComponents = __webpack_require__(16);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'CurrencyList__Wrapper'
})(['\n  & > * {\n    margin: 1rem;\n  }\n']);

var CurrencyList = function CurrencyList(_ref) {
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
    list.map(function (currency) {
      return _react2.default.createElement(_components.Currency, _extends({ key: currency }, currency));
    })
  );
};

CurrencyList.propTypes = {
  list: _propTypes2.default.arrayOf(_propTypes2.default.array).isRequired,
  loading: _propTypes2.default.bool,
  failed: _propTypes2.default.bool
};

var _default = CurrencyList;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/CurrencyList/index.js');

  __REACT_HOT_LOADER__.register(CurrencyList, 'CurrencyList', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/CurrencyList/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/organisms/CurrencyList/index.js');
}();

;

/***/ }),
/* 45 */
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

var _styledComponents = __webpack_require__(16);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(2);

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(2);

var _containers = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DashboardPage = function DashboardPage() {
  return _react2.default.createElement(
    _components.PageTemplate,
    null,
    _react2.default.createElement(_containers.CurrencyList, null)
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

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    _components.PageTemplate,
    null,
    _react2.default.createElement(_components.SimpleMediaCard, null)
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

var _components = __webpack_require__(2);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageTemplate = function PageTemplate(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_components.AppBar, null),
    children,
    _react2.default.createElement(_components.SimpleTooltips, null)
  );
};

PageTemplate.propTypes = {
  children: _propTypes2.default.any.isRequired
};

var _default = PageTemplate;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PageTemplate, 'PageTemplate', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/components/templates/PageTemplate/index.js');
}();

;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(5);

var _components = __webpack_require__(2);

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
/* 51 */
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

var _reactRedux = __webpack_require__(3);

var _reactRouterServer = __webpack_require__(15);

var _reduxSagaThunk = __webpack_require__(8);

var _selectors = __webpack_require__(6);

var _actions = __webpack_require__(5);

var _config = __webpack_require__(4);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrencyListContainer = function (_Component) {
  _inherits(CurrencyListContainer, _Component);

  function CurrencyListContainer() {
    _classCallCheck(this, CurrencyListContainer);

    return _possibleConstructorReturn(this, (CurrencyListContainer.__proto__ || Object.getPrototypeOf(CurrencyListContainer)).apply(this, arguments));
  }

  _createClass(CurrencyListContainer, [{
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

      console.log('list = ', list);
      return _react2.default.createElement(_components.CurrencyList, { list: list, loading: loading, failed: failed });
    }
  }]);

  return CurrencyListContainer;
}(_react.Component);

CurrencyListContainer.propTypes = {
  list: _propTypes2.default.arrayOf(_propTypes2.default.array).isRequired,
  loading: _propTypes2.default.bool,
  failed: _propTypes2.default.bool,
  readList: _propTypes2.default.func.isRequired,
  hasServerState: _propTypes2.default.bool,
  setServerState: _propTypes2.default.func.isRequired,
  cleanServerState: _propTypes2.default.func.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    list: _selectors.fromEntities.getList(state, 'tickers', _selectors.fromResource.getList(state, 'tickers')),
    loading: (0, _reduxSagaThunk.isPending)(state, 'tickersListRead'),
    failed: (0, _reduxSagaThunk.hasFailed)(state, 'tickersListRead')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    readList: function readList() {
      return dispatch((0, _actions.resourceListReadRequest)('tickers', { symbols: _config.bitfinex.symbols }));
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

var _default = withServerState((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CurrencyListContainer));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CurrencyListContainer, 'CurrencyListContainer', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/CurrencyList.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/CurrencyList.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/CurrencyList.js');

  __REACT_HOT_LOADER__.register(withServerState, 'withServerState', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/CurrencyList.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/giorgioagapov/Projects/CryptoTradeBot/src/containers/CurrencyList.js');
}();

;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _selectors = __webpack_require__(6);

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
/* 53 */
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

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(5);

var _config = __webpack_require__(4);

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
/* 54 */
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

var _reactRedux = __webpack_require__(3);

var _config = __webpack_require__(4);

var _selectors = __webpack_require__(6);

var _actions = __webpack_require__(5);

var _components = __webpack_require__(2);

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _selectors = __webpack_require__(6);

var _actions = __webpack_require__(5);

var _components = __webpack_require__(2);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(30);

var _actions = __webpack_require__(5);

var _validation = __webpack_require__(60);

var _components = __webpack_require__(2);

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
/* 57 */
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

var _reactRedux = __webpack_require__(3);

var _reactRouterServer = __webpack_require__(15);

var _reduxSagaThunk = __webpack_require__(8);

var _selectors = __webpack_require__(6);

var _actions = __webpack_require__(5);

var _config = __webpack_require__(4);

var _components = __webpack_require__(2);

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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _selectors = __webpack_require__(6);

var _actions = __webpack_require__(5);

var _components = __webpack_require__(2);

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseEndpoint = exports.parseSettings = exports.parseJSON = exports.checkStatus = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(82);

var _queryString = __webpack_require__(108);

var _merge = __webpack_require__(25);

var _merge2 = _interopRequireDefault(_merge);

var _config = __webpack_require__(4);

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
  var url = endpoint.indexOf('http') === 0 ? endpoint : _config.bitfinex.apiUrl + endpoint;
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createValidator = exports.match = exports.oneOf = exports.integer = exports.maxLength = exports.minLength = exports.required = exports.url = exports.email = undefined;

var _isEmail = __webpack_require__(114);

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isInt = __webpack_require__(116);

var _isInt2 = _interopRequireDefault(_isInt);

var _isIn = __webpack_require__(115);

var _isIn2 = _interopRequireDefault(_isIn);

var _isURL = __webpack_require__(117);

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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(29);

var _reduxSaga = __webpack_require__(112);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _config = __webpack_require__(4);

var _middlewares = __webpack_require__(65);

var _middlewares2 = _interopRequireDefault(_middlewares);

var _reducer = __webpack_require__(67);

var _reducer2 = _interopRequireDefault(_reducer);

var _sagas = __webpack_require__(70);

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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities


var _normalizr = __webpack_require__(14);

var _config = __webpack_require__(4);

var _actions = __webpack_require__(10);

var _schemas = __webpack_require__(18);

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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mergeWith = __webpack_require__(86);

var _mergeWith2 = _interopRequireDefault(_mergeWith);

var _selectors = __webpack_require__(19);

var _actions = __webpack_require__(10);

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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.track = track;
exports.startGTM = startGTM;
exports.watchAllActions = watchAllActions;
exports.watchGTMStart = watchGTMStart;

var _simpleLoadScript = __webpack_require__(31);

var _simpleLoadScript2 = _interopRequireDefault(_simpleLoadScript);

var _effects = __webpack_require__(9);

var _actions = __webpack_require__(20);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(track),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(startGTM),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(watchAllActions),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(watchGTMStart); // https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm


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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(8),
    thunkMiddleware = _require.middleware;

var req = __webpack_require__(76);

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal


var _selectors = __webpack_require__(22);

var _actions = __webpack_require__(21);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _camelCase = __webpack_require__(83);

var _camelCase2 = _interopRequireDefault(_camelCase);

var _redux = __webpack_require__(29);

var _reduxForm = __webpack_require__(30);

var _reduxSagaThunk = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/diegohaz/arc/wiki/Reducers
var reducers = {
  form: _reduxForm.reducer,
  thunk: _reduxSagaThunk.reducer
};

var req = __webpack_require__(77);

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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource


var _findIndex = __webpack_require__(84);

var _findIndex2 = _interopRequireDefault(_findIndex);

var _get = __webpack_require__(85);

var _get2 = _interopRequireDefault(_get);

var _selectors = __webpack_require__(23);

var _actions = __webpack_require__(11);

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
/* 69 */
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

var _effects = __webpack_require__(9);

var _actions = __webpack_require__(11);

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _effects = __webpack_require__(9);

var req = __webpack_require__(78); // https://github.com/diegohaz/arc/wiki/Sagas


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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social


var _selectors = __webpack_require__(24);

var _actions = __webpack_require__(12);

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
/* 72 */
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

var _simpleLoadScript = __webpack_require__(31);

var _simpleLoadScript2 = _interopRequireDefault(_simpleLoadScript);

var _effects = __webpack_require__(9);

var _actions = __webpack_require__(12);

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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./atoms/BasicTable/index.js": 36,
	"./atoms/FormDialog/index.js": 37,
	"./atoms/SimpleBottomNavigation/index.js": 38,
	"./atoms/SimpleMediaCard/index.js": 39,
	"./atoms/SimpleTooltips/index.js": 40,
	"./molecules/AppBar/index.js": 41,
	"./molecules/Currency/index.js": 42,
	"./molecules/Post/index.js": 43,
	"./organisms/CurrencyList/index.js": 44,
	"./organisms/PostList/index.js": 45,
	"./pages/DashboardPage/index.js": 46,
	"./pages/HomePage/index.js": 47,
	"./pages/NotFoundPage/index.js": 48,
	"./templates/PageTemplate/index.js": 49
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
webpackContext.id = 73;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ConfirmModal.js": 50,
	"./CurrencyList.js": 51,
	"./Generic.js": 52,
	"./GoogleTagManager.js": 53,
	"./LoginModal.js": 54,
	"./Modal.js": 55,
	"./PostForm.js": 56,
	"./PostList.js": 57,
	"./UserButton.js": 58
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
webpackContext.id = 74;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./entities/actions.js": 10,
	"./gtm/actions.js": 20,
	"./modal/actions.js": 21,
	"./resource/actions.js": 11,
	"./social/actions.js": 12
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
webpackContext.id = 75;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./entities/middleware.js": 62
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
webpackContext.id = 76;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./entities/reducer.js": 63,
	"./modal/reducer.js": 66,
	"./resource/reducer.js": 68,
	"./social/reducer.js": 71
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
webpackContext.id = 77;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./gtm/sagas.js": 64,
	"./resource/sagas.js": 69,
	"./social/sagas.js": 72
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
webpackContext.id = 78;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./entities/selectors.js": 19,
	"./modal/selectors.js": 22,
	"./resource/selectors.js": 23,
	"./social/selectors.js": 24
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
webpackContext.id = 79;

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("lodash/camelCase");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("lodash/findIndex");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("lodash/mergeWith");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("lodash/upperFirst");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/AccountCircle");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Add");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Favorite");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/LocationOn");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Menu");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Restore");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("material-ui/BottomNavigation");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Form");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Input");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Paper");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Select");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Table");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Toolbar");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Tooltip");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmail");

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isIn");

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isInt");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isURL");

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(32);


/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map