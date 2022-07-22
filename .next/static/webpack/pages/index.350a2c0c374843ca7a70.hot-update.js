webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: setServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setServerSideProps", function() { return setServerSideProps; });
/* harmony import */ var F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");




var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\pages\\index.js",
    _this = undefined;



var DUMMY_MEETUP = [{
  id: "m1",
  title: "First Meetup",
  image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
  address: "Some Address",
  description: "This is a First Meetup"
}, {
  id: "m2",
  title: "Second Meetup",
  image: "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_960_720.jpg",
  address: "Some Address",
  description: "This is a Second Meetup"
}];

var HomePage = function HomePage(props) {
  // const [data,setData]=useState([]);
  // useEffect(()=>{
  //     setData(DUMMY_MEETUP);
  // },[])
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_c = HomePage;
function setServerSideProps() {
  return _setServerSideProps.apply(this, arguments);
} // export async function getStaticProps(){
// //fetch data from an API
// return{
//     props:{
//         meetups:DUMMY_MEETUP
//     },
//     revalidate:10
// }
// }

function _setServerSideProps() {
  _setServerSideProps = Object(F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {});

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _setServerSideProps.apply(this, arguments);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiLCJzZXRTZXJ2ZXJTaWRlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FDbkI7QUFDRUMsSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGNBRlQ7QUFHRUMsT0FBSyxFQUNILHdFQUpKO0FBS0VDLFNBQU8sRUFBRSxjQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBRG1CLEVBU25CO0FBQ0VKLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxlQUZUO0FBR0VDLE9BQUssRUFDSCwyRUFKSjtBQUtFQyxTQUFPLEVBQUUsY0FMWDtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQVRtQixDQUFyQjs7QUFrQkEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCO0FBQ0E7QUFDQTtBQUVBO0FBQ0Ysc0JBRUUscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsMkJBQ0UscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQU1ELENBWkQ7O0tBQU1GLFE7QUFjQyxTQUFlRyxrQkFBdEI7QUFBQTtBQUFBLEMsQ0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzttU0FiTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQ0ksRUFESjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBZVFILHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM1MGEyYzBjMzc0ODQzY2E3YTcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUCA9IFtcclxuICB7XHJcbiAgICBpZDogXCJtMVwiLFxyXG4gICAgdGl0bGU6IFwiRmlyc3QgTWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE1LzA0LzIzLzIyLzAwL3RyZWUtNzM2ODg1Xzk2MF83MjAuanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgQWRkcmVzc1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIEZpcnN0IE1lZXR1cFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTJcIixcclxuICAgIHRpdGxlOiBcIlNlY29uZCBNZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTIvMDEvMjAvMjgvZm9yZXN0LTEwNzI4MjhfOTYwXzcyMC5qcGdcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBBZGRyZXNzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgU2Vjb25kIE1lZXR1cFwiLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgICAvLyBjb25zdCBbZGF0YSxzZXREYXRhXT11c2VTdGF0ZShbXSk7XHJcbiAgICAvLyB1c2VFZmZlY3QoKCk9PntcclxuICAgIC8vICAgICBzZXREYXRhKERVTU1ZX01FRVRVUCk7XHJcblxyXG4gICAgLy8gfSxbXSlcclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30+PC9NZWV0dXBMaXN0PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldFNlcnZlclNpZGVQcm9wcygpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcclxuLy8gLy9mZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcbi8vIHJldHVybntcclxuLy8gICAgIHByb3BzOntcclxuLy8gICAgICAgICBtZWV0dXBzOkRVTU1ZX01FRVRVUFxyXG4vLyAgICAgfSxcclxuLy8gICAgIHJldmFsaWRhdGU6MTBcclxuLy8gfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==