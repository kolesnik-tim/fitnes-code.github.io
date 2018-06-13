import 'jquery-modal';
import Swiper from 'swiper';
import teamSwiper from './slider';

//menu open
$('.menu-open').on('click', function() {
  event.preventDefault();
  $('.menu').fadeToggle();
  $('.header').toggleClass('bg');
  $(this).toggleClass('active');
});


//якорь
$('.menu ul, nav').on('click','a', function(event) {
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top - 100}, 1500);
  $('.menu').fadeOut();
  $('.header').removeClass('bg');
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
teamSwiper.on('slideChange', function() {
  $('.swiper-team .swiper-slide').removeClass('prev');
  $('.swiper-team .swiper-slide').removeClass('next');
  setTimeout(function() {
    $('.swiper-team .swiper-slide-active').prev().addClass('prev');
    $('.swiper-team .swiper-slide-active').next().next().next().addClass('next');
  }, 10);
});
teamSwiper.on('reachBeginning', function() {
  teamSwiper.update();
});


$('a[rel]').click(function(event) {
  let slidePrev = $(this).closest('.swiper-slide').hasClass('prev');
  let slideNext = $(this).closest('.swiper-slide').hasClass('next');
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


// Сварачивающиеся блоки
$('.space__floor').click(function() {
  // $(this).toggleClass("active");
  if($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).siblings('.space__floor__block').slideUp();
  } else
    active($(this));
});


function active(crr) {
  $('.space__floor').removeClass('active');
  $('.space__floor__block').slideUp();
  crr.addClass('active');
  crr.next('.space__floor__block').slideDown();
}
