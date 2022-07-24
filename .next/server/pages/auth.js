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
      router.replace("/");
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
      lineNumber: 84,
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
          lineNumber: 87,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          id: "email",
          required: true,
          ref: inputEmailRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Your Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          id: "password",
          required: true,
          ref: inputPasswordRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, undefined), isweekPassword && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.invalid,
          children: isweekPasswordMes
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.actions,
        children: [!isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: isLogin ? "Login" : "Create Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, undefined), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "loading",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _AuthForm_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.toggle,
          onClick: switchAuthModeHandler,
          children: isLogin ? "Create new account" : "Login with existing account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\React Udemy\\Meetup page Nextjs\\pages\\auth\\index.js";




const AuthPage = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "V-Meet : Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Auth_AuthForm__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
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
    lineNumber: 73,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (AuthContext);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdXRoL0F1dGhGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXV0aC9BdXRoRm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvTG9hZGluZ1NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9Mb2FkaW5nU3Bpbm5lci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2F1dGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYXV0aC1jb250ZXh0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBdXRoRm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwidXNlU3RhdGUiLCJpc3dlZWtQYXNzd29yZCIsInNldGlzV2Vla1Bhc3N3b3JkIiwiaXN3ZWVrUGFzc3dvcmRNZXMiLCJzZXRpc1dlZWtQYXNzd29yZE1lcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlucHV0RW1haWxSZWYiLCJ1c2VSZWYiLCJpbnB1dFBhc3N3b3JkUmVmIiwiQXV0aGN0eCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInN3aXRjaEF1dGhNb2RlSGFuZGxlciIsInByZXZTdGF0ZSIsInVybCIsImZldGNoVXNlckRldGFpbCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsImpzb24iLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsIm1lc3NhZ2UiLCJFcnJvciIsImV4cGlyYXRpb25UaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJleHBpcmVzSW4iLCJsb2dpbiIsImlkVG9rZW4iLCJ0b0lTT1N0cmluZyIsInJlcGxhY2UiLCJjYXRjaCIsImVyciIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXJlRW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkUGFzc3dvcmQiLCJlbWFpbCIsInBhc3N3b3JkIiwicmV0dXJuU2VjdXJlVG9rZW4iLCJjbGFzc2VzIiwiYXV0aCIsImNvbnRyb2wiLCJpbnZhbGlkIiwiYWN0aW9ucyIsInRvZ2dsZSIsIkxvYWRpbmdTcGlubmVyIiwic3Bpbm5lciIsIkF1dGhQYWdlIiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidG9rZW4iLCJpc0xvZ2dlZEluIiwibG9nb3V0IiwibG9nb3V0VGltZXIiLCJjYWxjdWxhdGVUaW1lIiwiY3VycmVudFRpbWUiLCJhZGpFeHBpcmF0aW9uVGltZSIsInJlbWFpbmluZ1RpbWUiLCJyZXRyZWl2ZVRva2VuIiwiQXV0aENvbnRleHRQcm92aWRlciIsInByb3BzIiwidG9rZW5EYXRhIiwiaW5pdGlhbGl6ZVRva2VuIiwic2V0VG9rZW4iLCJ1c2VySXNMb2dnZWRJbiIsImxvZ091dEhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJjbGVhclRpbWVvdXQiLCJsb2dJbkhhbmRsZXIiLCJzZXRJdGVtIiwicmVtYWluaW5nRHVyYXRpb24iLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiZHVyYXRpb24iLCJjb250ZXh0VmFsdWUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtR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YixDQUFxQixPQUFyQixFQUE4QnJCLEtBQTlCO0FBQ0FpQixnQkFBWSxDQUFDSSxPQUFiLENBQXFCLGdCQUFyQixFQUF1Q3BELGNBQXZDO0FBQ0EsVUFBTXFELGlCQUFpQixHQUFHbEIsYUFBYSxDQUFDbkMsY0FBRCxDQUF2QztBQUNBa0MsZUFBVyxHQUFHb0IsVUFBVSxDQUFDUixhQUFELEVBQWdCTyxpQkFBaEIsQ0FBeEI7QUFDRCxHQVBEOztBQVFBRSx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJYixTQUFKLEVBQWU7QUFDYlIsaUJBQVcsR0FBR29CLFVBQVUsQ0FBQ1IsYUFBRCxFQUFnQkosU0FBUyxDQUFDYyxRQUExQixDQUF4QjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNkLFNBQUQsRUFBWUksYUFBWixDQUpNLENBQVQ7QUFNQSxRQUFNVyxZQUFZLEdBQUc7QUFDbkIxQixTQUFLLEVBQUVBLEtBRFk7QUFFbkJDLGNBQVUsRUFBRWEsY0FGTztBQUduQnpDLFNBQUssRUFBRStDLFlBSFk7QUFJbkJsQixVQUFNLEVBQUVhO0FBSlcsR0FBckI7QUFNQSxzQkFDRSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUVXLFlBQTdCO0FBQUEsY0FDR2hCLEtBQUssQ0FBQ2lCO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0EzQ007QUE2Q1E5RSwwRUFBZixFOzs7Ozs7Ozs7OztBQzlFQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hdXRoL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uLy4uL3N0b3JlL2F1dGgtY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSBcIi4uL3VpL0xvYWRpbmdTcGlubmVyXCI7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0F1dGhGb3JtLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgQXV0aEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaXN3ZWVrUGFzc3dvcmQsIHNldGlzV2Vla1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzd2Vla1Bhc3N3b3JkTWVzLCBzZXRpc1dlZWtQYXNzd29yZE1lc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaW5wdXRFbWFpbFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBpbnB1dFBhc3N3b3JkUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IEF1dGhjdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcblxuICBjb25zdCBzd2l0Y2hBdXRoTW9kZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgc2V0SXNMb2dpbigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgfTtcbiAgbGV0IHVybDtcblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJEZXRhaWwoZGF0YSwgdXJsKSB7XG4gICAgYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IFwiQXV0aGVudGljYXRpb24gZmFpbGVkXCI7XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmVycm9yICYmIGRhdGEuZXJyb3IubWVzc2FnZSkge1xuICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBkYXRhLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvblRpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICtkYXRhLmV4cGlyZXNJbiAqIDEwMDBcbiAgICAgICAgKTtcbiAgICAgICAgQXV0aGN0eC5sb2dpbihkYXRhLmlkVG9rZW4sIGV4cGlyYXRpb25UaW1lLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9cIik7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgc2V0aXNXZWVrUGFzc3dvcmQodHJ1ZSk7XG4gICAgICAgIHNldGlzV2Vla1Bhc3N3b3JkTWVzKGVyci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZW50ZXJlRW1haWwgPSBpbnB1dEVtYWlsUmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID0gaW5wdXRQYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBlbWFpbDogZW50ZXJlRW1haWwsXG4gICAgICBwYXNzd29yZDogZW50ZXJlZFBhc3N3b3JkLFxuICAgICAgcmV0dXJuU2VjdXJlVG9rZW46IHRydWUsXG4gICAgfTtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgaWYgKGlzTG9naW4pIHtcbiAgICAgIHVybCA9XG4gICAgICAgIFwiaHR0cHM6Ly9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb20vdjEvYWNjb3VudHM6c2lnbkluV2l0aFBhc3N3b3JkP2tleT1BSXphU3lCYVZnZUtRNV9KVGtlekhwZ2lZLXhCYW0xSGZSVTVONndcIjtcbiAgICAgIGZldGNoVXNlckRldGFpbChkYXRhLCB1cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPVxuICAgICAgICBcImh0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL3YxL2FjY291bnRzOnNpZ25VcD9rZXk9QUl6YVN5QmFWZ2VLUTVfSlRrZXpIcGdpWS14QmFtMUhmUlU1TjZ3XCI7XG4gICAgICBmZXRjaFVzZXJEZXRhaWwoZGF0YSwgdXJsKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aH0+XG4gICAgICA8aDE+e2lzTG9naW4gPyBcIkxvZ2luXCIgOiBcIlNpZ24gVXBcIn08L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBFbWFpbDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiByZXF1aXJlZCByZWY9e2lucHV0RW1haWxSZWZ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+WW91ciBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcmVmPXtpbnB1dFBhc3N3b3JkUmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2lzd2Vla1Bhc3N3b3JkICYmIChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnZhbGlkfT57aXN3ZWVrUGFzc3dvcmRNZXN9PC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICB7IWlzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJDcmVhdGUgQWNjb3VudFwifTwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgPExvYWRpbmdTcGlubmVyPjwvTG9hZGluZ1NwaW5uZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudG9nZ2xlfVxuICAgICAgICAgICAgb25DbGljaz17c3dpdGNoQXV0aE1vZGVIYW5kbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc0xvZ2luID8gXCJDcmVhdGUgbmV3IGFjY291bnRcIiA6IFwiTG9naW4gd2l0aCBleGlzdGluZyBhY2NvdW50XCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXV0aFwiOiBcIkF1dGhGb3JtX2F1dGhfXzF5bW1PXCIsXG5cdFwiY29udHJvbFwiOiBcIkF1dGhGb3JtX2NvbnRyb2xfXzJ1TFhNXCIsXG5cdFwiYWN0aW9uc1wiOiBcIkF1dGhGb3JtX2FjdGlvbnNfXzNHNFNkXCIsXG5cdFwidG9nZ2xlXCI6IFwiQXV0aEZvcm1fdG9nZ2xlX18zaHRpbFwiLFxuXHRcImludmFsaWRcIjogXCJBdXRoRm9ybV9pbnZhbGlkX18zRGJ3Z1wiXG59O1xuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTG9hZGluZ1NwaW5uZXIubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgTG9hZGluZ1NwaW5uZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNwaW5uZXJ9PjwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTcGlubmVyO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzcGlubmVyXCI6IFwiTG9hZGluZ1NwaW5uZXJfc3Bpbm5lcl9fMlg3Z1ZcIlxufTtcbiIsImltcG9ydCBBdXRoRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BdXRoL0F1dGhGb3JtXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQXV0aFBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlYtTWVldCA6IExvZ2luPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8QXV0aEZvcm0gLz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICB0b2tlbjogXCJcIixcclxuICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICBsb2dpbjogKHRva2VuKSA9PiB7fSxcclxuICBsb2dvdXQ6ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbmxldCBsb2dvdXRUaW1lcjtcclxuY29uc3QgY2FsY3VsYXRlVGltZSA9IChleHBpcmF0aW9uVGltZSkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgY29uc3QgYWRqRXhwaXJhdGlvblRpbWUgPSBuZXcgRGF0ZShleHBpcmF0aW9uVGltZSkuZ2V0VGltZSgpO1xyXG4gIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSBhZGpFeHBpcmF0aW9uVGltZSAtIGN1cnJlbnRUaW1lO1xyXG4gIHJldHVybiByZW1haW5pbmdUaW1lO1xyXG59O1xyXG5cclxuY29uc3QgcmV0cmVpdmVUb2tlbiA9ICgpID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY29uc3Qgc3RvcmVkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3Qgc3RvcmVkRXhwaXJhdGlvblRpbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4cGlyYXRpb25UaW1lXCIpO1xyXG5cclxuICAgIGNvbnN0IHJlbWFpbmluZ1JldHJlaXZlVGltZSA9IGNhbGN1bGF0ZVRpbWUoc3RvcmVkRXhwaXJhdGlvblRpbWUpO1xyXG4gICAgaWYgKHJlbWFpbmluZ1JldHJlaXZlVGltZSA8PSAzNjAwKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZXhwaXJhdGlvblRpbWVcIik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdG9rZW46IHN0b3JlZFRva2VuLFxyXG4gICAgICBkdXJhdGlvbjogcmVtYWluaW5nUmV0cmVpdmVUaW1lLFxyXG4gICAgfTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgdG9rZW5EYXRhID0gcmV0cmVpdmVUb2tlbigpO1xyXG4gIGxldCBpbml0aWFsaXplVG9rZW47XHJcbiAgaWYgKHRva2VuRGF0YSkge1xyXG4gICAgaW5pdGlhbGl6ZVRva2VuID0gdG9rZW5EYXRhLnRva2VuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShpbml0aWFsaXplVG9rZW4pO1xyXG4gIGNvbnN0IHVzZXJJc0xvZ2dlZEluID0gISF0b2tlbjtcclxuICBjb25zdCBsb2dPdXRIYW5kbGVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0VG9rZW4obnVsbCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJleHBpcmF0aW9uVGltZVwiKTtcclxuXHJcbiAgICBpZiAobG9nb3V0VGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KGxvZ291dFRpbWVyKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgY29uc3QgbG9nSW5IYW5kbGVyID0gKHRva2VuLCBleHBpcmF0aW9uVGltZSkgPT4ge1xyXG4gICAgc2V0VG9rZW4odG9rZW4pO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleHBpcmF0aW9uVGltZVwiLCBleHBpcmF0aW9uVGltZSk7XHJcbiAgICBjb25zdCByZW1haW5pbmdEdXJhdGlvbiA9IGNhbGN1bGF0ZVRpbWUoZXhwaXJhdGlvblRpbWUpO1xyXG4gICAgbG9nb3V0VGltZXIgPSBzZXRUaW1lb3V0KGxvZ091dEhhbmRsZXIsIHJlbWFpbmluZ0R1cmF0aW9uKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodG9rZW5EYXRhKSB7XHJcbiAgICAgIGxvZ291dFRpbWVyID0gc2V0VGltZW91dChsb2dPdXRIYW5kbGVyLCB0b2tlbkRhdGEuZHVyYXRpb24pO1xyXG4gICAgfVxyXG4gIH0sIFt0b2tlbkRhdGEsIGxvZ091dEhhbmRsZXJdKTtcclxuXHJcbiAgY29uc3QgY29udGV4dFZhbHVlID0ge1xyXG4gICAgdG9rZW46IHRva2VuLFxyXG4gICAgaXNMb2dnZWRJbjogdXNlcklzTG9nZ2VkSW4sXHJcbiAgICBsb2dpbjogbG9nSW5IYW5kbGVyLFxyXG4gICAgbG9nb3V0OiBsb2dPdXRIYW5kbGVyLFxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==