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
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_LoadingSpinner__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 23
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm0uanMiXSwibmFtZXMiOlsiTmV3TWVldHVwRm9ybSIsInByb3BzIiwidGl0bGVJbnB1dFJlZiIsInVzZVJlZiIsImltYWdlSW5wdXRSZWYiLCJhZGRyZXNzSW5wdXRSZWYiLCJkZXNjcmlwdGlvbklucHV0UmVmIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRUaXRsZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRJbWFnZSIsImVudGVyZWRBZGRyZXNzIiwiZW50ZXJlZERlc2NyaXB0aW9uIiwibWVldHVwRGF0YSIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJvbkFkZE1lZXR1cCIsInJlcGxhY2UiLCJjbGFzc2VzIiwiZm9ybSIsImNvbnRyb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUM1QixNQUFNQyxhQUFhLEdBQUdDLG9EQUFNLEVBQTVCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHRCxvREFBTSxFQUE1QjtBQUNBLE1BQU1FLGVBQWUsR0FBR0Ysb0RBQU0sRUFBOUI7QUFDQSxNQUFNRyxtQkFBbUIsR0FBR0gsb0RBQU0sRUFBbEM7O0FBSjRCLGtCQUtHSSxzREFBUSxDQUFDLEtBQUQsQ0FMWDtBQUFBLE1BS3JCQyxTQUxxQjtBQUFBLE1BS1hDLFlBTFc7O0FBTTlCLE1BQU1DLE1BQU0sR0FBQ0MsNkRBQVMsRUFBdEI7O0FBQ0UsV0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBTCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUVBLFFBQU1NLFlBQVksR0FBR2IsYUFBYSxDQUFDYyxPQUFkLENBQXNCQyxLQUEzQztBQUNBLFFBQU1DLFlBQVksR0FBR2QsYUFBYSxDQUFDWSxPQUFkLENBQXNCQyxLQUEzQztBQUNBLFFBQU1FLGNBQWMsR0FBR2QsZUFBZSxDQUFDVyxPQUFoQixDQUF3QkMsS0FBL0M7QUFDQSxRQUFNRyxrQkFBa0IsR0FBR2QsbUJBQW1CLENBQUNVLE9BQXBCLENBQTRCQyxLQUF2RDtBQUVBLFFBQU1JLFVBQVUsR0FBRztBQUNqQkMsV0FBSyxFQUFFUCxZQURVO0FBRWpCUSxXQUFLLEVBQUVMLFlBRlU7QUFHakJNLGFBQU8sRUFBRUwsY0FIUTtBQUlqQk0saUJBQVcsRUFBRUw7QUFKSSxLQUFuQjtBQU9BbkIsU0FBSyxDQUFDeUIsV0FBTixDQUFrQkwsVUFBbEI7QUFDQVgsVUFBTSxDQUFDaUIsT0FBUCxDQUFlLEdBQWY7QUFFQWxCLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0Q7O0FBRUQsc0JBRUk7QUFBTSxhQUFTLEVBQUVtQixnRUFBTyxDQUFDQyxJQUF6QjtBQUErQixZQUFRLEVBQUVqQixhQUF6QztBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFZ0IsZ0VBQU8sQ0FBQ0UsT0FBeEI7QUFBQSw4QkFDRTtBQUFPLGVBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFRLE1BQTNCO0FBQTRCLFVBQUUsRUFBQyxPQUEvQjtBQUF1QyxXQUFHLEVBQUU1QjtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFLLGVBQVMsRUFBRTBCLGdFQUFPLENBQUNFLE9BQXhCO0FBQUEsOEJBQ0U7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTyxZQUFJLEVBQUMsS0FBWjtBQUFrQixnQkFBUSxNQUExQjtBQUEyQixVQUFFLEVBQUMsT0FBOUI7QUFBc0MsV0FBRyxFQUFFMUI7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBU0U7QUFBSyxlQUFTLEVBQUV3QixnRUFBTyxDQUFDRSxPQUF4QjtBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsTUFBM0I7QUFBNEIsVUFBRSxFQUFDLFNBQS9CO0FBQXlDLFdBQUcsRUFBRXpCO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQWFFO0FBQUssZUFBUyxFQUFFdUIsZ0VBQU8sQ0FBQ0UsT0FBeEI7QUFBQSw4QkFDRTtBQUFPLGVBQU8sRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUNFLFVBQUUsRUFBQyxhQURMO0FBRUUsZ0JBQVEsTUFGVjtBQUdFLFlBQUksRUFBQyxHQUhQO0FBSUUsV0FBRyxFQUFFeEI7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsRUF1QkdFLFNBQVMsaUJBQUkscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUE2QkQ7O0dBMURRUixhO1VBTUlXLHFEOzs7S0FOSlgsYTtBQTRETUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3LW1lZXR1cC5jYjJlYzhiODRjZTc0MDk3YWFiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gJy4uL3VpL0xvYWRpbmdTcGlubmVyJztcbmltcG9ydCB7IFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi91aS9DYXJkJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTmV3TWVldHVwRm9ybS5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gTmV3TWVldHVwRm9ybShwcm9wcykge1xuICBjb25zdCB0aXRsZUlucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGltYWdlSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgYWRkcmVzc0lucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgW2lzTG9hZGluZyxzZXRJc0xvYWRpbmddPXVzZVN0YXRlKGZhbHNlKTtcbmNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcbiAgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgY29uc3QgZW50ZXJlZFRpdGxlID0gdGl0bGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRJbWFnZSA9IGltYWdlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkQWRkcmVzcyA9IGFkZHJlc3NJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIGNvbnN0IG1lZXR1cERhdGEgPSB7XG4gICAgICB0aXRsZTogZW50ZXJlZFRpdGxlLFxuICAgICAgaW1hZ2U6IGVudGVyZWRJbWFnZSxcbiAgICAgIGFkZHJlc3M6IGVudGVyZWRBZGRyZXNzLFxuICAgICAgZGVzY3JpcHRpb246IGVudGVyZWREZXNjcmlwdGlvbixcbiAgICB9O1xuXG4gICAgcHJvcHMub25BZGRNZWV0dXAobWVldHVwRGF0YSk7XG4gICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcblxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndGl0bGUnPk1lZXR1cCBUaXRsZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHJlcXVpcmVkIGlkPSd0aXRsZScgcmVmPXt0aXRsZUlucHV0UmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2ltYWdlJz5NZWV0dXAgSW1hZ2U8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd1cmwnIHJlcXVpcmVkIGlkPSdpbWFnZScgcmVmPXtpbWFnZUlucHV0UmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2FkZHJlc3MnPkFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZXF1aXJlZCBpZD0nYWRkcmVzcycgcmVmPXthZGRyZXNzSW5wdXRSZWZ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZGVzY3JpcHRpb24nPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGlkPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICByb3dzPSc1J1xuICAgICAgICAgICAgcmVmPXtkZXNjcmlwdGlvbklucHV0UmVmfVxuICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIHtpc0xvYWRpbmcgJiYgPExvYWRpbmdTcGlubmVyPjwvTG9hZGluZ1NwaW5uZXI+fVxuICAgICAgPC9mb3JtPlxuICAgIFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdNZWV0dXBGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==