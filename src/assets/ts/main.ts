import "../scss/main.scss";

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper1 = new Swiper(".main-advantages_slider.swiper", {
  slidesPerView: 4,
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
  //centeredSlides:true,
  //spaceBetween: 400,
});
