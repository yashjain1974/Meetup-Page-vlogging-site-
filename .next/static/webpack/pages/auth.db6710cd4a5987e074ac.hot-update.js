webpackHotUpdate_N_E("pages/auth",{

/***/ "./components/Auth/AuthForm.js":
/*!*************************************!*\
  !*** ./components/Auth/AuthForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_auth_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/auth-context */ "./store/auth-context.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AuthForm.module.css */ "./components/Auth/AuthForm.module.css");
/* harmony import */ var _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\components\\Auth\\AuthForm.js",
    _this = undefined,
    _s = $RefreshSig$();






var AuthForm = function AuthForm() {
  _s();

  var router = next_router__WEBPACK_IMPORTED_MODULE_5___default()();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      isLogin = _useState[0],
      setIsLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isweekPassword = _useState2[0],
      setisWeekPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      isweekPasswordMes = _useState3[0],
      setisWeekPasswordMes = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var inputEmailRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var inputPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var Authctx = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_store_auth_context__WEBPACK_IMPORTED_MODULE_4__["default"]);

  var switchAuthModeHandler = function switchAuthModeHandler() {
    setIsLogin(function (prevState) {
      return !prevState;
    });
  };

  var url;

  function fetchUserDetail(_x, _x2) {
    return _fetchUserDetail.apply(this, arguments);
  }

  function _fetchUserDetail() {
    _fetchUserDetail = Object(F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, url) {
      return F_React_Udemy_Meetup_page_Nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json"
                }
              }).then(function (res) {
                setIsLoading(false);

                if (res.ok) {
                  return res.json();
                } else {
                  return res.json().then(function (data) {
                    var errorMessage = "Authentication failed";

                    if (data && data.error && data.error.message) {
                      errorMessage = data.error.message;
                      throw new Error(errorMessage);
                    }
                  });
                }
              }).then(function (data) {
                var expirationTime = new Date(new Date().getTime() + +data.expiresIn * 1000);
                Authctx.login(data.idToken, expirationTime.toISOString());
                router.rep;
              })["catch"](function (err) {
                setisWeekPassword(true);
                setisWeekPasswordMes(err.message);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fetchUserDetail.apply(this, arguments);
  }

  var submitHandler = function submitHandler(event) {
    event.preventDefault();
    var entereEmail = inputEmailRef.current.value;
    var enteredPassword = inputPasswordRef.current.value;
    var data = {
      email: entereEmail,
      password: enteredPassword,
      returnSecureToken: true
    };
    setIsLoading(true);

    if (isLogin) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDL9-razGo1HMXZYtLVAISUgIb--XsB4YQ";
      fetchUserDetail(data, url);
    } else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDL9-razGo1HMXZYtLVAISUgIb--XsB4YQ";
      fetchUserDetail(data, url);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.auth,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: isLogin ? "Login" : "Sign Up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: submitHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "Your Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "email",
          id: "email",
          required: true,
          ref: inputEmailRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Your Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "password",
          id: "password",
          required: true,
          ref: inputPasswordRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this), isweekPassword && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.invalid,
          children: isweekPasswordMes
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.actions,
        children: [!isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          children: isLogin ? "Login" : "Create Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          type: "button",
          className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.toggle,
          onClick: switchAuthModeHandler,
          children: isLogin ? "Create new account" : "Login with existing account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, _this);
};

_s(AuthForm, "s3+ni+qjURVLSyYN6mYdAAl3Gdw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5___default.a];
});

_c = AuthForm;
/* harmony default export */ __webpack_exports__["default"] = (AuthForm);

var _c;

