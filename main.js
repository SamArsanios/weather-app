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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: \\\"Roboto\\\", sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-image: linear-gradient(\\r\\n    to left bottom,\\r\\n    #391a68,\\r\\n    #372871,\\r\\n    #353579,\\r\\n    #35407f,\\r\\n    #374b85,\\r\\n    #2b5184,\\r\\n    #235782,\\r\\n    #225b7e,\\r\\n    #1d5a72,\\r\\n    #235865,\\r\\n    #2d5559,\\r\\n    #37514f\\r\\n  );\\r\\n  height: 100vh;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  height: 700px;\\r\\n  width: 800px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.weather-info-container {\\r\\n  height: 450px;\\r\\n  width: 500px;\\r\\n  backdrop-filter: blur(10px);\\r\\n  background-color: rgba(255, 255, 255, 0.25);\\r\\n  box-shadow: 1px 1px 15px -10px rgba(0, 0, 0, 0.75);\\r\\n  border: 2px solid transparent;\\r\\n  background-clip: padding-box;\\r\\n  border-radius: 1.5em;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  position: relative;\\r\\n  color: white;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.city-search-result {\\r\\n  height: 72%;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.weather-message {\\r\\n  font-size: 2rem;\\r\\n  width: 80%;\\r\\n  text-align: center;\\r\\n  height: 60%;\\r\\n}\\r\\n\\r\\n.city-weather {\\r\\n  height: 100%;\\r\\n  width: 60%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: flex-start;\\r\\n  animation: fadein 1.1s ease;\\r\\n}\\r\\n\\r\\n.temperature-container {\\r\\n  font-size: 3em;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  height: 100px;\\r\\n}\\r\\n\\r\\n.weather-details {\\r\\n  margin-top: 20px;\\r\\n  column-count: 2;\\r\\n  column-gap: 2em;\\r\\n  backdrop-filter: blur(10px);\\r\\n  background-color: rgba(160, 160, 160, 0.25);\\r\\n  box-shadow: 1px 1px 15px -10px rgba(0, 0, 0, 0.75);\\r\\n  border: 2px solid transparent;\\r\\n  background-clip: padding-box;\\r\\n  padding: 10px 25px;\\r\\n  border-radius: 1.2em;\\r\\n}\\r\\n\\r\\n.weather-details p {\\r\\n  font-size: 0.8rem;\\r\\n}\\r\\n\\r\\n.degree-switch {\\r\\n  display: flex;\\r\\n  margin-top: 20px;\\r\\n  height: 30px;\\r\\n  width: 60px;\\r\\n}\\r\\n\\r\\n.degree-select {\\r\\n  backdrop-filter: blur(10px);\\r\\n  background-color: rgba(180, 180, 180, 0.25);\\r\\n  box-shadow: 1px 1px 15px -10px rgba(0, 0, 0, 0.75);\\r\\n  border: 2px solid transparent;\\r\\n  background-clip: padding-box;\\r\\n  flex: 1;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.degree-select-active {\\r\\n  background-color: rgba(100, 100, 100, 0.5);\\r\\n}\\r\\n\\r\\n.celcius {\\r\\n  border-top-left-radius: 0.5em;\\r\\n  border-bottom-left-radius: 0.5em;\\r\\n}\\r\\n\\r\\n.fahrenheit {\\r\\n  border-top-right-radius: 0.5em;\\r\\n  border-bottom-right-radius: 0.5em;\\r\\n}\\r\\n\\r\\n.city-search-bar {\\r\\n  height: 35px;\\r\\n  display: flex;\\r\\n  max-width: 250px;\\r\\n  border-radius: 4px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  font-size: 14px;\\r\\n  padding: 0 20px 0 40px;\\r\\n  box-shadow: 0 0 0 2px rgb(134 140 160 / 2%);\\r\\n  background-color: rgba(200, 200, 200, 0.2);\\r\\n  /* background-image: url(\\\"../dist/images/search-icon-white-one-md.png\\\"); */\\r\\n  background-size: 14px;\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: 16px 48%;\\r\\n  color: white;\\r\\n  outline: none;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\ninput::placeholder {\\r\\n  color: white;\\r\\n  font-weight: 400;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather-app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/configuration.js":
/*!******************************!*\
  !*** ./src/configuration.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KEY\": () => (/* binding */ KEY),\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"REST_COUNTRY_URL\": () => (/* binding */ REST_COUNTRY_URL),\n/* harmony export */   \"UNIT\": () => (/* binding */ UNIT),\n/* harmony export */   \"TIMEOUT_SEC\": () => (/* binding */ TIMEOUT_SEC),\n/* harmony export */   \"AJAX\": () => (/* binding */ AJAX)\n/* harmony export */ });\nconst KEY = \"7f84933d96924f1148daa50fdda85e85\";\r\nconst API_URL = \"https://api.openweathermap.org/data/2.5/weather?\";\r\nconst REST_COUNTRY_URL = \"https://restcountries.eu/rest/v2/alpha?codes=\";\r\nconst UNIT = \"metric\";\r\nconst TIMEOUT_SEC = 10;\r\n\r\nconst timeout = function (s) {\r\n    return new Promise(function (_, reject) {\r\n        setTimeout(function () {\r\n            reject(new Error(`Request took too long! Timeout after ${s} second`));\r\n        }, s * 1000);\r\n    });\r\n};\r\n\r\nconst AJAX = async function (url) {\r\n    try {\r\n        const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);\r\n        const data = await res.json();\r\n\r\n        console.log(data);\r\n        if (!res.ok) {\r\n            throw new Error(\r\n                `${data.message[0].toUpperCase() + data.message.slice(1)} (${res.status\r\n                })`\r\n            );\r\n        }\r\n        return data;\r\n    } catch (err) {\r\n        throw err;\r\n    }\r\n};\n\n//# sourceURL=webpack://weather-app/./src/configuration.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData */ \"./src/weatherData.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\nconst weatherLocation = function () {\r\n  _view__WEBPACK_IMPORTED_MODULE_1__.default.showSpinner();\r\n\r\n  if (navigator.geolocation) {\r\n    navigator.geolocation.getCurrentPosition(loadLocation, function () {\r\n      _view__WEBPACK_IMPORTED_MODULE_1__.default.showMessage();\r\n    });\r\n  }\r\n};\r\n\r\n\r\nconst loadLocation = async function (position) {\r\n  try {\r\n    const { latitude } = position.coords;\r\n    const { longitude } = position.coords;\r\n\r\n    // Load location weather\r\n    await _weatherData__WEBPACK_IMPORTED_MODULE_0__.loadWeather([latitude, longitude])\r\n\r\n    // Render weather data\r\n    _view__WEBPACK_IMPORTED_MODULE_1__.default.renderWeather(_weatherData__WEBPACK_IMPORTED_MODULE_0__.weather.data);\r\n  } catch (err) {\r\n    console.error(err);\r\n    _view__WEBPACK_IMPORTED_MODULE_1__.default.showMessage(err.message);\r\n  }\r\n};\r\n\r\nconst searchWeather = async function (city) {\r\n  try {\r\n    // console.log(city);\r\n    _view__WEBPACK_IMPORTED_MODULE_1__.default.showSpinner();\r\n    // Get query from search input\r\n    // const query = view.getWeather();\r\n    if (!city) return;\r\n\r\n    // Load weather based on search query\r\n    await _weatherData__WEBPACK_IMPORTED_MODULE_0__.loadWeather(city);\r\n\r\n    // Render weather data\r\n    _view__WEBPACK_IMPORTED_MODULE_1__.default.renderWeather(_weatherData__WEBPACK_IMPORTED_MODULE_0__.weather.data);\r\n  } catch (err) {\r\n    console.error(err);\r\n    _view__WEBPACK_IMPORTED_MODULE_1__.default.showMessage(err.message);\r\n  }\r\n};\r\n\r\nconst convert = function (unit) {\r\n  _weatherData__WEBPACK_IMPORTED_MODULE_0__.convertUnit(unit);\r\n  _view__WEBPACK_IMPORTED_MODULE_1__.default.renderWeather(_weatherData__WEBPACK_IMPORTED_MODULE_0__.weather.data);\r\n};\r\n\r\nconst init = function () {\r\n  _view__WEBPACK_IMPORTED_MODULE_1__.default.addHandlerRender(weatherLocation);\r\n  _view__WEBPACK_IMPORTED_MODULE_1__.default.addHandlerSearch(searchWeather);\r\n  _view__WEBPACK_IMPORTED_MODULE_1__.default.addHandlerConvert(convert);\r\n};\r\n\r\ninit();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass View {\r\n  constructor() {\r\n    this.parentElement = document.querySelector(\".city-search-result\");\r\n    this.searchBar = document.querySelector(\".city-search-bar\");\r\n    this.message = \"What's the weather like today? ☁\";\r\n  }\r\n\r\n  clearInput() {\r\n    this.searchBar.querySelector(\".city-search-bar\").value = \"\";\r\n  }\r\n\r\n  clear() {\r\n    this.parentElement.innerHTML = \"\";\r\n  }\r\n\r\n  getWeather() {\r\n    const query = this.searchBar.querySelector(\".city-search-bar\").value;\r\n\r\n    this.clearInput();\r\n    return query;\r\n  }\r\n\r\n  renderWeather(data) {\r\n    if (!data) return;\r\n\r\n    const htmlMarkup = `\r\n      <div class=\"city-weather\">\r\n        <span>DATE:</span>\r\n        <p><span>${data.date}</span></p><br>\r\n        <h2>${data.name}, ${data.country}</h2>\r\n        <div class=\"temperature-container\">\r\n          <img src=\"${data.iconSmall}\" class=\"weather-icon\" alt=\"small weather icon\">\r\n          <h1>${data.temp}<sup>°${data.unit === \"metric\" ? \"C\" : \"F\"}</sup></h1> \r\n        </div>\r\n        <p>${data.description}</p>\r\n        <div class=\"weather-details\">\r\n          <p>Temperature: ${data.temperature} °${data.unit === \"metric\" ? \"C\" : \"F\"}</p>\r\n          <p>Humidity: ${data.humidity}%</p>\r\n          <p>Sunrise: ${data.sunrise}</p>\r\n          <p>Sunset: ${data.sunset}</p>\r\n        </div>\r\n        <div class=\"degree-switch\">\r\n          <div class=\"degree-select celcius ${data.unit === \"metric\" ? \"degree-select-active\" : \"\"}\" data-unit=\"metric\">C</div>\r\n          <div class=\"degree-select fahrenheit ${data.unit === \"imperial\" ? \"degree-select-active\" : \"\"}\" data-unit=\"imperial\">F</div>\r\n        </div>\r\n      </div>\r\n    `;\r\n\r\n    this.clear();\r\n    this.parentElement.insertAdjacentHTML(\"afterbegin\", htmlMarkup);\r\n  }\r\n\r\n  showMessage(message = this.message) {\r\n    const htmlMarkup = `<span class=\"weather-message\">${message}</span>`;\r\n    this.clear();\r\n    this.parentElement.insertAdjacentHTML(\"afterbegin\", htmlMarkup)\r\n  }\r\n\r\n  showSpinner() {\r\n    const htmlMarkup = `<div class=\"weather-container-loader\"></div>`;\r\n    this.clear();\r\n    this.parentElement.insertAdjacentHTML(\"afterbegin\", htmlMarkup)\r\n  }\r\n\r\n  addHandlerRender(handler) {\r\n    window.addEventListener(\"load\", handler);\r\n  }\r\n\r\n  addHandlerSearch(handler) {\r\n    this.searchBar.addEventListener(\"submit\", function (e) {\r\n      e.preventDefault();\r\n      // console.log(e.target.city.value);\r\n      handler(e.target.city.value);\r\n    });\r\n  }\r\n\r\n  addHandlerConvert(handler) {\r\n    this.parentElement.addEventListener(\"click\", function (e) {\r\n      const btn = e.target.closest(\".degree-select\");\r\n      if (!btn || btn.classList.contains(\"degree-select-active\")) return;\r\n\r\n      handler(btn.dataset.unit);\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new View());\n\n//# sourceURL=webpack://weather-app/./src/view.js?");

