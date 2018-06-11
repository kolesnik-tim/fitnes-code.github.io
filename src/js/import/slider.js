import Swiper from 'swiper';
import owl from 'owl.carousel';
import owlThumbs from 'owl.carousel2.thumbs';

//intro
var swiper = new Swiper('.swiper-intro', {
  navigation: {
    nextEl: '.swiper-intro-right',
    prevEl: '.swiper-intro-left',
  },
});

//space
$('.owl-carousel-1').owlCarousel({
  items:1,
  thumbs: true,
  thumbsPrerendered: true
});

$('.owl-carousel-2').owlCarousel({
  items:1,
  thumbs: true,
  thumbsPrerendered: true
});

var swiper = new Swiper('.swiper-space', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-space-right',
    prevEl: '.swiper-space-left',
  },
});


//command

var swiper = new Swiper('.swiper-command', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-command-right',
    prevEl: '.swiper-command-left',
  },
});
