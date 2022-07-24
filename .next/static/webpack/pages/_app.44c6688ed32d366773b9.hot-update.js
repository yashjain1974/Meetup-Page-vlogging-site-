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
/* harmony import */ var F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\store\\auth-context.js",
    _this = undefined,
    _s = $RefreshSig$();


var logoutTimer;
var AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initializeToken),
      token = _useState[0],
      setToken = _useState[1];

  var userIsLoggedIn = !!token;
  var logOutHandler = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  var logInHandler = function logInHandler(token, expirationTime) {
    setToken(token);
    userIsLoggedIn = (Object(F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("userIsLoggedIn"), true);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    var remainingDuration = calculateTime(expirationTime);
    logoutTimer = setTimeout(logOutHandler, remainingDuration);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYXV0aC1jb250ZXh0LmpzIl0sIm5hbWVzIjpbImxvZ291dFRpbWVyIiwiQXV0aENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ0b2tlbiIsImlzTG9nZ2VkSW4iLCJsb2dpbiIsImxvZ291dCIsImNhbGN1bGF0ZVRpbWUiLCJleHBpcmF0aW9uVGltZSIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJhZGpFeHBpcmF0aW9uVGltZSIsInJlbWFpbmluZ1RpbWUiLCJyZXRyZWl2ZVRva2VuIiwic3RvcmVkVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkRXhwaXJhdGlvblRpbWUiLCJyZW1haW5pbmdSZXRyZWl2ZVRpbWUiLCJyZW1vdmVJdGVtIiwiZHVyYXRpb24iLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJ0b2tlbkRhdGEiLCJpbml0aWFsaXplVG9rZW4iLCJ1c2VTdGF0ZSIsInNldFRva2VuIiwidXNlcklzTG9nZ2VkSW4iLCJsb2dPdXRIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJsb2dJbkhhbmRsZXIiLCJzZXRJdGVtIiwicmVtYWluaW5nRHVyYXRpb24iLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiY29udGV4dFZhbHVlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBSUEsV0FBSjtBQUNBLElBQU1DLFdBQVcsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0I7QUFDdENDLE9BQUssRUFBRSxFQUQrQjtBQUV0Q0MsWUFBVSxFQUFFLEtBRjBCO0FBR3RDQyxPQUFLLEVBQUUsZUFBQ0YsS0FBRCxFQUFXLENBQUUsQ0FIa0I7QUFJdENHLFFBQU0sRUFBRSxrQkFBTSxDQUFFO0FBSnNCLENBQXBCLENBQXBCOztBQU9BLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEs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QUEsY0FDR2QsS0FBSyxDQUFDZTtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBNUNNOztHQUFNaEIsbUI7O0tBQUFBLG1CO0FBOENFdEIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40NGM2Njg4ZWQzMmQzNjY3NzNiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5sZXQgbG9nb3V0VGltZXI7XHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XHJcbiAgdG9rZW46IFwiXCIsXHJcbiAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgbG9naW46ICh0b2tlbikgPT4ge30sXHJcbiAgbG9nb3V0OiAoKSA9PiB7fSxcclxufSk7XHJcblxyXG5jb25zdCBjYWxjdWxhdGVUaW1lID0gKGV4cGlyYXRpb25UaW1lKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBjb25zdCBhZGpFeHBpcmF0aW9uVGltZSA9IG5ldyBEYXRlKGV4cGlyYXRpb25UaW1lKS5nZXRUaW1lKCk7XHJcbiAgY29uc3QgcmVtYWluaW5nVGltZSA9IGFkakV4cGlyYXRpb25UaW1lIC0gY3VycmVudFRpbWU7XHJcbiAgcmV0dXJuIHJlbWFpbmluZ1RpbWU7XHJcbn07XHJcblxyXG5jb25zdCByZXRyZWl2ZVRva2VuID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0b3JlZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICBjb25zdCBzdG9yZWRFeHBpcmF0aW9uVGltZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhwaXJhdGlvblRpbWVcIik7XHJcblxyXG4gIGNvbnN0IHJlbWFpbmluZ1JldHJlaXZlVGltZSA9IGNhbGN1bGF0ZVRpbWUoc3RvcmVkRXhwaXJhdGlvblRpbWUpO1xyXG4gIGlmIChyZW1haW5pbmdSZXRyZWl2ZVRpbWUgPD0gMzYwMCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZXhwaXJhdGlvblRpbWVcIik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHRva2VuOiBzdG9yZWRUb2tlbixcclxuICAgIGR1cmF0aW9uOiByZW1haW5pbmdSZXRyZWl2ZVRpbWUsXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB0b2tlbkRhdGEgPSByZXRyZWl2ZVRva2VuKCk7XHJcbiAgbGV0IGluaXRpYWxpemVUb2tlbjtcclxuICBpZiAodG9rZW5EYXRhKSB7XHJcbiAgICBpbml0aWFsaXplVG9rZW4gPSB0b2tlbkRhdGEudG9rZW47XHJcbiAgfVxyXG5cclxuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKGluaXRpYWxpemVUb2tlbik7XHJcbiAgY29uc3QgdXNlcklzTG9nZ2VkSW4gPSAhIXRva2VuO1xyXG4gIGNvbnN0IGxvZ091dEhhbmRsZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRUb2tlbihudWxsKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImV4cGlyYXRpb25UaW1lXCIpO1xyXG4gICAgXHJcbiAgICBpZiAobG9nb3V0VGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KGxvZ291dFRpbWVyKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgY29uc3QgbG9nSW5IYW5kbGVyID0gKHRva2VuLCBleHBpcmF0aW9uVGltZSkgPT4ge1xyXG4gICAgc2V0VG9rZW4odG9rZW4pO1xyXG4gICAgdXNlcklzTG9nZ2VkSW49dHJ1ZVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4cGlyYXRpb25UaW1lXCIsIGV4cGlyYXRpb25UaW1lKTtcclxuICAgIGNvbnN0IHJlbWFpbmluZ0R1cmF0aW9uID0gY2FsY3VsYXRlVGltZShleHBpcmF0aW9uVGltZSk7XHJcbiAgICBsb2dvdXRUaW1lciA9IHNldFRpbWVvdXQobG9nT3V0SGFuZGxlciwgcmVtYWluaW5nRHVyYXRpb24pO1xyXG4gICBcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZih0b2tlbkRhdGEpe1xyXG4gICAgbG9nb3V0VGltZXIgPSBzZXRUaW1lb3V0KGxvZ091dEhhbmRsZXIsIHRva2VuRGF0YS5kdXJhdGlvbik7XHJcbiAgICB9XHJcbiAgfSwgW3Rva2VuRGF0YSwgbG9nT3V0SGFuZGxlcl0pO1xyXG5cclxuICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XHJcbiAgICB0b2tlbjogdG9rZW4sXHJcbiAgICBpc0xvZ2dlZEluOiB1c2VySXNMb2dnZWRJbixcclxuICAgIGxvZ2luOiBsb2dJbkhhbmRsZXIsXHJcbiAgICBsb2dvdXQ6IGxvZ091dEhhbmRsZXIsXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==