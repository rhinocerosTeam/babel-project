"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

require("core-js/modules/es6.array.reduce");

var a = function a(obj) {
  console.log(obj);
};

a(1);
var b = [1, 2, 3].reduce(function (total, cur) {
  return total + cur;
}, 0);
console.log(b);

for (var _i = 0, _arr = [1, 2, 3]; _i < _arr.length; _i++) {
  var Obj = _arr[_i];
  console.log(Obj);
}

var People = function People() {
  (0, _classCallCheck2["default"])(this, People);
};

var avvv = Array.from([1]);