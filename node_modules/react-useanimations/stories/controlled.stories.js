"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangingPathCss = exports.ChangingFillColor = exports.ChangingStrokeColor = exports.RadioButton = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _addonInfo = require("@storybook/addon-info");

var _radioButton = _interopRequireDefault(require("../lib/radioButton"));

var _star = _interopRequireDefault(require("../lib/star"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// ANIMATIONS WITH CLICK PLAY & BACKWARDS WILL HAVE REVERSE FUNCITONALITY FOR STATE MNG
var _default = {
  title: 'Controlled State',
  component: _["default"],
  decorators: [_addonInfo.withInfo]
};
exports["default"] = _default;

var RadioButton = function RadioButton() {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "radioButton"), /*#__PURE__*/_react["default"].createElement(_["default"], {
    reverse: checked,
    onClick: function onClick() {
      setChecked(!checked);
    },
    size: 40,
    wrapperStyle: {
      marginTop: '5px'
    },
    animation: _radioButton["default"]
  })));
};

exports.RadioButton = RadioButton;
RadioButton.story = {
  parameters: {
    info: {
      text: "\n      ~~~js\n      export const RadioButton = () => {\n        const [checked, setChecked] = useState(true);\n      \n        return (\n          <div style={{ display: 'flex', flexWrap: 'wrap' }}>\n            <div style={{ padding: '20px' }}>\n              <span>radioButton</span>\n              <UseAnimation\n                reverse={checked}\n                onClick={() => {\n                  setChecked(!checked);\n                }}\n                size={40}\n                wrapperStyle={{ marginTop: '5px' }}\n                animation={radioButton}\n              />\n            </div>\n          </div>\n        );\n      };\n      ~~~\n    "
    }
  }
};

var ChangingStrokeColor = function ChangingStrokeColor() {
  var _useState3 = (0, _react.useState)('black'),
      _useState4 = _slicedToArray(_useState3, 2),
      strokeColor = _useState4[0],
      setStrokeColor = _useState4[1];

  var handleButtonOnClick = function handleButtonOnClick() {
    return strokeColor === 'black' ? setStrokeColor('red') : setStrokeColor('black');
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: handleButtonOnClick,
    style: {
      width: 100,
      height: 50
    }
  }, "Change Stroke Color"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "star"), /*#__PURE__*/_react["default"].createElement(_["default"], {
    pathCss: "fill: pink",
    strokeColor: strokeColor,
    size: 40,
    wrapperStyle: {
      marginTop: '5px'
    },
    animation: _star["default"]
  })));
};

exports.ChangingStrokeColor = ChangingStrokeColor;
ChangingStrokeColor.story = {
  parameters: {
    info: {
      text: "\n      ~~~js\n      export const ChangingStrokeColor = () => {\n        const [strokeColor, setStrokeColor] = useState('black');\n      \n        const handleButtonOnClick = () =>\n          strokeColor === 'black' ? setStrokeColor('red') : setStrokeColor('black');\n      \n        return (\n          <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>\n            <button type=\"button\" onClick={handleButtonOnClick} style={{ width: 100, height: 50 }}>\n              Change Stroke Color\n            </button>\n            <div style={{ padding: '20px' }}>\n              <span>star</span>\n              <UseAnimation\n                strokeColor={strokeColor}\n                size={40}\n                wrapperStyle={{ marginTop: '5px' }}\n                animation={star}\n              />\n            </div>\n          </div>\n        );\n      };\n      ~~~\n    "
    }
  }
};

var ChangingFillColor = function ChangingFillColor() {
  var _useState5 = (0, _react.useState)('black'),
      _useState6 = _slicedToArray(_useState5, 2),
      fillColor = _useState6[0],
      setFillColor = _useState6[1];

  var handleButtonOnClick = function handleButtonOnClick() {
    return fillColor === 'black' ? setFillColor('red') : setFillColor('black');
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: handleButtonOnClick,
    style: {
      width: 100,
      height: 50
    }
  }, "Change Fill Color"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "star"), /*#__PURE__*/_react["default"].createElement(_["default"], {
    fillColor: fillColor,
    size: 40,
    wrapperStyle: {
      marginTop: '5px'
    },
    animation: _star["default"]
  })));
};

exports.ChangingFillColor = ChangingFillColor;
ChangingFillColor.story = {
  parameters: {
    info: {
      text: "\n      ~~~js\n      export const ChangingFillColor = () => {\n        const [fillColor, setFillColor] = useState('black');\n      \n        const handleButtonOnClick = () =>\n          fillColor === 'black' ? setFillColor('red') : setFillColor('black');\n      \n        return (\n          <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>\n            <button type=\"button\" onClick={handleButtonOnClick} style={{ width: 100, height: 50 }}>\n              Change Fill Color\n            </button>\n            <div style={{ padding: '20px' }}>\n              <span>star</span>\n              <UseAnimation\n                fillColor={fillColor}\n                size={40}\n                wrapperStyle={{ marginTop: '5px' }}\n                animation={star}\n              />\n            </div>\n          </div>\n        );\n      };\n      ~~~\n    "
    }
  }
};

var ChangingPathCss = function ChangingPathCss() {
  var defaultCssPath = 'fill: red; stroke: blue;';

  var _useState7 = (0, _react.useState)(defaultCssPath),
      _useState8 = _slicedToArray(_useState7, 2),
      pathCss = _useState8[0],
      setPathCss = _useState8[1];

  var handleButtonOnClick = function handleButtonOnClick() {
    return pathCss === defaultCssPath ? setPathCss('fill: blue; stroke: red;') : setPathCss(defaultCssPath);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: handleButtonOnClick,
    style: {
      width: 100,
      height: 50
    }
  }, "Change Path Css"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      marginLeft: '20px'
    }
  }, "After changing, click the star back & forth to see the fill & stroke change taking an effect")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "star"), /*#__PURE__*/_react["default"].createElement(_["default"], {
    pathCss: pathCss,
    size: 40,
    wrapperStyle: {
      marginTop: '5px'
    },
    animation: _star["default"]
  })));
};

exports.ChangingPathCss = ChangingPathCss;
ChangingPathCss.story = {
  parameters: {
    info: {
      text: "\n      ~~~js\n      export const ChangingPathCss = () => {\n        const defaultCssPath = 'fill: red; stroke: blue;';\n        const [pathCss, setPathCss] = useState(defaultCssPath);\n      \n        const handleButtonOnClick = () =>\n          pathCss === defaultCssPath\n            ? setPathCss('fill: blue; stroke: red;')\n            : setPathCss(defaultCssPath);\n      \n        return (\n          <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>\n            <div style={{ display: 'flex', alignItems: 'center' }}>\n              <button type=\"button\" onClick={handleButtonOnClick} style={{ width: 100, height: 50 }}>\n                Change Path Css\n              </button>\n              <span style={{ marginLeft: '20px' }}>\n                After changing, click the star back & forth to see the fill & stroke change taking an\n                effect\n              </span>\n            </div>\n            <div style={{ padding: '20px' }}>\n              <span>star</span>\n              <UseAnimation\n                pathCss={pathCss}\n                size={40}\n                wrapperStyle={{ marginTop: '5px' }}\n                animation={star}\n              />\n            </div>\n          </div>\n        );\n      };\n      ~~~\n    "
    }
  }
};