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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ui_LoadingSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/LoadingSpinner */ "./components/ui/LoadingSpinner.js");


var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\components\\layout\\MainNavigation.js",
    _s = $RefreshSig$();








function MainNavigation() {
  _s();

  var authCtx = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_auth_context__WEBPACK_IMPORTED_MODULE_3__["default"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  console.log(authCtx);

  var logoutHandler = function logoutHandler() {
    setIsLoading(true);
    authCtx.logout();
    router.replace('/');
    setIsLoading(false);
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
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: router.pathname == "/" ? "active" : "",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/",
            children: "All Meetups"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), isLoggedIn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/new-meetup",
            children: "Add Meetup"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, this), !isLoggedIn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: router.pathname == "/auth" ? "active" : "",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/auth",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, this), isLoggedIn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btn,
            onClick: logoutHandler,
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, this), !isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_LoadingSpinner__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 27
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

_s(MainNavigation, "Ti//b0DKG0Y1mvBrNUThL48GqC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWFpbk5hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiTWFpbk5hdmlnYXRpb24iLCJhdXRoQ3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwibG9nb3V0SGFuZGxlciIsImxvZ291dCIsInJlcGxhY2UiLCJpc0xvZ2dlZEluIiwiY2xhc3NlcyIsImhlYWRlciIsImxvZ28iLCJwYXRobmFtZSIsImJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQ3hCLE1BQU1DLE9BQU8sR0FBR0Msd0RBQVUsQ0FBQ0MsMkRBQUQsQ0FBMUI7O0FBRHdCLGtCQUVPQyxzREFBUSxDQUFDLEtBQUQsQ0FGZjtBQUFBLE1BRWpCQyxTQUZpQjtBQUFBLE1BRVBDLFlBRk87O0FBR3hCLE1BQU1DLE1BQU0sR0FBQ0MsNkRBQVMsRUFBdEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlULE9BQVo7O0FBQ0EsTUFBTVUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCTCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBTCxXQUFPLENBQUNXLE1BQVI7QUFFQUwsVUFBTSxDQUFDTSxPQUFQLENBQWUsR0FBZjtBQUNBUCxnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNELEdBTkQ7O0FBUUEsTUFBTVEsVUFBVSxHQUFHYixPQUFPLENBQUNhLFVBQTNCO0FBQ0Esc0JBQ0U7QUFBUSxhQUFTLEVBQUVDLGlFQUFPLENBQUNDLE1BQTNCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUQsaUVBQU8sQ0FBQ0UsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFBLDZCQUNFO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFFVixNQUFNLENBQUNXLFFBQVAsSUFBaUIsR0FBakIsR0FBcUIsUUFBckIsR0FBOEIsRUFBN0M7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFJR0osVUFBVSxpQkFDVDtBQUFBLGlDQUNFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBQyxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSixFQVNHLENBQUNBLFVBQUQsaUJBQ0M7QUFBSSxtQkFBUyxFQUFFUCxNQUFNLENBQUNXLFFBQVAsSUFBaUIsT0FBakIsR0FBeUIsUUFBekIsR0FBa0MsRUFBakQ7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkosRUFjR0osVUFBVSxpQkFDVDtBQUFBLGlDQUNFO0FBQVEscUJBQVMsRUFBRUMsaUVBQU8sQ0FBQ0ksR0FBM0I7QUFBZ0MsbUJBQU8sRUFBRVIsYUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZKLEVBb0JJLENBQUNOLFNBQUQsaUJBQWMscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFwQmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdDRDs7R0E5Q1FMLGM7VUFHTVEscUQ7OztLQUhOUixjO0FBZ0RNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjVjZmFkZmY4MjM4NjJhNWYyYzI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9NYWluTmF2aWdhdGlvbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gXCIuLi8uLi9zdG9yZS9hdXRoLWNvbnRleHRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gXCIuLi91aS9Mb2FkaW5nU3Bpbm5lclwiO1xuXG5mdW5jdGlvbiBNYWluTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgYXV0aEN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICBjb25zdCBbaXNMb2FkaW5nLHNldElzTG9hZGluZ109dXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKGF1dGhDdHgpO1xuICBjb25zdCBsb2dvdXRIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKVxuICAgIGF1dGhDdHgubG9nb3V0KCk7XG4gICBcbiAgICByb3V0ZXIucmVwbGFjZSgnLycpO1xuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaXNMb2dnZWRJbiA9IGF1dGhDdHguaXNMb2dnZWRJbjtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+Vi1NZWV0IDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICAgPG5hdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZT09XCIvXCI/XCJhY3RpdmVcIjpcIlwifT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+QWxsIE1lZXR1cHM8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICB7aXNMb2dnZWRJbiAmJiAoXG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmV3LW1lZXR1cFwiPkFkZCBNZWV0dXA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICl9XG4gICAgICAgICAgeyFpc0xvZ2dlZEluICYmIChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZT09XCIvYXV0aFwiP1wiYWN0aXZlXCI6XCJcIn0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aFwiPkxvZ2luPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtpc0xvZ2dlZEluICYmIChcbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnRufSBvbkNsaWNrPXtsb2dvdXRIYW5kbGVyfT5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7XG4gICAgICAgICAgICAhaXNMb2FkaW5nICYmIDxMb2FkaW5nU3Bpbm5lcj48L0xvYWRpbmdTcGlubmVyPlxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluTmF2aWdhdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=