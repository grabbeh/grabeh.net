'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _tachyonsComponents = require('tachyons-components');

var _tachyonsComponents2 = _interopRequireDefault(_tachyonsComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\nmt2 fl ba pa2\n', '\n'], ['\nmt2 fl ba pa2\n', '\n']);

var Tool = (0, _tachyonsComponents2.default)('div')(_templateObject, function (props) {
  return props.last ? 'mr0' : 'mr2';
});

exports.default = Tool;