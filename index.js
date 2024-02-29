'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.session = exports.local = undefined;

var _baseLocalStorage = require('base-local-storage');

var _baseLocalStorage2 = _interopRequireDefault(_baseLocalStorage);

var _baseSessionStorage = require('base-session-storage');

var _baseSessionStorage2 = _interopRequireDefault(_baseSessionStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.local = _baseLocalStorage2.default;
exports.session = _baseSessionStorage2.default;