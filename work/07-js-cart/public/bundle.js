/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.js */ \"./src/products.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\nvar cart = [];\nvar productEl = document.querySelector('.product-page');\nproductEl.addEventListener('click', function (e) {\n  if (e.target.classList.contains('add-to-cart')) {\n    var id = e.target.dataset.id;\n    handleAddToCart(id);\n  } else if (e.target.classList.contains('view-cart-btn')) {\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderCart)(cart);\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.showCart)(cart);\n  }\n});\nvar cartEl = document.querySelector('.cart');\ncartEl.addEventListener('click', function (e) {\n  if (e.target.classList.contains('remove-btn')) {\n    var id = e.target.dataset.id;\n    updateQuantity(id, 0);\n  } else if (e.target.classList.contains('hide-cart-btn')) {\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.hideCart)();\n  } else if (e.target.classList.contains('checkout-btn')) {\n    clearCart();\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.hideCart)();\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderCart)(cart);\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderViewCartButton)(cart);\n  } else if (e.target.classList.contains('quantity')) {\n    var _id = parseInt(e.target.dataset.id, 10);\n    var newQuantity = parseInt(e.target.value, 10);\n    updateQuantity(_id, newQuantity);\n  }\n});\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(_products_js__WEBPACK_IMPORTED_MODULE_1__.products);\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderViewCartButton)(cart);\n});\nvar handleAddToCart = function handleAddToCart(product) {\n  addProductToCart(product);\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderCart)(cart);\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderViewCartButton)(cart);\n};\nvar addProductToCart = function addProductToCart(productId) {\n  var product = _products_js__WEBPACK_IMPORTED_MODULE_1__.products.find(function (p) {\n    return p.id == productId;\n  });\n  var existingProduct = cart.find(function (item) {\n    return item.id === product.id;\n  });\n  if (existingProduct) {\n    existingProduct.quantity += 1;\n  } else {\n    cart.push(_objectSpread(_objectSpread({}, product), {}, {\n      quantity: 1\n    }));\n  }\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderCart)(cart);\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderViewCartButton)(cart);\n};\nvar updateQuantity = function updateQuantity(productId, newQuantity) {\n  var productIndex = cart.findIndex(function (item) {\n    return item.id == productId;\n  });\n  if (productIndex !== -1) {\n    cart[productIndex].quantity = newQuantity;\n    if (cart[productIndex].quantity <= 0) {\n      cart.splice(productIndex, 1);\n    }\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderCart)(cart);\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderViewCartButton)(cart);\n  }\n};\nvar clearCart = function clearCart() {\n  cart = [];\n};\n\n//# sourceURL=webpack://07-js-cart/./src/app.js?");

/***/ }),

/***/ "./src/products.js":
/*!*************************!*\
  !*** ./src/products.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   products: () => (/* binding */ products)\n/* harmony export */ });\nvar products = [{\n  id: 1,\n  name: 'Fluffball',\n  price: 0.99,\n  image: 1\n}, {\n  id: 2,\n  name: 'Whiskers',\n  price: 3.14,\n  image: 2\n}, {\n  id: 3,\n  name: 'Paws',\n  price: 2.73,\n  image: 3\n}];\n\n//# sourceURL=webpack://07-js-cart/./src/products.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideCart: () => (/* binding */ hideCart),\n/* harmony export */   render: () => (/* binding */ render),\n/* harmony export */   renderCart: () => (/* binding */ renderCart),\n/* harmony export */   renderViewCartButton: () => (/* binding */ renderViewCartButton),\n/* harmony export */   showCart: () => (/* binding */ showCart)\n/* harmony export */ });\nvar render = function render(products) {\n  var productPageHtml = products.map(function (product) {\n    return \"\\n        <li>\\n            <img src=\\\"http://placekitten.com/150/150?image=\".concat(product.image, \"\\\" alt=\\\"\").concat(product.name, \"\\\">\\n            <h3>\").concat(product.name, \"</h3>\\n            <p>$\").concat(product.price.toFixed(2), \"</p>\\n            <button class=\\\"add-to-cart\\\" data-id=\\\"\").concat(product.id, \"\\\">Add to Cart</button>\\n        </li>\\n    \");\n  }).join('');\n  var appPage = \"\\n    <ul>\\n    \".concat(productPageHtml, \"\\n    </ul>\\n    <button class=\\\"view-cart-btn\\\">View Cart (0)</button>\\n    \");\n  document.querySelector('.product-page').innerHTML = appPage;\n};\nvar hideCart = function hideCart() {\n  var viewCartBtn = document.querySelector('.view-cart-btn');\n  var cart = document.querySelector('.cart');\n  cart.style.display = 'none';\n  viewCartBtn.style.display = 'block';\n};\nvar showCart = function showCart() {\n  var viewCartBtn = document.querySelector('.view-cart-btn');\n  var cart = document.querySelector('.cart');\n  cart.style.display = 'block';\n  viewCartBtn.style.display = 'none';\n};\nvar renderCart = function renderCart(cart) {\n  var cartPage = document.querySelector('.cart');\n  if (!cart.length) {\n    cartPage.innerHTML = '<p>Nothing in the cart</p>';\n    return;\n  }\n  var cartItemsHtml = cart.map(function (item) {\n    return \"\\n        <div class=\\\"cart-item\\\">\\n            <img src=\\\"http://placekitten.com/50/50?image=\".concat(item.image, \"\\\" alt=\\\"\").concat(item.name, \"\\\">\\n            <p>\").concat(item.name, \" - $\").concat(item.price.toFixed(2), \" x \\n                <input type=\\\"number\\\" value=\\\"\").concat(item.quantity, \"\\\" min=\\\"0\\\" class=\\\"quantity\\\" data-id=\\\"\").concat(item.id, \"\\\">\\n                = $\").concat((item.price * item.quantity).toFixed(2), \"\\n            </p>\\n            <button class=\\\"remove-btn\\\" data-id=\\\"\").concat(item.id, \"\\\">Remove</button>\\n        </div>\\n    \");\n  }).join('');\n  var totalCost = cart.reduce(function (total, item) {\n    return total + item.price * item.quantity;\n  }, 0);\n  cartPage.innerHTML = \"\\n        <h2>Cart</h2>\\n        \".concat(cartItemsHtml, \"\\n        <p>Total Cost: $\").concat(totalCost.toFixed(2), \"</p>\\n        <button class=\\\"hide-cart-btn\\\">Hide Cart</button>\\n        <button class=\\\"checkout-btn\\\">Checkout</button>\\n    \");\n};\nvar renderViewCartButton = function renderViewCartButton(cart) {\n  var viewCartBtn = document.querySelector('.view-cart-btn');\n  var totalItems = cart.reduce(function (acc, item) {\n    return acc + item.quantity;\n  }, 0);\n  viewCartBtn.textContent = \"View Cart (\".concat(totalItems, \")\");\n};\n\n\n//# sourceURL=webpack://07-js-cart/./src/render.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;