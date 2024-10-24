/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLIENT: () => (/* binding */ CLIENT),
/* harmony export */   MESSAGES: () => (/* binding */ MESSAGES),
/* harmony export */   SERVER: () => (/* binding */ SERVER)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SERVER = {
  AUTH_MISSING: 'auth-missing',
  AUTH_INSUFFICIENT: 'auth-insufficient',
  REQUIRED_USERNAME: 'required-username',
  REQUIRED_MESSAGE: 'required-message'
};
var CLIENT = {
  NETWORK_ERROR: 'networkError',
  NO_SESSION: 'noSession'
};
var MESSAGES = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, CLIENT.NETWORK_ERROR, 'Network Error. Please try again'), SERVER.AUTH_INSUFFICIENT, 'Your username/password combination does not match any of the records, please try again.'), SERVER.REQUIRED_USERNAME, 'Please enter a valid (letters and/or numbers) username'), SERVER.REQUIRED_MESSAGE, 'Please enter the message you want to send'), CLIENT.NO_SESSION, 'Please login your account'), "default", 'Something went wrong. Please try again');

/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLoginListener: () => (/* binding */ addLoginListener),
/* harmony export */   addLogoutListener: () => (/* binding */ addLogoutListener),
/* harmony export */   addPostMessageListener: () => (/* binding */ addPostMessageListener)
/* harmony export */ });
/* harmony import */ var _services_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.js */ "./src/services.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.js */ "./src/state.js");
/* harmony import */ var _sessionManagement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sessionManagement.js */ "./src/sessionManagement.js");




