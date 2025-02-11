import LocomotiveScroll from 'locomotive-scroll';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const locomotiveScroll = new LocomotiveScroll();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 100,
  freeMode: true,
  pagination: {
    clickable: false,
  },
});