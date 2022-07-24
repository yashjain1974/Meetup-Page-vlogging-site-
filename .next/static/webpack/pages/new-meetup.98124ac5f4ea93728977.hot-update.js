webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./components/ui/ScrollButton.js":
/*!***************************************!*\
  !*** ./components/ui/ScrollButton.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Styles */ "./components/ui/Styles.js");


var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\components\\ui\\ScrollButton.js",
    _this = undefined,
    _s = $RefreshSig$();





var ScrollButton = function ScrollButton() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var toggleVisible = function toggleVisible() {
    var scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  var scrollToTop = function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
      	in place of 'smooth' */

    });
  };

  window.addEventListener('scroll', toggleVisible);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Styles__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaArrowCircleUp"], {
      onClick: scrollToTop,
      style: {
        display: visible ? 'inline' : 'none'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 2
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 2
  }, _this);
};

_s(ScrollButton, "OGsIWlGlwYpVUqIrDReJ1GWx7rw=");

_c = ScrollButton;
/* harmony default export */ __webpack_exports__["default"] = (ScrollButton);

var _c;

$RefreshReg$(_c, "ScrollButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9TY3JvbGxCdXR0b24uanMiXSwibmFtZXMiOlsiU2Nyb2xsQnV0dG9uIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRvZ2dsZVZpc2libGUiLCJzY3JvbGxlZCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsVG9Ub3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQUs7QUFBQTs7QUFBQSxrQkFFSUMsc0RBQVEsQ0FBQyxLQUFELENBRlo7QUFBQSxNQUVuQkMsT0FGbUI7QUFBQSxNQUVWQyxVQUZVOztBQUkxQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDM0IsUUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQTFDOztBQUNBLFFBQUlILFFBQVEsR0FBRyxHQUFmLEVBQW1CO0FBQ25CRixnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNDLEtBRkQsTUFHSyxJQUFJRSxRQUFRLElBQUksR0FBaEIsRUFBb0I7QUFDekJGLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0M7QUFDRCxHQVJEOztBQVVBLE1BQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQUs7QUFFeEJDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUNoQkMsU0FBRyxFQUFFLENBRFc7QUFFaEJDLGNBQVEsRUFBRTtBQUNWO0FBQ0Q7O0FBSmlCLEtBQWhCO0FBT0EsR0FURDs7QUFXQUgsUUFBTSxDQUFDSSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1YsYUFBbEM7QUFFQSxzQkFDQyxxRUFBQyw4Q0FBRDtBQUFBLDJCQUNBLHFFQUFDLDhEQUFEO0FBQWlCLGFBQU8sRUFBRUssV0FBMUI7QUFDQSxXQUFLLEVBQUU7QUFBQ00sZUFBTyxFQUFFYixPQUFPLEdBQUcsUUFBSCxHQUFjO0FBQS9CO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQU1DLENBakNEOztHQUFNRixZOztLQUFBQSxZO0FBbUNTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXctbWVldHVwLjk4MTI0YWM1ZjRlYTkzNzI4OTc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0ZhQXJyb3dDaXJjbGVVcH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9TdHlsZXMnO1xyXG5cclxuY29uc3QgU2Nyb2xsQnV0dG9uID0gKCkgPT57XHJcblxyXG5jb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbmNvbnN0IHRvZ2dsZVZpc2libGUgPSAoKSA9PiB7XHJcblx0Y29uc3Qgc2Nyb2xsZWQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdGlmIChzY3JvbGxlZCA+IDMwMCl7XHJcblx0c2V0VmlzaWJsZSh0cnVlKVxyXG5cdH1cclxuXHRlbHNlIGlmIChzY3JvbGxlZCA8PSAzMDApe1xyXG5cdHNldFZpc2libGUoZmFsc2UpXHJcblx0fVxyXG59O1xyXG5cclxuY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PntcclxuICAgIFxyXG5cdHdpbmRvdy5zY3JvbGxUbyh7XHJcblx0dG9wOiAwLFxyXG5cdGJlaGF2aW9yOiAnc21vb3RoJ1xyXG5cdC8qIHlvdSBjYW4gYWxzbyB1c2UgJ2F1dG8nIGJlaGF2aW91clxyXG5cdFx0aW4gcGxhY2Ugb2YgJ3Ntb290aCcgKi9cclxuXHR9KTtcclxuXHJcbn07XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdG9nZ2xlVmlzaWJsZSk7XHJcblxyXG5yZXR1cm4gKFxyXG5cdDxCdXR0b24+XHJcblx0PEZhQXJyb3dDaXJjbGVVcCBvbkNsaWNrPXtzY3JvbGxUb1RvcH1cclxuXHRzdHlsZT17e2Rpc3BsYXk6IHZpc2libGUgPyAnaW5saW5lJyA6ICdub25lJ319IC8+XHJcblx0PC9CdXR0b24+XHJcbik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEJ1dHRvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==