webpackHotUpdate_N_E("pages/auth",{

/***/ "./store/auth-context.js":
/*!*******************************!*\
  !*** ./store/auth-context.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYXV0aC1jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidG9rZW4iLCJpc0xvZ2dlZEluIiwibG9naW4iLCJsb2dvdXQiLCJsb2dvdXRUaW1lciIsImNhbGN1bGF0ZVRpbWUiLCJleHBpcmF0aW9uVGltZSIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJhZGpFeHBpcmF0aW9uVGltZSIsInJlbWFpbmluZ1RpbWUiLCJyZXRyZWl2ZVRva2VuIiwic3RvcmVkVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkRXhwaXJhdGlvblRpbWUiLCJyZW1haW5pbmdSZXRyZWl2ZVRpbWUiLCJyZW1vdmVJdGVtIiwiZHVyYXRpb24iLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJ0b2tlbkRhdGEiLCJpbml0aWFsaXplVG9rZW4iLCJ1c2VTdGF0ZSIsInNldFRva2VuIiwidXNlcklzTG9nZ2VkSW4iLCJsb2dPdXRIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJsb2dJbkhhbmRsZXIiLCJzZXRJdGVtIiwicmVtYWluaW5nRHVyYXRpb24iLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiY29udGV4dFZhbHVlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0EsSUFBTUEsV0FBVyxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjtBQUN0Q0MsT0FBSyxFQUFFLEVBRCtCO0FBRXRDQyxZQUFVLEVBQUUsS0FGMEI7QUFHdENDLE9BQUssRUFBRSxlQUFDRixLQUFELEVBQVcsQ0FBRSxDQUhrQjtBQUl0Q0csUUFBTSxFQUFFLGtCQUFNLENBQUU7QUFKc0IsQ0FBcEIsQ0FBcEI7QUFRQSxJQUFJQyxXQUFKOztBQUNBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFB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QTtBQUFBO0FBQUEsV0FERjtBQUtELENBNUNIOztHQUFNaEIsbUI7O0tBQUFBLG1CO0FBa0RTdkIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC42NzcxYjQxZDgzYjAxN2M1OTE0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBBdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xyXG4gIHRva2VuOiBcIlwiLFxyXG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gIGxvZ2luOiAodG9rZW4pID0+IHt9LFxyXG4gIGxvZ291dDogKCkgPT4ge30sXHJcbn0pO1xyXG5cclxuXHJcbmxldCBsb2dvdXRUaW1lcjtcclxuY29uc3QgY2FsY3VsYXRlVGltZSA9IChleHBpcmF0aW9uVGltZSkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IGFkakV4cGlyYXRpb25UaW1lID0gbmV3IERhdGUoZXhwaXJhdGlvblRpbWUpLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSBhZGpFeHBpcmF0aW9uVGltZSAtIGN1cnJlbnRUaW1lO1xyXG4gICAgcmV0dXJuIHJlbWFpbmluZ1RpbWU7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCByZXRyZWl2ZVRva2VuID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3Qgc3RvcmVkRXhwaXJhdGlvblRpbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4cGlyYXRpb25UaW1lXCIpO1xyXG4gICAgXHJcbiAgXHJcbiAgICBjb25zdCByZW1haW5pbmdSZXRyZWl2ZVRpbWUgPSBjYWxjdWxhdGVUaW1lKHN0b3JlZEV4cGlyYXRpb25UaW1lKTtcclxuICAgIGlmIChyZW1haW5pbmdSZXRyZWl2ZVRpbWUgPD0gMzYwMCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImV4cGlyYXRpb25UaW1lXCIpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRva2VuOiBzdG9yZWRUb2tlbixcclxuICAgICAgZHVyYXRpb246IHJlbWFpbmluZ1JldHJlaXZlVGltZSxcclxuICAgIH07XHJcbiAgfTtcclxuY29uc3QgQXV0aENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgdG9rZW5EYXRhID0gcmV0cmVpdmVUb2tlbigpO1xyXG4gICAgbGV0IGluaXRpYWxpemVUb2tlbjtcclxuICAgIGlmICh0b2tlbkRhdGEpIHtcclxuICAgICAgaW5pdGlhbGl6ZVRva2VuID0gdG9rZW5EYXRhLnRva2VuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShpbml0aWFsaXplVG9rZW4pO1xyXG4gICAgY29uc3QgdXNlcklzTG9nZ2VkSW4gPSAhIXRva2VuO1xyXG4gICAgY29uc3QgbG9nT3V0SGFuZGxlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgc2V0VG9rZW4obnVsbCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZXhwaXJhdGlvblRpbWVcIik7XHJcbiAgICAgIFxyXG4gICAgICBpZiAobG9nb3V0VGltZXIpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQobG9nb3V0VGltZXIpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBsb2dJbkhhbmRsZXIgPSAodG9rZW4sIGV4cGlyYXRpb25UaW1lKSA9PiB7XHJcbiAgICAgIHNldFRva2VuKHRva2VuKTtcclxuICAgICAgXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4cGlyYXRpb25UaW1lXCIsIGV4cGlyYXRpb25UaW1lKTtcclxuICAgICAgY29uc3QgcmVtYWluaW5nRHVyYXRpb24gPSBjYWxjdWxhdGVUaW1lKGV4cGlyYXRpb25UaW1lKTtcclxuICAgICAgbG9nb3V0VGltZXIgPSBzZXRUaW1lb3V0KGxvZ091dEhhbmRsZXIsIHJlbWFpbmluZ0R1cmF0aW9uKTtcclxuICAgICBcclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZih0b2tlbkRhdGEpe1xyXG4gICAgICBsb2dvdXRUaW1lciA9IHNldFRpbWVvdXQobG9nT3V0SGFuZGxlciwgdG9rZW5EYXRhLmR1cmF0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfSwgW3Rva2VuRGF0YSwgbG9nT3V0SGFuZGxlcl0pO1xyXG4gIFxyXG4gICAgY29uc3QgY29udGV4dFZhbHVlID0ge1xyXG4gICAgICB0b2tlbjogdG9rZW4sXHJcbiAgICAgIGlzTG9nZ2VkSW46IHVzZXJJc0xvZ2dlZEluLFxyXG4gICAgICBsb2dpbjogbG9nSW5IYW5kbGVyLFxyXG4gICAgICBsb2dvdXQ6IGxvZ091dEhhbmRsZXIsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=