_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["amp"],{

/***/ "../../node_modules/@keystone-next/admin-ui/node_modules/next/dist/build/polyfills/unfetch.js":
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/admin-ui/node_modules/next/dist/build/polyfills/unfetch.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})};
//# sourceMappingURL=unfetch.js.map


/***/ }),

/***/ "../../node_modules/@keystone-next/admin-ui/node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/admin-ui/node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@keystone-next/admin-ui/node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@keystone-next/admin-ui/node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@keystone-next/admin-ui/node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "../../node_modules/@keystone-next/admin-ui/node_modules/next/dist/build/polyfills/unfetch.js"));

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "../../node_modules/@keystone-next/admin-ui/node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "../../node_modules/@keystone-next/admin-ui/node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "../../node_modules/@keystone-next/admin-ui/node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "../../node_modules/@keystone-next/admin-ui/node_modules/next/dist/client/dev/fouc.js");
/* globals __webpack_hash__ */


if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
    page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null;
/* eslint-disable-next-line */

var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.


function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}

function _tryApplyUpdates() {
  _tryApplyUpdates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var res, jsonData, curPage, pageUpdated;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!isUpdateAvailable() || !canApplyUpdates())) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return (0, _unfetch["default"])("".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            jsonData = _context.sent;
            curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead

            pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(function (mod) {
              return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
            });

            if (pageUpdated) {
              document.location.reload(true);
            } else {
              curHash = mostRecentHash;
            }

            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            console.error('Error occurred checking for update', _context.t0);
            document.location.reload(true);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}

(0, _eventsource.getEventSourceWrapper)({
  path: "".concat(assetPrefix, "/_next/webpack-hmr")
}).addMessageListener(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }

  try {
    var message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
  return page;
});
(0, _fouc.displayContent)();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../../node_modules/@keystone-next/admin-ui/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/@keystone-next/admin-ui/node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/admin-ui/node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(function (cb) {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: function addMessageListener(cb) {
        eventCallbacks.push(cb);
      }
    };
  }

  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "../../node_modules/@keystone-next/admin-ui/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/@keystone-next/admin-ui/node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/admin-ui/node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@keystone-next/admin-ui/node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "../../node_modules/@keystone-next/admin-ui/node_modules/next/dist/build/polyfills/unfetch.js"));
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below


