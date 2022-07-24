webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/auth-context.js":
/*!*******************************!*\
  !*** ./store/auth-context.js ***!
  \*******************************/
/*! exports provided: AuthContextProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContextProvider", function() { return AuthContextProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\store\\auth-context.js",
    _this = undefined,
    _s = $RefreshSig$();


var AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({
  token: "",
  isLoggedIn: false,
  login: function login(token) {},
  logout: function logout() {}
});
var logoutTimer;

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
    lineNumber: 75,
    columnNumber: 7
  }, _this);
};

_s(AuthContextProvider, "TLpy6rfE5JY1Tk0Ri5ROnOs5r+c=");

_c = AuthContextProvider;
/* harmony default export */ __webpack_exports__["default"] = (AuthContext);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYXV0aC1jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidG9rZW4iLCJpc0xvZ2dlZEluIiwibG9naW4iLCJsb2dvdXQiLCJsb2dvdXRUaW1lciIsImNhbGN1bGF0ZVRpbWUiLCJleHBpcmF0aW9uVGltZSIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJhZGpFeHBpcmF0aW9uVGltZSIsInJlbWFpbmluZ1RpbWUiLCJyZXRyZWl2ZVRva2VuIiwic3RvcmVkVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkRXhwaXJhdGlvblRpbWUiLCJyZW1haW5pbmdSZXRyZWl2ZVRpbWUiLCJyZW1vdmVJdGVtIiwiZHVyYXRpb24iLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJ0b2tlbkRhdGEiLCJpbml0aWFsaXplVG9rZW4iLCJ1c2VTdGF0ZSIsInNldFRva2VuIiwidXNlcklzTG9nZ2VkSW4iLCJsb2dPdXRIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJsb2dJbkhhbmRsZXIiLCJzZXRJdGVtIiwicmVtYWluaW5nRHVyYXRpb24iLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiY29udGV4dFZhbHVlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBLElBQU1BLFdBQVcsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0I7QUFDdENDLE9BQUssRUFBRSxFQUQrQjtBQUV0Q0MsWUFBVSxFQUFFLEtBRjBCO0FBR3RDQyxPQUFLLEVBQUUsZUFBQ0YsS0FBRCxFQUFXLENBQUUsQ0FIa0I7QUFJdENHLFFBQU0sRUFBRSxrQkFBTSxDQUFFO0FBSnNCLENBQXBCLENBQXBCO0FBUUEsSUFBSUMsV0FBSjs7QUFDQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFB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QUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0E1Q0k7O0dBQU1oQixtQjs7S0FBQUEsbUI7QUFpREV2QiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjAyZTFhNDI1MTgyOTcyNmM2N2UzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICB0b2tlbjogXCJcIixcclxuICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICBsb2dpbjogKHRva2VuKSA9PiB7fSxcclxuICBsb2dvdXQ6ICgpID0+IHt9LFxyXG59KTtcclxuXHJcblxyXG5sZXQgbG9nb3V0VGltZXI7XHJcbmNvbnN0IGNhbGN1bGF0ZVRpbWUgPSAoZXhwaXJhdGlvblRpbWUpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCBhZGpFeHBpcmF0aW9uVGltZSA9IG5ldyBEYXRlKGV4cGlyYXRpb25UaW1lKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCByZW1haW5pbmdUaW1lID0gYWRqRXhwaXJhdGlvblRpbWUgLSBjdXJyZW50VGltZTtcclxuICAgIHJldHVybiByZW1haW5pbmdUaW1lO1xyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgcmV0cmVpdmVUb2tlbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGNvbnN0IHN0b3JlZEV4cGlyYXRpb25UaW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleHBpcmF0aW9uVGltZVwiKTtcclxuICAgIFxyXG4gIFxyXG4gICAgY29uc3QgcmVtYWluaW5nUmV0cmVpdmVUaW1lID0gY2FsY3VsYXRlVGltZShzdG9yZWRFeHBpcmF0aW9uVGltZSk7XHJcbiAgICBpZiAocmVtYWluaW5nUmV0cmVpdmVUaW1lIDw9IDM2MDApIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJleHBpcmF0aW9uVGltZVwiKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0b2tlbjogc3RvcmVkVG9rZW4sXHJcbiAgICAgIGR1cmF0aW9uOiByZW1haW5pbmdSZXRyZWl2ZVRpbWUsXHJcbiAgICB9O1xyXG4gIH07XHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbkRhdGEgPSByZXRyZWl2ZVRva2VuKCk7XHJcbiAgICBsZXQgaW5pdGlhbGl6ZVRva2VuO1xyXG4gICAgaWYgKHRva2VuRGF0YSkge1xyXG4gICAgICBpbml0aWFsaXplVG9rZW4gPSB0b2tlbkRhdGEudG9rZW47XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKGluaXRpYWxpemVUb2tlbik7XHJcbiAgICBjb25zdCB1c2VySXNMb2dnZWRJbiA9ICEhdG9rZW47XHJcbiAgICBjb25zdCBsb2dPdXRIYW5kbGVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICBzZXRUb2tlbihudWxsKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJleHBpcmF0aW9uVGltZVwiKTtcclxuICAgICAgXHJcbiAgICAgIGlmIChsb2dvdXRUaW1lcikge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChsb2dvdXRUaW1lcik7XHJcbiAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGxvZ0luSGFuZGxlciA9ICh0b2tlbiwgZXhwaXJhdGlvblRpbWUpID0+IHtcclxuICAgICAgc2V0VG9rZW4odG9rZW4pO1xyXG4gICAgICBcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhwaXJhdGlvblRpbWVcIiwgZXhwaXJhdGlvblRpbWUpO1xyXG4gICAgICBjb25zdCByZW1haW5pbmdEdXJhdGlvbiA9IGNhbGN1bGF0ZVRpbWUoZXhwaXJhdGlvblRpbWUpO1xyXG4gICAgICBsb2dvdXRUaW1lciA9IHNldFRpbWVvdXQobG9nT3V0SGFuZGxlciwgcmVtYWluaW5nRHVyYXRpb24pO1xyXG4gICAgIFxyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmKHRva2VuRGF0YSl7XHJcbiAgICAgIGxvZ291dFRpbWVyID0gc2V0VGltZW91dChsb2dPdXRIYW5kbGVyLCB0b2tlbkRhdGEuZHVyYXRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9LCBbdG9rZW5EYXRhLCBsb2dPdXRIYW5kbGVyXSk7XHJcbiAgXHJcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XHJcbiAgICAgIHRva2VuOiB0b2tlbixcclxuICAgICAgaXNMb2dnZWRJbjogdXNlcklzTG9nZ2VkSW4sXHJcbiAgICAgIGxvZ2luOiBsb2dJbkhhbmRsZXIsXHJcbiAgICAgIGxvZ291dDogbG9nT3V0SGFuZGxlcixcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBcclxuXHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=