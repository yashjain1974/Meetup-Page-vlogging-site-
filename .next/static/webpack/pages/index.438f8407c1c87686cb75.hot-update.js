webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_MainNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/MainNavigation */ "./components/layout/MainNavigation.js");
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var _new_meetup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-meetup */ "./pages/new-meetup/index.js");


var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\pages\\index.js",
    _this = undefined;





var DUMMY_MEETUP = [{
  id: "m1",
  title: "First Meetup",
  image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
  address: 'Some Address',
  description: 'This is a First Meetup'
}, {
  id: "m2",
  title: "Second Meetup",
  image: "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_960_720.jpg",
  address: 'Some Address',
  description: 'This is a Second Meetup'
}];

var HomePage = function HomePage() {
  var addMeetup = function addMeetup(enteredValue) {
    DUMMY_MEETUP.push(enteredValue);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_MainNavigation__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      meetups: DUMMY_MEETUP
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_new_meetup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onAdd: addMeetup
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJhZGRNZWV0dXAiLCJlbnRlcmVkVmFsdWUiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFDLENBQ2Y7QUFDSUMsSUFBRSxFQUFDLElBRFA7QUFFSUMsT0FBSyxFQUFDLGNBRlY7QUFHSUMsT0FBSyxFQUFDLHdFQUhWO0FBSUlDLFNBQU8sRUFBQyxjQUpaO0FBS0lDLGFBQVcsRUFBQztBQUxoQixDQURlLEVBU2Y7QUFDSUosSUFBRSxFQUFDLElBRFA7QUFFSUMsT0FBSyxFQUFDLGVBRlY7QUFHSUMsT0FBSyxFQUFDLDJFQUhWO0FBSUlDLFNBQU8sRUFBQyxjQUpaO0FBS0lDLGFBQVcsRUFBQztBQUxoQixDQVRlLENBQW5COztBQWtCQSxJQUFNQyxRQUFRLEdBQUMsU0FBVEEsUUFBUyxHQUFJO0FBQ2YsTUFBTUMsU0FBUyxHQUFDLFNBQVZBLFNBQVUsQ0FBQ0MsWUFBRCxFQUFnQjtBQUM1QlIsZ0JBQVksQ0FBQ1MsSUFBYixDQUFrQkQsWUFBbEI7QUFFSCxHQUhEOztBQUtBLHNCQUNBLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNJLHFFQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVBLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFUjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkEsZUFHQSxxRUFBQyxtREFBRDtBQUFXLFdBQUssRUFBRU87QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBO0FBT0gsQ0FiRDs7S0FBTUQsUTtBQWVTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MzhmODQwN2MxYzg3Njg2Y2I3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW5OYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L01haW5OYXZpZ2F0aW9uJztcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xyXG5pbXBvcnQgTmV3TWVldHVwIGZyb20gJy4vbmV3LW1lZXR1cCc7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVA9W1xyXG4gICAge1xyXG4gICAgICAgIGlkOlwibTFcIixcclxuICAgICAgICB0aXRsZTpcIkZpcnN0IE1lZXR1cFwiLFxyXG4gICAgICAgIGltYWdlOlwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8wNC8yMy8yMi8wMC90cmVlLTczNjg4NV85NjBfNzIwLmpwZ1wiLFxyXG4gICAgICAgIGFkZHJlc3M6J1NvbWUgQWRkcmVzcycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246J1RoaXMgaXMgYSBGaXJzdCBNZWV0dXAnXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDpcIm0yXCIsXHJcbiAgICAgICAgdGl0bGU6XCJTZWNvbmQgTWVldHVwXCIsXHJcbiAgICAgICAgaW1hZ2U6XCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE1LzEyLzAxLzIwLzI4L2ZvcmVzdC0xMDcyODI4Xzk2MF83MjAuanBnXCIsXHJcbiAgICAgICAgYWRkcmVzczonU29tZSBBZGRyZXNzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjonVGhpcyBpcyBhIFNlY29uZCBNZWV0dXAnXHJcblxyXG4gICAgfVxyXG5dXHJcbmNvbnN0IEhvbWVQYWdlPSgpPT57XHJcbiAgICBjb25zdCBhZGRNZWV0dXA9KGVudGVyZWRWYWx1ZSk9PntcclxuICAgICAgICBEVU1NWV9NRUVUVVAucHVzaChlbnRlcmVkVmFsdWUpO1xyXG5cclxuICAgIH1cclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8TWFpbk5hdmlnYXRpb24+PC9NYWluTmF2aWdhdGlvbj5cclxuICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e0RVTU1ZX01FRVRVUH0+PC9NZWV0dXBMaXN0PlxyXG4gICAgPE5ld01lZXR1cCBvbkFkZD17YWRkTWVldHVwfT48L05ld01lZXR1cD5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=