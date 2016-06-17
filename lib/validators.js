/**
 * Copyright 2015, Lev Interactive, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @module validators
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _isSupplied = function _isSupplied(val) {
  var value = val;
  if (val && val.size && val.toJS) {
    value = val.toJS();
  }
  if (_lodash2['default'].isArray(value) && _lodash2['default'].isEmpty(value)) {
    return false;
  }
  if (_lodash2['default'].isObject(value) && _lodash2['default'].isEmpty(value)) {
    return false;
  }
  if (_lodash2['default'].isNull(value) || _lodash2['default'].isUndefined(value)) {
    return false;
  }
  if (_lodash2['default'].isNumber(value)) {
    return true;
  }
  return !_lodash2['default'].isEmpty(value);
};

var EMAIL_PATTERN = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

var required = {
  name: 'required',
  invalid: function invalid(value) {
    return !_isSupplied(value);
  },
  message: 'This field is required.'
};

var email = {
  name: 'email',
  invalid: function invalid(value) {
    return _isSupplied(value) && !EMAIL_PATTERN.test(value);
  },
  message: 'Email is invalid.'
};

var numeral = {
  name: 'numeral',
  invalid: function invalid(value) {
    return _isSupplied(value) && !/^[0-9.]+$/.test(value);
  },
  message: 'Must be a number.'
};

exports['default'] = {
  required: required,
  email: email,
  numeral: numeral,
  _isSupplied: _isSupplied
};
module.exports = exports['default'];