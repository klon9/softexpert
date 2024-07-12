// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".main-advantages_slider.swiper", {
    breakpoints: {
      1680: {
        slidesPerView: 4,
        spaceBetween: 100,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
    navigation: {
      nextEl: ".swiper-button_next__advantages",
      prevEl: ".swiper-button_prev__advantages",
    },
    loop: true,
    slideClass: "main-slider_item",
  });

  new Swiper(".slider-reviews .swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button_next__reviews",
      prevEl: ".swiper-button_prev__reviews",
    },
    loop: true,
    wrapperClass: "slider-reviews_wrapper",
    slideClass: "slider-reviews_item",
  });

  new Swiper(".slider-infoblog", {
    breakpoints: {
      1680: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
      },
      1080: {
        slidesPerView: 2,
        spaceBetween: 40,
        loop: true,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
      },
    },
    navigation: {
      nextEl: ".swiper-button_next-infoblog",
      prevEl: ".swiper-button_prev-infoblog",
    },
    loop: true,
    slideClass: "infoblog-element",
    wrapperClass: "swiper-wrapper-infoblog",
  });
});
