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

$('.swiper-slide-active').addClass('active');
$('.owl-thumb-item').on('click', function() {
  let btn = $(this);
  setTimeout(function() {
    $('.owl-thumb-item').removeClass('active');
    btn.addClass('active');  
  }, 100);
 
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

//team-page
var teamSwiper2 = new Swiper('.swiper-team-page', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
});
teamSwiper2.on('reachBeginning', function() {
  teamSwiper2.update();
});

$('.swiper-team-page a[rel]').click(function(event) {
  let slidePrev1 = $(this).closest('.swiper-slide').hasClass('swiper-slide-prev');
  let slideNext1 = $(this).closest('.swiper-slide').hasClass('swiper-slide-next');
  console.log('dfdg');
  if(slidePrev1) {
    teamSwiper2.slidePrev();
    return false;
  } else if(slideNext1) {
    teamSwiper2.slideNext();
    return false;
  }
  $(this).modal({
    fadeDuration: 250,
  });
  return false;
});

//club-tour
var swiperIntro = new Swiper('.swiper-club-tour', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-club-tour-right',
    prevEl: '.swiper-club-tour-left',
  },
});



//schedule

var teamSwiper = new Swiper('.swiper-schedule', {
  slidesPerView: 7,
  spaceBetween: 1,
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    630: {
      slidesPerView: 3,
    },
    760: {
      slidesPerView: 4,
    },
    880: {
      slidesPerView: 5,
    },
    1000: {
      slidesPerView: 6,
    }
  },
  navigation: {
    nextEl: '.swiper-schedule-right',
    prevEl: '.swiper-schedule-left',
  },
});
