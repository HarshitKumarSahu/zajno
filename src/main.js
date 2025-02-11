import LocomotiveScroll from 'locomotive-scroll';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const locomotiveScroll = new LocomotiveScroll();

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 4,
//   spaceBetween: 100,
//   freeMode: true,
//   pagination: {
//     clickable: false,
//   },
// });

var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 4,
  freeMode: true,
  pagination: {
    clickable: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 4,
      spaceBetween: 100, // For width greater than 600px
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 15, // For width less than 600px
    }
  }
});