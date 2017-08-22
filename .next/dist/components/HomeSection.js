'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _tachyonsComponents = require('tachyons-components');

var _tachyonsComponents2 = _interopRequireDefault(_tachyonsComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['mt3 mb4\n', '\n'], ['mt3 mb4\n', '\n']);

var HomeSection = (0, _tachyonsComponents2.default)('div')(_templateObject, function (props) {
  return props.nb ? '' : 'bt';
});
exports.default = HomeSection;