import '../scss/main.scss'
import 'swiper/css';
import Swiper from 'swiper'



const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView:3

});

