import 'jquery-modal';
import Swiper from 'swiper';
import teamSwiper from './slider';

//menu open
$('.menu-open').on('click', function() {
  event.preventDefault();
  $('.menu').fadeToggle();
  $('.header').toggleClass('active');
  $(this).toggleClass('active');

});


//якорь
$('.menu ul, nav').on('click','a', function(event) {
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top - 100}, 1500);
  $('.menu').fadeOut();
  $('.menu-open').removeClass('active');
});


//nav
let intro = $('.intro').offset().top;
let target = $('.target').offset().top - 200;
let space = $('.space').offset().top - 200;
let code = $('.code').offset().top - 200;
let comand = $('.team').offset().top - 200;
let scrollWindow;
  
$(window).on('scroll', function() {
  scrollWindow = $(this).scrollTop();
  if (scrollWindow >= intro && scrollWindow < target) {
    $('.navigation li, .icon-page-1').removeClass('active');
    $('#intro-1').addClass('active');
  } else if(scrollWindow >= target && scrollWindow < space) {
    $('.navigation li, .icon-page-1').removeClass('active');
    $('.target-1').addClass('active');
  } else if(scrollWindow >= space && scrollWindow < code) {
    $('.navigation li, .icon-page-1').removeClass('active');
    $('#space-1').addClass('active');
  } else if(scrollWindow >= code && scrollWindow < comand) {
    $('.navigation li, .icon-page-1').removeClass('active');
    $('#code-1').addClass('active');
  }else if(scrollWindow >= comand) {
    $('.navigation li').removeClass('active');
    $('.team-1').addClass('active');
  }
});


//modal
let slidePrev;
let slideNext;
$('a[rel]').click(function(event) {
  slidePrev = $(this).closest('.swiper-slide').siblings('swiper-slide-active').prev();
  slideNext = $(this).closest('.swiper-slide').siblings('swiper-slide-active').next().next().next();
  if(slidePrev) {
    teamSwiper.slidePrev();
    return false;
  } else if(slideNext) {
    teamSwiper.slideNext();
    return false;
  }
  $(this).modal({
    fadeDuration: 250,
  });
  return false;
});
$(slidePrev).addClass('opasity');
$(slideNext).addClass('opasity');
console.log(slidePrev);

