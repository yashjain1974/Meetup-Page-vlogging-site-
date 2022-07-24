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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYXV0aC1jb250ZXh0LmpzIl0sIm5hbWVzIjpbImxvZ291dFRpbWVyIiwiQXV0aENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ0b2tlbiIsImlzTG9nZ2VkSW4iLCJsb2dpbiIsImxvZ291dCIsImNhbGN1bGF0ZVRpbWUiLCJleHBpcmF0aW9uVGltZSIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJhZGpFeHBpcmF0aW9uVGltZSIsInJlbWFpbmluZ1RpbWUiLCJyZXRyZWl2ZVRva2VuIiwic3RvcmVkVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkRXhwaXJhdGlvblRpbWUiLCJyZW1haW5pbmdSZXRyZWl2ZVRpbWUiLCJyZW1vdmVJdGVtIiwiZHVyYXRpb24iLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJ0b2tlbkRhdGEiLCJpbml0aWFsaXplVG9rZW4iLCJ1c2VTdGF0ZSIsInNldFRva2VuIiwidXNlcklzTG9nZ2VkSW4iLCJsb2dPdXRIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJsb2dJbkhhbmRsZXIiLCJzZXRJdGVtIiwicmVtYWluaW5nRHVyYXRpb24iLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiY29udGV4dFZhbHVlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBSUEsV0FBSjtBQUNBLElBQU1DLFdBQVcsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0I7QUFDdENDLE9BQUssRUFBRSxFQUQrQjtBQUV0Q0MsWUFBVSxFQUFFLEtBRjBCO0FBR3RDQyxPQUFLLEVBQUUsZUFBQ0YsS0FBRCxFQUFXLENBQUUsQ0FIa0I7QUFJdENHLFFBQU0sRUFBRSxrQkFBTSxDQUFFO0FBSnNCLENBQXBCLENBQXBCOztBQU9BLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFB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QTtBQUFBO0FBQUEsV0FERjtBQUtELENBNUNEOztHQUFNaEIsbUI7O0tBQUFBLG1CO0FBOENTdEIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC5lM2RmNWQ1NjhmNmMxMGYwMzA0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5sZXQgbG9nb3V0VGltZXI7XHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XHJcbiAgdG9rZW46IFwiXCIsXHJcbiAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgbG9naW46ICh0b2tlbikgPT4ge30sXHJcbiAgbG9nb3V0OiAoKSA9PiB7fSxcclxufSk7XHJcblxyXG5jb25zdCBjYWxjdWxhdGVUaW1lID0gKGV4cGlyYXRpb25UaW1lKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBjb25zdCBhZGpFeHBpcmF0aW9uVGltZSA9IG5ldyBEYXRlKGV4cGlyYXRpb25UaW1lKS5nZXRUaW1lKCk7XHJcbiAgY29uc3QgcmVtYWluaW5nVGltZSA9IGFkakV4cGlyYXRpb25UaW1lIC0gY3VycmVudFRpbWU7XHJcbiAgcmV0dXJuIHJlbWFpbmluZ1RpbWU7XHJcbn07XHJcblxyXG5jb25zdCByZXRyZWl2ZVRva2VuID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0b3JlZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICBjb25zdCBzdG9yZWRFeHBpcmF0aW9uVGltZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZXhwaXJhdGlvblRpbWVcIik7XHJcblxyXG4gIGNvbnN0IHJlbWFpbmluZ1JldHJlaXZlVGltZSA9IGNhbGN1bGF0ZVRpbWUoc3RvcmVkRXhwaXJhdGlvblRpbWUpO1xyXG4gIGlmIChyZW1haW5pbmdSZXRyZWl2ZVRpbWUgPD0gMzYwMCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZXhwaXJhdGlvblRpbWVcIik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHRva2VuOiBzdG9yZWRUb2tlbixcclxuICAgIGR1cmF0aW9uOiByZW1haW5pbmdSZXRyZWl2ZVRpbWUsXHJcbiAgfTtcclxufTtcclxuY29uc3QgQXV0aENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHRva2VuRGF0YSA9IHJldHJlaXZlVG9rZW4oKTtcclxuICBsZXQgaW5pdGlhbGl6ZVRva2VuO1xyXG4gIGlmICh0b2tlbkRhdGEpIHtcclxuICAgIGluaXRpYWxpemVUb2tlbiA9IHRva2VuRGF0YS50b2tlbjtcclxuICB9XHJcblxyXG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoaW5pdGlhbGl6ZVRva2VuKTtcclxuICBjb25zdCB1c2VySXNMb2dnZWRJbiA9ICEhdG9rZW47XHJcbiAgY29uc3QgbG9nT3V0SGFuZGxlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFRva2VuKG51bGwpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZXhwaXJhdGlvblRpbWVcIik7XHJcbiAgICBcclxuICAgIGlmIChsb2dvdXRUaW1lcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQobG9nb3V0VGltZXIpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICBjb25zdCBsb2dJbkhhbmRsZXIgPSAodG9rZW4sIGV4cGlyYXRpb25UaW1lKSA9PiB7XHJcbiAgICBzZXRUb2tlbih0b2tlbik7XHJcbiAgICBcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleHBpcmF0aW9uVGltZVwiLCBleHBpcmF0aW9uVGltZSk7XHJcbiAgICBjb25zdCByZW1haW5pbmdEdXJhdGlvbiA9IGNhbGN1bGF0ZVRpbWUoZXhwaXJhdGlvblRpbWUpO1xyXG4gICAgbG9nb3V0VGltZXIgPSBzZXRUaW1lb3V0KGxvZ091dEhhbmRsZXIsIHJlbWFpbmluZ0R1cmF0aW9uKTtcclxuICAgXHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYodG9rZW5EYXRhKXtcclxuICAgIGxvZ291dFRpbWVyID0gc2V0VGltZW91dChsb2dPdXRIYW5kbGVyLCB0b2tlbkRhdGEuZHVyYXRpb24pO1xyXG4gICAgfVxyXG4gIH0sIFt0b2tlbkRhdGEsIGxvZ091dEhhbmRsZXJdKTtcclxuXHJcbiAgY29uc3QgY29udGV4dFZhbHVlID0ge1xyXG4gICAgdG9rZW46IHRva2VuLFxyXG4gICAgaXNMb2dnZWRJbjogdXNlcklzTG9nZ2VkSW4sXHJcbiAgICBsb2dpbjogbG9nSW5IYW5kbGVyLFxyXG4gICAgbG9nb3V0OiBsb2dPdXRIYW5kbGVyLFxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=