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
    isLoggedIn = false;

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  var logInHandler = function logInHandler(token, expirationTime) {
    setToken(token);
    use;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYXV0aC1jb250ZXh0LmpzIl0sIm5hbWVzIjpbImxvZ291dFRpbWVyIiwiQXV0aENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ0b2tlbiIsImlzTG9nZ2VkSW4iLCJsb2dpbiIsImxvZ291dCIsImNhbGN1bGF0ZVRpbWUiLCJleHBpcmF0aW9uVGltZSIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJhZGpFeHBpcmF0aW9uVGltZSIsInJlbWFpbmluZ1RpbWUiLCJyZXRyZWl2ZVRva2VuIiwic3RvcmVkVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkRXhwaXJhdGlvblRpbWUiLCJyZW1haW5pbmdSZXRyZWl2ZVRpbWUiLCJyZW1vdmVJdGVtIiwiZHVyYXRpb24iLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJ0b2tlbkRhdGEiLCJpbml0aWFsaXplVG9rZW4iLCJ1c2VTdGF0ZSIsInNldFRva2VuIiwidXNlcklzTG9nZ2VkSW4iLCJsb2dPdXRIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJsb2dJbkhhbmRsZXIiLCJ1c2UiLCJzZXRJdGVtIiwicmVtYWluaW5nRHVyYXRpb24iLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiY29udGV4dFZhbHVlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQUlBLFdBQUo7QUFDQSxJQUFNQyxXQUFXLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CO0FBQ3RDQyxPQUFLLEVBQUUsRUFEK0I7QUFFdENDLFlBQVUsRUFBRSxLQUYwQjtBQUd0Q0MsT0FBSyxFQUFFLGVBQUNGLEtBQUQsRUFBVyxDQUFFLENBSGtCO0FBSXRDRyxRQUFNLEVBQUUsa0JBQU0sQ0FBRTtBQUpzQixDQUFwQixDQUFwQjs7QUFPQSxJQUFNQyxhQUFhLEdBQUcsU0FB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LFlBQTdCO0FBQUEsY0FDR2YsS0FBSyxDQUFDZ0I7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQTVDTTs7R0FBTWpCLG1COztLQUFBQSxtQjtBQThDRXRCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDlkNmI4MTU3NGQ3ODVmNmVkYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxubGV0IGxvZ291dFRpbWVyO1xyXG5jb25zdCBBdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xyXG4gIHRva2VuOiBcIlwiLFxyXG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gIGxvZ2luOiAodG9rZW4pID0+IHt9LFxyXG4gIGxvZ291dDogKCkgPT4ge30sXHJcbn0pO1xyXG5cclxuY29uc3QgY2FsY3VsYXRlVGltZSA9IChleHBpcmF0aW9uVGltZSkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgY29uc3QgYWRqRXhwaXJhdGlvblRpbWUgPSBuZXcgRGF0ZShleHBpcmF0aW9uVGltZSkuZ2V0VGltZSgpO1xyXG4gIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSBhZGpFeHBpcmF0aW9uVGltZSAtIGN1cnJlbnRUaW1lO1xyXG4gIHJldHVybiByZW1haW5pbmdUaW1lO1xyXG59O1xyXG5cclxuY29uc3QgcmV0cmVpdmVUb2tlbiA9ICgpID0+IHtcclxuICBjb25zdCBzdG9yZWRUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgY29uc3Qgc3RvcmVkRXhwaXJhdGlvblRpbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4cGlyYXRpb25UaW1lXCIpO1xyXG5cclxuICBjb25zdCByZW1haW5pbmdSZXRyZWl2ZVRpbWUgPSBjYWxjdWxhdGVUaW1lKHN0b3JlZEV4cGlyYXRpb25UaW1lKTtcclxuICBpZiAocmVtYWluaW5nUmV0cmVpdmVUaW1lIDw9IDM2MDApIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImV4cGlyYXRpb25UaW1lXCIpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICB0b2tlbjogc3RvcmVkVG9rZW4sXHJcbiAgICBkdXJhdGlvbjogcmVtYWluaW5nUmV0cmVpdmVUaW1lLFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgdG9rZW5EYXRhID0gcmV0cmVpdmVUb2tlbigpO1xyXG4gIGxldCBpbml0aWFsaXplVG9rZW47XHJcbiAgaWYgKHRva2VuRGF0YSkge1xyXG4gICAgaW5pdGlhbGl6ZVRva2VuID0gdG9rZW5EYXRhLnRva2VuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShpbml0aWFsaXplVG9rZW4pO1xyXG4gIGNvbnN0IHVzZXJJc0xvZ2dlZEluID0gISF0b2tlbjtcclxuICBjb25zdCBsb2dPdXRIYW5kbGVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0VG9rZW4obnVsbCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJleHBpcmF0aW9uVGltZVwiKTtcclxuICAgIGlzTG9nZ2VkSW49ZmFsc2U7XHJcbiAgICBpZiAobG9nb3V0VGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KGxvZ291dFRpbWVyKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgY29uc3QgbG9nSW5IYW5kbGVyID0gKHRva2VuLCBleHBpcmF0aW9uVGltZSkgPT4ge1xyXG4gICAgc2V0VG9rZW4odG9rZW4pO1xyXG4gICAgdXNlXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHRva2VuKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhwaXJhdGlvblRpbWVcIiwgZXhwaXJhdGlvblRpbWUpO1xyXG4gICAgY29uc3QgcmVtYWluaW5nRHVyYXRpb24gPSBjYWxjdWxhdGVUaW1lKGV4cGlyYXRpb25UaW1lKTtcclxuICAgIGxvZ291dFRpbWVyID0gc2V0VGltZW91dChsb2dPdXRIYW5kbGVyLCByZW1haW5pbmdEdXJhdGlvbik7XHJcbiAgIFxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHRva2VuRGF0YSl7XHJcbiAgICBsb2dvdXRUaW1lciA9IHNldFRpbWVvdXQobG9nT3V0SGFuZGxlciwgdG9rZW5EYXRhLmR1cmF0aW9uKTtcclxuICAgIH1cclxuICB9LCBbdG9rZW5EYXRhLCBsb2dPdXRIYW5kbGVyXSk7XHJcblxyXG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHtcclxuICAgIHRva2VuOiB0b2tlbixcclxuICAgIGlzTG9nZ2VkSW46IHVzZXJJc0xvZ2dlZEluLFxyXG4gICAgbG9naW46IGxvZ0luSGFuZGxlcixcclxuICAgIGxvZ291dDogbG9nT3V0SGFuZGxlcixcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9