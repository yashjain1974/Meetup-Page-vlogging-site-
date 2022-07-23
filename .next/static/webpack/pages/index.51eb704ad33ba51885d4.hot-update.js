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
    className: _Carousal_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.carousel - container,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9DYXJvdXNhbC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImxlbmd0aCIsInNldExlbmd0aCIsInRvdWNoUG9zaXRpb24iLCJzZXRUb3VjaFBvc2l0aW9uIiwidXNlRWZmZWN0IiwibmV4dCIsInByZXZTdGF0ZSIsInByZXYiLCJoYW5kbGVUb3VjaFN0YXJ0IiwiZSIsInRvdWNoRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiaGFuZGxlVG91Y2hNb3ZlIiwiY3VycmVudFRvdWNoIiwiZGlmZiIsImNsYXNzZXMiLCJjYXJvdXNlbCIsImNvbnRhaW5lciIsInRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQ2pCQyxRQURpQixHQUNMRCxLQURLLENBQ2pCQyxRQURpQjs7QUFBQSxrQkFHZ0JDLHNEQUFRLENBQUMsQ0FBRCxDQUh4QjtBQUFBLE1BR2pCQyxZQUhpQjtBQUFBLE1BR0hDLGVBSEc7O0FBQUEsbUJBSUlGLHNEQUFRLENBQUNELFFBQVEsQ0FBQ0ksTUFBVixDQUpaO0FBQUEsTUFJakJBLE1BSmlCO0FBQUEsTUFJVEMsU0FKUzs7QUFBQSxtQkFNa0JKLHNEQUFRLENBQUMsSUFBRCxDQU4xQjtBQUFBLE1BTWpCSyxhQU5pQjtBQUFBLE1BTUZDLGdCQU5FLGtCQVF4Qjs7O0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaSCxhQUFTLENBQUNMLFFBQVEsQ0FBQ0ksTUFBVixDQUFUO0FBQ0gsR0FGUSxFQUVOLENBQUNKLFFBQUQsQ0FGTSxDQUFUOztBQUlBLE1BQU1TLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDZixRQUFJUCxZQUFZLEdBQUlFLE1BQU0sR0FBRyxDQUE3QixFQUFpQztBQUM3QkQscUJBQWUsQ0FBQyxVQUFBTyxTQUFTO0FBQUEsZUFBSUEsU0FBUyxHQUFHLENBQWhCO0FBQUEsT0FBVixDQUFmO0FBQ0g7QUFDSixHQUpEOztBQU1BLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDZixRQUFJVCxZQUFZLEdBQUcsQ0FBbkIsRUFBc0I7QUFDbEJDLHFCQUFlLENBQUMsVUFBQU8sU0FBUztBQUFBLGVBQUlBLFNBQVMsR0FBRyxDQUFoQjtBQUFBLE9BQVYsQ0FBZjtBQUNIO0FBQ0osR0FKRDs7QUFNQSxNQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM1QixRQUFNQyxTQUFTLEdBQUdELENBQUMsQ0FBQ0UsT0FBRixDQUFVLENBQVYsRUFBYUMsT0FBL0I7QUFDQVQsb0JBQWdCLENBQUNPLFNBQUQsQ0FBaEI7QUFDSCxHQUhEOztBQUtBLE1BQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0osQ0FBRCxFQUFPO0FBQzNCLFFBQU1DLFNBQVMsR0FBR1IsYUFBbEI7O0FBRUEsUUFBR1EsU0FBUyxLQUFLLElBQWpCLEVBQXVCO0FBQ25CO0FBQ0g7O0FBRUQsUUFBTUksWUFBWSxHQUFHTCxDQUFDLENBQUNFLE9BQUYsQ0FBVSxDQUFWLEVBQWFDLE9BQWxDO0FBQ0EsUUFBTUcsSUFBSSxHQUFHTCxTQUFTLEdBQUdJLFlBQXpCOztBQUVBLFFBQUlDLElBQUksR0FBRyxDQUFYLEVBQWM7QUFDVlYsVUFBSTtBQUNQOztBQUVELFFBQUlVLElBQUksR0FBRyxDQUFDLENBQVosRUFBZTtBQUNYUixVQUFJO0FBQ1A7O0FBRURKLG9CQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDSCxHQW5CRDs7QUFxQkEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVhLDJEQUFPLENBQUNDLFFBQVIsR0FBaUJDLFNBQWpDO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSxpQkFHUXBCLFlBQVksR0FBRyxDQUFmLGlCQUNBO0FBQVEsZUFBTyxFQUFFUyxJQUFqQjtBQUF1QixpQkFBUyxFQUFDLFlBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSlIsZUFRSTtBQUNJLGlCQUFTLEVBQUMsMEJBRGQ7QUFFSSxvQkFBWSxFQUFFQyxnQkFGbEI7QUFHSSxtQkFBVyxFQUFFSyxlQUhqQjtBQUFBLCtCQUtJO0FBQ0ksbUJBQVMsRUFBQyxrQkFEZDtBQUVJLGVBQUssRUFBRTtBQUFFTSxxQkFBUyx3QkFBaUJyQixZQUFZLEdBQUcsR0FBaEM7QUFBWCxXQUZYO0FBQUEsb0JBSUtGO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSixFQXNCUUUsWUFBWSxHQUFJRSxNQUFNLEdBQUcsQ0FBekIsaUJBQ0E7QUFBUSxlQUFPLEVBQUVLLElBQWpCO0FBQXVCLGlCQUFTLEVBQUMsYUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0NILENBbkZEOztHQUFNWCxROztLQUFBQSxRO0FBcUZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MWViNzA0YWQzM2JhNTE4ODVkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2Fyb3VzYWwubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IENhcm91c2VsID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7Y2hpbGRyZW59ID0gcHJvcHNcclxuXHJcbiAgICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtsZW5ndGgsIHNldExlbmd0aF0gPSB1c2VTdGF0ZShjaGlsZHJlbi5sZW5ndGgpXHJcblxyXG4gICAgY29uc3QgW3RvdWNoUG9zaXRpb24sIHNldFRvdWNoUG9zaXRpb25dID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICAvLyBTZXQgdGhlIGxlbmd0aCB0byBtYXRjaCBjdXJyZW50IGNoaWxkcmVuIGZyb20gcHJvcHNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0TGVuZ3RoKGNoaWxkcmVuLmxlbmd0aClcclxuICAgIH0sIFtjaGlsZHJlbl0pXHJcblxyXG4gICAgY29uc3QgbmV4dCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudEluZGV4IDwgKGxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRJbmRleChwcmV2U3RhdGUgPT4gcHJldlN0YXRlICsgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJldiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudEluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50SW5kZXgocHJldlN0YXRlID0+IHByZXZTdGF0ZSAtIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvdWNoU3RhcnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdWNoRG93biA9IGUudG91Y2hlc1swXS5jbGllbnRYXHJcbiAgICAgICAgc2V0VG91Y2hQb3NpdGlvbih0b3VjaERvd24pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG91Y2hNb3ZlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0b3VjaERvd24gPSB0b3VjaFBvc2l0aW9uXHJcblxyXG4gICAgICAgIGlmKHRvdWNoRG93biA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb3VjaCA9IGUudG91Y2hlc1swXS5jbGllbnRYXHJcbiAgICAgICAgY29uc3QgZGlmZiA9IHRvdWNoRG93biAtIGN1cnJlbnRUb3VjaFxyXG5cclxuICAgICAgICBpZiAoZGlmZiA+IDUpIHtcclxuICAgICAgICAgICAgbmV4dCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGlmZiA8IC01KSB7XHJcbiAgICAgICAgICAgIHByZXYoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VG91Y2hQb3NpdGlvbihudWxsKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2Fyb3VzZWwtY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogWW91IGNhbiBhbHdhcyBjaGFuZ2UgdGhlIGNvbnRlbnQgb2YgdGhlIGJ1dHRvbiB0byBvdGhlciB0aGluZ3MgKi99XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJldn0gY2xhc3NOYW1lPVwibGVmdC1hcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udGVudC13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9e2hhbmRsZVRvdWNoU3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Ub3VjaE1vdmU9e2hhbmRsZVRvdWNoTW92ZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke2N1cnJlbnRJbmRleCAqIDEwMH0lKWAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIFlvdSBjYW4gYWx3YXMgY2hhbmdlIHRoZSBjb250ZW50IG9mIHRoZSBidXR0b24gdG8gb3RoZXIgdGhpbmdzICovfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA8IChsZW5ndGggLSAxKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bmV4dH0gY2xhc3NOYW1lPVwicmlnaHQtYXJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJmd0O1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWwiXSwic291cmNlUm9vdCI6IiJ9