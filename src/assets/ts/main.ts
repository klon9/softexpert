import "../scss/main.scss";

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper1 = new Swiper(".main-advantages_slider.swiper", {
  breakpoints: {
    1680: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    375: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button_next",
    prevEl: ".swiper-button_prev",
  },
  loop: true,
  slideClass: "main-slider_item",
  spaceBetween: 100,
});

const swiper2 = new Swiper(".slider-reviews .swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button_next",
    prevEl: ".swiper-button_prev",
  },
  loop: true,
  wrapperClass: "slider-reviews_wrapper",
  slideClass: "slider-reviews_item",
});

window.addEventListener("scroll", () => {
  const $header = document.getElementById("main-header");
  const $activeClass = "main-header_active";

  if (
    (window.scrollY > 0 && !$header?.classList.contains($activeClass)) ||
    (window.scrollY == 0 && $header?.classList.contains($activeClass))
  ) {
    $header?.classList.toggle($activeClass);
  }
});
