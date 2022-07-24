webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/layout/MainNavigation.js":
/*!*********************************************!*\
  !*** ./components/layout/MainNavigation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainNavigation.module.css */ "./components/layout/MainNavigation.module.css");
/* harmony import */ var _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/auth-context */ "./store/auth-context.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\components\\layout\\MainNavigation.js",
    _s = $RefreshSig$();






function MainNavigation() {
  _s();

  var authCtx = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_auth_context__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]);
  console.log(authCtx);

  var logoutHandler = function logoutHandler() {
    authCtx.logout();
  };

  var isLoggedIn = authCtx.isLoggedIn;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
        children: "V-Meet "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/",
            children: "All Meetups"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), isLoggedIn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/new-meetup",
            children: "Add Meetup"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, this), !isLoggedIn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/auth",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this), isLoggedIn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: logoutHandler,
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

_s(MainNavigation, "HgVQGKeM6jZ5dc2JVxj9nYffoaU=");

_c = MainNavigation;
/* harmony default export */ __webpack_exports__["default"] = (MainNavigation);

var _c;

$RefreshReg$(_c, "MainNavigation");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _store_auth_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/auth-context */ "./store/auth-context.js");







var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var MyApp = /*#__PURE__*/function (_App) {
  Object(F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_store_auth_context__WEBPACK_IMPORTED_MODULE_10__["AuthContextProvider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 3
      }, this);
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./store/auth-context.js":
/*!*******************************!*\
  !*** ./store/auth-context.js ***!
  \*******************************/
/*! exports provided: AuthContext, AuthContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContextProvider", function() { return AuthContextProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\store\\auth-context.js",
    _this = undefined,
    _s = $RefreshSig$();


var logoutTimer;
var AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({
  token: "",
  isLoggedIn: false,
  login: function login(token) {},
  logout: function logout() {}
});

var calculateTime = function calculateTime(expirationTime) {
  var currentTime = new Date().getTime();
  var adjExpirationTime = new Date(expirationTime).getTime();
  var remainingTime = adjExpirationTime - currentTime;
  return remainingTime;
};

var retreiveToken = function retreiveToken() {
  var storedToken = localStorage.getItem("token");
  var storedExpirationTime = localStorage.getItem("expirationTime");
  var remainingRetreiveTime = calculateTime(storedExpirationTime);

  if (remainingRetreiveTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingRetreiveTime
  };
};

var AuthContextProvider = function AuthContextProvider(props) {
  _s();

  var tokenData = retreiveToken();
  var initializeToken;

  if (tokenData) {
    initializeToken = tokenData.token;
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initializeToken),
      token = _useState[0],
      setToken = _useState[1];

  var userIsLoggedIn = !!token;
  var logOutHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  var logInHandler = function logInHandler(token, expirationTime) {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    var remainingDuration = calculateTime(expirationTime);
    logoutTimer = setTimeout(logOutHandler, remainingDuration);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (tokenData) {
      logoutTimer = setTimeout(logOutHandler, tokenData.duration);
    }
  }, [tokenData, logOutHandler]);
  var contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logOutHandler
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: contextValue,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, _this);
};

_s(AuthContextProvider, "TLpy6rfE5JY1Tk0Ri5ROnOs5r+c=");

_c = AuthContextProvider;


var _c;

$RefreshReg$(_c, "AuthContextProvider");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWFpbk5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL2F1dGgtY29udGV4dC5qcyJdLCJuYW1lcyI6WyJNYWluTmF2aWdhdGlvbiIsImF1dGhDdHgiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJjb25zb2xlIiwibG9nIiwibG9nb3V0SGFuZGxlciIsImxvZ291dCIsImlzTG9nZ2VkSW4iLCJjbGFzc2VzIiwiaGVhZGVyIiwibG9nbyIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJBcHAiLCJsb2dvdXRUaW1lciIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInRva2VuIiwibG9naW4iLCJjYWxjdWxhdGVUaW1lIiwiZXhwaXJhdGlvblRpbWUiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiYWRqRXhwaXJhdGlvblRpbWUiLCJyZW1haW5pbmdUaW1lIiwicmV0cmVpdmVUb2tlbiIsInN0b3JlZFRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0b3JlZEV4cGlyYXRpb25UaW1lIiwicmVtYWluaW5nUmV0cmVpdmVUaW1lIiwicmVtb3ZlSXRlbSIsImR1cmF0aW9uIiwiQXV0aENvbnRleHRQcm92aWRlciIsInRva2VuRGF0YSIsImluaXRpYWxpemVUb2tlbiIsInVzZVN0YXRlIiwic2V0VG9rZW4iLCJ1c2VySXNMb2dnZWRJbiIsImxvZ091dEhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImNsZWFyVGltZW91dCIsImxvZ0luSGFuZGxlciIsInNldEl0ZW0iLCJyZW1haW5pbmdEdXJhdGlvbiIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJjb250ZXh0VmFsdWUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FB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S0QsQ0E1Q0Q7O0dBQU1mLG1COztLQUFBQSxtQjtBQThDTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjg5MzBmZjVmYTUzNjcwYzc0ZDgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9NYWluTmF2aWdhdGlvbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtBdXRoQ29udGV4dH0gZnJvbSBcIi4uLy4uL3N0b3JlL2F1dGgtY29udGV4dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBNYWluTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgYXV0aEN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICBjb25zb2xlLmxvZyhhdXRoQ3R4KTtcbiAgY29uc3QgbG9nb3V0SGFuZGxlciA9ICgpID0+IHtcbiAgICBhdXRoQ3R4LmxvZ291dCgpO1xuICB9O1xuXG4gIGNvbnN0IGlzTG9nZ2VkSW4gPSBhdXRoQ3R4LmlzTG9nZ2VkSW47XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlYtTWVldCA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkFsbCBNZWV0dXBzPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAge2lzTG9nZ2VkSW4gJiYgKFxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25ldy1tZWV0dXBcIj5BZGQgTWVldHVwPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHshaXNMb2dnZWRJbiAmJiAoXG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aFwiPkxvZ2luPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtpc0xvZ2dlZEluICYmIChcbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dvdXRIYW5kbGVyfT5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluTmF2aWdhdGlvbjtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHtBdXRoQ29udGV4dFByb3ZpZGVyfSBmcm9tIFwiLi4vc3RvcmUvYXV0aC1jb250ZXh0XCI7XG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwe1xuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuICByZXR1cm4gKFxuICA8QXV0aENvbnRleHRQcm92aWRlcj5cbiAgICA8TGF5b3V0PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGF5b3V0PlxuICAgIDwvQXV0aENvbnRleHRQcm92aWRlcj5cbiAgIFxuICBcbiAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxubGV0IGxvZ291dFRpbWVyO1xyXG5jb25zdCBBdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xyXG4gIHRva2VuOiBcIlwiLFxyXG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gIGxvZ2luOiAodG9rZW4pID0+IHt9LFxyXG4gIGxvZ291dDogKCkgPT4ge30sXHJcbn0pO1xyXG5cclxuY29uc3QgY2FsY3VsYXRlVGltZSA9IChleHBpcmF0aW9uVGltZSkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgY29uc3QgYWRqRXhwaXJhdGlvblRpbWUgPSBuZXcgRGF0ZShleHBpcmF0aW9uVGltZSkuZ2V0VGltZSgpO1xyXG4gIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSBhZGpFeHBpcmF0aW9uVGltZSAtIGN1cnJlbnRUaW1lO1xyXG4gIHJldHVybiByZW1haW5pbmdUaW1lO1xyXG59O1xyXG5cclxuY29uc3QgcmV0cmVpdmVUb2tlbiA9ICgpID0+IHtcclxuICBjb25zdCBzdG9yZWRUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgY29uc3Qgc3RvcmVkRXhwaXJhdGlvblRpbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4cGlyYXRpb25UaW1lXCIpO1xyXG5cclxuICBjb25zdCByZW1haW5pbmdSZXRyZWl2ZVRpbWUgPSBjYWxjdWxhdGVUaW1lKHN0b3JlZEV4cGlyYXRpb25UaW1lKTtcclxuICBpZiAocmVtYWluaW5nUmV0cmVpdmVUaW1lIDw9IDM2MDApIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImV4cGlyYXRpb25UaW1lXCIpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICB0b2tlbjogc3RvcmVkVG9rZW4sXHJcbiAgICBkdXJhdGlvbjogcmVtYWluaW5nUmV0cmVpdmVUaW1lLFxyXG4gIH07XHJcbn07XHJcbmNvbnN0IEF1dGhDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB0b2tlbkRhdGEgPSByZXRyZWl2ZVRva2VuKCk7XHJcbiAgbGV0IGluaXRpYWxpemVUb2tlbjtcclxuICBpZiAodG9rZW5EYXRhKSB7XHJcbiAgICBpbml0aWFsaXplVG9rZW4gPSB0b2tlbkRhdGEudG9rZW47XHJcbiAgfVxyXG5cclxuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKGluaXRpYWxpemVUb2tlbik7XHJcbiAgY29uc3QgdXNlcklzTG9nZ2VkSW4gPSAhIXRva2VuO1xyXG4gIGNvbnN0IGxvZ091dEhhbmRsZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRUb2tlbihudWxsKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImV4cGlyYXRpb25UaW1lXCIpO1xyXG4gICAgXHJcbiAgICBpZiAobG9nb3V0VGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KGxvZ291dFRpbWVyKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgY29uc3QgbG9nSW5IYW5kbGVyID0gKHRva2VuLCBleHBpcmF0aW9uVGltZSkgPT4ge1xyXG4gICAgc2V0VG9rZW4odG9rZW4pO1xyXG4gICAgXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHRva2VuKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhwaXJhdGlvblRpbWVcIiwgZXhwaXJhdGlvblRpbWUpO1xyXG4gICAgY29uc3QgcmVtYWluaW5nRHVyYXRpb24gPSBjYWxjdWxhdGVUaW1lKGV4cGlyYXRpb25UaW1lKTtcclxuICAgIGxvZ291dFRpbWVyID0gc2V0VGltZW91dChsb2dPdXRIYW5kbGVyLCByZW1haW5pbmdEdXJhdGlvbik7XHJcbiAgIFxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHRva2VuRGF0YSl7XHJcbiAgICBsb2dvdXRUaW1lciA9IHNldFRpbWVvdXQobG9nT3V0SGFuZGxlciwgdG9rZW5EYXRhLmR1cmF0aW9uKTtcclxuICAgIH1cclxuICB9LCBbdG9rZW5EYXRhLCBsb2dPdXRIYW5kbGVyXSk7XHJcblxyXG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHtcclxuICAgIHRva2VuOiB0b2tlbixcclxuICAgIGlzTG9nZ2VkSW46IHVzZXJJc0xvZ2dlZEluLFxyXG4gICAgbG9naW46IGxvZ0luSGFuZGxlcixcclxuICAgIGxvZ291dDogbG9nT3V0SGFuZGxlcixcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7QXV0aENvbnRleHQsQXV0aENvbnRleHRQcm92aWRlcn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=