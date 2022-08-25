"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animation_to_left;

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//SCROLL TO LEFT
function replaceToEnd() {
  (0, _jquery.default)('.first-slider-move').children().last().after((0, _jquery.default)('.first-slider-move').children().first());
  (0, _jquery.default)('.second-slider-move').children().last().after((0, _jquery.default)('.second-slider-move').children().first());
}

function animation_to_left() {
  //LEFT BUTTON ON CLICK FUNCTION
  (0, _jquery.default)('#btn_left').prop('disabled', true);
  (0, _jquery.default)('#btn_right').prop('disabled', true);
  replaceToEnd();  
  console.log('test left');
  (0, _jquery.default)('.first-slider-move').children().last().addClass("animate-image");
  (0, _jquery.default)('.second-slider-move').children().last().addClass("animate-image");
  setTimeout(() => {
    (0, _jquery.default)('#btn_left').prop('disabled', false);
    (0, _jquery.default)('#btn_right').prop('disabled', false);
    (0, _jquery.default)('.first-slider-move').children().last().removeClass("animate-image");
    (0, _jquery.default)('.second-slider-move').children().last().removeClass("animate-image");
  }, 1500);
}