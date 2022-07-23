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
    setIsLoading(false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.form,
    onSubmit: submitHandler,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "title",
        children: "Meetup Title"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        required: true,
        id: "title",
        ref: titleInputRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "image",
        children: "Meetup Image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "url",
        required: true,
        id: "image",
        ref: imageInputRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "address",
        children: "Address"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        required: true,
        id: "address",
        ref: addressInputRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "description",
        children: "Description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        id: "description",
        required: true,
        rows: "5",
        ref: descriptionInputRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.actions,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Add Meetup"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this), !isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_LoadingSpinner__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 24
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm0uanMiXSwibmFtZXMiOlsiTmV3TWVldHVwRm9ybSIsInByb3BzIiwidGl0bGVJbnB1dFJlZiIsInVzZVJlZiIsImltYWdlSW5wdXRSZWYiLCJhZGRyZXNzSW5wdXRSZWYiLCJkZXNjcmlwdGlvbklucHV0UmVmIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRUaXRsZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRJbWFnZSIsImVudGVyZWRBZGRyZXNzIiwiZW50ZXJlZERlc2NyaXB0aW9uIiwibWVldHVwRGF0YSIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJvbkFkZE1lZXR1cCIsInJlcGxhY2UiLCJjbGFzc2VzIiwiZm9ybSIsImNvbnRyb2wiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFDNUIsTUFBTUMsYUFBYSxHQUFHQyxvREFBTSxFQUE1QjtBQUNBLE1BQU1DLGFBQWEsR0FBR0Qsb0RBQU0sRUFBNUI7QUFDQSxNQUFNRSxlQUFlLEdBQUdGLG9EQUFNLEVBQTlCO0FBQ0EsTUFBTUcsbUJBQW1CLEdBQUdILG9EQUFNLEVBQWxDOztBQUo0QixrQkFLR0ksc0RBQVEsQ0FBQyxLQUFELENBTFg7QUFBQSxNQUtyQkMsU0FMcUI7QUFBQSxNQUtYQyxZQUxXOztBQU05QixNQUFNQyxNQUFNLEdBQUNDLDZEQUFTLEVBQXRCOztBQUNFLFdBQVNDLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQzVCQSxTQUFLLENBQUNDLGNB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dGljL3dlYnBhY2svcGFnZXMvbmV3LW1lZXR1cC41MTBiNjY1MTdiY2YwZjUwNWE5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gJy4uL3VpL0xvYWRpbmdTcGlubmVyJztcbmltcG9ydCB7IFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi91aS9DYXJkJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTmV3TWVldHVwRm9ybS5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gTmV3TWVldHVwRm9ybShwcm9wcykge1xuICBjb25zdCB0aXRsZUlucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGltYWdlSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgYWRkcmVzc0lucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgW2lzTG9hZGluZyxzZXRJc0xvYWRpbmddPXVzZVN0YXRlKGZhbHNlKTtcbmNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcbiAgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgY29uc3QgZW50ZXJlZFRpdGxlID0gdGl0bGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRJbWFnZSA9IGltYWdlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkQWRkcmVzcyA9IGFkZHJlc3NJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIGNvbnN0IG1lZXR1cERhdGEgPSB7XG4gICAgICB0aXRsZTogZW50ZXJlZFRpdGxlLFxuICAgICAgaW1hZ2U6IGVudGVyZWRJbWFnZSxcbiAgICAgIGFkZHJlc3M6IGVudGVyZWRBZGRyZXNzLFxuICAgICAgZGVzY3JpcHRpb246IGVudGVyZWREZXNjcmlwdGlvbixcbiAgICB9O1xuXG4gICAgcHJvcHMub25BZGRNZWV0dXAobWVldHVwRGF0YSk7XG4gICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcblxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndGl0bGUnPk1lZXR1cCBUaXRsZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHJlcXVpcmVkIGlkPSd0aXRsZScgcmVmPXt0aXRsZUlucHV0UmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2ltYWdlJz5NZWV0dXAgSW1hZ2U8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd1cmwnIHJlcXVpcmVkIGlkPSdpbWFnZScgcmVmPXtpbWFnZUlucHV0UmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2FkZHJlc3MnPkFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZXF1aXJlZCBpZD0nYWRkcmVzcycgcmVmPXthZGRyZXNzSW5wdXRSZWZ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZGVzY3JpcHRpb24nPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGlkPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICByb3dzPSc1J1xuICAgICAgICAgICAgcmVmPXtkZXNjcmlwdGlvbklucHV0UmVmfVxuICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG4gICAgICAgICAgPGJ1dHRvbj5BZGQgTWVldHVwPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IWlzTG9hZGluZyAmJiA8TG9hZGluZ1NwaW5uZXI+PC9Mb2FkaW5nU3Bpbm5lcj59XG4gICAgICA8L2Zvcm0+XG4gICAgXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld01lZXR1cEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9