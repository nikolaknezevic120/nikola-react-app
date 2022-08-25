"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animate_to_right;

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//SCROLL TO RIGHT
function animateRightRow(img, from, to) {
  if (from >= to) {
    return;
  } else {
    img.css({
      marginLeft: from
    });
    setTimeout(function () {
      animateRightRow(img, from + 1, to);
    }, 2);
  }
}

function moveElement() {
  const firstLastWidthForSlide = (0, _jquery.default)('.first-slider-move').children().last().outerWidth();
  const secondLastWidthForSlide = (0, _jquery.default)('.second-slider-move').children().last().outerWidth();
  animateRightRow((0, _jquery.default)('.first-slider'), 0, firstLastWidthForSlide + 10);
  animateRightRow((0, _jquery.default)('.second-slider-move'), 0, secondLastWidthForSlide + 10);
  return;
}

function replaceToStart() {
  (0, _jquery.default)('.first-slider-move').children().first().before((0, _jquery.default)('.first-slider-move').children().last());
  (0, _jquery.default)('.second-slider-move').children().first().before((0, _jquery.default)('.second-slider-move').children().last());
}

function animate_to_right() {
  //RIGHT BUTTON ON CLICK FUNCTION
  (0, _jquery.default)('#btn_left').prop('disabled', true);
  (0, _jquery.default)('#btn_right').prop('disabled', true);
  moveElement();
  setTimeout(() => {
    replaceToStart();
    (0, _jquery.default)('.first-slider').css({
      marginLeft: "0"
    });
    (0, _jquery.default)('.second-slider-move').css({
      marginLeft: "0"
    });
    (0, _jquery.default)('#btn_left').prop('disabled', false);
    (0, _jquery.default)('#btn_right').prop('disabled', false);
  }, 1500);
}

;