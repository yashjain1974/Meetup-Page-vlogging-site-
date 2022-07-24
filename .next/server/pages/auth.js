module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Auth/AuthForm.js":
/*!*************************************!*\
  !*** ./components/Auth/AuthForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_auth_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/auth-context */ "./store/auth-context.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/LoadingSpinner */ "./components/ui/LoadingSpinner.js");
/* harmony import */ var _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthForm.module.css */ "./components/Auth/AuthForm.module.css");
/* harmony import */ var _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\components\\Auth\\AuthForm.js";






const AuthForm = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: isLogin,
    1: setIsLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: isweekPassword,
    1: setisWeekPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isweekPasswordMes,
    1: setisWeekPasswordMes
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const inputEmailRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const inputPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const Authctx = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_auth_context__WEBPACK_IMPORTED_MODULE_2__["default"]);

  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };

  let url;

  async function fetchUserDetail(data, url) {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then(data => {
          let errorMessage = "Authentication failed";

          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
            setIsLoading(false);
            throw new Error(errorMessage);
          }
        });
      }
    }).then(data => {
      const expirationTime = new Date(new Date().getTime() + +data.expiresIn * 1000);
      Authctx.login(data.idToken, expirationTime.toISOString());
      router.replace('/');
      setIsLoading(false);
    }).catch(err => {
      setisWeekPassword(true);
      setisWeekPasswordMes(err.message);
    });
  }

  const submitHandler = event => {
    event.preventDefault();
    const entereEmail = inputEmailRef.current.value;
    const enteredPassword = inputPasswordRef.current.value;
    const data = {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.auth,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: isLogin ? "Login" : "Sign Up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: submitHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "Your Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          id: "email",
          required: true,
          ref: inputEmailRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Your Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          id: "password",
          required: true,
          ref: inputPasswordRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined), isweekPassword && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.invalid,
          children: isweekPasswordMes
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.actions,
        children: [!isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: isLogin ? "Login" : "Create Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }, undefined), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "loading",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 50
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.toggle,
          onClick: switchAuthModeHandler,
          children: isLogin ? "Create new account" : "Login with existing account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthForm);

/***/ }),

/***/ "./components/Auth/AuthForm.module.css":
/*!*********************************************!*\
  !*** ./components/Auth/AuthForm.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"auth": "AuthForm_auth__1ymmO",
	"control": "AuthForm_control__2uLXM",
	"actions": "AuthForm_actions__3G4Sd",
	"toggle": "AuthForm_toggle__3htil",
	"invalid": "AuthForm_invalid__3Dbwg"
};


/***/ }),

/***/ "./components/ui/LoadingSpinner.js":
/*!*****************************************!*\
  !*** ./components/ui/LoadingSpinner.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingSpinner.module.css */ "./components/ui/LoadingSpinner.module.css");
/* harmony import */ var _LoadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LoadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\components\\ui\\LoadingSpinner.js";


const LoadingSpinner = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _LoadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.spinner
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingSpinner);

/***/ }),

/***/ "./components/ui/LoadingSpinner.module.css":
/*!*************************************************!*\
  !*** ./components/ui/LoadingSpinner.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"spinner": "LoadingSpinner_spinner__2X7gV"
};


/***/ }),

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Auth_AuthForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Auth/AuthForm */ "./components/Auth/AuthForm.js");

var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\pages\\auth\\index.js";


const AuthPage = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Auth_AuthForm__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthPage);

/***/ }),

/***/ "./store/auth-context.js":
/*!*******************************!*\
  !*** ./store/auth-context.js ***!
  \*******************************/
