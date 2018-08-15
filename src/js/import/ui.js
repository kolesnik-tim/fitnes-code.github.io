import 'jquery-modal';
import Swiper from 'swiper';
import teamSwiper from './slider';
import '../lib/selectize.min';
import '@fancyapps/fancybox';

 
$('[data-fancybox]').fancybox({
  buttons: [
    'thumbs',
    'close'
  ],
});



//якорь
$('.value').on('click', function(event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top - 100}, 1500);
});




//wow
new WOW().init();


//select
$('select').selectize('options');
if($(window).width() <= 767) {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.header').outerHeight();

  $(window).scroll(function(event) {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(window).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
      return;
    if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
      $('header').addClass('scroll');
    } else {
    // Scroll Up
      if(st + $(window).height() < $(document).height()) {
        $('header').removeClass('scroll');
      }
    }
    
    lastScrollTop = st;
  }
}



//header
$('.header__services p').on('click', function() {
  $('.header__services__option').slideToggle();
  $(this).toggleClass('active');
});


$(document).mouseup(function(e) {
  var block = $('.header__services__option, .header__services');
  if (!block.is(e.target) && block.has(e.target).length === 0) { 
    $('.header__services__option').fadeOut();
    $('.header__services p').removeClass('active');
  }
});


//menu open
$('.menu-open').on('click', function() {
  event.preventDefault();
  $('.menu').fadeToggle();
  $('.header').toggleClass('bg');
  $(this).toggleClass('active');
});


//якорь
$('.menu ul, .nav').on('click','a', function(event) {
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top - 100}, 1500);
  $('.menu').fadeOut();
  $('.header').removeClass('bg');
  $('.menu-open').removeClass('active');
});


//nav
if(window.location.pathname === '/') {
  let heightWindow = $(window).height() / 2;
  let intro = $('.intro').offset().top;
  let target = $('.target').offset().top - heightWindow;
  let space = $('.space').offset().top - heightWindow;
  let code = $('.code').offset().top - heightWindow;
  let comand = $('.team').offset().top - heightWindow;
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
}

// modal
teamSwiper.on('slideChange', function() {
  $('.swiper-team .swiper-slide').removeClass('prev');
  $('.swiper-team .swiper-slide').removeClass('next');
  setTimeout(function() {
    $('.swiper-team .swiper-slide-active').prev().addClass('prev');
    $('.swiper-team .swiper-slide-active').next().next().next().addClass('next');
  }, 10);
});
// teamSwiper.on('reachBeginning', function() {
//   teamSwiper.update();
// });

$('.team__block a').click(function(event) {
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


//расписание
if(typeof $('.schedule__slider') === undefined) {
} else{
  $('.schedule__slider__block__day');
  if ($('.schedule__slider').length) {
    var offsetTop = $('.schedule__slider').offset().top;  
  }
  
  let headerHeight = $('.header').height();
  $(window).on('scroll', function() {
    let scrollTop = $('html, body').scrollTop();
    if(scrollTop + 100 >= offsetTop) {
      $('.schedule__slider__block__day').addClass('fixed');
      $('.swiper-button-prev, .swiper-button-next').css({'top' : scrollTop - offsetTop + headerHeight + 70});
      $('.schedule__slider__block__day').css({'top' : scrollTop - offsetTop + headerHeight});
    } else {
      $('.swiper-button-prev, .swiper-button-next').css({'top' : '70px'});
      $('.schedule__slider__block__day').removeClass('fixed');
    }
  });
}
let top = 120;
$('.schedule__slider b').each(function() {
  let swiperWidth = $('.swiper-schedule').width() + 92;
  $('.schedule__slider__b').css({'width' : swiperWidth});
  if($(this).is('[rel]')) {
    let rel = $(this).attr('rel') * 150.5;
    $(this).css({'height' : rel});
    let cardschedule = $(this).attr('rel') * 151 - 151;
    $(this).css({'top' : top});
    top += cardschedule;
    $(this).next().css({'top' : top});
  } else {
    $(this).css({'top' : top});
  }
  top += 151;
});
