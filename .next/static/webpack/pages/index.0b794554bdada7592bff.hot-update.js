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
      className: _Carousal_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.carousel - wrapper,
      children: [currentIndex > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: prev,
        className: "left-arrow",
        children: "<"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Carousal_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.carousel - content - wrapper,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9DYXJvdXNhbC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImxlbmd0aCIsInNldExlbmd0aCIsInRvdWNoUG9zaXRpb24iLCJzZXRUb3VjaFBvc2l0aW9uIiwidXNlRWZmZWN0IiwibmV4dCIsInByZXZTdGF0ZSIsInByZXYiLCJoYW5kbGVUb3VjaFN0YXJ0IiwiZSIsInRvdWNoRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiaGFuZGxlVG91Y2hNb3ZlIiwiY3VycmVudFRvdWNoIiwiZGlmZiIsImNsYXNzZXMiLCJjYXJvdXNlbCIsImNvbnRhaW5lciIsIndyYXBwZXIiLCJjb250ZW50IiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDakJDLFFBRGlCLEdBQ0xELEtBREssQ0FDakJDLFFBRGlCOztBQUFBLGtCQUdnQkMsc0RBQVEsQ0FBQyxDQUFELENBSHhCO0FBQUEsTUFHakJDLFlBSGlCO0FBQUEsTUFHSEMsZUFIRzs7QUFBQSxtQkFJSUYsc0RBQVEsQ0FBQ0QsUUFBUSxDQUFDSSxNQUFWLENBSlo7QUFBQSxNQUlqQkEsTUFKaUI7QUFBQSxNQUlUQyxTQUpTOztBQUFBLG1CQU1rQkosc0RBQVEsQ0FBQyxJQUFELENBTjFCO0FBQUEsTUFNakJLLGFBTmlCO0FBQUEsTUFNRkMsZ0JBTkUsa0JBUXhCOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pILGFBQVMsQ0FBQ0wsUUFBUSxDQUFDSSxNQUFWLENBQVQ7QUFDSCxHQUZRLEVBRU4sQ0FBQ0osUUFBRCxDQUZNLENBQVQ7O0FBSUEsTUFBTVMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNmLFFBQUlQLFlBQVksR0FBSUUsTUFBTSxHQUFHLENBQTdCLEVBQWlDO0FBQzdCRCxxQkFBZSxDQUFDLFVBQUFPLFNBQVM7QUFBQSxlQUFJQSxTQUFTLEdBQUcsQ0FBaEI7QUFBQSxPQUFWLENBQWY7QUFDSDtBQUNKLEdBSkQ7O0FBTUEsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNmLFFBQUlULFlBQVksR0FBRyxDQUFuQixFQUFzQjtBQUNsQkMscUJBQWUsQ0FBQyxVQUFBTyxTQUFTO0FBQUEsZUFBSUEsU0FBUyxHQUFHLENBQWhCO0FBQUEsT0FBVixDQUFmO0FBQ0g7QUFDSixHQUpEOztBQU1BLE1BQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzVCLFFBQU1DLFNBQVMsR0FBR0QsQ0FBQyxDQUFDRSxPQUFGLENBQVUsQ0FBVixFQUFhQyxPQUEvQjtBQUNBVCxvQkFBZ0IsQ0FBQ08sU0FBRCxDQUFoQjtBQUNILEdBSEQ7O0FBS0EsTUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDSixDQUFELEVBQU87QUFDM0IsUUFBTUMsU0FBUyxHQUFHUixhQUFsQjs7QUFFQSxRQUFHUSxTQUFTLEtBQUssSUFBakIsRUFBdUI7QUFDbkI7QUFDSDs7QUFFRCxRQUFNSSxZQUFZLEdBQUdMLENBQUMsQ0FBQ0UsT0FBRixDQUFVLENBQVYsRUFBYUMsT0FBbEM7QUFDQSxRQUFNRyxJQUFJLEdBQUdMLFNBQVMsR0FBR0ksWUFBekI7O0FBRUEsUUFBSUMsSUFBSSxHQUFHLENBQVgsRUFBYztBQUNWVixVQUFJO0FBQ1A7O0FBRUQsUUFBSVUsSUFBSSxHQUFHLENBQUMsQ0FBWixFQUFlO0FBQ1hSLFVBQUk7QUFDUDs7QUFFREosb0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNILEdBbkJEOztBQXFCQSxzQkFDSTtBQUFLLGFBQVMsRUFBRWEsMkRBQU8sQ0FBQ0MsUUFBUixHQUFpQkMsU0FBakM7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRUYsMkRBQU8sQ0FBQ0MsUUFBUixHQUFpQkUsT0FBakM7QUFBQSxpQkFHUXJCLFlBQVksR0FBRyxDQUFmLGlCQUNBO0FBQVEsZUFBTyxFQUFFUyxJQUFqQjtBQUF1QixpQkFBUyxFQUFDLFlBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSlIsZUFRSTtBQUNJLGlCQUFTLEVBQUVTLDJEQUFPLENBQUNDLFFBQVIsR0FBaUJHLE9BQWpCLEdBQXlCRCxPQUR4QztBQUVJLG9CQUFZLEVBQUVYLGdCQUZsQjtBQUdJLG1CQUFXLEVBQUVLLGVBSGpCO0FBQUEsK0JBS0k7QUFDSSxtQkFBUyxFQUFDLGtCQURkO0FBRUksZUFBSyxFQUFFO0FBQUVRLHFCQUFTLHdCQUFpQnZCLFlBQVksR0FBRyxHQUFoQztBQUFYLFdBRlg7QUFBQSxvQkFJS0Y7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKLEVBc0JRRSxZQUFZLEdBQUlFLE1BQU0sR0FBRyxDQUF6QixpQkFDQTtBQUFRLGVBQU8sRUFBRUssSUFBakI7QUFBdUIsaUJBQVMsRUFBQyxhQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFnQ0gsQ0FuRkQ7O0dBQU1YLFE7O0tBQUFBLFE7QUFxRlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBiNzk0NTU0YmRhZGE3NTkyYmZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9DYXJvdXNhbC5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgQ2Fyb3VzZWwgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtjaGlsZHJlbn0gPSBwcm9wc1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2xlbmd0aCwgc2V0TGVuZ3RoXSA9IHVzZVN0YXRlKGNoaWxkcmVuLmxlbmd0aClcclxuXHJcbiAgICBjb25zdCBbdG91Y2hQb3NpdGlvbiwgc2V0VG91Y2hQb3NpdGlvbl0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIC8vIFNldCB0aGUgbGVuZ3RoIHRvIG1hdGNoIGN1cnJlbnQgY2hpbGRyZW4gZnJvbSBwcm9wc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRMZW5ndGgoY2hpbGRyZW4ubGVuZ3RoKVxyXG4gICAgfSwgW2NoaWxkcmVuXSlcclxuXHJcbiAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPCAobGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudEluZGV4KHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgKyAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmV2ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRJbmRleChwcmV2U3RhdGUgPT4gcHJldlN0YXRlIC0gMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG91Y2hTdGFydCA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG91Y2hEb3duID0gZS50b3VjaGVzWzBdLmNsaWVudFhcclxuICAgICAgICBzZXRUb3VjaFBvc2l0aW9uKHRvdWNoRG93bilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb3VjaE1vdmUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdWNoRG93biA9IHRvdWNoUG9zaXRpb25cclxuXHJcbiAgICAgICAgaWYodG91Y2hEb3duID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFRvdWNoID0gZS50b3VjaGVzWzBdLmNsaWVudFhcclxuICAgICAgICBjb25zdCBkaWZmID0gdG91Y2hEb3duIC0gY3VycmVudFRvdWNoXHJcblxyXG4gICAgICAgIGlmIChkaWZmID4gNSkge1xyXG4gICAgICAgICAgICBuZXh0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkaWZmIDwgLTUpIHtcclxuICAgICAgICAgICAgcHJldigpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUb3VjaFBvc2l0aW9uKG51bGwpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJvdXNlbC1jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJvdXNlbC13cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIHsvKiBZb3UgY2FuIGFsd2FzIGNoYW5nZSB0aGUgY29udGVudCBvZiB0aGUgYnV0dG9uIHRvIG90aGVyIHRoaW5ncyAqL31cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmV2fSBjbGFzc05hbWU9XCJsZWZ0LWFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZsdDtcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2Fyb3VzZWwtY29udGVudC13cmFwcGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17aGFuZGxlVG91Y2hTdGFydH1cclxuICAgICAgICAgICAgICAgICAgICBvblRvdWNoTW92ZT17aGFuZGxlVG91Y2hNb3ZlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7Y3VycmVudEluZGV4ICogMTAwfSUpYCB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogWW91IGNhbiBhbHdhcyBjaGFuZ2UgdGhlIGNvbnRlbnQgb2YgdGhlIGJ1dHRvbiB0byBvdGhlciB0aGluZ3MgKi99XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4IDwgKGxlbmd0aCAtIDEpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0fSBjbGFzc05hbWU9XCJyaWdodC1hcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmZ3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbCJdLCJzb3VyY2VSb290IjoiIn0=