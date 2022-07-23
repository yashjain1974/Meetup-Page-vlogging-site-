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
    className: _Carousal_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.carouselcontainer,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Carousal_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.carouselwrapper,
      children: [currentIndex > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: prev,
        className: "left-arrow",
        children: "<"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Carousal_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.carouselcontentwrapper,
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Carousal_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.carousel - content,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9DYXJvdXNhbC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImxlbmd0aCIsInNldExlbmd0aCIsInRvdWNoUG9zaXRpb24iLCJzZXRUb3VjaFBvc2l0aW9uIiwidXNlRWZmZWN0IiwibmV4dCIsInByZXZTdGF0ZSIsInByZXYiLCJoYW5kbGVUb3VjaFN0YXJ0IiwiZSIsInRvdWNoRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiaGFuZGxlVG91Y2hNb3ZlIiwiY3VycmVudFRvdWNoIiwiZGlmZiIsImNsYXNzZXMiLCJjYXJvdXNlbGNvbnRhaW5lciIsImNhcm91c2Vsd3JhcHBlciIsImNhcm91c2VsY29udGVudHdyYXBwZXIiLCJjYXJvdXNlbCIsImNvbnRlbnQiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNqQkMsUUFEaUIsR0FDTEQsS0FESyxDQUNqQkMsUUFEaUI7O0FBQUEsa0JBR2dCQyxzREFBUSxDQUFDLENBQUQsQ0FIeEI7QUFBQSxNQUdqQkMsWUFIaUI7QUFBQSxNQUdIQyxlQUhHOztBQUFBLG1CQUlJRixzREFBUSxDQUFDRCxRQUFRLENBQUNJLE1BQVYsQ0FKWjtBQUFBLE1BSWpCQSxNQUppQjtBQUFBLE1BSVRDLFNBSlM7O0FBQUEsbUJBTWtCSixzREFBUSxDQUFDLElBQUQsQ0FOMUI7QUFBQSxNQU1qQkssYUFOaUI7QUFBQSxNQU1GQyxnQkFORSxrQkFReEI7OztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDWkgsYUFBUyxDQUFDTCxRQUFRLENBQUNJLE1BQVYsQ0FBVDtBQUNILEdBRlEsRUFFTixDQUFDSixRQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNUyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2YsUUFBSVAsWUFBWSxHQUFJRSxNQUFNLEdBQUcsQ0FBN0IsRUFBaUM7QUFDN0JELHFCQUFlLENBQUMsVUFBQU8sU0FBUztBQUFBLGVBQUlBLFNBQVMsR0FBRyxDQUFoQjtBQUFBLE9BQVYsQ0FBZjtBQUNIO0FBQ0osR0FKRDs7QUFNQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2YsUUFBSVQsWUFBWSxHQUFHLENBQW5CLEVBQXNCO0FBQ2xCQyxxQkFBZSxDQUFDLFVBQUFPLFNBQVM7QUFBQSxlQUFJQSxTQUFTLEdBQUcsQ0FBaEI7QUFBQSxPQUFWLENBQWY7QUFDSDtBQUNKLEdBSkQ7O0FBTUEsTUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDNUIsUUFBTUMsU0FBUyxHQUFHRCxDQUFDLENBQUNFLE9BQUYsQ0FBVSxDQUFWLEVBQWFDLE9BQS9CO0FBQ0FULG9CQUFnQixDQUFDTyxTQUFELENBQWhCO0FBQ0gsR0FIRDs7QUFLQSxNQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNKLENBQUQsRUFBTztBQUMzQixRQUFNQyxTQUFTLEdBQUdSLGFBQWxCOztBQUVBLFFBQUdRLFNBQVMsS0FBSyxJQUFqQixFQUF1QjtBQUNuQjtBQUNIOztBQUVELFFBQU1JLFlBQVksR0FBR0wsQ0FBQyxDQUFDRSxPQUFGLENBQVUsQ0FBVixFQUFhQyxPQUFsQztBQUNBLFFBQU1HLElBQUksR0FBR0wsU0FBUyxHQUFHSSxZQUF6Qjs7QUFFQSxRQUFJQyxJQUFJLEdBQUcsQ0FBWCxFQUFjO0FBQ1ZWLFVBQUk7QUFDUDs7QUFFRCxRQUFJVSxJQUFJLEdBQUcsQ0FBQyxDQUFaLEVBQWU7QUFDWFIsVUFBSTtBQUNQOztBQUVESixvQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0gsR0FuQkQ7O0FBcUJBLHNCQUNJO0FBQUssYUFBUyxFQUFFYSwyREFBTyxDQUFDQyxpQkFBeEI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRUQsMkRBQU8sQ0FBQ0UsZUFBeEI7QUFBQSxpQkFHUXBCLFlBQVksR0FBRyxDQUFmLGlCQUNBO0FBQVEsZUFBTyxFQUFFUyxJQUFqQjtBQUF1QixpQkFBUyxFQUFDLFlBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSlIsZUFRSTtBQUNJLGlCQUFTLEVBQUVTLDJEQUFPLENBQUNHLHNCQUR2QjtBQUVJLG9CQUFZLEVBQUVYLGdCQUZsQjtBQUdJLG1CQUFXLEVBQUVLLGVBSGpCO0FBQUEsK0JBS0k7QUFDSSxtQkFBUyxFQUFFRywyREFBTyxDQUFDSSxRQUFSLEdBQWlCQyxPQURoQztBQUVJLGVBQUssRUFBRTtBQUFFQyxxQkFBUyx3QkFBaUJ4QixZQUFZLEdBQUcsR0FBaEM7QUFBWCxXQUZYO0FBQUEsb0JBSUtGO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSixFQXNCUUUsWUFBWSxHQUFJRSxNQUFNLEdBQUcsQ0FBekIsaUJBQ0E7QUFBUSxlQUFPLEVBQUVLLElBQWpCO0FBQXVCLGlCQUFTLEVBQUMsYUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0NILENBbkZEOztHQUFNWCxROztLQUFBQSxRO0FBcUZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZjIzMGRmMzY3N2UxOWU4ZTJlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2Fyb3VzYWwubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IENhcm91c2VsID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7Y2hpbGRyZW59ID0gcHJvcHNcclxuXHJcbiAgICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtsZW5ndGgsIHNldExlbmd0aF0gPSB1c2VTdGF0ZShjaGlsZHJlbi5sZW5ndGgpXHJcblxyXG4gICAgY29uc3QgW3RvdWNoUG9zaXRpb24sIHNldFRvdWNoUG9zaXRpb25dID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICAvLyBTZXQgdGhlIGxlbmd0aCB0byBtYXRjaCBjdXJyZW50IGNoaWxkcmVuIGZyb20gcHJvcHNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0TGVuZ3RoKGNoaWxkcmVuLmxlbmd0aClcclxuICAgIH0sIFtjaGlsZHJlbl0pXHJcblxyXG4gICAgY29uc3QgbmV4dCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudEluZGV4IDwgKGxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRJbmRleChwcmV2U3RhdGUgPT4gcHJldlN0YXRlICsgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJldiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudEluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50SW5kZXgocHJldlN0YXRlID0+IHByZXZTdGF0ZSAtIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvdWNoU3RhcnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdWNoRG93biA9IGUudG91Y2hlc1swXS5jbGllbnRYXHJcbiAgICAgICAgc2V0VG91Y2hQb3NpdGlvbih0b3VjaERvd24pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG91Y2hNb3ZlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0b3VjaERvd24gPSB0b3VjaFBvc2l0aW9uXHJcblxyXG4gICAgICAgIGlmKHRvdWNoRG93biA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb3VjaCA9IGUudG91Y2hlc1swXS5jbGllbnRYXHJcbiAgICAgICAgY29uc3QgZGlmZiA9IHRvdWNoRG93biAtIGN1cnJlbnRUb3VjaFxyXG5cclxuICAgICAgICBpZiAoZGlmZiA+IDUpIHtcclxuICAgICAgICAgICAgbmV4dCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGlmZiA8IC01KSB7XHJcbiAgICAgICAgICAgIHByZXYoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VG91Y2hQb3NpdGlvbihudWxsKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2Fyb3VzZWxjb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJvdXNlbHdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgey8qIFlvdSBjYW4gYWx3YXMgY2hhbmdlIHRoZSBjb250ZW50IG9mIHRoZSBidXR0b24gdG8gb3RoZXIgdGhpbmdzICovfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZ9IGNsYXNzTmFtZT1cImxlZnQtYXJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJmx0O1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJvdXNlbGNvbnRlbnR3cmFwcGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17aGFuZGxlVG91Y2hTdGFydH1cclxuICAgICAgICAgICAgICAgICAgICBvblRvdWNoTW92ZT17aGFuZGxlVG91Y2hNb3ZlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcm91c2VsLWNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7Y3VycmVudEluZGV4ICogMTAwfSUpYCB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogWW91IGNhbiBhbHdhcyBjaGFuZ2UgdGhlIGNvbnRlbnQgb2YgdGhlIGJ1dHRvbiB0byBvdGhlciB0aGluZ3MgKi99XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4IDwgKGxlbmd0aCAtIDEpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0fSBjbGFzc05hbWU9XCJyaWdodC1hcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmZ3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbCJdLCJzb3VyY2VSb290IjoiIn0=