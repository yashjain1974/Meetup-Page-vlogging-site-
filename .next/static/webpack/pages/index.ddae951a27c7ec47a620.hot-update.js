webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ui/Carousal.js":
/*!***********************************!*\
  !*** ./components/ui/Carousal.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Carousal_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousal.module.css */ "./components/ui/Carousal.module.css");
/* harmony import */ var _Carousal_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Carousal_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\components\\ui\\Carousal.js",
    _this = undefined,
    _s = $RefreshSig$();




var Carousel = function Carousel(props) {
  _s();

  var children = props.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentIndex = _useState[0],
      setCurrentIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(children.length),
      length = _useState2[0],
      setLength = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      touchPosition = _useState3[0],
      setTouchPosition = _useState3[1]; // Set the length to match current children from props


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLength(children.length);
  }, [children]);

  var next = function next() {
    if (currentIndex < length - 1) {
      setCurrentIndex(function (prevState) {
        return prevState + 1;
      });
    }
  };

  var prev = function prev() {
    if (currentIndex > 0) {
      setCurrentIndex(function (prevState) {
        return prevState - 1;
      });
    }
  };

  var handleTouchStart = function handleTouchStart(e) {
    var touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  var handleTouchMove = function handleTouchMove(e) {
    var touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    var currentTouch = e.touches[0].clientX;
    var diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Carousal_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.car,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "carousel-wrapper",
      children: [currentIndex > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: prev,
        className: "left-arrow",
        children: "<"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "carousel-content-wrapper",
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "carousel-content",
          style: {
            transform: "translateX(-".concat(currentIndex * 100, "%)")
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, _this), currentIndex < length - 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: next,
        className: "right-arrow",
        children: ">"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, _this);
};

_s(Carousel, "KCYMBIw14LY9bFYdhUXfF/ZjEzQ=");

_c = Carousel;
/* harmony default export */ __webpack_exports__["default"] = (Carousel);

var _c;

$RefreshReg$(_c, "Carousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9DYXJvdXNhbC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImxlbmd0aCIsInNldExlbmd0aCIsInRvdWNoUG9zaXRpb24iLCJzZXRUb3VjaFBvc2l0aW9uIiwidXNlRWZmZWN0IiwibmV4dCIsInByZXZTdGF0ZSIsInByZXYiLCJoYW5kbGVUb3VjaFN0YXJ0IiwiZSIsInRvdWNoRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiaGFuZGxlVG91Y2hNb3ZlIiwiY3VycmVudFRvdWNoIiwiZGlmZiIsImNsYXNzZXMiLCJjYXIiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNqQkMsUUFEaUIsR0FDTEQsS0FESyxDQUNqQkMsUUFEaUI7O0FBQUEsa0JBR2dCQyxzREFBUSxDQUFDLENBQUQsQ0FIeEI7QUFBQSxNQUdqQkMsWUFIaUI7QUFBQSxNQUdIQyxlQUhHOztBQUFBLG1CQUlJRixzREFBUSxDQUFDRCxRQUFRLENBQUNJLE1BQVYsQ0FKWjtBQUFBLE1BSWpCQSxNQUppQjtBQUFBLE1BSVRDLFNBSlM7O0FBQUEsbUJBTWtCSixzREFBUSxDQUFDLElBQUQsQ0FOMUI7QUFBQSxNQU1qQkssYUFOaUI7QUFBQSxNQU1GQyxnQkFORSxrQkFReEI7OztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDWkgsYUFBUyxDQUFDTCxRQUFRLENBQUNJLE1BQVYsQ0FBVDtBQUNILEdBRlEsRUFFTixDQUFDSixRQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNUyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2YsUUFBSVAsWUFBWSxHQUFJRSxNQUFNLEdBQUcsQ0FBN0IsRUFBaUM7QUFDN0JELHFCQUFlLENBQUMsVUFBQU8sU0FBUztBQUFBLGVBQUlBLFNBQVMsR0FBRyxDQUFoQjtBQUFBLE9BQVYsQ0FBZjtBQUNIO0FBQ0osR0FKRDs7QUFNQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2YsUUFBSVQsWUFBWSxHQUFHLENBQW5CLEVBQXNCO0FBQ2xCQyxxQkFBZSxDQUFDLFVBQUFPLFNBQVM7QUFBQSxlQUFJQSxTQUFTLEdBQUcsQ0FBaEI7QUFBQSxPQUFWLENBQWY7QUFDSDtBQUNKLEdBSkQ7O0FBTUEsTUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDNUIsUUFBTUMsU0FBUyxHQUFHRCxDQUFDLENBQUNFLE9BQUYsQ0FBVSxDQUFWLEVBQWFDLE9BQS9CO0FBQ0FULG9CQUFnQixDQUFDTyxTQUFELENBQWhCO0FBQ0gsR0FIRDs7QUFLQSxNQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNKLENBQUQsRUFBTztBQUMzQixRQUFNQyxTQUFTLEdBQUdSLGFBQWxCOztBQUVBLFFBQUdRLFNBQVMsS0FBSyxJQUFqQixFQUF1QjtBQUNuQjtBQUNIOztBQUVELFFBQU1JLFlBQVksR0FBR0wsQ0FBQyxDQUFDRSxPQUFGLENBQVUsQ0FBVixFQUFhQyxPQUFsQztBQUNBLFFBQU1HLElBQUksR0FBR0wsU0FBUyxHQUFHSSxZQUF6Qjs7QUFFQSxRQUFJQyxJQUFJLEdBQUcsQ0FBWCxFQUFjO0FBQ1ZWLFVBQUk7QUFDUDs7QUFFRCxRQUFJVSxJQUFJLEdBQUcsQ0FBQyxDQUFaLEVBQWU7QUFDWFIsVUFBSTtBQUNQOztBQUVESixvQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0gsR0FuQkQ7O0FBcUJBLHNCQUNJO0FBQUssYUFBUyxFQUFFYSwyREFBTyxDQUFDQyxHQUF4QjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsaUJBR1FuQixZQUFZLEdBQUcsQ0FBZixpQkFDQTtBQUFRLGVBQU8sRUFBRVMsSUFBakI7QUFBdUIsaUJBQVMsRUFBQyxZQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpSLGVBUUk7QUFDSSxpQkFBUyxFQUFDLDBCQURkO0FBRUksb0JBQVksRUFBRUMsZ0JBRmxCO0FBR0ksbUJBQVcsRUFBRUssZUFIakI7QUFBQSwrQkFLSTtBQUNJLG1CQUFTLEVBQUMsa0JBRGQ7QUFFSSxlQUFLLEVBQUU7QUFBRUsscUJBQVMsd0JBQWlCcEIsWUFBWSxHQUFHLEdBQWhDO0FBQVgsV0FGWDtBQUFBLG9CQUlLRjtBQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkosRUFzQlFFLFlBQVksR0FBSUUsTUFBTSxHQUFHLENBQXpCLGlCQUNBO0FBQVEsZUFBTyxFQUFFSyxJQUFqQjtBQUF1QixpQkFBUyxFQUFDLGFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdDSCxDQW5GRDs7R0FBTVgsUTs7S0FBQUEsUTtBQXFGU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGRhZTk1MWEyN2M3ZWM0N2E2MjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0Nhcm91c2FsLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBDYXJvdXNlbCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge2NoaWxkcmVufSA9IHByb3BzXHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbbGVuZ3RoLCBzZXRMZW5ndGhdID0gdXNlU3RhdGUoY2hpbGRyZW4ubGVuZ3RoKVxyXG5cclxuICAgIGNvbnN0IFt0b3VjaFBvc2l0aW9uLCBzZXRUb3VjaFBvc2l0aW9uXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgLy8gU2V0IHRoZSBsZW5ndGggdG8gbWF0Y2ggY3VycmVudCBjaGlsZHJlbiBmcm9tIHByb3BzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldExlbmd0aChjaGlsZHJlbi5sZW5ndGgpXHJcbiAgICB9LCBbY2hpbGRyZW5dKVxyXG5cclxuICAgIGNvbnN0IG5leHQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IChsZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50SW5kZXgocHJldlN0YXRlID0+IHByZXZTdGF0ZSArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXYgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudEluZGV4KHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgLSAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb3VjaFN0YXJ0ID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0b3VjaERvd24gPSBlLnRvdWNoZXNbMF0uY2xpZW50WFxyXG4gICAgICAgIHNldFRvdWNoUG9zaXRpb24odG91Y2hEb3duKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvdWNoTW92ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG91Y2hEb3duID0gdG91Y2hQb3NpdGlvblxyXG5cclxuICAgICAgICBpZih0b3VjaERvd24gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50VG91Y2ggPSBlLnRvdWNoZXNbMF0uY2xpZW50WFxyXG4gICAgICAgIGNvbnN0IGRpZmYgPSB0b3VjaERvd24gLSBjdXJyZW50VG91Y2hcclxuXHJcbiAgICAgICAgaWYgKGRpZmYgPiA1KSB7XHJcbiAgICAgICAgICAgIG5leHQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRpZmYgPCAtNSkge1xyXG4gICAgICAgICAgICBwcmV2KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRvdWNoUG9zaXRpb24obnVsbClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgey8qIFlvdSBjYW4gYWx3YXMgY2hhbmdlIHRoZSBjb250ZW50IG9mIHRoZSBidXR0b24gdG8gb3RoZXIgdGhpbmdzICovfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZ9IGNsYXNzTmFtZT1cImxlZnQtYXJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJmx0O1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRlbnQtd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXtoYW5kbGVUb3VjaFN0YXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVG91Y2hNb3ZlPXtoYW5kbGVUb3VjaE1vdmV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHtjdXJyZW50SW5kZXggKiAxMDB9JSlgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBZb3UgY2FuIGFsd2FzIGNoYW5nZSB0aGUgY29udGVudCBvZiB0aGUgYnV0dG9uIHRvIG90aGVyIHRoaW5ncyAqL31cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPCAobGVuZ3RoIC0gMSkgJiZcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e25leHR9IGNsYXNzTmFtZT1cInJpZ2h0LWFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZndDtcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsIl0sInNvdXJjZVJvb3QiOiIifQ==