function addLoginListener(_ref) {
  var appEl = _ref.appEl,
    chatEl = _ref.chatEl,
    outGoingEl = _ref.outGoingEl;
  appEl.addEventListener("submit", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("login-form")) {
      var usernameInput = appEl.querySelector(".login-username");
      var username = usernameInput.value;
      usernameInput.value = '';
      (0,_state_js__WEBPACK_IMPORTED_MODULE_2__.waitOnLogin)();
      (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderApp)({
        appEl: appEl,
        state: _state_js__WEBPACK_IMPORTED_MODULE_2__.state
      });
      (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchLogin)(username).then(function (users) {
        (0,_state_js__WEBPACK_IMPORTED_MODULE_2__.login)(username);
        (0,_state_js__WEBPACK_IMPORTED_MODULE_2__.setLoginUsers)(users);
        (0,_state_js__WEBPACK_IMPORTED_MODULE_2__.waitOnChat)();
        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderApp)({
          appEl: appEl,
          state: _state_js__WEBPACK_IMPORTED_MODULE_2__.state
        });
        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderChat)({
          chatEl: chatEl,
          state: _state_js__WEBPACK_IMPORTED_MODULE_2__.state
        });
        return (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchMessages)();
      }).then(function (messages) {
        (0,_state_js__WEBPACK_IMPORTED_MODULE_2__.setMessages)(messages);
        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderApp)({
          appEl: appEl,
          state: _state_js__WEBPACK_IMPORTED_MODULE_2__.state
        });
        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderChat)({
          chatEl: chatEl,
          state: _state_js__WEBPACK_IMPORTED_MODULE_2__.state
        });
        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderOutGoing)({
          outGoingEl: outGoingEl,
          state: _state_js__WEBPACK_IMPORTED_MODULE_2__.state
        });
        (0,_sessionManagement_js__WEBPACK_IMPORTED_MODULE_3__.pollData)({
          appEl: appEl,
          chatEl: chatEl,
          outGoingEl: outGoingEl,
          state: _state_js__WEBPACK_IMPORTED_MODULE_2__.state
        });
      })["catch"](function (err) {
        (0,_state_js__WEBPACK_IMPORTED_MODULE_2__.setError)(err.error);
        (0,_state_js__WEBPACK_IMPORTED_MODULE_2__.logout)();
        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderApp)({
          appEl: appEl,
          state: _state_js__WEBPACK_IMPORTED_MODULE_2__.state
        });
      });
    }
  });
}
function addLogoutListener(_ref2) {
  var appEl = _ref2.appEl,
    chatEl = _ref2.chatEl,
    outGoingEl = _ref2.outGoingEl;
  appEl.addEventListener("submit", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("logout-form")) {
      (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchLogout)().then(function () {
        (0,_state_js__WEBPACK_IMPORTED_MODULE_2__.logout)();
      })["catch"](function (err) {
        (0,_state_js__WEBPACK_IMPORTED_MODULE_2__.setError)(err.error);
        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderApp)({
          appEl: appEl,
          state: _state_js__WEBPACK_IMPORTED_MODULE_2__.state
        });
      })["finally"](function () {
        (0,_sessionManagement_js__WEBPACK_IMPORTED_MODULE_3__.checkForSession)({
          appEl: appEl,
          chatEl: chatEl,
          outGoingEl: outGoingEl
        });
      });
    }
  });
}
function addPostMessageListener(_ref3) {
  var appEl = _ref3.appEl,
    chatEl = _ref3.chatEl,
    outGoingEl = _ref3.outGoingEl;
  outGoingEl.addEventListener("submit", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("chat-form")) {
      var messageInput = outGoingEl.querySelector(".message");
      var message = messageInput.value;
      messageInput.value = '';
      (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchPostMessage)(message).then(function (messages) {
        (0,_state_js__WEBPACK_IMPORTED_MODULE_2__.setMessages)(messages);
        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderChat)({
          chatEl: chatEl,
          state: _state_js__WEBPACK_IMPORTED_MODULE_2__.state
        });
      })["catch"](function (err) {
        (0,_state_js__WEBPACK_IMPORTED_MODULE_2__.setError)(err.error);
        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderApp)({
          appEl: appEl,
          state: _state_js__WEBPACK_IMPORTED_MODULE_2__.state
        });
      });
    }
  });
}

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderApp: () => (/* binding */ renderApp),
/* harmony export */   renderChat: () => (/* binding */ renderChat),
/* harmony export */   renderOutGoing: () => (/* binding */ renderOutGoing)
/* harmony export */ });
function renderApp(_ref) {
  var appEl = _ref.appEl,
    state = _ref.state;
  var html = "\n    ".concat(getErrorHtml(state), "\n    <div class=\"login-info\">\n    ").concat(getLoginHtml(state), "\n    ").concat(getLogoutHtml(state), "\n    </div>\n    ");
  appEl.innerHTML = html;
}
function renderChat(_ref2) {
  var chatEl = _ref2.chatEl,
    state = _ref2.state;
  var html = "\n        ".concat(getLoadingHtml(state), "\n        ").concat(getUserList(state), "\n        ").concat(getMessageList(state), "\n        ");
  chatEl.innerHTML = html;
}
function renderOutGoing(_ref3) {
  var outGoingEl = _ref3.outGoingEl,
    state = _ref3.state;
  var html = "\n    ".concat(getOutgoingHtml(state), "\n    ");
  outGoingEl.innerHTML = html;
}
function getErrorHtml(state) {
  if (!state || !state.error) {
    return "";
  }
  return "\n      <div class=\"error\">".concat(state.error, "</div>\n  ");
}
function getLoadingHtml(state) {
  if (!state.isChatPending) {
    return "";
  }
  return "\n    <div class=\"waiting\">Loading Chat...</div>\n  ";
}
function getLoginHtml(state) {
  if (state.isLoginPending) {
    return "\n      <div class=\"waiting\">Loading user...</div>\n    ";
  }
  if (state.isLoggedIn) {
    return "<div class=\"login-user\">".concat(state.username, "</div>");
  }
  return "\n    <div class=\"login\">\n        <form class=\"login-form\" action=\"#/login\">\n            <label class=\"form-label\">\n                <span>Username:</span>\n                <input class=\"login-username\" name=\"username\"/>\n            </label>\n            <button type=\"submit\" class=\"form-btn\">Login</button>\n        </form>\n    </div>\n    ";
}
function getLogoutHtml(state) {
  if (!state.isLoggedIn) {
    return "";
  }
  return "\n    <div class=\"logout\">\n        <form class=\"logout-form\" action=\"#/logout\">\n            <button type=\"submit\" class=\"logout-btn\">Logout</button>\n        </form>\n    </div>\n    ";
}
function getOutgoingHtml(state) {
  if (!state.isLoggedIn) {
    return "";
  }
  return "\n    <div class=\"outgoing\">\n        <form class=\"chat-form\" action=\"/chat\" method=\"POST\">\n            <input class=\"message\" name=\"message\" value=\"\" placeholder=\"Enter message to send\"/>\n            <button type=\"submit\">Send</button>\n        </form>\n    </div>\n    ";
}
function getMessageList(state) {
  if (!state.isLoggedIn) {
    return "";
  }
  if (state.isLoginPending) {
    return "\n    <div class=\"waiting\">Loading Messages...</div>\n  ";
  }
  var messages = state.messages;
  if (!messages) {
    return "";
  }
  return "<ol class=\"messages\">\n    <h1>Messages</h2>\n    " + messages.map(function (message) {
    return "\n        <li>\n          <div class=\"message\">\n            <div class=\"sender-info\">\n                <img class=\"avatar\" alt=\"avatar of ".concat(message.sender, "\" src=\"header.png\"/>\n                <span class=\"username\">").concat(message.sender, "</span>\n            </div>\n            <p class=\"message-text\">").concat(message.text, "</p>\n          </div>\n        </li>\n      ");
  }).join("") + "</ol>";
}
function getUserList(state) {
  if (!state.isLoggedIn) {
    return "";
  }
  return "\n    <ul class=\"users\">\n    <h1>Current Login Users</h2>\n    " + Object.values(state.users).map(function (user) {
    return "\n            <li>\n                <div class=\"user\">\n                  <img class=\"avatar\" alt=\"avatar of ".concat(user, "\" src=\"header.png\"/>\n                  <span class=\"username\">").concat(user, "</span>\n                </div>\n            </li>\n            ");
  }).join("") + "</ul>";
}

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchLogin: () => (/* binding */ fetchLogin),
/* harmony export */   fetchLoginUsers: () => (/* binding */ fetchLoginUsers),
/* harmony export */   fetchLogout: () => (/* binding */ fetchLogout),
/* harmony export */   fetchMessages: () => (/* binding */ fetchMessages),
/* harmony export */   fetchPostMessage: () => (/* binding */ fetchPostMessage),
/* harmony export */   fetchSession: () => (/* binding */ fetchSession)
/* harmony export */ });
function fetchLogin(username) {
  return fetch("/api/v1/session", {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json"
    }),
    body: JSON.stringify({
      username: username
    })
  })["catch"](function (err) {
    return Promise.reject({
      error: "network-error"
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function fetchLogout() {
  return fetch("/api/v1/session", {
    method: "DELETE"
  })["catch"](function (err) {
    return Promise.reject({
      error: "network-error"
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}
function fetchSession() {
  return fetch("/api/v1/session", {
    method: "GET"
  })["catch"](function () {
    return Promise.reject({
      error: "network-error"
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchLoginUsers() {
  return fetch("/api/v1/users", {
    method: "GET"
  })["catch"](function (err) {
    return Promise.reject({
      error: "network-error"
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return [Promise.reject(err)];
    });
  });
}
function fetchMessages() {
  return fetch("/api/v1/messages", {
    method: "GET"
  })["catch"](function (err) {
    return Promise.reject({
      error: "network-error"
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return [Promise.reject(err)];
    });
  });
}
function fetchPostMessage(message) {
  return fetch("/api/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      message: message
    })
  })["catch"](function (err) {
    return Promise.reject({
      error: "network-error"
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  });
}

/***/ }),

/***/ "./src/sessionManagement.js":
/*!**********************************!*\
  !*** ./src/sessionManagement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkForSession: () => (/* binding */ checkForSession),
/* harmony export */   pollData: () => (/* binding */ pollData)
/* harmony export */ });
/* harmony import */ var _services_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.js */ "./src/services.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ "./src/state.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");




function checkForSession(_ref) {
  var appEl = _ref.appEl,
    chatEl = _ref.chatEl,
    outGoingEl = _ref.outGoingEl;
  (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderApp)({
    appEl: appEl,
    state: _state_js__WEBPACK_IMPORTED_MODULE_1__.state
  });
  (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderChat)({
    chatEl: chatEl,
    state: _state_js__WEBPACK_IMPORTED_MODULE_1__.state
  });
  (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderOutGoing)({
    outGoingEl: outGoingEl,
    state: _state_js__WEBPACK_IMPORTED_MODULE_1__.state
  });
  (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchSession)().then(function (session) {
    (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.waitOnLogin)();
    (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.login)(session.username);
    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderApp)({
      appEl: appEl,
      state: _state_js__WEBPACK_IMPORTED_MODULE_1__.state
    });
    return (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchLoginUsers)();
  }).then(function (users) {
    (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setLoginUsers)(users);
    (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.waitOnChat)();
    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderApp)({
      appEl: appEl,
      state: _state_js__WEBPACK_IMPORTED_MODULE_1__.state
    });
    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderChat)({
      chatEl: chatEl,
      state: _state_js__WEBPACK_IMPORTED_MODULE_1__.state
    });
    return (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchMessages)();
  }).then(function (messages) {
    (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setMessages)(messages);
    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderApp)({
      appEl: appEl,
      state: _state_js__WEBPACK_IMPORTED_MODULE_1__.state
    });
    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderChat)({
      chatEl: chatEl,
      state: _state_js__WEBPACK_IMPORTED_MODULE_1__.state
    });
    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderOutGoing)({
      outGoingEl: outGoingEl,
      state: _state_js__WEBPACK_IMPORTED_MODULE_1__.state
    });
    pollData({
      appEl: appEl,
      chatEl: chatEl,
      outGoingEl: outGoingEl
    });
  })["catch"](function (err) {
    if ((err === null || err === void 0 ? void 0 : err.error) === _constants_js__WEBPACK_IMPORTED_MODULE_3__.SERVER.AUTH_MISSING) {
      (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setError)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.CLIENT.NO_SESSION);
    } else {
      (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setError)(err === null || err === void 0 ? void 0 : err.error);
    }
    (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.logout)();
    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderApp)({
      appEl: appEl,
      state: _state_js__WEBPACK_IMPORTED_MODULE_1__.state
    });
  });
}
function pollData(_ref2) {
  var appEl = _ref2.appEl,
    chatEl = _ref2.chatEl,
    outGoingEl = _ref2.outGoingEl;
  if (!_state_js__WEBPACK_IMPORTED_MODULE_1__.state.isLoggedIn) {
    return;
  }
  (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchLoginUsers)().then(function (users) {
    (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setLoginUsers)(users);
    return (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchMessages)();
  }).then(function (messages) {
    (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setMessages)(messages);
    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderChat)({
      chatEl: chatEl,
      state: _state_js__WEBPACK_IMPORTED_MODULE_1__.state
    });
  })["catch"](function (err) {
    (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.setError)(err === null || err === void 0 ? void 0 : err.error);
    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderApp)({
      appEl: appEl,
      state: _state_js__WEBPACK_IMPORTED_MODULE_1__.state
    });
  })["finally"](function () {
    setTimeout(function () {
      return pollData({
        appEl: appEl,
        chatEl: chatEl,
        outGoingEl: outGoingEl
      });
    }, 5000);
  });
}

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   setError: () => (/* binding */ setError),
/* harmony export */   setLoginUsers: () => (/* binding */ setLoginUsers),
/* harmony export */   setMessages: () => (/* binding */ setMessages),
/* harmony export */   state: () => (/* binding */ state),
/* harmony export */   waitOnChat: () => (/* binding */ waitOnChat),
/* harmony export */   waitOnLogin: () => (/* binding */ waitOnLogin)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");