/*! exports provided: AuthContextProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContextProvider", function() { return AuthContextProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\store\\auth-context.js";

const AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({
  token: "",
  isLoggedIn: false,
  login: token => {},
  logout: () => {}
});
let logoutTimer;

const calculateTime = expirationTime => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingTime = adjExpirationTime - currentTime;
  return remainingTime;
};

const retreiveToken = () => {
  if (false) {}
};

const AuthContextProvider = props => {
  const tokenData = retreiveToken();
  let initializeToken;

  if (tokenData) {
    initializeToken = tokenData.token;
  }

  const {
    0: token,
    1: setToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initializeToken);
  const userIsLoggedIn = !!token;
  const logOutHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const logInHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    const remainingDuration = calculateTime(expirationTime);
    logoutTimer = setTimeout(logOutHandler, remainingDuration);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logOutHandler, tokenData.duration);
    }
  }, [tokenData, logOutHandler]);
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logOutHandler
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: contextValue,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 7
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (AuthContext);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdXRoL0F1dGhGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXV0aC9BdXRoRm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvTG9hZGluZ1NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9Mb2FkaW5nU3Bpbm5lci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2F1dGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYXV0aC1jb250ZXh0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBdXRoRm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwidXNlU3RhdGUiLCJpc3dlZWtQYXNzd29yZCIsInNldGlzV2Vla1Bhc3N3b3JkIiwiaXN3ZWVrUGFzc3dvcmRNZXMiLCJzZXRpc1dlZWtQYXNzd29yZE1lcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlucHV0RW1haWxSZWYiLCJ1c2VSZWYiLCJpbnB1dFBhc3N3b3JkUmVmIiwiQXV0aGN0eCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInN3aXRjaEF1dGhNb2RlSGFuZGxlciIsInByZXZTdGF0ZSIsInVybCIsImZldGNoVXNlckRldGFpbCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsImpzb24iLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsIm1lc3NhZ2UiLCJFcnJvciIsImV4cGlyYXRpb25UaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJleHBpcmVzSW4iLCJsb2dpbiIsImlkVG9rZW4iLCJ0b0lTT1N0cmluZyIsInJlcGxhY2UiLCJjYXRjaCIsImVyciIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXJlRW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkUGFzc3dvcmQiLCJlbWFpbCIsInBhc3N3b3JkIiwicmV0dXJuU2VjdXJlVG9rZW4iLCJjbGFzc2VzIiwiYXV0aCIsImNvbnRyb2wiLCJpbnZhbGlkIiwiYWN0aW9ucyIsInRvZ2dsZSIsIkxvYWRpbmdTcGlubmVyIiwic3Bpbm5lciIsIkF1dGhQYWdlIiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidG9rZW4iLCJpc0xvZ2dlZEluIiwibG9nb3V0IiwibG9nb3V0VGltZXIiLCJjYWxjdWxhdGVUaW1lIiwiY3VycmVudFRpbWUiLCJhZGpFeHBpcmF0aW9uVGltZSIsInJlbWFpbmluZ1RpbWUiLCJyZXRyZWl2ZVRva2VuIiwiQXV0aENvbnRleHRQcm92aWRlciIsInByb3BzIiwidG9rZW5EYXRhIiwiaW5pdGlhbGl6ZVRva2VuIiwic2V0VG9rZW4iLCJ1c2VySXNMb2dnZWRJbiIsImxvZ091dEhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJjbGVhclRpbWVvdXQiLCJsb2dJbkhhbmRsZXIiLCJzZXRJdGVtIiwicmVtYWluaW5nRHVyYXRpb24iLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiZHVyYXRpb24iLCJjb250ZXh0VmFsdWUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFH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eURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBR2IsU0FBSCxFQUFhO0FBQ2JSLGlCQUFXLEdBQUdvQixVQUFVLENBQUNSLGFBQUQsRUFBZ0JKLFNBQVMsQ0FBQ2MsUUFBMUIsQ0FBeEI7QUFDQztBQUNGLEdBSlEsRUFJTixDQUFDZCxTQUFELEVBQVlJLGFBQVosQ0FKTSxDQUFUO0FBTUEsUUFBTVcsWUFBWSxHQUFHO0FBQ25CMUIsU0FBSyxFQUFFQSxLQURZO0FBRW5CQyxjQUFVLEVBQUVhLGNBRk87QUFHbkJ6QyxTQUFLLEVBQUUrQyxZQUhZO0FBSW5CbEIsVUFBTSxFQUFFYTtBQUpXLEdBQXJCO0FBTUEsc0JBQ0UscUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFVyxZQUE3QjtBQUFBLGNBQ0doQixLQUFLLENBQUNpQjtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBNUNJO0FBaURROUUsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUNyRkEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXV0aC9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gXCIuLi8uLi9zdG9yZS9hdXRoLWNvbnRleHRcIlxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20nbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gXCIuLi91aS9Mb2FkaW5nU3Bpbm5lclwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9BdXRoRm9ybS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IEF1dGhGb3JtID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XG4gIFxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzd2Vla1Bhc3N3b3JkLCBzZXRpc1dlZWtQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc3dlZWtQYXNzd29yZE1lcywgc2V0aXNXZWVrUGFzc3dvcmRNZXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGlucHV0RW1haWxSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgaW5wdXRQYXNzd29yZFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBBdXRoY3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbiAgY29uc3Qgc3dpdGNoQXV0aE1vZGVIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldElzTG9naW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH07XG4gIGxldCB1cmw7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyRGV0YWlsKGRhdGEsIHVybCkge1xuICAgIGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gXCJBdXRoZW50aWNhdGlvbiBmYWlsZWRcIjtcbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuZXJyb3IgJiYgZGF0YS5lcnJvci5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGRhdGEuZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGV4cGlyYXRpb25UaW1lID0gbmV3IERhdGUoXG4gICAgICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyArZGF0YS5leHBpcmVzSW4gKiAxMDAwXG4gICAgICAgICk7XG4gICAgICAgIEF1dGhjdHgubG9naW4oZGF0YS5pZFRva2VuLCBleHBpcmF0aW9uVGltZS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBzZXRpc1dlZWtQYXNzd29yZCh0cnVlKTtcbiAgICAgICAgc2V0aXNXZWVrUGFzc3dvcmRNZXMoZXJyLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBlbnRlcmVFbWFpbCA9IGlucHV0RW1haWxSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkUGFzc3dvcmQgPSBpbnB1dFBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGVtYWlsOiBlbnRlcmVFbWFpbCxcbiAgICAgIHBhc3N3b3JkOiBlbnRlcmVkUGFzc3dvcmQsXG4gICAgICByZXR1cm5TZWN1cmVUb2tlbjogdHJ1ZSxcbiAgICB9O1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBpZiAoaXNMb2dpbikge1xuICAgICAgXG4gICAgICB1cmwgPVxuICAgICAgICBcImh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL3YxL2FjY291bnRzOnNpZ25JbldpdGhQYXNzd29yZD9rZXk9QUl6YVN5QmFWZ2VLUTVfSlRrZXpIcGdpWS14QmFtMUhmUlU1TjZ3XCI7XG4gICAgICBmZXRjaFVzZXJEZXRhaWwoZGF0YSwgdXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID1cbiAgICAgICAgXCJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS92MS9hY2NvdW50czpzaWduVXA/a2V5PUFJemFTeUJhVmdlS1E1X0pUa2V6SHBnaVkteEJhbTFIZlJVNU42d1wiO1xuICAgICAgZmV0Y2hVc2VyRGV0YWlsKGRhdGEsIHVybCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGh9PlxuICAgICAgPGgxPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJTaWduIFVwXCJ9PC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPllvdXIgRW1haWw8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcmVxdWlyZWQgcmVmPXtpbnB1dEVtYWlsUmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPllvdXIgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHJlZj17aW5wdXRQYXNzd29yZFJlZn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtpc3dlZWtQYXNzd29yZCAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuaW52YWxpZH0+e2lzd2Vla1Bhc3N3b3JkTWVzfTwvcD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG4gICAgICAgICAgeyFpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgPGJ1dHRvbj57aXNMb2dpbiA/IFwiTG9naW5cIiA6IFwiQ3JlYXRlIEFjY291bnRcIn08L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+PExvYWRpbmdTcGlubmVyPjwvTG9hZGluZ1NwaW5uZXI+PC9kaXY+fVxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudG9nZ2xlfVxuICAgICAgICAgICAgb25DbGljaz17c3dpdGNoQXV0aE1vZGVIYW5kbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc0xvZ2luID8gXCJDcmVhdGUgbmV3IGFjY291bnRcIiA6IFwiTG9naW4gd2l0aCBleGlzdGluZyBhY2NvdW50XCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXV0aFwiOiBcIkF1dGhGb3JtX2F1dGhfXzF5bW1PXCIsXG5cdFwiY29udHJvbFwiOiBcIkF1dGhGb3JtX2NvbnRyb2xfXzJ1TFhNXCIsXG5cdFwiYWN0aW9uc1wiOiBcIkF1dGhGb3JtX2FjdGlvbnNfXzNHNFNkXCIsXG5cdFwidG9nZ2xlXCI6IFwiQXV0aEZvcm1fdG9nZ2xlX18zaHRpbFwiLFxuXHRcImludmFsaWRcIjogXCJBdXRoRm9ybV9pbnZhbGlkX18zRGJ3Z1wiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTG9hZGluZ1NwaW5uZXIubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgTG9hZGluZ1NwaW5uZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNwaW5uZXJ9PjwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTcGlubmVyO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzcGlubmVyXCI6IFwiTG9hZGluZ1NwaW5uZXJfc3Bpbm5lcl9fMlg3Z1ZcIlxufTtcbiIsImltcG9ydCBBdXRoRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BdXRoL0F1dGhGb3JtXCJcclxuXHJcbmNvbnN0IEF1dGhQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiA8QXV0aEZvcm0gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoUGFnZTtcclxuIiwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayx1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XHJcbiAgdG9rZW46IFwiXCIsXHJcbiAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgbG9naW46ICh0b2tlbikgPT4ge30sXHJcbiAgbG9nb3V0OiAoKSA9PiB7fSxcclxufSk7XHJcblxyXG5cclxubGV0IGxvZ291dFRpbWVyO1xyXG5jb25zdCBjYWxjdWxhdGVUaW1lID0gKGV4cGlyYXRpb25UaW1lKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgYWRqRXhwaXJhdGlvblRpbWUgPSBuZXcgRGF0ZShleHBpcmF0aW9uVGltZSkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgcmVtYWluaW5nVGltZSA9IGFkakV4cGlyYXRpb25UaW1lIC0gY3VycmVudFRpbWU7XHJcbiAgICByZXR1cm4gcmVtYWluaW5nVGltZTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IHJldHJlaXZlVG9rZW4gPSAoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGNvbnN0IHN0b3JlZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGNvbnN0IHN0b3JlZEV4cGlyYXRpb25UaW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleHBpcmF0aW9uVGltZVwiKTtcclxuICAgIFxyXG4gIFxyXG4gICAgY29uc3QgcmVtYWluaW5nUmV0cmVpdmVUaW1lID0gY2FsY3VsYXRlVGltZShzdG9yZWRFeHBpcmF0aW9uVGltZSk7XHJcbiAgICBpZiAocmVtYWluaW5nUmV0cmVpdmVUaW1lIDw9IDM2MDApIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJleHBpcmF0aW9uVGltZVwiKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0b2tlbjogc3RvcmVkVG9rZW4sXHJcbiAgICAgIGR1cmF0aW9uOiByZW1haW5pbmdSZXRyZWl2ZVRpbWUsXHJcbiAgICB9O1xyXG4gIH1cclxuICB9O1xyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgdG9rZW5EYXRhID0gcmV0cmVpdmVUb2tlbigpO1xyXG4gICAgbGV0IGluaXRpYWxpemVUb2tlbjtcclxuICAgIGlmICh0b2tlbkRhdGEpIHtcclxuICAgICAgaW5pdGlhbGl6ZVRva2VuID0gdG9rZW5EYXRhLnRva2VuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShpbml0aWFsaXplVG9rZW4pO1xyXG4gICAgY29uc3QgdXNlcklzTG9nZ2VkSW4gPSAhIXRva2VuO1xyXG4gICAgY29uc3QgbG9nT3V0SGFuZGxlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgc2V0VG9rZW4obnVsbCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZXhwaXJhdGlvblRpbWVcIik7XHJcbiAgICAgIFxyXG4gICAgICBpZiAobG9nb3V0VGltZXIpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQobG9nb3V0VGltZXIpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBsb2dJbkhhbmRsZXIgPSAodG9rZW4sIGV4cGlyYXRpb25UaW1lKSA9PiB7XHJcbiAgICAgIHNldFRva2VuKHRva2VuKTtcclxuICAgICAgXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4cGlyYXRpb25UaW1lXCIsIGV4cGlyYXRpb25UaW1lKTtcclxuICAgICAgY29uc3QgcmVtYWluaW5nRHVyYXRpb24gPSBjYWxjdWxhdGVUaW1lKGV4cGlyYXRpb25UaW1lKTtcclxuICAgICAgbG9nb3V0VGltZXIgPSBzZXRUaW1lb3V0KGxvZ091dEhhbmRsZXIsIHJlbWFpbmluZ0R1cmF0aW9uKTtcclxuICAgICBcclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZih0b2tlbkRhdGEpe1xyXG4gICAgICBsb2dvdXRUaW1lciA9IHNldFRpbWVvdXQobG9nT3V0SGFuZGxlciwgdG9rZW5EYXRhLmR1cmF0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfSwgW3Rva2VuRGF0YSwgbG9nT3V0SGFuZGxlcl0pO1xyXG4gIFxyXG4gICAgY29uc3QgY29udGV4dFZhbHVlID0ge1xyXG4gICAgICB0b2tlbjogdG9rZW4sXHJcbiAgICAgIGlzTG9nZ2VkSW46IHVzZXJJc0xvZ2dlZEluLFxyXG4gICAgICBsb2dpbjogbG9nSW5IYW5kbGVyLFxyXG4gICAgICBsb2dvdXQ6IGxvZ091dEhhbmRsZXIsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgXHJcblxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==