/***/ }),

/***/ "./src/weatherData.js":
/*!****************************!*\
  !*** ./src/weatherData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"weather\": () => (/* binding */ weather),\n/* harmony export */   \"convertUnit\": () => (/* binding */ convertUnit),\n/* harmony export */   \"loadWeather\": () => (/* binding */ loadWeather)\n/* harmony export */ });\n/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ \"./src/configuration.js\");\n\r\n\r\nconst weather = {\r\n  data: {}\r\n};\r\n\r\nconst convertTime = function (timestamp, format = \"short\") {\r\n  const options =\r\n    format === \"full\"\r\n      ? { dateStyle: \"full\", timeStyle: \"short\" }\r\n      : { timeStyle: \"short\" };\r\n  const date = new Date(timestamp * 1000);\r\n  const time = new Intl.DateTimeFormat(navigator.language, options).format(\r\n    date\r\n  );\r\n\r\n  return time;\r\n};\r\n\r\nconst convertUnit = function (unit) {\r\n  if (unit === \"imperial\") {\r\n    weather.data.temp = Math.round((weather.data.temp * 9) / 5 + 32);\r\n    weather.data.temperature = Math.round((weather.data.temperature * 9) / 5 + 32);\r\n    weather.data.unit = \"imperial\";\r\n  }\r\n\r\n  if (unit === \"metric\") {\r\n    weather.data.temp = Math.round(((weather.data.temp - 32) * 5) / 9);\r\n    weather.data.temperature = Math.round(\r\n      ((weather.data.temperature - 32) * 5) / 9\r\n    );\r\n    weather.data.unit = \"metric\";\r\n  }\r\n};\r\n\r\nconst loadWeather = async function (loc) {\r\n  const parameter = Array.isArray(loc)\r\n    ? `lat=${loc[0]}&lon=${loc[1]}`\r\n    : `q=${loc}`;\r\n\r\n  try {\r\n    const data = await (0,_configuration__WEBPACK_IMPORTED_MODULE_0__.AJAX)(\r\n      `${_configuration__WEBPACK_IMPORTED_MODULE_0__.API_URL}${parameter}&units=${_configuration__WEBPACK_IMPORTED_MODULE_0__.UNIT}&appid=${_configuration__WEBPACK_IMPORTED_MODULE_0__.KEY}`\r\n    );\r\n\r\n    weather.data = {\r\n      name: data.name,\r\n      country: data.sys.country,\r\n      temp: Math.round(data.main.temp),\r\n      temperature: Math.round(data.main.feels_like),\r\n      humidity: data.main.humidity,\r\n      sunrise: convertTime(data.sys.sunrise),\r\n      sunset: convertTime(data.sys.sunset),\r\n      date: convertTime(data.dt, \"full\"),\r\n      // iconBig: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,\r\n      iconSmall: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,\r\n      description:\r\n        data.weather[0].description[0].toUpperCase() +\r\n        data.weather[0].description.slice(1),\r\n      unit: _configuration__WEBPACK_IMPORTED_MODULE_0__.UNIT,\r\n    };\r\n\r\n    const data2 = await (0,_configuration__WEBPACK_IMPORTED_MODULE_0__.AJAX)(`${_configuration__WEBPACK_IMPORTED_MODULE_0__.REST_COUNTRY_URL}${weather.data.country}`);\r\n\r\n    weather.data.flag = data2[0].flag;\r\n  } catch (err) {\r\n    throw err;\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://weather-app/./src/weatherData.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;