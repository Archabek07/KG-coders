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

activeBtn.addEventListener("click", () => {
  videoBtn.classList.toggle("btn-active");
});