var state = {
  isLoggedIn: false,
  isLoginPending: false,
  isChatPending: false,
  username: "",
  error: "",
  users: {},
  messages: []
};
function waitOnLogin() {
  updateState({
    isLoginPending: true,
    error: ''
  });
}
function waitOnChat() {
  updateState({
    isChatPending: true,
    error: ''
  });
}
function login(username) {
  updateState({
    isLoggedIn: true,
    username: username,
    isLoginPending: false,
    error: ''
  });
}
function logout() {
  updateState({
    isLoggedIn: false,
    username: '',
    users: {},
    messages: []
  });
}
function setLoginUsers(users) {
  updateState({
    users: users,
    isChatPending: false,
    error: ''
  });
}
function setMessages(messages) {
  updateState({
    messages: messages,
    isChatPending: false,
    error: ''
  });
}
function setError(error) {
  updateState({
    error: _constants_js__WEBPACK_IMPORTED_MODULE_0__.MESSAGES[error] || _constants_js__WEBPACK_IMPORTED_MODULE_0__.MESSAGES["default"],
    isLoginPending: false,
    isChatPending: false
  });
}
function updateState(updates) {
  Object.keys(updates).forEach(function (key) {
    state[key] = updates[key];
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners.js */ "./src/listeners.js");
/* harmony import */ var _sessionManagement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sessionManagement.js */ "./src/sessionManagement.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.js */ "./src/state.js");




var appEl = document.querySelector("#app");
var chatEl = document.querySelector("#chat");
var outGoingEl = document.querySelector("#outgoing");
(0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderApp)({
  appEl: appEl,
  state: _state_js__WEBPACK_IMPORTED_MODULE_3__.state
});
(0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderChat)({
  chatEl: chatEl,
  state: _state_js__WEBPACK_IMPORTED_MODULE_3__.state
});
(0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderOutGoing)({
  outGoingEl: outGoingEl,
  state: _state_js__WEBPACK_IMPORTED_MODULE_3__.state
});
(0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.addLoginListener)({
  appEl: appEl,
  chatEl: chatEl,
  outGoingEl: outGoingEl
});
(0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.addLogoutListener)({
  appEl: appEl,
  chatEl: chatEl,
  outGoingEl: outGoingEl
});
(0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.addPostMessageListener)({
  appEl: appEl,
  chatEl: chatEl,
  outGoingEl: outGoingEl
});
(0,_sessionManagement_js__WEBPACK_IMPORTED_MODULE_2__.checkForSession)({
  appEl: appEl,
  chatEl: chatEl,
  outGoingEl: outGoingEl
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map