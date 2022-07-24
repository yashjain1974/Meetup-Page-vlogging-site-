webpackHotUpdate_N_E("pages/auth",{

/***/ "./store/auth-context.js":
/*!*******************************!*\
  !*** ./store/auth-context.js ***!
  \*******************************/
/*! exports provided: AuthContextProvider, useAppContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContextProvider", function() { return AuthContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppContext", function() { return useAppContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\store\\auth-context.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


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
function useAppContext() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AppContext);
}

_s2(useAppContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYXV0aC1jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidG9rZW4iLCJpc0xvZ2dlZEluIiwibG9naW4iLCJsb2dvdXQiLCJsb2dvdXRUaW1lciIsImNhbGN1bGF0ZVRpbWUiLCJleHBpcmF0aW9uVGltZSIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJhZGpFeHBpcmF0aW9uVGltZSIsInJlbWFpbmluZ1RpbWUiLCJyZXRyZWl2ZVRva2VuIiwic3RvcmVkVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkRXhwaXJhdGlvblRpbWUiLCJyZW1haW5pbmdSZXRyZWl2ZVRpbWUiLCJyZW1vdmVJdGVtIiwiZHVyYXRpb24iLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJ0b2tlbkRhdGEiLCJpbml0aWFsaXplVG9rZW4iLCJ1c2VTdGF0ZSIsInNldFRva2VuIiwidXNlcklzTG9nZ2VkSW4iLCJsb2dPdXRIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJsb2dJbkhhbmRsZXIiLCJzZXRJdGVtIiwicmVtYWluaW5nRHVyYXRpb24iLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiY29udGV4dFZhbHVlIiwiY2hpbGRyZW4iLCJ1c2VBcHBDb250ZXh0IiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0EsSUFBTUEsV0FBVyxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjtBQUN0Q0MsT0FBSyxFQUFFLEVBRCtCO0FBRXRDQyxZQUFVLEVBQUUsS0FGMEI7QUFHdENDLE9BQUssRUFBRSxlQUFDRixLQUFELEVBQVcsQ0FBRSxDQUhrQjtBQUl0Q0csUUFBTSxFQUFFLGtCQUFNLENBQUU7QUFKc0IsQ0FBcEIsQ0FBcEI7QUFRQSxJQUFJQyxXQUFKOztBQUNBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsY0FBRCxFQUFvQjtBQUN0QyxNQUFNQyxXQUFXLEdBQUcsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQXBCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsSUFBSUYsSUFBSixDQUFTRixjQUFULEVBQXlCRyxPQUF6QixFQUExQjtBQUNBLE1BQU1FLGFBQWEsR0FBR0QsaUJBQWlCLEdBQUdILFdBQTFDO0FBQ0EsU0FBT0ksYUFBUDtBQUNELENBTEg7O0FBT0UsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLE1BQU1DLFdBQVcsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQXBCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUdGLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsQ0FBN0I7QUFHQSxNQUFNRSxxQkFBcUIsR0FBR1osYUFBYSxDQUFDVyxvQkFBRCxDQUEzQzs7QUFDQSxNQUFJQyxxQkFBcUIsSUFBSSxJQUE3QixFQUFtQztBQUNqQ0gsZ0JBQVksQ0FBQ0ksVUFBYixDQUF3QixPQUF4QjtBQUNBSixnQkFBWSxDQUFDSSxVQUFiLENBQXdCLGdCQUF4QjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU87QUFDTGxCLFNBQUssRUFBRWEsV0FERjtBQUVMTSxZQUFRLEVBQUVGO0FBRkwsR0FBUDtBQUlELENBZkQ7O0FBZ0JLLElBQU1HLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzFDLE1BQU1DLFNBQVMsR0FBR1YsYUFBYSxFQUEvQjtBQUNBLE1BQUlXLGVBQUo7O0FBQ0EsTUFBSUQsU0FBSixFQUFlO0FBQ2JDLG1CQUFlLEdBQUdELFNBQVMsQ0FBQ3RCLEtBQTVCO0FBQ0Q7O0FBTHlDLGtCQU9oQndCLHNEQUFRLENBQUNELGVBQUQsQ0FQUTtBQUFBLE1BT25DdkIsS0FQbUM7QUFBQSxNQU81QnlCLFFBUDRCOztBQVExQyxNQUFNQyxjQUFjLEdBQUcsQ0FBQyxDQUFDMUIsS0FBekI7QUFDQSxNQUFNMkIsYUFBYSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDdENILFlBQVEsQ0FBQyxJQUFELENBQVI7QUFDQVgsZ0JBQVksQ0FBQ0ksVUFBYixDQUF3QixPQUF4QjtBQUNBSixnQkFBWSxDQUFDSSxVQUFiLENBQXdCLGdCQUF4Qjs7QUFFQSxRQUFJZCxXQUFKLEVBQWlCO0FBQ2Z5QixrQkFBWSxDQUFDekIsV0FBRCxDQUFaO0FBQ0Q7QUFDRixHQVJnQyxFQVE5QixFQVI4QixDQUFqQzs7QUFTQSxNQUFNMEIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQzlCLEtBQUQsRUFBUU0sY0FBUixFQUEyQjtBQUM5Q21CLFlBQVEsQ0FBQ3pCLEtBQUQsQ0FBUjtBQUVBYyxnQkFBWSxDQUFDaUIsT0FBYixDQUFxQixPQUFyQixFQUE4Qi9CLEtBQTlCO0FBQ0FjLGdCQUFZLENBQUNpQixPQUFiLENBQXFCLGdCQUFyQixFQUF1Q3pCLGNBQXZDO0FBQ0EsUUFBTTBCLGlCQUFpQixHQUFHM0IsYUFBYSxDQUFDQyxjQUFELENBQXZDO0FBQ0FGLGVBQVcsR0FBRzZCLFVBQVUsQ0FBQ04sYUFBRCxFQUFnQkssaUJBQWhCLENBQXhCO0FBRUQsR0FSRDs7QUFTQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR1osU0FBSCxFQUFhO0FBQ2JsQixpQkFBVyxHQUFHNkIsVUFBVSxDQUFDTixhQUFELEVBQWdCTCxTQUFTLENBQUNILFFBQTFCLENBQXhCO0FBQ0M7QUFDRixHQUpRLEVBSU4sQ0FBQ0csU0FBRCxFQUFZSyxhQUFaLENBSk0sQ0FBVDtBQU1BLE1BQU1RLFlBQVksR0FBRztBQUNuQm5DLFNBQUssRUFBRUEsS0FEWTtBQUVuQkMsY0FBVSxFQUFFeUIsY0FGTztBQUduQnhCLFNBQUssRUFBRTRCLFlBSFk7QUFJbkIzQixVQUFNLEVBQUV3QjtBQUpXLEdBQXJCO0FBTUEsc0JBQ0UscUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFUSxZQUE3QjtBQUFBLGNBQ0dkLEtBQUssQ0FBQ2U7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQTVDSTs7R0FBTWhCLG1COztLQUFBQSxtQjtBQWdESixTQUFTaUIsYUFBVCxHQUF5QjtBQUFBOztBQUM5QixTQUFPQyx3REFBVSxDQUFDQyxVQUFELENBQWpCO0FBQ0Q7O0lBRmVGLGE7O0FBSUh4QywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoLjE5MTVjMmM0NWFkYjFlZjBlZTQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICB0b2tlbjogXCJcIixcclxuICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICBsb2dpbjogKHRva2VuKSA9PiB7fSxcclxuICBsb2dvdXQ6ICgpID0+IHt9LFxyXG59KTtcclxuXHJcblxyXG5sZXQgbG9nb3V0VGltZXI7XHJcbmNvbnN0IGNhbGN1bGF0ZVRpbWUgPSAoZXhwaXJhdGlvblRpbWUpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCBhZGpFeHBpcmF0aW9uVGltZSA9IG5ldyBEYXRlKGV4cGlyYXRpb25UaW1lKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCByZW1haW5pbmdUaW1lID0gYWRqRXhwaXJhdGlvblRpbWUgLSBjdXJyZW50VGltZTtcclxuICAgIHJldHVybiByZW1haW5pbmdUaW1lO1xyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgcmV0cmVpdmVUb2tlbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGNvbnN0IHN0b3JlZEV4cGlyYXRpb25UaW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleHBpcmF0aW9uVGltZVwiKTtcclxuICAgIFxyXG4gIFxyXG4gICAgY29uc3QgcmVtYWluaW5nUmV0cmVpdmVUaW1lID0gY2FsY3VsYXRlVGltZShzdG9yZWRFeHBpcmF0aW9uVGltZSk7XHJcbiAgICBpZiAocmVtYWluaW5nUmV0cmVpdmVUaW1lIDw9IDM2MDApIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJleHBpcmF0aW9uVGltZVwiKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0b2tlbjogc3RvcmVkVG9rZW4sXHJcbiAgICAgIGR1cmF0aW9uOiByZW1haW5pbmdSZXRyZWl2ZVRpbWUsXHJcbiAgICB9O1xyXG4gIH07XHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbkRhdGEgPSByZXRyZWl2ZVRva2VuKCk7XHJcbiAgICBsZXQgaW5pdGlhbGl6ZVRva2VuO1xyXG4gICAgaWYgKHRva2VuRGF0YSkge1xyXG4gICAgICBpbml0aWFsaXplVG9rZW4gPSB0b2tlbkRhdGEudG9rZW47XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKGluaXRpYWxpemVUb2tlbik7XHJcbiAgICBjb25zdCB1c2VySXNMb2dnZWRJbiA9ICEhdG9rZW47XHJcbiAgICBjb25zdCBsb2dPdXRIYW5kbGVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICBzZXRUb2tlbihudWxsKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJleHBpcmF0aW9uVGltZVwiKTtcclxuICAgICAgXHJcbiAgICAgIGlmIChsb2dvdXRUaW1lcikge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChsb2dvdXRUaW1lcik7XHJcbiAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGxvZ0luSGFuZGxlciA9ICh0b2tlbiwgZXhwaXJhdGlvblRpbWUpID0+IHtcclxuICAgICAgc2V0VG9rZW4odG9rZW4pO1xyXG4gICAgICBcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhwaXJhdGlvblRpbWVcIiwgZXhwaXJhdGlvblRpbWUpO1xyXG4gICAgICBjb25zdCByZW1haW5pbmdEdXJhdGlvbiA9IGNhbGN1bGF0ZVRpbWUoZXhwaXJhdGlvblRpbWUpO1xyXG4gICAgICBsb2dvdXRUaW1lciA9IHNldFRpbWVvdXQobG9nT3V0SGFuZGxlciwgcmVtYWluaW5nRHVyYXRpb24pO1xyXG4gICAgIFxyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmKHRva2VuRGF0YSl7XHJcbiAgICAgIGxvZ291dFRpbWVyID0gc2V0VGltZW91dChsb2dPdXRIYW5kbGVyLCB0b2tlbkRhdGEuZHVyYXRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9LCBbdG9rZW5EYXRhLCBsb2dPdXRIYW5kbGVyXSk7XHJcbiAgXHJcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XHJcbiAgICAgIHRva2VuOiB0b2tlbixcclxuICAgICAgaXNMb2dnZWRJbjogdXNlcklzTG9nZ2VkSW4sXHJcbiAgICAgIGxvZ2luOiBsb2dJbkhhbmRsZXIsXHJcbiAgICAgIGxvZ291dDogbG9nT3V0SGFuZGxlcixcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBcclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKSB7XHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9