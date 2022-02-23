"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabs = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Tabs = _interopRequireDefault(require("../Tabs"));

var _tabsData = _interopRequireDefault(require("./tabs-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies.
 */
var _default = {
  title: 'Components/Tabs',
  component: _Tabs.default,
  argTypes: {
    onClick: {
      action: 'handleClick'
    }
  }
};
exports.default = _default;

const tabs = () => /*#__PURE__*/_react.default.createElement(_Tabs.default, {
  data: _tabsData.default
});

exports.tabs = tabs;