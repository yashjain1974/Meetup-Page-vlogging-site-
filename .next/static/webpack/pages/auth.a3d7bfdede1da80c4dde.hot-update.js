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
/* harmony import */ var _ui_LoadingSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/LoadingSpinner */ "./components/ui/LoadingSpinner.js");
/* harmony import */ var _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AuthForm.module.css */ "./components/Auth/AuthForm.module.css");
/* harmony import */ var _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\components\\Auth\\AuthForm.js",
    _this = undefined,
    _s = $RefreshSig$();







var AuthForm = function AuthForm() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

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
                router.replace('/');
                setIsLoading(false);
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
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBaVgeKQ5_JTkezHpgiY-xBam1HfRU5N6w";
      fetchUserDetail(data, url);
    } else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBaVgeKQ5_JTkezHpgiY-xBam1HfRU5N6w";
      fetchUserDetail(data, url);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.auth,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: isLogin ? "Login" : "Sign Up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: submitHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "Your Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "email",
          id: "email",
          required: true,
          ref: inputEmailRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Your Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "password",
          id: "password",
          required: true,
          ref: inputPasswordRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this), isweekPassword && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.invalid,
          children: isweekPasswordMes
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.actions,
        children: [!isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          children: isLogin ? "Login" : "Create Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "loading",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ui_LoadingSpinner__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 50
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          type: "button",
          className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.toggle,
          onClick: switchAuthModeHandler,
          children: isLogin ? "Create new account" : "Login with existing account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, _this);
};

