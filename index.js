$(document).ready(function () {
  $(".members__blocks").slick({
    dots: true,
    prevArrow:
      '<button class="slider-btn slider-btn-prev"><img src="img/arrowLeft.svg" alt="arrowLeft"></button>',
    nextArrow:
      '<button class="slider-btn slider-btn-next"><img src="img/arrowRight.svg" alt="arrowRight"></button>',
  });
});

const videoBtn = document.querySelector(".videowrapper");
const activeBtn = document.querySelector(".main__header-watch-btn");
const activeBtnText = document.querySelector(".main__header-watch-btn-text");
const yellowBtn = document.querySelector(".yellow-btn");

activeBtn.addEventListener("click", () => {
  videoBtn.classList.toggle("btn-active");
  yellowBtn.classList.toggle("yellow-btn-active");
  activeBtnText.classList.toggle("watch-btn-text-active");
});
