import "../scss/main.scss";

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button_next",
    prevEl: ".swiper-button_prev",
  },
  loop: true,
  slideClass: "main-slider_item",
  spaceBetween: 100,
});
