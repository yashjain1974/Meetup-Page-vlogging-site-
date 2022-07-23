webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./components/meetups/NewMeetupForm.js":
/*!*********************************************!*\
  !*** ./components/meetups/NewMeetupForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_LoadingSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/LoadingSpinner */ "./components/ui/LoadingSpinner.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewMeetupForm.module.css */ "./components/meetups/NewMeetupForm.module.css");
/* harmony import */ var _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\components\\meetups\\NewMeetupForm.js",
    _s = $RefreshSig$();







function NewMeetupForm(props) {
  _s();

  var titleInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var imageInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var addressInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var descriptionInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    var enteredTitle = titleInputRef.current.value;
    var enteredImage = imageInputRef.current.value;
    var enteredAddress = addressInputRef.current.value;
    var enteredDescription = descriptionInputRef.current.value;
    var meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    };
    props.onAddMeetup(meetupData);
    router.replace('/');
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: !isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "loading",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_LoadingSpinner__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 47
      }, this), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 22
    }, this) || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.form,
      onSubmit: submitHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "title",
          children: "Meetup Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          required: true,
          id: "title",
          ref: titleInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "image",
          children: "Meetup Image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "url",
          required: true,
          id: "image",
          ref: imageInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "address",
          children: "Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          required: true,
          id: "address",
          ref: addressInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "description",
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          id: "description",
          required: true,
          rows: "5",
          ref: descriptionInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Add Meetup"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 92
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 4
  }, this);
}

_s(NewMeetupForm, "4ULUQcca1Z4TxvN4YC92H9FO38M=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = NewMeetupForm;
/* harmony default export */ __webpack_exports__["default"] = (NewMeetupForm);

var _c;

$RefreshReg$(_c, "NewMeetupForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm0uanMiXSwibmFtZXMiOlsiTmV3TWVldHVwRm9ybSIsInByb3BzIiwidGl0bGVJbnB1dFJlZiIsInVzZVJlZiIsImltYWdlSW5wdXRSZWYiLCJhZGRyZXNzSW5wdXRSZWYiLCJkZXNjcmlwdGlvbklucHV0UmVmIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRUaXRsZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRJbWFnZSIsImVudGVyZWRBZGRyZXNzIiwiZW50ZXJlZERlc2NyaXB0aW9uIiwibWVldHVwRGF0YSIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJvbkFkZE1lZXR1cCIsInJlcGxhY2UiLCJjbGFzc2VzIiwiZm9ybSIsImNvbnRyb2wiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFDNUIsTUFBTUMsYUFBYSxHQUFHQyxvREFBTSxFQUE1QjtBQUNBLE1BQU1DLGFBQWEsR0FBR0Qsb0RBQU0sRUFBNUI7QUFDQSxNQUFNRSxlQUFlLEdBQUdGLG9EQUFNLEVBQTlCO0FBQ0EsTUFBTUcsbUJBQW1CLEdBQUdILG9EQUFNLEVBQWxDOztBQUo0QixrQkFLR0ksc0RBQVEsQ0FBQyxLQUFELENBTFg7QUFBQSxNQUtyQkMsU0FMcUI7QUFBQSxNQUtYQyxZQUxXOztBQU05QixNQUFNQyxNQUFNLEdBQUNDLDZEQUFTLEVBQXRCOztBQUNFLFdBQVNDLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQzVCQSxTQUFLLENBQUNDLGNB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dEJtRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEeEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZEO0FBbUNEOztHQWhFUS9CLGE7VUFNSVcscUQ7OztLQU5KWCxhO0FBa0VNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXctbWVldHVwLmVkMmFlNGRlNWQyMDA0MzA1ZjBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gJy4uL3VpL0xvYWRpbmdTcGlubmVyJztcbmltcG9ydCB7IFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi91aS9DYXJkJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTmV3TWVldHVwRm9ybS5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gTmV3TWVldHVwRm9ybShwcm9wcykge1xuICBjb25zdCB0aXRsZUlucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGltYWdlSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgYWRkcmVzc0lucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgW2lzTG9hZGluZyxzZXRJc0xvYWRpbmddPXVzZVN0YXRlKGZhbHNlKTtcbmNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcbiAgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgY29uc3QgZW50ZXJlZFRpdGxlID0gdGl0bGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRJbWFnZSA9IGltYWdlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkQWRkcmVzcyA9IGFkZHJlc3NJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIGNvbnN0IG1lZXR1cERhdGEgPSB7XG4gICAgICB0aXRsZTogZW50ZXJlZFRpdGxlLFxuICAgICAgaW1hZ2U6IGVudGVyZWRJbWFnZSxcbiAgICAgIGFkZHJlc3M6IGVudGVyZWRBZGRyZXNzLFxuICAgICAgZGVzY3JpcHRpb246IGVudGVyZWREZXNjcmlwdGlvbixcbiAgICB9O1xuXG4gICAgcHJvcHMub25BZGRNZWV0dXAobWVldHVwRGF0YSk7XG4gICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcblxuICAgIFxuICB9XG5cbiAgcmV0dXJuIChcblxuICAgPFJlYWN0LkZyYWdtZW50PlxuICAgIHshaXNMb2FkaW5nICYmICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+PExvYWRpbmdTcGlubmVyPjwvTG9hZGluZ1NwaW5uZXI+IDwvZGl2PiB8fCAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3RpdGxlJz5NZWV0dXAgVGl0bGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZXF1aXJlZCBpZD0ndGl0bGUnIHJlZj17dGl0bGVJbnB1dFJlZn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdpbWFnZSc+TWVldHVwIEltYWdlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndXJsJyByZXF1aXJlZCBpZD0naW1hZ2UnIHJlZj17aW1hZ2VJbnB1dFJlZn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdhZGRyZXNzJz5BZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcmVxdWlyZWQgaWQ9J2FkZHJlc3MnIHJlZj17YWRkcmVzc0lucHV0UmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2Rlc2NyaXB0aW9uJz5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBpZD0nZGVzY3JpcHRpb24nXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcm93cz0nNSdcbiAgICAgICAgICAgIHJlZj17ZGVzY3JpcHRpb25JbnB1dFJlZn1cbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIDxidXR0b24+QWRkIE1lZXR1cDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgPC9mb3JtPn1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld01lZXR1cEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9