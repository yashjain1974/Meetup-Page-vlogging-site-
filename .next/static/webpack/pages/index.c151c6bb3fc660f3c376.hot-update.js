webpackHotUpdate_N_E("pages/index",{

/***/ "./components/meetups/MeetupItem.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupItem.module.css */ "./components/meetups/MeetupItem.module.css");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ui_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/LoadingSpinner */ "./components/ui/LoadingSpinner.js");
/* harmony import */ var _ui_Carousal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/Carousal */ "./components/ui/Carousal.js");


var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\components\\meetups\\MeetupItem.js",
    _s = $RefreshSig$();








function MeetupItem(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var onShowDetailHandler = function onShowDetailHandler() {
    setIsLoading(true);
    router.push("/" + props.id);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    children: isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "loading",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this) || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Carousal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: props.image,
            alt: props.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: props.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
            children: props.address
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: onShowDetailHandler,
            children: "Show Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

_s(MeetupItem, "oofmIDu+Prn0iTOh5nKhCcpj4zQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = MeetupItem;
/* harmony default export */ __webpack_exports__["default"] = (MeetupItem);

var _c;

$RefreshReg$(_c, "MeetupItem");

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

/***/ }),

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
    className: "carousel-container",
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

/***/ }),

/***/ "./components/ui/Carousal.module.css":
/*!*******************************************!*\
  !*** ./components/ui/Carousal.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Carousal.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/ui/Carousal.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Carousal.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/ui/Carousal.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Carousal.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/ui/Carousal.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/ui/Carousal.module.css":
/*!*******************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/ui/Carousal.module.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Carousal_carousel-container__224Z9 {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.Carousal_carousel-wrapper__3bzAD {\r\n    display: flex;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.Carousal_carousel-content-wrapper__3DTOJ {\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.Carousal_carousel-content__1CFie {\r\n    display: flex;\r\n    -webkit-transition: all 250ms linear;\r\n    transition: all 250ms linear;\r\n    -ms-overflow-style: none;  /* hide scrollbar in IE and Edge */\r\n    scrollbar-width: none;  /* hide scrollbar in Firefox */\r\n}\r\n\r\n/* hide scrollbar in webkit browser */\r\n.Carousal_carousel-content__1CFie::-webkit-scrollbar, .Carousal_carousel-content__1CFie::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.Carousal_carousel-content__1CFie > * {\r\n    width: 100%;\r\n    flex-shrink: 0;\r\n    flex-grow: 1;\r\n}\r\n\r\n.Carousal_left-arrow__38S-U, .Carousal_right-arrow__2U8IE {\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    width: 48px;\r\n    height: 48px;\r\n    border-radius: 24px;\r\n    background-color: white;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.Carousal_left-arrow__38S-U {\r\n    left: 24px;\r\n}\r\n\r\n.Carousal_right-arrow__2U8IE {\r\n    right: 24px;\r\n}\r\n\r\n@media (hover: none) and (pointer: coarse) {\r\n    .Carousal_left-arrow__38S-U, .Carousal_right-arrow__2U8IE {\r\n        display: none;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://components/ui/Carousal.module.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,oCAA4B;IAA5B,4BAA4B;IAC5B,wBAAwB,GAAG,kCAAkC;IAC7D,qBAAqB,GAAG,8BAA8B;AAC1D;;AAEA,qCAAqC;AACrC;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,mCAA2B;YAA3B,2BAA2B;IAC3B,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI;QACI,aAAa;IACjB;AACJ","sourcesContent":[".carousel-container {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.carousel-wrapper {\r\n    display: flex;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.carousel-content-wrapper {\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.carousel-content {\r\n    display: flex;\r\n    transition: all 250ms linear;\r\n    -ms-overflow-style: none;  /* hide scrollbar in IE and Edge */\r\n    scrollbar-width: none;  /* hide scrollbar in Firefox */\r\n}\r\n\r\n/* hide scrollbar in webkit browser */\r\n.carousel-content::-webkit-scrollbar, .carousel-content::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.carousel-content > * {\r\n    width: 100%;\r\n    flex-shrink: 0;\r\n    flex-grow: 1;\r\n}\r\n\r\n.left-arrow, .right-arrow {\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    width: 48px;\r\n    height: 48px;\r\n    border-radius: 24px;\r\n    background-color: white;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.left-arrow {\r\n    left: 24px;\r\n}\r\n\r\n.right-arrow {\r\n    right: 24px;\r\n}\r\n\r\n@media (hover: none) and (pointer: coarse) {\r\n    .left-arrow, .right-arrow {\r\n        display: none;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"carousel-container": "Carousal_carousel-container__224Z9",
	"carousel-wrapper": "Carousal_carousel-wrapper__3bzAD",
	"carousel-content-wrapper": "Carousal_carousel-content-wrapper__3DTOJ",
	"carousel-content": "Carousal_carousel-content__1CFie",
	"left-arrow": "Carousal_left-arrow__38S-U",
	"right-arrow": "Carousal_right-arrow__2U8IE"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEl0ZW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvQ2Fyb3VzYWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvQ2Fyb3VzYWwubW9kdWxlLmNzcz9hMTlhIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL0Nhcm91c2FsLm1vZHVsZS5jc3MiXSwibmFtZXMiOlsiTWVldHVwSXRlbSIsInByb3BzIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvblNob3dEZXRhaWxIYW5kbGVyIiwicHVzaCIsImlkIiwiY2xhc3NlcyIsIml0ZW0iLCJpbWFnZSIsInRpdGxlIiwiY29udGVudCIsImFkZHJlc3MiLCJhY3Rpb25zIiwiQ2Fyb3VzZWwiLCJjaGlsZHJlbiIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImxlbmd0aCIsInNldExlbmd0aCIsInRvdWNoUG9zaXRpb24iLCJzZXRUb3VjaFBvc2l0aW9uIiwidXNlRWZmZWN0IiwibmV4dCIsInByZXZTdGF0ZSIsInByZXYiLCJoYW5kbGVUb3VjaFN0YXJ0IiwiZSIsInRvdWNoRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiaGFuZGxlVG91Y2hNb3ZlIiwiY3VycmVudFRvdWNoIiwiZGlmZiIsInRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsS0FBRCxDQURqQjtBQUFBLE1BQ2xCQyxTQURrQjtBQUFBLE1BQ1BDLFlBRE87O0FBRXpCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFB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QXFCLG1CQUFtQixLQUFLLHNCQUFzQixvQkFBb0IsS0FBSyxvREFBb0QsbUNBQW1DLDBCQUEwQixTQUFTLEtBQUssbUJBQW1CO0FBQ3I5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMTUxYzZiYjNmYzY2MGYzYzM3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4uL3VpL0NhcmRcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL01lZXR1cEl0ZW0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi4vdWkvTG9hZGluZ1NwaW5uZXJcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi4vdWkvQ2Fyb3VzYWxcIjtcblxuZnVuY3Rpb24gTWVldHVwSXRlbShwcm9wcykge1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgb25TaG93RGV0YWlsSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgcm91dGVyLnB1c2goXCIvXCIgKyBwcm9wcy5pZCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgeyhpc0xvYWRpbmcgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgICA8TG9hZGluZ1NwaW5uZXI+PC9Mb2FkaW5nU3Bpbm5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKSB8fCAoXG4gICAgICAgIDxDYXJvdXNlbD5cbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IGFsdD17cHJvcHMudGl0bGV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICA8aDM+e3Byb3BzLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU2hvd0RldGFpbEhhbmRsZXJ9PlNob3cgRGV0YWlsczwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgICAgICAgPC9saT5cbiAgICAgICAgIDwvQ2Fyb3VzZWw+KX1cbiAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbiBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwSXRlbTtcbiIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0Nhcm91c2FsLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBDYXJvdXNlbCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge2NoaWxkcmVufSA9IHByb3BzXHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbbGVuZ3RoLCBzZXRMZW5ndGhdID0gdXNlU3RhdGUoY2hpbGRyZW4ubGVuZ3RoKVxyXG5cclxuICAgIGNvbnN0IFt0b3VjaFBvc2l0aW9uLCBzZXRUb3VjaFBvc2l0aW9uXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgLy8gU2V0IHRoZSBsZW5ndGggdG8gbWF0Y2ggY3VycmVudCBjaGlsZHJlbiBmcm9tIHByb3BzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldExlbmd0aChjaGlsZHJlbi5sZW5ndGgpXHJcbiAgICB9LCBbY2hpbGRyZW5dKVxyXG5cclxuICAgIGNvbnN0IG5leHQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IChsZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50SW5kZXgocHJldlN0YXRlID0+IHByZXZTdGF0ZSArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXYgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudEluZGV4KHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgLSAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVUb3VjaFN0YXJ0ID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB0b3VjaERvd24gPSBlLnRvdWNoZXNbMF0uY2xpZW50WFxyXG4gICAgICAgIHNldFRvdWNoUG9zaXRpb24odG91Y2hEb3duKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvdWNoTW92ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG91Y2hEb3duID0gdG91Y2hQb3NpdGlvblxyXG5cclxuICAgICAgICBpZih0b3VjaERvd24gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50VG91Y2ggPSBlLnRvdWNoZXNbMF0uY2xpZW50WFxyXG4gICAgICAgIGNvbnN0IGRpZmYgPSB0b3VjaERvd24gLSBjdXJyZW50VG91Y2hcclxuXHJcbiAgICAgICAgaWYgKGRpZmYgPiA1KSB7XHJcbiAgICAgICAgICAgIG5leHQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRpZmYgPCAtNSkge1xyXG4gICAgICAgICAgICBwcmV2KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRvdWNoUG9zaXRpb24obnVsbClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgey8qIFlvdSBjYW4gYWx3YXMgY2hhbmdlIHRoZSBjb250ZW50IG9mIHRoZSBidXR0b24gdG8gb3RoZXIgdGhpbmdzICovfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZ9IGNsYXNzTmFtZT1cImxlZnQtYXJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJmx0O1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRlbnQtd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXtoYW5kbGVUb3VjaFN0YXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVG91Y2hNb3ZlPXtoYW5kbGVUb3VjaE1vdmV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHtjdXJyZW50SW5kZXggKiAxMDB9JSlgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBZb3UgY2FuIGFsd2FzIGNoYW5nZSB0aGUgY29udGVudCBvZiB0aGUgYnV0dG9uIHRvIG90aGVyIHRoaW5ncyAqL31cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPCAobGVuZ3RoIC0gMSkgJiZcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e25leHR9IGNsYXNzTmFtZT1cInJpZ2h0LWFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZndDtcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9DYXJvdXNhbC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9DYXJvdXNhbC5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vQ2Fyb3VzYWwubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQ2Fyb3VzYWxfY2Fyb3VzZWwtY29udGFpbmVyX18yMjRaOSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uQ2Fyb3VzYWxfY2Fyb3VzZWwtd3JhcHBlcl9fM2J6QUQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uQ2Fyb3VzYWxfY2Fyb3VzZWwtY29udGVudC13cmFwcGVyX18zRFRPSiB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5DYXJvdXNhbF9jYXJvdXNlbC1jb250ZW50X18xQ0ZpZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDI1MG1zIGxpbmVhcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGxpbmVhcjtcXHJcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogaGlkZSBzY3JvbGxiYXIgaW4gSUUgYW5kIEVkZ2UgKi9cXHJcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogaGlkZSBzY3JvbGxiYXIgaW4gRmlyZWZveCAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBoaWRlIHNjcm9sbGJhciBpbiB3ZWJraXQgYnJvd3NlciAqL1xcclxcbi5DYXJvdXNhbF9jYXJvdXNlbC1jb250ZW50X18xQ0ZpZTo6LXdlYmtpdC1zY3JvbGxiYXIsIC5DYXJvdXNhbF9jYXJvdXNlbC1jb250ZW50X18xQ0ZpZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uQ2Fyb3VzYWxfY2Fyb3VzZWwtY29udGVudF9fMUNGaWUgPiAqIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5DYXJvdXNhbF9sZWZ0LWFycm93X18zOFMtVSwgLkNhcm91c2FsX3JpZ2h0LWFycm93X18yVThJRSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgd2lkdGg6IDQ4cHg7XFxyXFxuICAgIGhlaWdodDogNDhweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi5DYXJvdXNhbF9sZWZ0LWFycm93X18zOFMtVSB7XFxyXFxuICAgIGxlZnQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5DYXJvdXNhbF9yaWdodC1hcnJvd19fMlU4SUUge1xcclxcbiAgICByaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3Zlcjogbm9uZSkgYW5kIChwb2ludGVyOiBjb2Fyc2UpIHtcXHJcXG4gICAgLkNhcm91c2FsX2xlZnQtYXJyb3dfXzM4Uy1VLCAuQ2Fyb3VzYWxfcmlnaHQtYXJyb3dfXzJVOElFIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvdWkvQ2Fyb3VzYWwubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQTRCO0lBQTVCLDRCQUE0QjtJQUM1Qix3QkFBd0IsR0FBRyxrQ0FBa0M7SUFDN0QscUJBQXFCLEdBQUcsOEJBQThCO0FBQzFEOztBQUVBLHFDQUFxQztBQUNyQztJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2Fyb3VzZWwtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbC13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcm91c2VsLWNvbnRlbnQtd3JhcHBlciB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbC1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGxpbmVhcjtcXHJcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogaGlkZSBzY3JvbGxiYXIgaW4gSUUgYW5kIEVkZ2UgKi9cXHJcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogaGlkZSBzY3JvbGxiYXIgaW4gRmlyZWZveCAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBoaWRlIHNjcm9sbGJhciBpbiB3ZWJraXQgYnJvd3NlciAqL1xcclxcbi5jYXJvdXNlbC1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciwgLmNhcm91c2VsLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcm91c2VsLWNvbnRlbnQgPiAqIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LWFycm93LCAucmlnaHQtYXJyb3cge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAgIHdpZHRoOiA0OHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1hcnJvdyB7XFxyXFxuICAgIGxlZnQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1hcnJvdyB7XFxyXFxuICAgIHJpZ2h0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKGhvdmVyOiBub25lKSBhbmQgKHBvaW50ZXI6IGNvYXJzZSkge1xcclxcbiAgICAubGVmdC1hcnJvdywgLnJpZ2h0LWFycm93IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY2Fyb3VzZWwtY29udGFpbmVyXCI6IFwiQ2Fyb3VzYWxfY2Fyb3VzZWwtY29udGFpbmVyX18yMjRaOVwiLFxuXHRcImNhcm91c2VsLXdyYXBwZXJcIjogXCJDYXJvdXNhbF9jYXJvdXNlbC13cmFwcGVyX18zYnpBRFwiLFxuXHRcImNhcm91c2VsLWNvbnRlbnQtd3JhcHBlclwiOiBcIkNhcm91c2FsX2Nhcm91c2VsLWNvbnRlbnQtd3JhcHBlcl9fM0RUT0pcIixcblx0XCJjYXJvdXNlbC1jb250ZW50XCI6IFwiQ2Fyb3VzYWxfY2Fyb3VzZWwtY29udGVudF9fMUNGaWVcIixcblx0XCJsZWZ0LWFycm93XCI6IFwiQ2Fyb3VzYWxfbGVmdC1hcnJvd19fMzhTLVVcIixcblx0XCJyaWdodC1hcnJvd1wiOiBcIkNhcm91c2FsX3JpZ2h0LWFycm93X18yVThJRVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=