_s(AuthForm, "s3+ni+qjURVLSyYN6mYdAAl3Gdw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL0F1dGhGb3JtLmpzIl0sIm5hbWVzIjpbIkF1dGhGb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsImlzd2Vla1Bhc3N3b3JkIiwic2V0aXNXZWVrUGFzc3dvcmQiLCJpc3dlZWtQYXNzd29yZE1lcyIsInNldGlzV2Vla1Bhc3N3b3JkTWVzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaW5wdXRFbWFpbFJlZiIsInVzZVJlZiIsImlucHV0UGFzc3dvcmRSZWYiLCJBdXRoY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0Iiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwicHJldlN0YXRlIiwidXJsIiwiZmV0Y2hVc2VyRGV0YWlsIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsImVycm9yTWVzc2FnZSIsImVycm9yIiwibWVzc2FnZSIsIkVycm9yIiwiZXhwaXJhdGlvblRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImV4cGlyZXNJbiIsImxvZ2luIiwiaWRUb2tlbiIsInRvSVNPU3RyaW5nIiwicmVwbGFjZSIsImVyciIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXJlRW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkUGFzc3dvcmQiLCJlbWFpbCIsInBhc3N3b3JkIiwicmV0dXJuU2VjdXJlVG9rZW4iLCJjbGFzc2VzIiwiYXV0aCIsImNvbnRyb2wiLCJpbnZhbGlkIiwiYWN0aW9ucyIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxR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QURGLGVBRUU7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLFlBQUUsRUFBQyxVQUZMO0FBR0Usa0JBQVEsTUFIVjtBQUlFLGFBQUcsRUFBRTVDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQVFHUixjQUFjLGlCQUNiO0FBQUcsbUJBQVMsRUFBRWtELDJEQUFPLENBQUNHLE9BQXRCO0FBQUEsb0JBQWdDbkQ7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQWlCRTtBQUFLLGlCQUFTLEVBQUVnRCwyREFBTyxDQUFDSSxPQUF4QjtBQUFBLG1CQUNHLENBQUNsRCxTQUFELGlCQUNDO0FBQUEsb0JBQVNOLE9BQU8sR0FBRyxPQUFILEdBQWE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixFQUlHTSxTQUFTLGlCQUFJO0FBQUssbUJBQVMsRUFBQyxTQUFmO0FBQUEsaUNBQXlCLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKaEIsZUFNRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsbUJBQVMsRUFBRThDLDJEQUFPLENBQUNLLE1BRnJCO0FBR0UsaUJBQU8sRUFBRTNDLHFCQUhYO0FBQUEsb0JBS0dkLE9BQU8sR0FBRyxvQkFBSCxHQUEwQjtBQUxwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFDRCxDQXBIRDs7R0FBTUosUTtVQUNTRSxxRDs7O0tBRFRGLFE7QUFzSFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGguYTNkN2JmZGVkZTFkYTgwYzRkZGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gXCIuLi8uLi9zdG9yZS9hdXRoLWNvbnRleHRcIlxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20nbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gXCIuLi91aS9Mb2FkaW5nU3Bpbm5lclwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9BdXRoRm9ybS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IEF1dGhGb3JtID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XG4gIFxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzd2Vla1Bhc3N3b3JkLCBzZXRpc1dlZWtQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc3dlZWtQYXNzd29yZE1lcywgc2V0aXNXZWVrUGFzc3dvcmRNZXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGlucHV0RW1haWxSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgaW5wdXRQYXNzd29yZFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBBdXRoY3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbiAgY29uc3Qgc3dpdGNoQXV0aE1vZGVIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldElzTG9naW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH07XG4gIGxldCB1cmw7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyRGV0YWlsKGRhdGEsIHVybCkge1xuICAgIGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gXCJBdXRoZW50aWNhdGlvbiBmYWlsZWRcIjtcbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuZXJyb3IgJiYgZGF0YS5lcnJvci5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGRhdGEuZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvblRpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICtkYXRhLmV4cGlyZXNJbiAqIDEwMDBcbiAgICAgICAgKTtcbiAgICAgICAgQXV0aGN0eC5sb2dpbihkYXRhLmlkVG9rZW4sIGV4cGlyYXRpb25UaW1lLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICByb3V0ZXIucmVwbGFjZSgnLycpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgXG4gICAgICAgIHNldGlzV2Vla1Bhc3N3b3JkKHRydWUpO1xuICAgICAgICBzZXRpc1dlZWtQYXNzd29yZE1lcyhlcnIubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGVudGVyZUVtYWlsID0gaW5wdXRFbWFpbFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IGlucHV0UGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZW1haWw6IGVudGVyZUVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IGVudGVyZWRQYXNzd29yZCxcbiAgICAgIHJldHVyblNlY3VyZVRva2VuOiB0cnVlLFxuICAgIH07XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIGlmIChpc0xvZ2luKSB7XG4gICAgICBcbiAgICAgIHVybCA9XG4gICAgICAgIFwiaHR0cHM6Ly9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb20vdjEvYWNjb3VudHM6c2lnbkluV2l0aFBhc3N3b3JkP2tleT1BSXphU3lCYVZnZUtRNV9KVGtlekhwZ2lZLXhCYW0xSGZSVTVONndcIjtcbiAgICAgIGZldGNoVXNlckRldGFpbChkYXRhLCB1cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPVxuICAgICAgICBcImh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL3YxL2FjY291bnRzOnNpZ25VcD9rZXk9QUl6YVN5QmFWZ2VLUTVfSlRrZXpIcGdpWS14QmFtMUhmUlU1TjZ3XCI7XG4gICAgICBmZXRjaFVzZXJEZXRhaWwoZGF0YSwgdXJsKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aH0+XG4gICAgICA8aDE+e2lzTG9naW4gPyBcIkxvZ2luXCIgOiBcIlNpZ24gVXBcIn08L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBFbWFpbDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiByZXF1aXJlZCByZWY9e2lucHV0RW1haWxSZWZ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+WW91ciBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcmVmPXtpbnB1dFBhc3N3b3JkUmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2lzd2Vla1Bhc3N3b3JkICYmIChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnZhbGlkfT57aXN3ZWVrUGFzc3dvcmRNZXN9PC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICB7IWlzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJDcmVhdGUgQWNjb3VudFwifTwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2lzTG9hZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj48TG9hZGluZ1NwaW5uZXI+PC9Mb2FkaW5nU3Bpbm5lcj48L2Rpdj59XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50b2dnbGV9XG4gICAgICAgICAgICBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzTG9naW4gPyBcIkNyZWF0ZSBuZXcgYWNjb3VudFwiIDogXCJMb2dpbiB3aXRoIGV4aXN0aW5nIGFjY291bnRcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9