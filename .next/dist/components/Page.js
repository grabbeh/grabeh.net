'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Meta = require('./Meta');

var _Meta2 = _interopRequireDefault(_Meta);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Container = require('../components/Container');

var _Container2 = _interopRequireDefault(_Container);

var _MainColumn = require('../components/MainColumn');

var _MainColumn2 = _interopRequireDefault(_MainColumn);

var _SideBar = require('../components/SideBar');

var _SideBar2 = _interopRequireDefault(_SideBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\mbg\\Documents\\grabeh.net\\components\\Page.js';

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_Meta2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement(_Container2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_MainColumn2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, children), _react2.default.createElement(_SideBar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })));
};