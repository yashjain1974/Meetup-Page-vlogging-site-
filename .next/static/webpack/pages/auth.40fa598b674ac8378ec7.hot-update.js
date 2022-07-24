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
      lineNumber: 82,
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
          lineNumber: 85,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "email",
          id: "email",
          required: true,
          ref: inputEmailRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Your Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "password",
          id: "password",
          required: true,
          ref: inputPasswordRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this), isweekPassword && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.invalid,
          children: isweekPasswordMes
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.actions,
        children: [!isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          children: isLogin ? "Login" : "Create Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          type: "button",
          className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.toggle,
          onClick: switchAuthModeHandler,
          children: isLogin ? "Create new account" : "Login with existing account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
  }, _this);
};

_s(AuthForm, "LfLkgsFpUZ3XLXdigYQcGmhIjGA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL0F1dGhGb3JtLmpzIl0sIm5hbWVzIjpbIkF1dGhGb3JtIiwidXNlU3RhdGUiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsImlzd2Vla1Bhc3N3b3JkIiwic2V0aXNXZWVrUGFzc3dvcmQiLCJpc3dlZWtQYXNzd29yZE1lcyIsInNldGlzV2Vla1Bhc3N3b3JkTWVzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaW5wdXRFbWFpbFJlZiIsInVzZVJlZiIsImlucHV0UGFzc3dvcmRSZWYiLCJBdXRoY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0Iiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwicHJldlN0YXRlIiwidXJsIiwiZmV0Y2hVc2VyRGV0YWlsIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsImVycm9yTWVzc2FnZSIsImVycm9yIiwibWVzc2FnZSIsIkVycm9yIiwiZXhwaXJhdGlvblRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImV4cGlyZXNJbiIsImxvZ2luIiwiaWRUb2tlbiIsInRvSVNPU3RyaW5nIiwiZXJyIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVFbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRQYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXR1cm5TZWN1cmVUb2tlbiIsImNsYXNzZXMiLCJhdXRoIiwiY29udHJvbCIsImludmFsaWQiLCJhY3Rpb25zIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUVTQyxzREFBUSxDQUFD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LEVBUUdSLGNBQWMsaUJBQ2I7QUFBRyxtQkFBUyxFQUFFaUQsMkRBQU8sQ0FBQ0csT0FBdEI7QUFBQSxvQkFBZ0NsRDtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBaUJFO0FBQUssaUJBQVMsRUFBRStDLDJEQUFPLENBQUNJLE9BQXhCO0FBQUEsbUJBQ0csQ0FBQ2pELFNBQUQsaUJBQ0M7QUFBQSxvQkFBU04sT0FBTyxHQUFHLE9BQUgsR0FBYTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBSUdNLFNBQVMsaUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSmhCLGVBTUU7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFTLEVBQUU2QywyREFBTyxDQUFDSyxNQUZyQjtBQUdFLGlCQUFPLEVBQUUxQyxxQkFIWDtBQUFBLG9CQUtHZCxPQUFPLEdBQUcsb0JBQUgsR0FBMEI7QUFMcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQ0QsQ0E3R0Q7O0dBQU1GLFE7O0tBQUFBLFE7QUErR1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGguNDBmYTU5OGI2NzRhYzgzNzhlYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gXCIuLi8uLi9zdG9yZS9hdXRoLWNvbnRleHRcIlxuaW1wb3J0IHVzZVJvdXRlciBmcm9tJ25leHQvcm91dGVyJztcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQXV0aEZvcm0ubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBBdXRoRm9ybSA9ICgpID0+IHtcbiAgXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaXN3ZWVrUGFzc3dvcmQsIHNldGlzV2Vla1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzd2Vla1Bhc3N3b3JkTWVzLCBzZXRpc1dlZWtQYXNzd29yZE1lc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaW5wdXRFbWFpbFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBpbnB1dFBhc3N3b3JkUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IEF1dGhjdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcblxuICBjb25zdCBzd2l0Y2hBdXRoTW9kZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgc2V0SXNMb2dpbigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgfTtcbiAgbGV0IHVybDtcblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJEZXRhaWwoZGF0YSwgdXJsKSB7XG4gICAgYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgIFxuICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IFwiQXV0aGVudGljYXRpb24gZmFpbGVkXCI7XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmVycm9yICYmIGRhdGEuZXJyb3IubWVzc2FnZSkge1xuICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBkYXRhLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvblRpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICtkYXRhLmV4cGlyZXNJbiAqIDEwMDBcbiAgICAgICAgKTtcbiAgICAgICAgQXV0aGN0eC5sb2dpbihkYXRhLmlkVG9rZW4sIGV4cGlyYXRpb25UaW1lLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICBcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBzZXRpc1dlZWtQYXNzd29yZCh0cnVlKTtcbiAgICAgICAgc2V0aXNXZWVrUGFzc3dvcmRNZXMoZXJyLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBlbnRlcmVFbWFpbCA9IGlucHV0RW1haWxSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkUGFzc3dvcmQgPSBpbnB1dFBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGVtYWlsOiBlbnRlcmVFbWFpbCxcbiAgICAgIHBhc3N3b3JkOiBlbnRlcmVkUGFzc3dvcmQsXG4gICAgICByZXR1cm5TZWN1cmVUb2tlbjogdHJ1ZSxcbiAgICB9O1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBpZiAoaXNMb2dpbikge1xuICAgICAgdXJsID1cbiAgICAgICAgXCJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS92MS9hY2NvdW50czpzaWduSW5XaXRoUGFzc3dvcmQ/a2V5PUFJemFTeURMOS1yYXpHbzFITVhaWXRMVkFJU1VnSWItLVhzQjRZUVwiO1xuICAgICAgZmV0Y2hVc2VyRGV0YWlsKGRhdGEsIHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9XG4gICAgICAgIFwiaHR0cHM6Ly9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb20vdjEvYWNjb3VudHM6c2lnblVwP2tleT1BSXphU3lETDktcmF6R28xSE1YWll0TFZBSVNVZ0liLS1Yc0I0WVFcIjtcbiAgICAgIGZldGNoVXNlckRldGFpbChkYXRhLCB1cmwpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRofT5cbiAgICAgIDxoMT57aXNMb2dpbiA/IFwiTG9naW5cIiA6IFwiU2lnbiBVcFwifTwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Zb3VyIEVtYWlsPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHJlcXVpcmVkIHJlZj17aW5wdXRFbWFpbFJlZn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5Zb3VyIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICByZWY9e2lucHV0UGFzc3dvcmRSZWZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7aXN3ZWVrUGFzc3dvcmQgJiYgKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmludmFsaWR9Pntpc3dlZWtQYXNzd29yZE1lc308L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIHshaXNMb2FkaW5nICYmIChcbiAgICAgICAgICAgIDxidXR0b24+e2lzTG9naW4gPyBcIkxvZ2luXCIgOiBcIkNyZWF0ZSBBY2NvdW50XCJ9PC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7aXNMb2FkaW5nICYmIDxwPkxvYWRpbmcuLi48L3A+fVxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudG9nZ2xlfVxuICAgICAgICAgICAgb25DbGljaz17c3dpdGNoQXV0aE1vZGVIYW5kbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc0xvZ2luID8gXCJDcmVhdGUgbmV3IGFjY291bnRcIiA6IFwiTG9naW4gd2l0aCBleGlzdGluZyBhY2NvdW50XCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==