var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  (0, _unfetch["default"])(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = _unfetch["default"] != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports["default"] = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../../node_modules/@keystone-next/admin-ui/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/@keystone-next/admin-ui/node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/admin-ui/node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using
// `style-loader` in development. It must be called before hydration, or else
// rendering won't have the correct computed values in effects.

function displayContent(callback) {
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../../node_modules/@keystone-next/admin-ui/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/@keystone-next/admin-ui/node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/admin-ui/node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@keystone-next/admin-ui/node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "../../node_modules/@keystone-next/admin-ui/node_modules/next/dist/build/polyfills/unfetch.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "../../node_modules/@keystone-next/admin-ui/node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  var url = "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage);
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        (0, _unfetch["default"])(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../../node_modules/@keystone-next/admin-ui/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/@keystone-next/admin-ui/node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/admin-ui/node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../../node_modules/@keystone-next/admin-ui/node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/admin-ui/node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@keystone-next/admin-ui/node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/@keystone-next/admin-ui/node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "../../node_modules/@keystone-next/admin-ui/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "../../node_modules/regenerator-runtime/runtime.js":
/*!****************************************************************************************************************!*\
  !*** C:/Users/kim/Desktop/js/sickfits-backend-V2/sickfits-backend/node_modules/regenerator-runtime/runtime.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

},[["../../node_modules/@keystone-next/admin-ui/node_modules/next/dist/client/dev/amp-dev.js","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FL0M6L1VzZXJzL2tpbS9EZXNrdG9wL2pzL3NpY2tmaXRzLWJhY2tlbmQtVjIvc2lja2ZpdHMtYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvYWRtaW4tdWkvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvdW5mZXRjaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL2NsaWVudC9kZXYvYW1wLWRldi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uL2NsaWVudC9kZXYvZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL2NsaWVudC9kZXYvZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vY2xpZW50L2Rldi9mb3VjLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vY2xpZW50L2Rldi9vbi1kZW1hbmQtZW50cmllcy11dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FL0M6L1VzZXJzL2tpbS9EZXNrdG9wL2pzL3NpY2tmaXRzLWJhY2tlbmQtVjIvc2lja2ZpdHMtYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvYWRtaW4tdWkvbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FL0M6L1VzZXJzL2tpbS9EZXNrdG9wL2pzL3NpY2tmaXRzLWJhY2tlbmQtVjIvc2lja2ZpdHMtYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvYWRtaW4tdWkvbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvQzovVXNlcnMva2ltL0Rlc2t0b3AvanMvc2lja2ZpdHMtYmFja2VuZC1WMi9zaWNrZml0cy1iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS9DOi9Vc2Vycy9raW0vRGVza3RvcC9qcy9zaWNrZml0cy1iYWNrZW5kLVYyL3NpY2tmaXRzLWJhY2tlbmQvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJFdmVudFNvdXJjZVBvbHlmaWxsIiwiZGF0YSIsIkpTT04iLCJkb2N1bWVudCIsImFzc2V0UHJlZml4IiwibW9zdFJlY2VudEhhc2giLCJjdXJIYXNoIiwiaG90VXBkYXRlUGF0aCIsIm1vZHVsZSIsImlzVXBkYXRlQXZhaWxhYmxlIiwiY2FuQXBwbHlVcGRhdGVzIiwicmVzIiwianNvbkRhdGEiLCJjdXJQYWdlIiwicGFnZSIsInBhZ2VVcGRhdGVkIiwiQXJyYXkiLCJPYmplY3QiLCJtb2QiLCJjb25zb2xlIiwicGF0aCIsImV2ZW50IiwibWVzc2FnZSIsInRyeUFwcGx5VXBkYXRlcyIsImV2ZW50Q2FsbGJhY2tzIiwibGFzdEFjdGl2aXR5IiwibGlzdGVuZXJzIiwib3B0aW9ucyIsImluaXQiLCJ0aW1lciIsInNldEludGVydmFsIiwiaGFuZGxlRGlzY29ubmVjdCIsInNvdXJjZSIsImkiLCJjYiIsImNsZWFySW50ZXJ2YWwiLCJzZXRUaW1lb3V0IiwiY2xvc2UiLCJhZGRNZXNzYWdlTGlzdGVuZXIiLCJFdmVudFNvdXJjZVdyYXBwZXIiLCJSZXNwb25zZSIsIlRleHREZWNvZGVyIiwiVGV4dEVuY29kZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJUZXh0RGVjb2RlclBvbHlmaWxsIiwib2N0ZXRzQ291bnQiLCJjb2RlUG9pbnQiLCJiaXRzTmVlZGVkIiwiUkVQTEFDRVIiLCJzdHJpbmciLCJvY3RldHMiLCJvY3RldCIsInZhbGlkIiwiU3RyaW5nIiwic3VwcG9ydHNTdHJlYW1PcHRpb24iLCJzdHJlYW0iLCJrIiwidGhhdCIsInhociIsInN0YXRlIiwidGltZW91dCIsImNsZWFyVGltZW91dCIsIm9uU3RhcnQiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiY29udGVudFR5cGUiLCJvblByb2dyZXNzIiwicmVzcG9uc2VUZXh0Iiwib25GaW5pc2giLCJvblJlYWR5U3RhdGVDaGFuZ2UiLCJvblRpbWVvdXQiLCJYTUxIdHRwUmVxdWVzdCIsInVybCIsIlhIUldyYXBwZXIiLCJuYW1lIiwiYyIsIm1hcCIsImFycmF5IiwiYWxsIiwibGluZSIsInBhcnRzIiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsIkhlYWRlcnNQb2x5ZmlsbCIsIlhIUlRyYW5zcG9ydCIsIm9mZnNldCIsImNodW5rIiwib25Qcm9ncmVzc0NhbGxiYWNrIiwiaGVhZGVycyIsIm9uU3RhcnRDYWxsYmFjayIsIm9uRmluaXNoQ2FsbGJhY2siLCJIZWFkZXJzV3JhcHBlciIsImNvbnRyb2xsZXIiLCJzaWduYWwiLCJ0ZXh0RGVjb2RlciIsImNyZWRlbnRpYWxzIiwid2l0aENyZWRlbnRpYWxzIiwiY2FjaGUiLCJyZWFkZXIiLCJyZXNwb25zZSIsInJlYWROZXh0Q2h1bmsiLCJyZXN1bHQiLCJyZXNvbHZlIiwicmVqZWN0IiwiUHJvbWlzZSIsIkV2ZW50VGFyZ2V0IiwidHlwZUxpc3RlbmVycyIsImxlbmd0aCIsImxpc3RlbmVyIiwidGhyb3dFcnJvciIsInR5cGUiLCJmb3VuZCIsImZpbHRlcmVkIiwiRXZlbnQiLCJNZXNzYWdlRXZlbnQiLCJDb25uZWN0aW9uRXZlbnQiLCJXQUlUSU5HIiwiQ09OTkVDVElORyIsIk9QRU4iLCJDTE9TRUQiLCJBRlRFUl9DUiIsIkZJRUxEX1NUQVJUIiwiRklFTEQiLCJWQUxVRV9TVEFSVCIsIlZBTFVFIiwiY29udGVudFR5cGVSZWdFeHAiLCJNSU5JTVVNX0RVUkFUSU9OIiwiTUFYSU1VTV9EVVJBVElPTiIsInBhcnNlRHVyYXRpb24iLCJuIiwicGFyc2VJbnQiLCJjbGFtcER1cmF0aW9uIiwiTWF0aCIsImZpcmUiLCJmIiwic3RhcnQiLCJpc0ZldGNoU3VwcG9ydGVkIiwiZmV0Y2giLCJCb29sZWFuIiwiaW5pdGlhbFJldHJ5IiwiaGVhcnRiZWF0VGltZW91dCIsImxhc3RFdmVudElkIiwicmV0cnkiLCJ3YXNBY3Rpdml0eSIsIkN1cnJlbnRUcmFuc3BvcnQiLCJ0cmFuc3BvcnQiLCJjYW5jZWxGdW5jdGlvbiIsImN1cnJlbnRTdGF0ZSIsImRhdGFCdWZmZXIiLCJsYXN0RXZlbnRJZEJ1ZmZlciIsImV2ZW50VHlwZUJ1ZmZlciIsInRleHRCdWZmZXIiLCJmaWVsZFN0YXJ0IiwidmFsdWVTdGFydCIsImVzIiwidGV4dENodW5rIiwicG9zaXRpb24iLCJmaWVsZCIsInJlcXVlc3RVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SGVhZGVycyIsIngiLCJjYWxsYmFjayIsImV2dFNvdXJjZSIsInBhdGhuYW1lIiwicGF0aG5hbWVGbiIsImNsb3NlUGluZyIsIm9uZGVtYW5kIiwicGF5bG9hZCIsImxvY2F0aW9uIiwicGFnZVJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZCQUE2QixjQUFjLDJCQUEyQix1Q0FBdUMsY0FBYyxPQUFPLGlHQUFpRyx1Q0FBdUMsaUJBQWlCLG1EQUFtRCxpQkFBaUIsK0NBQStDLGtCQUFrQixnQkFBZ0IsU0FBUyxvQkFBb0IsU0FBUyxpQkFBaUIsMEJBQTBCLGlCQUFpQiwrQkFBK0IsOERBQThELGlGQUFpRiwrREFBK0QsU0FBUyxxR0FBcUcscUJBQXFCO0FBQ2w0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFMQTs7O0FBT0EsSUFBSSxDQUFDQSxNQUFNLENBQVgsYUFBeUI7QUFDdkJBLFFBQU0sQ0FBTkEsY0FBcUJDLG9CQUFy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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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OiJzdGF0aWMvY2h1bmtzL2FtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGUsbil7cmV0dXJuIG49bnx8e30sbmV3IFByb21pc2UoZnVuY3Rpb24odCxyKXt2YXIgcz1uZXcgWE1MSHR0cFJlcXVlc3Qsbz1bXSx1PVtdLGk9e30sYT1mdW5jdGlvbigpe3JldHVybntvazoyPT0ocy5zdGF0dXMvMTAwfDApLHN0YXR1c1RleHQ6cy5zdGF0dXNUZXh0LHN0YXR1czpzLnN0YXR1cyx1cmw6cy5yZXNwb25zZVVSTCx0ZXh0OmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzLnJlc3BvbnNlVGV4dCl9LGpzb246ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEpTT04ucGFyc2Uocy5yZXNwb25zZVRleHQpKX0sYmxvYjpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3MucmVzcG9uc2VdKSl9LGNsb25lOmEsaGVhZGVyczp7a2V5czpmdW5jdGlvbigpe3JldHVybiBvfSxlbnRyaWVzOmZ1bmN0aW9uKCl7cmV0dXJuIHV9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gaVtlLnRvTG93ZXJDYXNlKCldfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKWluIGl9fX19O2Zvcih2YXIgbCBpbiBzLm9wZW4obi5tZXRob2R8fFwiZ2V0XCIsZSwhMCkscy5vbmxvYWQ9ZnVuY3Rpb24oKXtzLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnJlcGxhY2UoL14oLio/KTpbXlxcU1xcbl0qKFtcXHNcXFNdKj8pJC9nbSxmdW5jdGlvbihlLG4sdCl7by5wdXNoKG49bi50b0xvd2VyQ2FzZSgpKSx1LnB1c2goW24sdF0pLGlbbl09aVtuXT9pW25dK1wiLFwiK3Q6dH0pLHQoYSgpKX0scy5vbmVycm9yPXIscy53aXRoQ3JlZGVudGlhbHM9XCJpbmNsdWRlXCI9PW4uY3JlZGVudGlhbHMsbi5oZWFkZXJzKXMuc2V0UmVxdWVzdEhlYWRlcihsLG4uaGVhZGVyc1tsXSk7cy5zZW5kKG4uYm9keXx8bnVsbCl9KX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11bmZldGNoLmpzLm1hcFxuIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfaGFzaF9fICovXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoJ1xuaW1wb3J0IEV2ZW50U291cmNlUG9seWZpbGwgZnJvbSAnLi9ldmVudC1zb3VyY2UtcG9seWZpbGwnXG5pbXBvcnQgeyBnZXRFdmVudFNvdXJjZVdyYXBwZXIgfSBmcm9tICcuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UnXG5pbXBvcnQgeyBzZXR1cFBpbmcgfSBmcm9tICcuL29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzJ1xuaW1wb3J0IHsgZGlzcGxheUNvbnRlbnQgfSBmcm9tICcuL2ZvdWMnXG5cbmlmICghd2luZG93LkV2ZW50U291cmNlKSB7XG4gIHdpbmRvdy5FdmVudFNvdXJjZSA9IEV2ZW50U291cmNlUG9seWZpbGxcbn1cblxuY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fTkVYVF9EQVRBX18nKS50ZXh0Q29udGVudClcbmxldCB7IGFzc2V0UHJlZml4LCBwYWdlIH0gPSBkYXRhXG5hc3NldFByZWZpeCA9IGFzc2V0UHJlZml4IHx8ICcnXG5sZXQgbW9zdFJlY2VudEhhc2ggPSBudWxsXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmxldCBjdXJIYXNoID0gX193ZWJwYWNrX2hhc2hfX1xuY29uc3QgaG90VXBkYXRlUGF0aCA9XG4gIGFzc2V0UHJlZml4ICsgKGFzc2V0UHJlZml4LmVuZHNXaXRoKCcvJykgPyAnJyA6ICcvJykgKyAnX25leHQvc3RhdGljL3dlYnBhY2svJ1xuXG4vLyBJcyB0aGVyZSBhIG5ld2VyIHZlcnNpb24gb2YgdGhpcyBjb2RlIGF2YWlsYWJsZT9cbmZ1bmN0aW9uIGlzVXBkYXRlQXZhaWxhYmxlKCkge1xuICAvLyBfX3dlYnBhY2tfaGFzaF9fIGlzIHRoZSBoYXNoIG9mIHRoZSBjdXJyZW50IGNvbXBpbGF0aW9uLlxuICAvLyBJdCdzIGEgZ2xvYmFsIHZhcmlhYmxlIGluamVjdGVkIGJ5IFdlYnBhY2suXG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICByZXR1cm4gbW9zdFJlY2VudEhhc2ggIT09IF9fd2VicGFja19oYXNoX19cbn1cblxuLy8gV2VicGFjayBkaXNhbGxvd3MgdXBkYXRlcyBpbiBvdGhlciBzdGF0ZXMuXG5mdW5jdGlvbiBjYW5BcHBseVVwZGF0ZXMoKSB7XG4gIHJldHVybiBtb2R1bGUuaG90LnN0YXR1cygpID09PSAnaWRsZSdcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiByZWFkcyBjb2RlIHVwZGF0ZXMgb24gdGhlIGZseSBhbmQgaGFyZFxuLy8gcmVsb2FkcyB0aGUgcGFnZSB3aGVuIGl0IGhhcyBjaGFuZ2VkLlxuYXN5bmMgZnVuY3Rpb24gdHJ5QXBwbHlVcGRhdGVzKCkge1xuICBpZiAoIWlzVXBkYXRlQXZhaWxhYmxlKCkgfHwgIWNhbkFwcGx5VXBkYXRlcygpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtob3RVcGRhdGVQYXRofSR7Y3VySGFzaH0uaG90LXVwZGF0ZS5qc29uYClcbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBjb25zdCBjdXJQYWdlID0gcGFnZSA9PT0gJy8nID8gJ2luZGV4JyA6IHBhZ2VcbiAgICAvLyB3ZWJwYWNrIDUgdXNlcyBhbiBhcnJheSBpbnN0ZWFkXG4gICAgY29uc3QgcGFnZVVwZGF0ZWQgPSAoQXJyYXkuaXNBcnJheShqc29uRGF0YS5jKVxuICAgICAgPyBqc29uRGF0YS5jXG4gICAgICA6IE9iamVjdC5rZXlzKGpzb25EYXRhLmMpXG4gICAgKS5zb21lKChtb2QpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG1vZC5pbmRleE9mKFxuICAgICAgICAgIGBwYWdlcyR7Y3VyUGFnZS5zdWJzdHIoMCwgMSkgPT09ICcvJyA/IGN1clBhZ2UgOiBgLyR7Y3VyUGFnZX1gfWBcbiAgICAgICAgKSAhPT0gLTEgfHxcbiAgICAgICAgbW9kLmluZGV4T2YoXG4gICAgICAgICAgYHBhZ2VzJHtcbiAgICAgICAgICAgIGN1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSAnLycgPyBjdXJQYWdlIDogYC8ke2N1clBhZ2V9YFxuICAgICAgICAgIH1gLnJlcGxhY2UoL1xcLy9nLCAnXFxcXCcpXG4gICAgICAgICkgIT09IC0xXG4gICAgICApXG4gICAgfSlcblxuICAgIGlmIChwYWdlVXBkYXRlZCkge1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGN1ckhhc2ggPSBtb3N0UmVjZW50SGFzaFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJyZWQgY2hlY2tpbmcgZm9yIHVwZGF0ZScsIGVycilcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgfVxufVxuXG5nZXRFdmVudFNvdXJjZVdyYXBwZXIoe1xuICBwYXRoOiBgJHthc3NldFByZWZpeH0vX25leHQvd2VicGFjay1obXJgLFxufSkuYWRkTWVzc2FnZUxpc3RlbmVyKChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQuZGF0YSA9PT0gJ1xcdUQ4M0RcXHVEQzkzJykge1xuICAgIHJldHVyblxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKVxuXG4gICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc3luYycgfHwgbWVzc2FnZS5hY3Rpb24gPT09ICdidWlsdCcpIHtcbiAgICAgIGlmICghbWVzc2FnZS5oYXNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbW9zdFJlY2VudEhhc2ggPSBtZXNzYWdlLmhhc2hcbiAgICAgIHRyeUFwcGx5VXBkYXRlcygpXG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3JlbG9hZFBhZ2UnKSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgICB9XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgY29uc29sZS53YXJuKCdJbnZhbGlkIEhNUiBtZXNzYWdlOiAnICsgZXZlbnQuZGF0YSArICdcXG4nICsgZXgpXG4gIH1cbn0pXG5cbnNldHVwUGluZyhhc3NldFByZWZpeCwgKCkgPT4gcGFnZSlcbmRpc3BsYXlDb250ZW50KClcbiIsImNvbnN0IGV2ZW50Q2FsbGJhY2tzID0gW11cblxuZnVuY3Rpb24gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpIHtcbiAgdmFyIHNvdXJjZVxuICB2YXIgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKVxuICB2YXIgbGlzdGVuZXJzID0gW11cblxuICBpZiAoIW9wdGlvbnMudGltZW91dCkge1xuICAgIG9wdGlvbnMudGltZW91dCA9IDIwICogMTAwMFxuICB9XG5cbiAgaW5pdCgpXG4gIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3IERhdGUoKSAtIGxhc3RBY3Rpdml0eSA+IG9wdGlvbnMudGltZW91dCkge1xuICAgICAgaGFuZGxlRGlzY29ubmVjdCgpXG4gICAgfVxuICB9LCBvcHRpb25zLnRpbWVvdXQgLyAyKVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc291cmNlID0gbmV3IHdpbmRvdy5FdmVudFNvdXJjZShvcHRpb25zLnBhdGgpXG4gICAgc291cmNlLm9ub3BlbiA9IGhhbmRsZU9ubGluZVxuICAgIHNvdXJjZS5vbmVycm9yID0gaGFuZGxlRGlzY29ubmVjdFxuICAgIHNvdXJjZS5vbm1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVPbmxpbmUoKSB7XG4gICAgaWYgKG9wdGlvbnMubG9nKSBjb25zb2xlLmxvZygnW0hNUl0gY29ubmVjdGVkJylcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0oZXZlbnQpXG4gICAgfVxuXG4gICAgZXZlbnRDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgIGlmICghY2IudW5maWx0ZXJlZCAmJiBldmVudC5kYXRhLmluZGV4T2YoJ2FjdGlvbicpID09PSAtMSkgcmV0dXJuXG4gICAgICBjYihldmVudClcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpIHtcbiAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgIHNvdXJjZS5jbG9zZSgpXG4gICAgc2V0VGltZW91dChpbml0LCBvcHRpb25zLnRpbWVvdXQpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsb3NlOiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgc291cmNlLmNsb3NlKClcbiAgICB9LFxuICAgIGFkZE1lc3NhZ2VMaXN0ZW5lcjogZnVuY3Rpb24gKGZuKSB7XG4gICAgICBsaXN0ZW5lcnMucHVzaChmbilcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMub25kZW1hbmQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkTWVzc2FnZUxpc3RlbmVyOiAoY2IpID0+IHtcbiAgICAgICAgZXZlbnRDYWxsYmFja3MucHVzaChjYilcbiAgICAgIH0sXG4gICAgfVxuICB9XG4gIHJldHVybiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucylcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBJbXByb3ZlZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvRXZlbnRTb3VyY2UvXG4vLyBBdmFpbGFibGUgdW5kZXIgTUlUIExpY2Vuc2UgKE1JVClcbi8vIE9ubHkgdHJpZXMgdG8gc3VwcG9ydCBJRTExIGFuZCBub3RoaW5nIGJlbG93XG5pbXBvcnQgZmV0Y2ggZnJvbSAnbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoJ1xuXG52YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnRcbnZhciBSZXNwb25zZSA9IHdpbmRvdy5SZXNwb25zZVxudmFyIFRleHREZWNvZGVyID0gd2luZG93LlRleHREZWNvZGVyXG52YXIgVGV4dEVuY29kZXIgPSB3aW5kb3cuVGV4dEVuY29kZXJcbnZhciBBYm9ydENvbnRyb2xsZXIgPSB3aW5kb3cuQWJvcnRDb250cm9sbGVyXG5cbmlmIChBYm9ydENvbnRyb2xsZXIgPT0gdW5kZWZpbmVkKSB7XG4gIEFib3J0Q29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNpZ25hbCA9IG51bGxcbiAgICB0aGlzLmFib3J0ID0gZnVuY3Rpb24gKCkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBUZXh0RGVjb2RlclBvbHlmaWxsKCkge1xuICB0aGlzLmJpdHNOZWVkZWQgPSAwXG4gIHRoaXMuY29kZVBvaW50ID0gMFxufVxuXG5UZXh0RGVjb2RlclBvbHlmaWxsLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAob2N0ZXRzKSB7XG4gIGZ1bmN0aW9uIHZhbGlkKGNvZGVQb2ludCwgc2hpZnQsIG9jdGV0c0NvdW50KSB7XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAxKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID49IDB4MDA4MCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHgwN2ZmXG4gICAgfVxuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGNvZGVQb2ludCA+PSAweDA4MDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4ZDdmZikgfHxcbiAgICAgICAgKGNvZGVQb2ludCA+PSAweGUwMDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4ZmZmZilcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAzKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID49IDB4MDEwMDAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweDEwZmZmZlxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoKVxuICB9XG4gIGZ1bmN0aW9uIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkge1xuICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMSkge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PiA2ID4gMTUgPyAzIDogY29kZVBvaW50ID4gMzEgPyAyIDogMVxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDIpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPiAxNSA/IDMgOiAyXG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMykge1xuICAgICAgcmV0dXJuIDNcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKClcbiAgfVxuICB2YXIgUkVQTEFDRVIgPSAweGZmZmRcbiAgdmFyIHN0cmluZyA9ICcnXG4gIHZhciBiaXRzTmVlZGVkID0gdGhpcy5iaXRzTmVlZGVkXG4gIHZhciBjb2RlUG9pbnQgPSB0aGlzLmNvZGVQb2ludFxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9jdGV0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBvY3RldCA9IG9jdGV0c1tpXVxuICAgIGlmIChiaXRzTmVlZGVkICE9PSAwKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG9jdGV0IDwgMTI4IHx8XG4gICAgICAgIG9jdGV0ID4gMTkxIHx8XG4gICAgICAgICF2YWxpZChcbiAgICAgICAgICAoY29kZVBvaW50IDw8IDYpIHwgKG9jdGV0ICYgNjMpLFxuICAgICAgICAgIGJpdHNOZWVkZWQgLSA2LFxuICAgICAgICAgIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludClcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSXG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDApIHtcbiAgICAgIGlmIChvY3RldCA+PSAwICYmIG9jdGV0IDw9IDEyNykge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldFxuICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAxOTIgJiYgb2N0ZXQgPD0gMjIzKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMVxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDMxXG4gICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDIyNCAmJiBvY3RldCA8PSAyMzkpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDYgKiAyXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgMTVcbiAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMjQwICYmIG9jdGV0IDw9IDI0Nykge1xuICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDNcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiA3XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUlxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBiaXRzTmVlZGVkICE9PSAwICYmXG4gICAgICAgICF2YWxpZChjb2RlUG9pbnQsIGJpdHNOZWVkZWQsIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkpXG4gICAgICApIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVJcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYml0c05lZWRlZCAtPSA2XG4gICAgICBjb2RlUG9pbnQgPSAoY29kZVBvaW50IDw8IDYpIHwgKG9jdGV0ICYgNjMpXG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XG4gICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGQ4MDAgKyAoKGNvZGVQb2ludCAtIDB4ZmZmZiAtIDEpID4+IDEwKSlcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgICAgMHhkYzAwICsgKChjb2RlUG9pbnQgLSAweGZmZmYgLSAxKSAmIDB4M2ZmKVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRoaXMuYml0c05lZWRlZCA9IGJpdHNOZWVkZWRcbiAgdGhpcy5jb2RlUG9pbnQgPSBjb2RlUG9pbnRcbiAgcmV0dXJuIHN0cmluZ1xufVxuXG4vLyBGaXJlZm94IDwgMzggdGhyb3dzIGFuIGVycm9yIHdpdGggc3RyZWFtIG9wdGlvblxudmFyIHN1cHBvcnRzU3RyZWFtT3B0aW9uID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHJldHVybiAoXG4gICAgICBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUobmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKCd0ZXN0JyksIHtcbiAgICAgICAgc3RyZWFtOiB0cnVlLFxuICAgICAgfSkgPT09ICd0ZXN0J1xuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gSUUsIEVkZ2VcbmlmIChcbiAgVGV4dERlY29kZXIgPT0gdW5kZWZpbmVkIHx8XG4gIFRleHRFbmNvZGVyID09IHVuZGVmaW5lZCB8fFxuICAhc3VwcG9ydHNTdHJlYW1PcHRpb24oKVxuKSB7XG4gIFRleHREZWNvZGVyID0gVGV4dERlY29kZXJQb2x5ZmlsbFxufVxuXG52YXIgayA9IGZ1bmN0aW9uICgpIHt9XG5cbmZ1bmN0aW9uIFhIUldyYXBwZXIoeGhyKSB7XG4gIHRoaXMud2l0aENyZWRlbnRpYWxzID0gZmFsc2VcbiAgdGhpcy5yZXNwb25zZVR5cGUgPSAnJ1xuICB0aGlzLnJlYWR5U3RhdGUgPSAwXG4gIHRoaXMuc3RhdHVzID0gMFxuICB0aGlzLnN0YXR1c1RleHQgPSAnJ1xuICB0aGlzLnJlc3BvbnNlVGV4dCA9ICcnXG4gIHRoaXMub25wcm9ncmVzcyA9IGtcbiAgdGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBrXG4gIHRoaXMuX2NvbnRlbnRUeXBlID0gJydcbiAgdGhpcy5feGhyID0geGhyXG4gIHRoaXMuX3NlbmRUaW1lb3V0ID0gMFxuICB0aGlzLl9hYm9ydCA9IGtcbn1cblxuWEhSV3JhcHBlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChtZXRob2QsIHVybCkge1xuICB0aGlzLl9hYm9ydCh0cnVlKVxuXG4gIHZhciB0aGF0ID0gdGhpc1xuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIHZhciBzdGF0ZSA9IDFcbiAgdmFyIHRpbWVvdXQgPSAwXG5cbiAgdGhpcy5fYWJvcnQgPSBmdW5jdGlvbiAoc2lsZW50KSB7XG4gICAgaWYgKHRoYXQuX3NlbmRUaW1lb3V0ICE9PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhhdC5fc2VuZFRpbWVvdXQpXG4gICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IDBcbiAgICB9XG4gICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDRcbiAgICAgIHhoci5vbmxvYWQgPSBrXG4gICAgICB4aHIub25lcnJvciA9IGtcbiAgICAgIHhoci5vbmFib3J0ID0ga1xuICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBrXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0ga1xuICAgICAgLy8gSUUgOCAtIDk6IFhEb21haW5SZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgIC8vIE9wZXJhIDwgMTA6IFhNTEh0dHBSZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgIHhoci5hYm9ydCgpXG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDRcbiAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZSA9IDBcbiAgfVxuXG4gIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdGF0ZSA9PT0gMSkge1xuICAgICAgLy8gc3RhdGUgPSAyO1xuICAgICAgdmFyIHN0YXR1cyA9IDBcbiAgICAgIHZhciBzdGF0dXNUZXh0ID0gJydcbiAgICAgIHZhciBjb250ZW50VHlwZSA9IHVuZGVmaW5lZFxuICAgICAgaWYgKCEoJ2NvbnRlbnRUeXBlJyBpbiB4aHIpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgc3RhdHVzID0geGhyLnN0YXR1c1xuICAgICAgICAgIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dFxuICAgICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIElFIDwgMTAgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDIgfHwgeGhyLnJlYWR5U3RhdGUgPT09IDNcbiAgICAgICAgICAvLyBPcGVyYSA8IDExIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyXG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MTIxXG4gICAgICAgICAgc3RhdHVzID0gMFxuICAgICAgICAgIHN0YXR1c1RleHQgPSAnJ1xuICAgICAgICAgIGNvbnRlbnRUeXBlID0gdW5kZWZpbmVkXG4gICAgICAgICAgLy8gRmlyZWZveCA8IDE0LCBDaHJvbWUgPywgU2FmYXJpID9cbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Mjk2NThcbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Nzc4NTRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzID0gMjAwXG4gICAgICAgIHN0YXR1c1RleHQgPSAnT0snXG4gICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmNvbnRlbnRUeXBlXG4gICAgICB9XG4gICAgICBpZiAoc3RhdHVzICE9PSAwKSB7XG4gICAgICAgIHN0YXRlID0gMlxuICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSAyXG4gICAgICAgIHRoYXQuc3RhdHVzID0gc3RhdHVzXG4gICAgICAgIHRoYXQuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHRcbiAgICAgICAgdGhhdC5fY29udGVudFR5cGUgPSBjb250ZW50VHlwZVxuICAgICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIG9uU3RhcnQoKVxuICAgIGlmIChzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgc3RhdGUgPSAzXG4gICAgICB2YXIgcmVzcG9uc2VUZXh0ID0gJydcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHRcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElFIDggLSA5IHdpdGggWE1MSHR0cFJlcXVlc3RcbiAgICAgIH1cbiAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDNcbiAgICAgIHRoYXQucmVzcG9uc2VUZXh0ID0gcmVzcG9uc2VUZXh0XG4gICAgICB0aGF0Lm9ucHJvZ3Jlc3MoKVxuICAgIH1cbiAgfVxuICB2YXIgb25GaW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gRmlyZWZveCA1MiBmaXJlcyBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHdpdGhvdXQgZmluYWwgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSAzKVxuICAgIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1wiXG4gICAgb25Qcm9ncmVzcygpXG4gICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDRcbiAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gMFxuICAgICAgfVxuICAgICAgdGhhdC5yZWFkeVN0YXRlID0gNFxuICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgIH1cbiAgfVxuICB2YXIgb25SZWFkeVN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh4aHIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBPcGVyYSAxMlxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIG9uRmluaXNoKClcbiAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgICAgb25Qcm9ncmVzcygpXG4gICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICAgIG9uU3RhcnQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpXG4gICAgfSwgNTAwKVxuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMykge1xuICAgICAgb25Qcm9ncmVzcygpXG4gICAgfVxuICB9XG5cbiAgLy8gWERvbWFpblJlcXVlc3QjYWJvcnQgcmVtb3ZlcyBvbnByb2dyZXNzLCBvbmVycm9yLCBvbmxvYWRcbiAgeGhyLm9ubG9hZCA9IG9uRmluaXNoXG4gIHhoci5vbmVycm9yID0gb25GaW5pc2hcbiAgLy8gaW1wcm9wZXIgZml4IHRvIG1hdGNoIEZpcmVmb3ggYmVoYXZpb3IsIGJ1dCBpdCBpcyBiZXR0ZXIgdGhhbiBqdXN0IGlnbm9yZSBhYm9ydFxuICAvLyBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzY4NTk2XG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg4MDIwMFxuICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTUzNTcwXG4gIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1xuICB4aHIub25hYm9ydCA9IG9uRmluaXNoXG5cbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzM2NzIzXG4gIGlmIChcbiAgICAhKCdzZW5kQXNCaW5hcnknIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkgJiZcbiAgICAhKCdtb3pBbm9uJyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpXG4gICkge1xuICAgIHhoci5vbnByb2dyZXNzID0gb25Qcm9ncmVzc1xuICB9XG5cbiAgLy8gSUUgOCAtIDkgKFhNTEhUVFBSZXF1ZXN0KVxuICAvLyBPcGVyYSA8IDEyXG4gIC8vIEZpcmVmb3ggPCAzLjVcbiAgLy8gRmlyZWZveCAzLjUgLSAzLjYgLSA/IDwgOS4wXG4gIC8vIG9ucHJvZ3Jlc3MgaXMgbm90IGZpcmVkIHNvbWV0aW1lcyBvciBkZWxheWVkXG4gIC8vIHNlZSBhbHNvICM2NFxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gb25SZWFkeVN0YXRlQ2hhbmdlXG5cbiAgaWYgKCdjb250ZW50VHlwZScgaW4geGhyKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyAncGFkZGluZz10cnVlJ1xuICB9XG4gIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKVxuXG4gIGlmICgncmVhZHlTdGF0ZScgaW4geGhyKSB7XG4gICAgLy8gd29ya2Fyb3VuZCBmb3IgT3BlcmEgMTIgaXNzdWUgd2l0aCBcInByb2dyZXNzXCIgZXZlbnRzXG4gICAgLy8gIzkxXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25UaW1lb3V0KClcbiAgICB9LCAwKVxuICB9XG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fYWJvcnQoZmFsc2UpXG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZUhlYWRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9jb250ZW50VHlwZVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlciA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4geGhyKSB7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gIH1cbn1cblhIUldyYXBwZXIucHJvdG90eXBlLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMgIT0gdW5kZWZpbmVkXG4gICAgPyB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICA6ICcnXG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKCkge1xuICAvLyBsb2FkaW5nIGluZGljYXRvciBpbiBTYWZhcmkgPCA/ICg2KSwgQ2hyb21lIDwgMTQsIEZpcmVmb3hcbiAgaWYgKFxuICAgICEoJ29udGltZW91dCcgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJlxuICAgIGRvY3VtZW50ICE9IHVuZGVmaW5lZCAmJlxuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gdW5kZWZpbmVkICYmXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJ1xuICApIHtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICB0aGF0Ll9zZW5kVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSAwXG4gICAgICB0aGF0LnNlbmQoKVxuICAgIH0sIDQpXG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIC8vIHdpdGhDcmVkZW50aWFscyBzaG91bGQgYmUgc2V0IGFmdGVyIFwib3BlblwiIGZvciBTYWZhcmkgYW5kIENocm9tZSAoPCAxOSA/KVxuICB4aHIud2l0aENyZWRlbnRpYWxzID0gdGhpcy53aXRoQ3JlZGVudGlhbHNcbiAgeGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlXG4gIHRyeSB7XG4gICAgLy8geGhyLnNlbmQoKTsgdGhyb3dzIFwiTm90IGVub3VnaCBhcmd1bWVudHNcIiBpbiBGaXJlZm94IDMuMFxuICAgIHhoci5zZW5kKHVuZGVmaW5lZClcbiAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgLy8gU2FmYXJpIDUuMS43LCBPcGVyYSAxMlxuICAgIHRocm93IGVycm9yMVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvTG93ZXJDYXNlKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvW0EtWl0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjLmNoYXJDb2RlQXQoMCkgKyAweDIwKVxuICB9KVxufVxuXG5mdW5jdGlvbiBIZWFkZXJzUG9seWZpbGwoYWxsKSB7XG4gIC8vIEdldCBoZWFkZXJzOiBpbXBsZW1lbnRlZCBhY2NvcmRpbmcgdG8gbW96aWxsYSdzIGV4YW1wbGUgY29kZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1hNTEh0dHBSZXF1ZXN0L2dldEFsbFJlc3BvbnNlSGVhZGVycyNFeGFtcGxlXG4gIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHZhciBhcnJheSA9IGFsbC5zcGxpdCgnXFxyXFxuJylcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBsaW5lID0gYXJyYXlbaV1cbiAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6ICcpXG4gICAgdmFyIG5hbWUgPSBwYXJ0cy5zaGlmdCgpXG4gICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOiAnKVxuICAgIG1hcFt0b0xvd2VyQ2FzZShuYW1lKV0gPSB2YWx1ZVxuICB9XG4gIHRoaXMuX21hcCA9IG1hcFxufVxuSGVhZGVyc1BvbHlmaWxsLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5fbWFwW3RvTG93ZXJDYXNlKG5hbWUpXVxufVxuXG5mdW5jdGlvbiBYSFJUcmFuc3BvcnQoKSB7fVxuXG5YSFJUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoXG4gIHhocixcbiAgb25TdGFydENhbGxiYWNrLFxuICBvblByb2dyZXNzQ2FsbGJhY2ssXG4gIG9uRmluaXNoQ2FsbGJhY2ssXG4gIHVybCxcbiAgd2l0aENyZWRlbnRpYWxzLFxuICBoZWFkZXJzXG4pIHtcbiAgeGhyLm9wZW4oJ0dFVCcsIHVybClcbiAgdmFyIG9mZnNldCA9IDBcbiAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHRcbiAgICB2YXIgY2h1bmsgPSByZXNwb25zZVRleHQuc2xpY2Uob2Zmc2V0KVxuICAgIG9mZnNldCArPSBjaHVuay5sZW5ndGhcbiAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspXG4gIH1cbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcbiAgICAgIHZhciBzdGF0dXMgPSB4aHIuc3RhdHVzXG4gICAgICB2YXIgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0XG4gICAgICB2YXIgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpXG4gICAgICB2YXIgaGVhZGVycyA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgb25TdGFydENhbGxiYWNrKFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQsXG4gICAgICAgIGNvbnRlbnRUeXBlLFxuICAgICAgICBuZXcgSGVhZGVyc1BvbHlmaWxsKGhlYWRlcnMpLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgeGhyLmFib3J0KClcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgIG9uRmluaXNoQ2FsbGJhY2soKVxuICAgIH1cbiAgfVxuICB4aHIud2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzXG4gIHhoci5yZXNwb25zZVR5cGUgPSAndGV4dCdcbiAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXJzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICB9XG4gIH1cbiAgeGhyLnNlbmQoKVxufVxuXG5mdW5jdGlvbiBIZWFkZXJzV3JhcHBlcihoZWFkZXJzKSB7XG4gIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzXG59XG5IZWFkZXJzV3JhcHBlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX2hlYWRlcnMuZ2V0KG5hbWUpXG59XG5cbmZ1bmN0aW9uIEZldGNoVHJhbnNwb3J0KCkge31cblxuRmV0Y2hUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoXG4gIHhocixcbiAgb25TdGFydENhbGxiYWNrLFxuICBvblByb2dyZXNzQ2FsbGJhY2ssXG4gIG9uRmluaXNoQ2FsbGJhY2ssXG4gIHVybCxcbiAgd2l0aENyZWRlbnRpYWxzLFxuICBoZWFkZXJzXG4pIHtcbiAgdmFyIGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgdmFyIHNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsIC8vIHNlZSAjMTIwXG4gIHZhciB0ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpXG4gIGZldGNoKHVybCwge1xuICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgY3JlZGVudGlhbHM6IHdpdGhDcmVkZW50aWFscyA/ICdpbmNsdWRlJyA6ICdzYW1lLW9yaWdpbicsXG4gICAgc2lnbmFsOiBzaWduYWwsXG4gICAgY2FjaGU6ICduby1zdG9yZScsXG4gIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICB2YXIgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKVxuICAgICAgb25TdGFydENhbGxiYWNrKFxuICAgICAgICByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSxcbiAgICAgICAgbmV3IEhlYWRlcnNXcmFwcGVyKHJlc3BvbnNlLmhlYWRlcnMpLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgICAgICAgcmVhZGVyLmNhbmNlbCgpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZWFkTmV4dENodW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJlYWRlclxuICAgICAgICAgICAgLnJlYWQoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiBieXRlcyBpbiB0ZXh0RGVjb2RlciBhcmUgaWdub3JlZFxuICAgICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjaHVuayA9IHRleHREZWNvZGVyLmRlY29kZShyZXN1bHQudmFsdWUsIHsgc3RyZWFtOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzc0NhbGxiYWNrKGNodW5rKVxuICAgICAgICAgICAgICAgIHJlYWROZXh0Q2h1bmsoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgWydjYXRjaCddKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJlYWROZXh0Q2h1bmsoKVxuICAgICAgfSlcbiAgICB9KVxuICAgIC50aGVuKFxuICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBvbkZpbmlzaENhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBvbkZpbmlzaENhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICAgICAgfVxuICAgIClcbn1cblxuZnVuY3Rpb24gRXZlbnRUYXJnZXQoKSB7XG4gIHRoaXMuX2xpc3RlbmVycyA9IE9iamVjdC5jcmVhdGUobnVsbClcbn1cblxuZnVuY3Rpb24gdGhyb3dFcnJvcihlKSB7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHRocm93IGVcbiAgfSwgMClcbn1cblxuRXZlbnRUYXJnZXQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQudGFyZ2V0ID0gdGhpc1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldmVudC50eXBlXVxuICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcbiAgICB2YXIgbGVuZ3RoID0gdHlwZUxpc3RlbmVycy5sZW5ndGhcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSB0eXBlTGlzdGVuZXJzW2ldXG4gICAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvd0Vycm9yKGUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5FdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuICB0eXBlID0gU3RyaW5nKHR5cGUpXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNcbiAgdmFyIHR5cGVMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdHlwZV1cbiAgaWYgKHR5cGVMaXN0ZW5lcnMgPT0gdW5kZWZpbmVkKSB7XG4gICAgdHlwZUxpc3RlbmVycyA9IFtdXG4gICAgbGlzdGVuZXJzW3R5cGVdID0gdHlwZUxpc3RlbmVyc1xuICB9XG4gIHZhciBmb3VuZCA9IGZhbHNlXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldID09PSBsaXN0ZW5lcikge1xuICAgICAgZm91bmQgPSB0cnVlXG4gICAgfVxuICB9XG4gIGlmICghZm91bmQpIHtcbiAgICB0eXBlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cbn1cbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHR5cGUgPSBTdHJpbmcodHlwZSlcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXVxuICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsdGVyZWQgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHR5cGVMaXN0ZW5lcnNbaV0gIT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGZpbHRlcmVkLnB1c2godHlwZUxpc3RlbmVyc1tpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGxpc3RlbmVyc1t0eXBlXVxuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0ZW5lcnNbdHlwZV0gPSBmaWx0ZXJlZFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBFdmVudCh0eXBlKSB7XG4gIHRoaXMudHlwZSA9IHR5cGVcbiAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gTWVzc2FnZUV2ZW50KHR5cGUsIG9wdGlvbnMpIHtcbiAgRXZlbnQuY2FsbCh0aGlzLCB0eXBlKVxuICB0aGlzLmRhdGEgPSBvcHRpb25zLmRhdGFcbiAgdGhpcy5sYXN0RXZlbnRJZCA9IG9wdGlvbnMubGFzdEV2ZW50SWRcbn1cblxuTWVzc2FnZUV2ZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQucHJvdG90eXBlKVxuXG5mdW5jdGlvbiBDb25uZWN0aW9uRXZlbnQodHlwZSwgb3B0aW9ucykge1xuICBFdmVudC5jYWxsKHRoaXMsIHR5cGUpXG4gIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXNcbiAgdGhpcy5zdGF0dXNUZXh0ID0gb3B0aW9ucy5zdGF0dXNUZXh0XG4gIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVyc1xufVxuXG5Db25uZWN0aW9uRXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpXG5cbnZhciBXQUlUSU5HID0gLTFcbnZhciBDT05ORUNUSU5HID0gMFxudmFyIE9QRU4gPSAxXG52YXIgQ0xPU0VEID0gMlxuXG52YXIgQUZURVJfQ1IgPSAtMVxudmFyIEZJRUxEX1NUQVJUID0gMFxudmFyIEZJRUxEID0gMVxudmFyIFZBTFVFX1NUQVJUID0gMlxudmFyIFZBTFVFID0gM1xuXG52YXIgY29udGVudFR5cGVSZWdFeHAgPSAvXnRleHRcXC9ldmVudFxcLXN0cmVhbTs/KFxccypjaGFyc2V0XFw9dXRmXFwtOCk/JC9pXG5cbnZhciBNSU5JTVVNX0RVUkFUSU9OID0gMTAwMFxudmFyIE1BWElNVU1fRFVSQVRJT04gPSAxODAwMDAwMFxuXG52YXIgcGFyc2VEdXJhdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSwgZGVmKSB7XG4gIHZhciBuID0gcGFyc2VJbnQodmFsdWUsIDEwKVxuICBpZiAobiAhPT0gbikge1xuICAgIG4gPSBkZWZcbiAgfVxuICByZXR1cm4gY2xhbXBEdXJhdGlvbihuKVxufVxudmFyIGNsYW1wRHVyYXRpb24gPSBmdW5jdGlvbiAobikge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwgTUlOSU1VTV9EVVJBVElPTiksIE1BWElNVU1fRFVSQVRJT04pXG59XG5cbnZhciBmaXJlID0gZnVuY3Rpb24gKHRoYXQsIGYsIGV2ZW50KSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmLmNhbGwodGhhdCwgZXZlbnQpXG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3dFcnJvcihlKVxuICB9XG59XG5cbmZ1bmN0aW9uIEV2ZW50U291cmNlUG9seWZpbGwodXJsLCBvcHRpb25zKSB7XG4gIEV2ZW50VGFyZ2V0LmNhbGwodGhpcylcblxuICB0aGlzLm9ub3BlbiA9IHVuZGVmaW5lZFxuICB0aGlzLm9ubWVzc2FnZSA9IHVuZGVmaW5lZFxuICB0aGlzLm9uZXJyb3IgPSB1bmRlZmluZWRcblxuICB0aGlzLnVybCA9IHVuZGVmaW5lZFxuICB0aGlzLnJlYWR5U3RhdGUgPSB1bmRlZmluZWRcbiAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWRcblxuICB0aGlzLl9jbG9zZSA9IHVuZGVmaW5lZFxuXG4gIHN0YXJ0KHRoaXMsIHVybCwgb3B0aW9ucylcbn1cblxudmFyIGlzRmV0Y2hTdXBwb3J0ZWQgPVxuICBmZXRjaCAhPSB1bmRlZmluZWQgJiYgUmVzcG9uc2UgIT0gdW5kZWZpbmVkICYmICdib2R5JyBpbiBSZXNwb25zZS5wcm90b3R5cGVcblxuZnVuY3Rpb24gc3RhcnQoZXMsIHVybCwgb3B0aW9ucykge1xuICB1cmwgPSBTdHJpbmcodXJsKVxuICB2YXIgd2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgQm9vbGVhbihvcHRpb25zLndpdGhDcmVkZW50aWFscylcblxuICB2YXIgaW5pdGlhbFJldHJ5ID0gY2xhbXBEdXJhdGlvbigxMDAwKVxuICB2YXIgaGVhcnRiZWF0VGltZW91dCA9XG4gICAgb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0ICE9IHVuZGVmaW5lZFxuICAgICAgPyBwYXJzZUR1cmF0aW9uKG9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCwgNDUwMDApXG4gICAgICA6IGNsYW1wRHVyYXRpb24oNDUwMDApXG5cbiAgdmFyIGxhc3RFdmVudElkID0gJydcbiAgdmFyIHJldHJ5ID0gaW5pdGlhbFJldHJ5XG4gIHZhciB3YXNBY3Rpdml0eSA9IGZhbHNlXG4gIHZhciBoZWFkZXJzID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLmhlYWRlcnMgIT0gdW5kZWZpbmVkXG4gICAgICA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5oZWFkZXJzKSlcbiAgICAgIDogdW5kZWZpbmVkXG4gIHZhciBDdXJyZW50VHJhbnNwb3J0ID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWRcbiAgICAgID8gb3B0aW9ucy5UcmFuc3BvcnRcbiAgICAgIDogWE1MSHR0cFJlcXVlc3RcbiAgdmFyIHhociA9XG4gICAgaXNGZXRjaFN1cHBvcnRlZCAmJlxuICAgICEob3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5UcmFuc3BvcnQgIT0gdW5kZWZpbmVkKVxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogbmV3IFhIUldyYXBwZXIobmV3IEN1cnJlbnRUcmFuc3BvcnQoKSlcbiAgdmFyIHRyYW5zcG9ydCA9IHhociA9PSB1bmRlZmluZWQgPyBuZXcgRmV0Y2hUcmFuc3BvcnQoKSA6IG5ldyBYSFJUcmFuc3BvcnQoKVxuICB2YXIgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWRcbiAgdmFyIHRpbWVvdXQgPSAwXG4gIHZhciBjdXJyZW50U3RhdGUgPSBXQUlUSU5HXG4gIHZhciBkYXRhQnVmZmVyID0gJydcbiAgdmFyIGxhc3RFdmVudElkQnVmZmVyID0gJydcbiAgdmFyIGV2ZW50VHlwZUJ1ZmZlciA9ICcnXG5cbiAgdmFyIHRleHRCdWZmZXIgPSAnJ1xuICB2YXIgc3RhdGUgPSBGSUVMRF9TVEFSVFxuICB2YXIgZmllbGRTdGFydCA9IDBcbiAgdmFyIHZhbHVlU3RhcnQgPSAwXG5cbiAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbiAoc3RhdHVzLCBzdGF0dXNUZXh0LCBjb250ZW50VHlwZSwgaGVhZGVycywgY2FuY2VsKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gQ09OTkVDVElORykge1xuICAgICAgY2FuY2VsRnVuY3Rpb24gPSBjYW5jZWxcbiAgICAgIGlmIChcbiAgICAgICAgc3RhdHVzID09PSAyMDAgJiZcbiAgICAgICAgY29udGVudFR5cGUgIT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGNvbnRlbnRUeXBlUmVnRXhwLnRlc3QoY29udGVudFR5cGUpXG4gICAgICApIHtcbiAgICAgICAgY3VycmVudFN0YXRlID0gT1BFTlxuICAgICAgICB3YXNBY3Rpdml0eSA9IHRydWVcbiAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnlcbiAgICAgICAgZXMucmVhZHlTdGF0ZSA9IE9QRU5cbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IENvbm5lY3Rpb25FdmVudCgnb3BlbicsIHtcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIH0pXG4gICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgIGZpcmUoZXMsIGVzLm9ub3BlbiwgZXZlbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbWVzc2FnZSA9ICcnXG4gICAgICAgIGlmIChzdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgIGlmIChzdGF0dXNUZXh0KSB7XG4gICAgICAgICAgICBzdGF0dXNUZXh0ID0gc3RhdHVzVGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJylcbiAgICAgICAgICB9XG4gICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICBcIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgc3RhdHVzIFwiICtcbiAgICAgICAgICAgIHN0YXR1cyArXG4gICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgc3RhdHVzVGV4dCArXG4gICAgICAgICAgICAnIHRoYXQgaXMgbm90IDIwMC4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgXCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIENvbnRlbnQtVHlwZSBzcGVjaWZ5aW5nIGFuIHVuc3VwcG9ydGVkIHR5cGU6IFwiICtcbiAgICAgICAgICAgIChjb250ZW50VHlwZSA9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyAnLSdcbiAgICAgICAgICAgICAgOiBjb250ZW50VHlwZS5yZXBsYWNlKC9cXHMrL2csICcgJykpICtcbiAgICAgICAgICAgICcuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLidcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKG5ldyBFcnJvcihtZXNzYWdlKSlcbiAgICAgICAgY2xvc2UoKVxuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ29ubmVjdGlvbkV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIH0pXG4gICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgIGZpcmUoZXMsIGVzLm9uZXJyb3IsIGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24gKHRleHRDaHVuaykge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4pIHtcbiAgICAgIHZhciBuID0gLTFcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dENodW5rLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBjID0gdGV4dENodW5rLmNoYXJDb2RlQXQoaSlcbiAgICAgICAgaWYgKGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgIG4gPSBpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBjaHVuayA9IChuICE9PSAtMSA/IHRleHRCdWZmZXIgOiAnJykgKyB0ZXh0Q2h1bmsuc2xpY2UoMCwgbiArIDEpXG4gICAgICB0ZXh0QnVmZmVyID0gKG4gPT09IC0xID8gdGV4dEJ1ZmZlciA6ICcnKSArIHRleHRDaHVuay5zbGljZShuICsgMSlcbiAgICAgIGlmIChjaHVuayAhPT0gJycpIHtcbiAgICAgICAgd2FzQWN0aXZpdHkgPSB0cnVlXG4gICAgICB9XG4gICAgICBmb3IgKHZhciBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgY2h1bmsubGVuZ3RoOyBwb3NpdGlvbiArPSAxKSB7XG4gICAgICAgIHZhciBjID0gY2h1bmsuY2hhckNvZGVBdChwb3NpdGlvbilcbiAgICAgICAgaWYgKHN0YXRlID09PSBBRlRFUl9DUiAmJiBjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IpIHtcbiAgICAgICAgICAgIHN0YXRlID0gRklFTERfU1RBUlRcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlICE9PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVTdGFydCA9IHBvc2l0aW9uICsgMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBmaWVsZCA9IGNodW5rLnNsaWNlKGZpZWxkU3RhcnQsIHZhbHVlU3RhcnQgLSAxKVxuICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjaHVuay5zbGljZShcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ICtcbiAgICAgICAgICAgICAgICAgICh2YWx1ZVN0YXJ0IDwgcG9zaXRpb24gJiZcbiAgICAgICAgICAgICAgICAgIGNodW5rLmNoYXJDb2RlQXQodmFsdWVTdGFydCkgPT09ICcgJy5jaGFyQ29kZUF0KDApXG4gICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICA6IDApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgaWYgKGZpZWxkID09PSAnZGF0YScpIHtcbiAgICAgICAgICAgICAgICBkYXRhQnVmZmVyICs9ICdcXG4nXG4gICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciArPSB2YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnaWQnKSB7XG4gICAgICAgICAgICAgICAgbGFzdEV2ZW50SWRCdWZmZXIgPSB2YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnZXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gdmFsdWVcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ3JldHJ5Jykge1xuICAgICAgICAgICAgICAgIGluaXRpYWxSZXRyeSA9IHBhcnNlRHVyYXRpb24odmFsdWUsIGluaXRpYWxSZXRyeSlcbiAgICAgICAgICAgICAgICByZXRyeSA9IGluaXRpYWxSZXRyeVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnaGVhcnRiZWF0VGltZW91dCcpIHtcbiAgICAgICAgICAgICAgICBoZWFydGJlYXRUaW1lb3V0ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaGVhcnRiZWF0VGltZW91dClcbiAgICAgICAgICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uVGltZW91dCgpXG4gICAgICAgICAgICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBpZiAoZGF0YUJ1ZmZlciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZCA9IGxhc3RFdmVudElkQnVmZmVyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZUJ1ZmZlciA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICdtZXNzYWdlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgTWVzc2FnZUV2ZW50KGV2ZW50VHlwZUJ1ZmZlciwge1xuICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YUJ1ZmZlci5zbGljZSgxKSxcbiAgICAgICAgICAgICAgICAgIGxhc3RFdmVudElkOiBsYXN0RXZlbnRJZEJ1ZmZlcixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZUJ1ZmZlciA9PT0gJ21lc3NhZ2UnKSB7XG4gICAgICAgICAgICAgICAgICBmaXJlKGVzLCBlcy5vbm1lc3NhZ2UsIGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBDTE9TRUQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYXRhQnVmZmVyID0gJydcbiAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRlID0gYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSA/IEFGVEVSX0NSIDogRklFTERfU1RBUlRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBmaWVsZFN0YXJ0ID0gcG9zaXRpb25cbiAgICAgICAgICAgICAgc3RhdGUgPSBGSUVMRFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRCkge1xuICAgICAgICAgICAgICBpZiAoYyA9PT0gJzonLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ID0gcG9zaXRpb24gKyAxXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBWQUxVRV9TVEFSVFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBWQUxVRV9TVEFSVCkge1xuICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4gfHwgY3VycmVudFN0YXRlID09PSBDT05ORUNUSU5HKSB7XG4gICAgICBjdXJyZW50U3RhdGUgPSBXQUlUSU5HXG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25UaW1lb3V0KClcbiAgICAgIH0sIHJldHJ5KVxuICAgICAgcmV0cnkgPSBjbGFtcER1cmF0aW9uKE1hdGgubWluKGluaXRpYWxSZXRyeSAqIDE2LCByZXRyeSAqIDIpKVxuXG4gICAgICBlcy5yZWFkeVN0YXRlID0gQ09OTkVDVElOR1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdlcnJvcicpXG4gICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgZmlyZShlcywgZXMub25lcnJvciwgZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgdmFyIGNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGN1cnJlbnRTdGF0ZSA9IENMT1NFRFxuICAgIGlmIChjYW5jZWxGdW5jdGlvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGNhbmNlbEZ1bmN0aW9uKClcbiAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgIHRpbWVvdXQgPSAwXG4gICAgfVxuICAgIGVzLnJlYWR5U3RhdGUgPSBDTE9TRURcbiAgfVxuXG4gIHZhciBvblRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGltZW91dCA9IDBcblxuICAgIGlmIChjdXJyZW50U3RhdGUgIT09IFdBSVRJTkcpIHtcbiAgICAgIGlmICghd2FzQWN0aXZpdHkgJiYgY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93RXJyb3IoXG4gICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ05vIGFjdGl2aXR5IHdpdGhpbiAnICtcbiAgICAgICAgICAgICAgaGVhcnRiZWF0VGltZW91dCArXG4gICAgICAgICAgICAgICcgbWlsbGlzZWNvbmRzLiBSZWNvbm5lY3RpbmcuJ1xuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICBjYW5jZWxGdW5jdGlvbigpXG4gICAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXNBY3Rpdml0eSA9IGZhbHNlXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBvblRpbWVvdXQoKVxuICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgd2FzQWN0aXZpdHkgPSBmYWxzZVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpXG4gICAgfSwgaGVhcnRiZWF0VGltZW91dClcblxuICAgIGN1cnJlbnRTdGF0ZSA9IENPTk5FQ1RJTkdcbiAgICBkYXRhQnVmZmVyID0gJydcbiAgICBldmVudFR5cGVCdWZmZXIgPSAnJ1xuICAgIGxhc3RFdmVudElkQnVmZmVyID0gbGFzdEV2ZW50SWRcbiAgICB0ZXh0QnVmZmVyID0gJydcbiAgICBmaWVsZFN0YXJ0ID0gMFxuICAgIHZhbHVlU3RhcnQgPSAwXG4gICAgc3RhdGUgPSBGSUVMRF9TVEFSVFxuXG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDI4OTE2XG4gICAgLy8gUmVxdWVzdCBoZWFkZXIgZmllbGQgTGFzdC1FdmVudC1JRCBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzLlxuICAgIHZhciByZXF1ZXN0VVJMID0gdXJsXG4gICAgaWYgKHVybC5zbGljZSgwLCA1KSAhPT0gJ2RhdGE6JyAmJiB1cmwuc2xpY2UoMCwgNSkgIT09ICdibG9iOicpIHtcbiAgICAgIGlmIChsYXN0RXZlbnRJZCAhPT0gJycpIHtcbiAgICAgICAgcmVxdWVzdFVSTCArPVxuICAgICAgICAgICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgK1xuICAgICAgICAgICdsYXN0RXZlbnRJZD0nICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobGFzdEV2ZW50SWQpXG4gICAgICB9XG4gICAgfVxuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IHt9XG4gICAgcmVxdWVzdEhlYWRlcnNbJ0FjY2VwdCddID0gJ3RleHQvZXZlbnQtc3RyZWFtJ1xuICAgIGlmIChoZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXJzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycywgbmFtZSkpIHtcbiAgICAgICAgICByZXF1ZXN0SGVhZGVyc1tuYW1lXSA9IGhlYWRlcnNbbmFtZV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgdHJhbnNwb3J0Lm9wZW4oXG4gICAgICAgIHhocixcbiAgICAgICAgb25TdGFydCxcbiAgICAgICAgb25Qcm9ncmVzcyxcbiAgICAgICAgb25GaW5pc2gsXG4gICAgICAgIHJlcXVlc3RVUkwsXG4gICAgICAgIHdpdGhDcmVkZW50aWFscyxcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNcbiAgICAgIClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY2xvc2UoKVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG4gIH1cblxuICBlcy51cmwgPSB1cmxcbiAgZXMucmVhZHlTdGF0ZSA9IENPTk5FQ1RJTkdcbiAgZXMud2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzXG4gIGVzLl9jbG9zZSA9IGNsb3NlXG5cbiAgb25UaW1lb3V0KClcbn1cblxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50VGFyZ2V0LnByb3RvdHlwZSlcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5PUEVOID0gT1BFTlxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ0xPU0VEID0gQ0xPU0VEXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fY2xvc2UoKVxufVxuXG5FdmVudFNvdXJjZVBvbHlmaWxsLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HXG5FdmVudFNvdXJjZVBvbHlmaWxsLk9QRU4gPSBPUEVOXG5FdmVudFNvdXJjZVBvbHlmaWxsLkNMT1NFRCA9IENMT1NFRFxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkXG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U291cmNlUG9seWZpbGxcbiIsIi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZW1vdmUgTmV4dC5qcycgbm8tRk9VQyBzdHlsZXMgd29ya2Fyb3VuZCBmb3IgdXNpbmdcbi8vIGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50LiBJdCBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgaHlkcmF0aW9uLCBvciBlbHNlXG4vLyByZW5kZXJpbmcgd29uJ3QgaGF2ZSB0aGUgY29ycmVjdCBjb21wdXRlZCB2YWx1ZXMgaW4gZWZmZWN0cy5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29udGVudChjYWxsYmFjaykge1xuICA7KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCkoZnVuY3Rpb24gKCkge1xuICAgIGZvciAoXG4gICAgICB2YXIgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLCBpID0geC5sZW5ndGg7XG4gICAgICBpLS07XG5cbiAgICApIHtcbiAgICAgIHhbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4W2ldKVxuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH0pXG59XG4iLCIvKiBnbG9iYWwgbG9jYXRpb24gKi9cblxuaW1wb3J0IGZldGNoIGZyb20gJ25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvdW5mZXRjaCdcbmltcG9ydCB7IGdldEV2ZW50U291cmNlV3JhcHBlciB9IGZyb20gJy4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZSdcblxubGV0IGV2dFNvdXJjZVxuZXhwb3J0IGxldCBjdXJyZW50UGFnZVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQaW5nKCkge1xuICBpZiAoZXZ0U291cmNlKSBldnRTb3VyY2UuY2xvc2UoKVxuICBldnRTb3VyY2UgPSBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFBpbmcoYXNzZXRQcmVmaXgsIHBhdGhuYW1lRm4sIHJldHJ5KSB7XG4gIGNvbnN0IHBhdGhuYW1lID0gcGF0aG5hbWVGbigpXG5cbiAgLy8gTWFrZSBzdXJlIHRvIG9ubHkgY3JlYXRlIG5ldyBFdmVudFNvdXJjZSByZXF1ZXN0IGlmIHBhZ2UgaGFzIGNoYW5nZWRcbiAgaWYgKHBhdGhuYW1lID09PSBjdXJyZW50UGFnZSAmJiAhcmV0cnkpIHJldHVyblxuICBjdXJyZW50UGFnZSA9IHBhdGhuYW1lXG4gIC8vIGNsb3NlIGN1cnJlbnQgRXZlbnRTb3VyY2UgY29ubmVjdGlvblxuICBjbG9zZVBpbmcoKVxuXG4gIGNvbnN0IHVybCA9IGAke2Fzc2V0UHJlZml4fS9fbmV4dC93ZWJwYWNrLWhtcj9wYWdlPSR7Y3VycmVudFBhZ2V9YFxuICBldnRTb3VyY2UgPSBnZXRFdmVudFNvdXJjZVdyYXBwZXIoeyBwYXRoOiB1cmwsIHRpbWVvdXQ6IDUwMDAsIG9uZGVtYW5kOiAxIH0pXG5cbiAgZXZ0U291cmNlLmFkZE1lc3NhZ2VMaXN0ZW5lcigoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQuZGF0YS5pbmRleE9mKCd7JykgPT09IC0xKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSlcbiAgICAgIGlmIChwYXlsb2FkLmludmFsaWQpIHtcbiAgICAgICAgLy8gUGF5bG9hZCBjYW4gYmUgaW52YWxpZCBldmVuIGlmIHRoZSBwYWdlIGRvZXMgbm90IGV4aXN0LlxuICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYWtlIHN1cmUgaXQgZXhpc3RzIGJlZm9yZSByZWxvYWRpbmcuXG4gICAgICAgIGZldGNoKGxvY2F0aW9uLmhyZWYsIHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbigocGFnZVJlcykgPT4ge1xuICAgICAgICAgIGlmIChwYWdlUmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ29uLWRlbWFuZC1lbnRyaWVzIGZhaWxlZCB0byBwYXJzZSByZXNwb25zZScsIGVycilcbiAgICB9XG4gIH0pXG59XG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=