webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9TY3JvbGxCdXR0b24uanMiXSwibmFtZXMiOlsiU2Nyb2xsQnV0dG9uIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRvZ2dsZVZpc2libGUiLCJzY3JvbGxlZCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsVG9Ub3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQUs7QUFBQTs7QUFBQSxrQkFFSUMsc0RBQVEsQ0FBQyxLQUFELENBRlo7QUFBQSxNQUVuQkMsT0FGbUI7QUFBQSxNQUVWQyxVQUZVOztBQUkxQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDM0IsUUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQTFDOztBQUNBLFFBQUlILFFBQVEsR0FBRyxHQUFmLEVBQW1CO0FBQ25CRixnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNDLEtBRkQsTUFHSyxJQUFJRSxRQUFRLElBQUksR0FBaEIsRUFBb0I7QUFDekJGLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0M7QUFDRCxHQVJEOztBQVVBLE1BQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQUs7QUFFeEJDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUNoQkMsU0FBRyxFQUFFLENBRFc7QUFFaEJDLGNBQVEsRUFBRTtBQUNWO0FBQ0Q7O0FBSmlCLEtBQWhCO0FBT0EsR0FURDs7QUFXQUgsUUFBTSxDQUFDSSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1YsYUFBbEM7QUFFQSxzQkFDQyxxRUFBQyw4Q0FBRDtBQUFBLDJCQUNBLHFFQUFDLDhEQUFEO0FBQWlCLGFBQU8sRUFBRUssV0FBMUI7QUFDQSxXQUFLLEVBQUU7QUFBQ00sZUFBTyxFQUFFYixPQUFPLEdBQUcsUUFBSCxHQUFjO0FBQS9CO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQU1DLENBakNEOztHQUFNRixZOztLQUFBQSxZO0FBbUNTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ODEyNGFjNWY0ZWE5MzcyODk3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGYUFycm93Q2lyY2xlVXB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vU3R5bGVzJztcclxuXHJcbmNvbnN0IFNjcm9sbEJ1dHRvbiA9ICgpID0+e1xyXG5cclxuY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5jb25zdCB0b2dnbGVWaXNpYmxlID0gKCkgPT4ge1xyXG5cdGNvbnN0IHNjcm9sbGVkID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHRpZiAoc2Nyb2xsZWQgPiAzMDApe1xyXG5cdHNldFZpc2libGUodHJ1ZSlcclxuXHR9XHJcblx0ZWxzZSBpZiAoc2Nyb2xsZWQgPD0gMzAwKXtcclxuXHRzZXRWaXNpYmxlKGZhbHNlKVxyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT57XHJcbiAgICBcclxuXHR3aW5kb3cuc2Nyb2xsVG8oe1xyXG5cdHRvcDogMCxcclxuXHRiZWhhdmlvcjogJ3Ntb290aCdcclxuXHQvKiB5b3UgY2FuIGFsc28gdXNlICdhdXRvJyBiZWhhdmlvdXJcclxuXHRcdGluIHBsYWNlIG9mICdzbW9vdGgnICovXHJcblx0fSk7XHJcblxyXG59O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRvZ2dsZVZpc2libGUpO1xyXG5cclxucmV0dXJuIChcclxuXHQ8QnV0dG9uPlxyXG5cdDxGYUFycm93Q2lyY2xlVXAgb25DbGljaz17c2Nyb2xsVG9Ub3B9XHJcblx0c3R5bGU9e3tkaXNwbGF5OiB2aXNpYmxlID8gJ2lubGluZScgOiAnbm9uZSd9fSAvPlxyXG5cdDwvQnV0dG9uPlxyXG4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxCdXR0b247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=