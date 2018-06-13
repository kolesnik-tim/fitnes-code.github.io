import Swiper from 'swiper';
import 'owl.carousel';
import 'owl.carousel2.thumbs';

//intro
var swiperIntro = new Swiper('.swiper-intro', {
  navigation: {
    nextEl: '.swiper-intro-right',
    prevEl: '.swiper-intro-left',
  },
});

//space


$('.owl-carousel-2').owlCarousel({
  items:1,
  thumbs: true,
  thumbsPrerendered: true
});

var spaceSlider = new Swiper('.swiper-space', {
  slidesPerView: 4,
  spaceBetween: 30,
  // loop: true,
  navigation: {
    nextEl: '.swiper-space-right',
    prevEl: '.swiper-space-left',
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

//tabs space
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').fadeOut().removeClass('active').eq($(this).index()).fadeIn();
  spaceSlider.update();
});

//team

var teamSwiper = new Swiper('.swiper-team', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  on: {
    init: function() {
      $('.swiper-team .swiper-slide-active').prev().addClass('prev');
      $('.swiper-team .swiper-slide-active').next().next().next().addClass('next');
    },
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});
module.exports = teamSwiper;


