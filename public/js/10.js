(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\");\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n  var target = objectWithoutPropertiesLoose(source, excluded);\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nmodule.exports = _objectWithoutProperties;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/objectWithoutProperties.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nmodule.exports = _objectWithoutPropertiesLoose;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js?");

/***/ }),

/***/ "./node_modules/react-frame-component/lib/Content.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-frame-component/lib/Content.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars\n\n\nvar Content = function (_Component) {\n  _inherits(Content, _Component);\n\n  function Content() {\n    _classCallCheck(this, Content);\n\n    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));\n  }\n\n  _createClass(Content, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.contentDidMount();\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      this.props.contentDidUpdate();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react.Children.only(this.props.children);\n    }\n  }]);\n\n  return Content;\n}(_react.Component);\n\nContent.propTypes = {\n  children: _propTypes2.default.element.isRequired,\n  contentDidMount: _propTypes2.default.func.isRequired,\n  contentDidUpdate: _propTypes2.default.func.isRequired\n};\nexports.default = Content;\n\n//# sourceURL=webpack:///./node_modules/react-frame-component/lib/Content.js?");

/***/ }),

/***/ "./node_modules/react-frame-component/lib/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-frame-component/lib/Context.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.FrameContextConsumer = exports.FrameContextProvider = exports.FrameContext = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar doc = void 0;\nvar win = void 0;\nif (typeof document !== 'undefined') {\n  doc = document;\n}\nif (typeof window !== 'undefined') {\n  win = window;\n}\n\nvar FrameContext = exports.FrameContext = _react2.default.createContext({ document: doc, window: win });\n\nvar FrameContextProvider = FrameContext.Provider,\n    FrameContextConsumer = FrameContext.Consumer;\nexports.FrameContextProvider = FrameContextProvider;\nexports.FrameContextConsumer = FrameContextConsumer;\n\n//# sourceURL=webpack:///./node_modules/react-frame-component/lib/Context.js?");

/***/ }),

/***/ "./node_modules/react-frame-component/lib/Frame.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-frame-component/lib/Frame.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _Context = __webpack_require__(/*! ./Context */ \"./node_modules/react-frame-component/lib/Context.js\");\n\nvar _Content = __webpack_require__(/*! ./Content */ \"./node_modules/react-frame-component/lib/Content.js\");\n\nvar _Content2 = _interopRequireDefault(_Content);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Frame = function (_Component) {\n  _inherits(Frame, _Component);\n\n  // React warns when you render directly into the body since browser extensions\n  // also inject into the body and can mess up React. For this reason\n  // initialContent is expected to have a div inside of the body\n  // element that we render react into.\n  function Frame(props, context) {\n    _classCallCheck(this, Frame);\n\n    var _this = _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this, props, context));\n\n    _this.handleLoad = function () {\n      _this.forceUpdate();\n    };\n\n    _this._isMounted = false;\n    return _this;\n  }\n\n  _createClass(Frame, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this._isMounted = true;\n\n      var doc = this.getDoc();\n      if (doc && doc.readyState === 'complete') {\n        this.forceUpdate();\n      } else {\n        this.node.addEventListener('load', this.handleLoad);\n      }\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      this._isMounted = false;\n\n      this.node.removeEventListener('load', this.handleLoad);\n    }\n  }, {\n    key: 'getDoc',\n    value: function getDoc() {\n      return this.node ? this.node.contentDocument : null; // eslint-disable-line\n    }\n  }, {\n    key: 'getMountTarget',\n    value: function getMountTarget() {\n      var doc = this.getDoc();\n      if (this.props.mountTarget) {\n        return doc.querySelector(this.props.mountTarget);\n      }\n      return doc.body.children[0];\n    }\n  }, {\n    key: 'renderFrameContents',\n    value: function renderFrameContents() {\n      if (!this._isMounted) {\n        return null;\n      }\n\n      var doc = this.getDoc();\n\n      if (!doc) {\n        return null;\n      }\n\n      var contentDidMount = this.props.contentDidMount;\n      var contentDidUpdate = this.props.contentDidUpdate;\n\n      var win = doc.defaultView || doc.parentView;\n      var initialRender = !this._setInitialContent;\n      var contents = _react2.default.createElement(\n        _Content2.default,\n        {\n          contentDidMount: contentDidMount,\n          contentDidUpdate: contentDidUpdate\n        },\n        _react2.default.createElement(\n          _Context.FrameContextProvider,\n          { value: { document: doc, window: win } },\n          _react2.default.createElement(\n            'div',\n            { className: 'frame-content' },\n            this.props.children\n          )\n        )\n      );\n\n      if (initialRender) {\n        doc.open('text/html', 'replace');\n        doc.write(this.props.initialContent);\n        doc.close();\n        this._setInitialContent = true;\n      }\n\n      var mountTarget = this.getMountTarget();\n\n      return [_reactDom2.default.createPortal(this.props.head, this.getDoc().head), _reactDom2.default.createPortal(contents, mountTarget)];\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var props = _extends({}, this.props, {\n        children: undefined // The iframe isn't ready so we drop children from props here. #12, #17\n      });\n      delete props.head;\n      delete props.initialContent;\n      delete props.mountTarget;\n      delete props.contentDidMount;\n      delete props.contentDidUpdate;\n      return _react2.default.createElement(\n        'iframe',\n        _extends({}, props, {\n          ref: function ref(node) {\n            _this2.node = node;\n          }\n        }),\n        this.renderFrameContents()\n      );\n    }\n  }]);\n\n  return Frame;\n}(_react.Component);\n\nFrame.propTypes = {\n  style: _propTypes2.default.object, // eslint-disable-line\n  head: _propTypes2.default.node,\n  initialContent: _propTypes2.default.string,\n  mountTarget: _propTypes2.default.string,\n  contentDidMount: _propTypes2.default.func,\n  contentDidUpdate: _propTypes2.default.func,\n  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)])\n};\nFrame.defaultProps = {\n  style: {},\n  head: null,\n  children: undefined,\n  mountTarget: undefined,\n  contentDidMount: function contentDidMount() {},\n  contentDidUpdate: function contentDidUpdate() {},\n  initialContent: '<!DOCTYPE html><html><head></head><body><div class=\"frame-root\"></div></body></html>'\n};\nexports.default = Frame;\n\n//# sourceURL=webpack:///./node_modules/react-frame-component/lib/Frame.js?");

/***/ }),

/***/ "./node_modules/react-frame-component/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-frame-component/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.FrameContextConsumer = exports.FrameContext = undefined;\n\nvar _Context = __webpack_require__(/*! ./Context */ \"./node_modules/react-frame-component/lib/Context.js\");\n\nObject.defineProperty(exports, 'FrameContext', {\n  enumerable: true,\n  get: function get() {\n    return _Context.FrameContext;\n  }\n});\nObject.defineProperty(exports, 'FrameContextConsumer', {\n  enumerable: true,\n  get: function get() {\n    return _Context.FrameContextConsumer;\n  }\n});\n\nvar _Frame = __webpack_require__(/*! ./Frame */ \"./node_modules/react-frame-component/lib/Frame.js\");\n\nvar _Frame2 = _interopRequireDefault(_Frame);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Frame2.default;\n\n//# sourceURL=webpack:///./node_modules/react-frame-component/lib/index.js?");

/***/ })

}]);