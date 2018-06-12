import Swiper from 'swiper';
import 'owl.carousel';
import 'owl.carousel2.thumbs';

//intro
var swiperIntro = new Swiper('.swiper-intro', {
  pagination: {
    el: '.swiper-pagination',
  },
});

//space


$('.owl-carousel-2').owlCarousel({
  items:1,
  thumbs: true,
  thumbsPrerendered: true
});

var swiperSpace2 = new Swiper('.swiper-space', {
  slidesPerView: 4,
  spaceBetween: 30,
  // loop: true,
  navigation: {
    nextEl: '.swiper-space-right',
    prevEl: '.swiper-space-left',
  },
});

//tabs space
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').fadeOut().removeClass('active').eq($(this).index()).fadeIn();
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
});
module.exports = teamSwiper;
