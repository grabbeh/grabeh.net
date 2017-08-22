'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\mbg\\Documents\\grabeh.net\\components\\SideBarIcon.js';

exports.default = function (_ref) {
  var github = _ref.github,
      twitter = _ref.twitter,
      pencil = _ref.pencil;
  return _react2.default.createElement('i', {
    className: (0, _classnames2.default)('mr2', 'fa', twitter && 'fa-twitter', github && 'fa-github', pencil && 'fa-pencil'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  });
};