$RefreshReg$(_c, "AuthForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL0F1dGhGb3JtLmpzIl0sIm5hbWVzIjpbIkF1dGhGb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsImlzd2Vla1Bhc3N3b3JkIiwic2V0aXNXZWVrUGFzc3dvcmQiLCJpc3dlZWtQYXNzd29yZE1lcyIsInNldGlzV2Vla1Bhc3N3b3JkTWVzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaW5wdXRFbWFpbFJlZiIsInVzZVJlZiIsImlucHV0UGFzc3dvcmRSZWYiLCJBdXRoY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0Iiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwicHJldlN0YXRlIiwidXJsIiwiZmV0Y2hVc2VyRGV0YWlsIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsImVycm9yTWVzc2FnZSIsImVycm9yIiwibWVzc2FnZSIsIkVycm9yIiwiZXhwaXJhdGlvblRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImV4cGlyZXNJbiIsImxvZ2luIiwiaWRUb2tlbiIsInRvSVNPU3RyaW5nIiwicmVwIiwiZXJyIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVFbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRQYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXR1cm5TZWN1cmVUb2tlbiIsImNsYXNzZXMiLCJhdXRoIiwiY29udHJvbCIsImludmFsaWQiLCJhY3Rpb25zIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtB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RUFBQyxVQURQO0FBRUUsWUFBRSxFQUFDLFVBRkw7QUFHRSxrQkFBUSxNQUhWO0FBSUUsYUFBRyxFQUFFNUM7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLEVBUUdSLGNBQWMsaUJBQ2I7QUFBRyxtQkFBUyxFQUFFa0QsMkRBQU8sQ0FBQ0csT0FBdEI7QUFBQSxvQkFBZ0NuRDtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBaUJFO0FBQUssaUJBQVMsRUFBRWdELDJEQUFPLENBQUNJLE9BQXhCO0FBQUEsbUJBQ0csQ0FBQ2xELFNBQUQsaUJBQ0M7QUFBQSxvQkFBU04sT0FBTyxHQUFHLE9BQUgsR0FBYTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBSUdNLFNBQVMsaUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSmhCLGVBTUU7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFTLEVBQUU4QywyREFBTyxDQUFDSyxNQUZyQjtBQUdFLGlCQUFPLEVBQUUzQyxxQkFIWDtBQUFBLG9CQUtHZCxPQUFPLEdBQUcsb0JBQUgsR0FBMEI7QUFMcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQ0QsQ0EvR0Q7O0dBQU1KLFE7VUFDU0Usa0Q7OztLQURURixRO0FBaUhTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoLmRiNjcxMGNkNGE1OTg3ZTA3NGFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vLi4vc3RvcmUvYXV0aC1jb250ZXh0XCJcbmltcG9ydCB1c2VSb3V0ZXIgZnJvbSduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0F1dGhGb3JtLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgQXV0aEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcbiAgXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaXN3ZWVrUGFzc3dvcmQsIHNldGlzV2Vla1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzd2Vla1Bhc3N3b3JkTWVzLCBzZXRpc1dlZWtQYXNzd29yZE1lc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaW5wdXRFbWFpbFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBpbnB1dFBhc3N3b3JkUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IEF1dGhjdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcblxuICBjb25zdCBzd2l0Y2hBdXRoTW9kZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgc2V0SXNMb2dpbigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgfTtcbiAgbGV0IHVybDtcblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJEZXRhaWwoZGF0YSwgdXJsKSB7XG4gICAgYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgIFxuICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IFwiQXV0aGVudGljYXRpb24gZmFpbGVkXCI7XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmVycm9yICYmIGRhdGEuZXJyb3IubWVzc2FnZSkge1xuICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBkYXRhLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvblRpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICtkYXRhLmV4cGlyZXNJbiAqIDEwMDBcbiAgICAgICAgKTtcbiAgICAgICAgQXV0aGN0eC5sb2dpbihkYXRhLmlkVG9rZW4sIGV4cGlyYXRpb25UaW1lLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICByb3V0ZXIucmVwXG4gICAgICAgIFxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHNldGlzV2Vla1Bhc3N3b3JkKHRydWUpO1xuICAgICAgICBzZXRpc1dlZWtQYXNzd29yZE1lcyhlcnIubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGVudGVyZUVtYWlsID0gaW5wdXRFbWFpbFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IGlucHV0UGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZW1haWw6IGVudGVyZUVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IGVudGVyZWRQYXNzd29yZCxcbiAgICAgIHJldHVyblNlY3VyZVRva2VuOiB0cnVlLFxuICAgIH07XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIGlmIChpc0xvZ2luKSB7XG4gICAgICB1cmwgPVxuICAgICAgICBcImh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL3YxL2FjY291bnRzOnNpZ25JbldpdGhQYXNzd29yZD9rZXk9QUl6YVN5REw5LXJhekdvMUhNWFpZdExWQUlTVWdJYi0tWHNCNFlRXCI7XG4gICAgICBmZXRjaFVzZXJEZXRhaWwoZGF0YSwgdXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID1cbiAgICAgICAgXCJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS92MS9hY2NvdW50czpzaWduVXA/a2V5PUFJemFTeURMOS1yYXpHbzFITVhaWXRMVkFJU1VnSWItLVhzQjRZUVwiO1xuICAgICAgZmV0Y2hVc2VyRGV0YWlsKGRhdGEsIHVybCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGh9PlxuICAgICAgPGgxPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJTaWduIFVwXCJ9PC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPllvdXIgRW1haWw8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcmVxdWlyZWQgcmVmPXtpbnB1dEVtYWlsUmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPllvdXIgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHJlZj17aW5wdXRQYXNzd29yZFJlZn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtpc3dlZWtQYXNzd29yZCAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuaW52YWxpZH0+e2lzd2Vla1Bhc3N3b3JkTWVzfTwvcD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG4gICAgICAgICAgeyFpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgPGJ1dHRvbj57aXNMb2dpbiA/IFwiTG9naW5cIiA6IFwiQ3JlYXRlIEFjY291bnRcIn08L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPHA+TG9hZGluZy4uLjwvcD59XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50b2dnbGV9XG4gICAgICAgICAgICBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzTG9naW4gPyBcIkNyZWF0ZSBuZXcgYWNjb3VudFwiIDogXCJMb2dpbiB3aXRoIGV4aXN0aW5nIGFjY291bnRcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9