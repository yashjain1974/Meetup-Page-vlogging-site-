webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/AuthContextProvider.js":
/*!**************************************!*\
  !*** ./store/AuthContextProvider.js ***!
  \**************************************/
/*! exports provided: AuthContextProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContextProvider", function() { return AuthContextProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-context */ "./store/auth-context.js");


var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\store\\AuthContextProvider.js",
    _this = undefined,
    _s = $RefreshSig$();


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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_auth_context__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: contextValue,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 7
  }, _this);
};

_s(AuthContextProvider, "TLpy6rfE5JY1Tk0Ri5ROnOs5r+c=");

_c = AuthContextProvider;
/* harmony default export */ __webpack_exports__["default"] = (AuthContextProvider);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQXV0aENvbnRleHRQcm92aWRlci5qcyJdLCJuYW1lcyI6WyJsb2dvdXRUaW1lciIsImNhbGN1bGF0ZVRpbWUiLCJleHBpcmF0aW9uVGltZSIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJhZGpFeHBpcmF0aW9uVGltZSIsInJlbWFpbmluZ1RpbWUiLCJyZXRyZWl2ZVRva2VuIiwic3RvcmVkVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkRXhwaXJhdGlvblRpbWUiLCJyZW1haW5pbmdSZXRyZWl2ZVRpbWUiLCJyZW1vdmVJdGVtIiwidG9rZW4iLCJkdXJhdGlvbiIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInRva2VuRGF0YSIsImluaXRpYWxpemVUb2tlbiIsInVzZVN0YXRlIiwic2V0VG9rZW4iLCJ1c2VySXNMb2dnZWRJbiIsImxvZ091dEhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImNsZWFyVGltZW91dCIsImxvZ0luSGFuZGxlciIsInNldEl0ZW0iLCJyZW1haW5pbmdEdXJhdGlvbiIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJjb250ZXh0VmFsdWUiLCJpc0xvZ2dlZEluIiwibG9naW4iLCJsb2dvdXQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQUlBLFdBQUo7QUFDQTs7QUFDQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLGNBQUQsRUFBb0I7QUFDdEMsTUFBTUMsV0FBVyxHQUFHLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFwQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLElBQUlGLElBQUosQ0FBU0YsY0FBVCxFQUF5QkcsT0FBekIsRUFBMUI7QUFDQSxNQUFNRSxhQUFhLEdBQUdELGlCQUFpQixHQUFHSCxXQUExQztBQUNBLFNBQU9JLGFBQVA7QUFDRCxDQUxIOztBQU9FLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixNQUFNQyxXQUFXLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFwQjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsZ0JBQXJCLENBQTdCO0FBR0EsTUFBTUUscUJBQXFCLEdBQUdaLGFBQWEsQ0FBQ1csb0JBQUQsQ0FBM0M7O0FBQ0EsTUFBSUMscUJBQXFCLElBQUksSUFBN0IsRUFBbUM7QUFDakNILGdCQUFZLENBQUNJLFVBQWIsQ0FBd0IsT0FBeEI7QUFDQUosZ0JBQVksQ0FBQ0ksVUFBYixDQUF3QixnQkFBeEI7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUFPO0FBQ0xDLFNBQUssRUFBRU4sV0FERjtBQUVMTyxZQUFRLEVBQUVIO0FBRkwsR0FBUDtBQUlELENBZkQ7O0FBZ0JLLElBQU1JLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzFDLE1BQU1DLFNBQVMsR0FBR1gsYUFBYSxFQUEvQjtBQUNBLE1BQUlZLGVBQUo7O0FBQ0EsTUFBSUQsU0FBSixFQUFlO0FBQ2JDLG1CQUFlLEdBQUdELFNBQVMsQ0FBQ0osS0FBNUI7QUFDRDs7QUFMeUMsa0JBT2hCTSxzREFBUSxDQUFDRCxlQUFELENBUFE7QUFBQSxNQU9uQ0wsS0FQbUM7QUFBQSxNQU81Qk8sUUFQNEI7O0FBUTFDLE1BQU1DLGNBQWMsR0FBRyxDQUFDLENBQUNSLEtBQXpCO0FBQ0EsTUFBTVMsYUFBYSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDdENILFlBQVEsQ0FBQyxJQUFELENBQVI7QUFDQVosZ0JBQVksQ0FBQ0ksVUFBYixDQUF3QixPQUF4QjtBQUNBSixnQkFBWSxDQUFDSSxVQUFiLENBQXdCLGdCQUF4Qjs7QUFFQSxRQUFJZCxXQUFKLEVBQWlCO0FBQ2YwQixrQkFBWSxDQUFDMUIsV0FBRCxDQUFaO0FBQ0Q7QUFDRixHQVJnQyxFQVE5QixFQVI4QixDQUFqQzs7QUFTQSxNQUFNMkIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ1osS0FBRCxFQUFRYixjQUFSLEVBQTJCO0FBQzlDb0IsWUFBUSxDQUFDUCxLQUFELENBQVI7QUFFQUwsZ0JBQVksQ0FBQ2tCLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJiLEtBQTlCO0FBQ0FMLGdCQUFZLENBQUNrQixPQUFiLENBQXFCLGdCQUFyQixFQUF1QzFCLGNBQXZDO0FBQ0EsUUFBTTJCLGlCQUFpQixHQUFHNUIsYUFBYSxDQUFDQyxjQUFELENBQXZDO0FBQ0FGLGVBQVcsR0FBRzhCLFVBQVUsQ0FBQ04sYUFBRCxFQUFnQkssaUJBQWhCLENBQXhCO0FBRUQsR0FSRDs7QUFTQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR1osU0FBSCxFQUFhO0FBQ2JuQixpQkFBVyxHQUFHOEIsVUFBVSxDQUFDTixhQUFELEVBQWdCTCxTQUFTLENBQUNILFFBQTFCLENBQXhCO0FBQ0M7QUFDRixHQUpRLEVBSU4sQ0FBQ0csU0FBRCxFQUFZSyxhQUFaLENBSk0sQ0FBVDtBQU1BLE1BQU1RLFlBQVksR0FBRztBQUNuQmpCLFNBQUssRUFBRUEsS0FEWTtBQUVuQmtCLGNBQVUsRUFBRVYsY0FGTztBQUduQlcsU0FBSyxFQUFFUCxZQUhZO0FBSW5CUSxVQUFNLEVBQUVYO0FBSlcsR0FBckI7QUFNQSxzQkFDRSxxRUFBQyxxREFBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFUSxZQUE3QjtBQUFBLGNBQ0dkLEtBQUssQ0FBQ2tCO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0E1Q0k7O0dBQU1uQixtQjs7S0FBQUEsbUI7QUE4Q0lBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjU1NjNlOWVlNTEzN2FiNTJiNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxubGV0IGxvZ291dFRpbWVyO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4vYXV0aC1jb250ZXh0XCI7XHJcbmNvbnN0IGNhbGN1bGF0ZVRpbWUgPSAoZXhwaXJhdGlvblRpbWUpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCBhZGpFeHBpcmF0aW9uVGltZSA9IG5ldyBEYXRlKGV4cGlyYXRpb25UaW1lKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCByZW1haW5pbmdUaW1lID0gYWRqRXhwaXJhdGlvblRpbWUgLSBjdXJyZW50VGltZTtcclxuICAgIHJldHVybiByZW1haW5pbmdUaW1lO1xyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgcmV0cmVpdmVUb2tlbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGNvbnN0IHN0b3JlZEV4cGlyYXRpb25UaW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleHBpcmF0aW9uVGltZVwiKTtcclxuICAgIFxyXG4gIFxyXG4gICAgY29uc3QgcmVtYWluaW5nUmV0cmVpdmVUaW1lID0gY2FsY3VsYXRlVGltZShzdG9yZWRFeHBpcmF0aW9uVGltZSk7XHJcbiAgICBpZiAocmVtYWluaW5nUmV0cmVpdmVUaW1lIDw9IDM2MDApIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJleHBpcmF0aW9uVGltZVwiKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0b2tlbjogc3RvcmVkVG9rZW4sXHJcbiAgICAgIGR1cmF0aW9uOiByZW1haW5pbmdSZXRyZWl2ZVRpbWUsXHJcbiAgICB9O1xyXG4gIH07XHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbkRhdGEgPSByZXRyZWl2ZVRva2VuKCk7XHJcbiAgICBsZXQgaW5pdGlhbGl6ZVRva2VuO1xyXG4gICAgaWYgKHRva2VuRGF0YSkge1xyXG4gICAgICBpbml0aWFsaXplVG9rZW4gPSB0b2tlbkRhdGEudG9rZW47XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKGluaXRpYWxpemVUb2tlbik7XHJcbiAgICBjb25zdCB1c2VySXNMb2dnZWRJbiA9ICEhdG9rZW47XHJcbiAgICBjb25zdCBsb2dPdXRIYW5kbGVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICBzZXRUb2tlbihudWxsKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJleHBpcmF0aW9uVGltZVwiKTtcclxuICAgICAgXHJcbiAgICAgIGlmIChsb2dvdXRUaW1lcikge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChsb2dvdXRUaW1lcik7XHJcbiAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGxvZ0luSGFuZGxlciA9ICh0b2tlbiwgZXhwaXJhdGlvblRpbWUpID0+IHtcclxuICAgICAgc2V0VG9rZW4odG9rZW4pO1xyXG4gICAgICBcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhwaXJhdGlvblRpbWVcIiwgZXhwaXJhdGlvblRpbWUpO1xyXG4gICAgICBjb25zdCByZW1haW5pbmdEdXJhdGlvbiA9IGNhbGN1bGF0ZVRpbWUoZXhwaXJhdGlvblRpbWUpO1xyXG4gICAgICBsb2dvdXRUaW1lciA9IHNldFRpbWVvdXQobG9nT3V0SGFuZGxlciwgcmVtYWluaW5nRHVyYXRpb24pO1xyXG4gICAgIFxyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmKHRva2VuRGF0YSl7XHJcbiAgICAgIGxvZ291dFRpbWVyID0gc2V0VGltZW91dChsb2dPdXRIYW5kbGVyLCB0b2tlbkRhdGEuZHVyYXRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9LCBbdG9rZW5EYXRhLCBsb2dPdXRIYW5kbGVyXSk7XHJcbiAgXHJcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XHJcbiAgICAgIHRva2VuOiB0b2tlbixcclxuICAgICAgaXNMb2dnZWRJbjogdXNlcklzTG9nZ2VkSW4sXHJcbiAgICAgIGxvZ2luOiBsb2dJbkhhbmRsZXIsXHJcbiAgICAgIGxvZ291dDogbG9nT3V0SGFuZGxlcixcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dFByb3ZpZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=