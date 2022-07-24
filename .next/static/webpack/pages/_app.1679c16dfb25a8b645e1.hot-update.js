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


var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\components\\layout\\MainNavigation.js",
    _s = $RefreshSig$();







function MainNavigation() {
  _s();

  var authCtx = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_auth_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
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
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
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
            lineNumber: 23,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), isLoggedIn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/new-meetup",
            children: "Add Meetup"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, this), !isLoggedIn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: router.pathname == "/auth" ? "active" : "",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/auth",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, this), isLoggedIn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btn,
            onClick: logoutHandler,
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWFpbk5hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiTWFpbk5hdmlnYXRpb24iLCJhdXRoQ3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiY29uc29sZSIsImxvZyIsImxvZ291dEhhbmRsZXIiLCJsb2dvdXQiLCJpc0xvZ2dlZEluIiwiY2xhc3NlcyIsImhlYWRlciIsImxvZ28iLCJyb3V0ZXIiLCJwYXRobmFtZSIsImJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQ3hCLE1BQU1DLE9BQU8sR0FBR0Msd0RBQVUsQ0FBQ0MsMkRBQUQsQ0FBMUI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLE9BQVo7O0FBQ0EsTUFBTUssYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCTCxXQUFPLENBQUNNLE1BQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFVBQVUsR0FBR1AsT0FBTyxDQUFDTyxVQUEzQjtBQUNBLHNCQUNFO0FBQVEsYUFBUyxFQUFFQyxpRUFBTyxDQUFDQyxNQUEzQjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVELGlFQUFPLENBQUNFLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBQSw2QkFDRTtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBRUMsTUFBTSxDQUFDQyxRQUFQLElBQWlCLEdBQWpCLEdBQXFCLFFBQXJCLEdBQThCLEVBQTdDO0FBQUEsaUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBSUdMLFVBQVUsaUJBQ1Q7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosRUFTRyxDQUFDQSxVQUFELGlCQUNDO0FBQUksbUJBQVMsRUFBRUksTUFBTSxDQUFDQyxRQUFQLElBQWlCLE9BQWpCLEdBQXlCLFFBQXpCLEdBQWtDLEVBQWpEO0FBQUEsaUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKLEVBY0dMLFVBQVUsaUJBQ1Q7QUFBQSxpQ0FDRTtBQUFRLHFCQUFTLEVBQUVDLGlFQUFPLENBQUNLLEdBQTNCO0FBQWdDLG1CQUFPLEVBQUVSLGFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0dBckNRTixjOztLQUFBQSxjO0FBdUNNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjE2NzljMTZkZmIyNWE4YjY0NWUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9NYWluTmF2aWdhdGlvbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gXCIuLi8uLi9zdG9yZS9hdXRoLWNvbnRleHRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5mdW5jdGlvbiBNYWluTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgYXV0aEN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICBjb25zb2xlLmxvZyhhdXRoQ3R4KTtcbiAgY29uc3QgbG9nb3V0SGFuZGxlciA9ICgpID0+IHtcbiAgICBhdXRoQ3R4LmxvZ291dCgpO1xuICB9O1xuXG4gIGNvbnN0IGlzTG9nZ2VkSW4gPSBhdXRoQ3R4LmlzTG9nZ2VkSW47XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlYtTWVldCA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWU9PVwiL1wiP1wiYWN0aXZlXCI6XCJcIn0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkFsbCBNZWV0dXBzPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAge2lzTG9nZ2VkSW4gJiYgKFxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25ldy1tZWV0dXBcIj5BZGQgTWVldHVwPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHshaXNMb2dnZWRJbiAmJiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWU9PVwiL2F1dGhcIj9cImFjdGl2ZVwiOlwiXCJ9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGhcIj5Mb2dpbjwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7aXNMb2dnZWRJbiAmJiAoXG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn0gb25DbGljaz17bG9nb3V0SGFuZGxlcn0+TG9nb3V0PC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdmlnYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9