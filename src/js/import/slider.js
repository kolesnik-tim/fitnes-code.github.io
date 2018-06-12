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
var swiperSpace1 = new Swiper('.swiper-space-1', {
  slidesPerView: 1,
});

$('.swiper__tabs__block-1').on('click', function() {
  swiperSpace1.slideTo(0);
  active($(this));
});
$('.swiper__tabs__block-2').on('click', function() {
  swiperSpace1.slideTo(1);
  active($(this));
});
$('.swiper__tabs__block-3').on('click', function() {
  swiperSpace1.slideTo(2);
  active($(this));
});
$('.swiper__tabs__block-4').on('click', function() {
  swiperSpace1.slideTo(3);
  active($(this));
});

swiperSpace1.on('slideChange', function() {
  if(swiperSpace1.realIndex === 0) {
    active($('.swiper__tabs__block-1'));
  } else if(swiperSpace1.realIndex === 1) {
    active($('.swiper__tabs__block-2'));
  } else if(swiperSpace1.realIndex === 2) {
    active($('.swiper__tabs__block-3'));
  } else if(swiperSpace1.realIndex === 3) {
    active($('.swiper__tabs__block-4'));
  }
});

function active(crr) {
  $('.swiper__tabs__block').removeClass('active');
  crr.addClass('active');
};








$('.owl-carousel-2').owlCarousel({
  items:1,
  thumbs: true,
  thumbsPrerendered: true
});

var swiperSpac2 = new Swiper('.swiper-space', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-space-right',
    prevEl: '.swiper-space-left',
  },
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
