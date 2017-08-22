'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SideBarContainer = require('./SideBarContainer');

var _SideBarContainer2 = _interopRequireDefault(_SideBarContainer);

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _SideBarItem = require('./SideBarItem');

var _SideBarItem2 = _interopRequireDefault(_SideBarItem);

var _SideBarIcon = require('./SideBarIcon');

var _SideBarIcon2 = _interopRequireDefault(_SideBarIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\mbg\\Documents\\grabeh.net\\components\\SideBar.js';

exports.default = function () {
  return _react2.default.createElement(_SideBarContainer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_List2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_SideBarItem2.default, { item: 'Twitter', url: 'https://twitter.com/grabbeh', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_SideBarIcon2.default, { twitter: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })), _react2.default.createElement(_SideBarItem2.default, { item: 'Github', url: 'https://github.com/grabbeh', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_SideBarIcon2.default, { github: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), _react2.default.createElement(_SideBarItem2.default, { item: 'Writings', url: '/posts', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_SideBarIcon2.default, { pencil: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }))));
};