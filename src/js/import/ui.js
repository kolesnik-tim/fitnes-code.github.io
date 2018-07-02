import 'jquery-modal';
import Swiper from 'swiper';
import teamSwiper from './slider';
import '../lib/selectize.min';

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

$('.swiper-team a[rel]').click(function(event) {
  let slidePrev = $(this).closest('.swiper-slide').hasClass('prev');
  let slideNext = $(this).closest('.swiper-slide').hasClass('next');
  console.log('mkl');
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

// $('input[type="range"]').rangeslider({
//   polyfill: false,
//   onSlide: function() {
//     ProductSlider();
//   },
// });

// let list;
// $.getJSON('js/team.json', function(data) {
//   list = data;
// });

// function ProductSlider() {
//   let inputValue;
//   let id;

//   inputValue = $('input').val();
//   list.forEach(function(item, i) {
//     i = i + 1;
//     let barabanH = item.d / 10;
//     if(+inputValue === i) {
//       $('.title').text(item.title);
//       $('.title1').text(item.title1);
//       $('.d').text(item.d);
//       $('.l').text(item.l);
//       $('.d1').text(item.d1);
//       $('.s').text(item.s);
//       $('.count').text(item.count);
//       $('.barabanH').css('height', barabanH);
//     }
//   });
// }
