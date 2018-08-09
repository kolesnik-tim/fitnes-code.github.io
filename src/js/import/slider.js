import Swiper from 'swiper';
import 'owl.carousel';
import 'owl.carousel2.thumbs';


$('.owl-gallery').owlCarousel({
  margin:5,
  autoWidth:true,
  items:9
});



var servisesCardSlider = new Swiper('.swiper-servises-card', {
  slidesPerView: 7,
  spaceBetween: 5,
  navigation: {
    nextEl: '.swiper-space-right',
    prevEl: '.swiper-space-left',
  },
});


//intro
var swiperIntro = new Swiper('.swiper-intro', {
  navigation: {
    nextEl: '.swiper-intro-right',
    prevEl: '.swiper-intro-left',
  },
});

//space

if($(window).width() < 767) {
  var owl = $('.owl-carousel-2').owlCarousel({
    items:1,
    loop:true,
    thumbs: true,
    thumbsPrerendered: true,
    onDragged: callback
  });
} else {
  var owl = $('.owl-carousel-2').owlCarousel({
    items:1,
    thumbs: true,
    thumbsPrerendered: true,
  });
}





var spaceSlider = new Swiper('.swiper-space', {
  slidesPerView: 4,
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  slidesPerColumn: 1,
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



// var indexOwl;
// var indexSwiper = spaceSlider.realIndex;
// function callback(event) {
//   indexOwl = event.page.index;
// }

// spaceSlider.on('transitionEnd', function() {
//   spaceSlider.slideToLoop(index, speed, runCallbacks);
//   console.log(index);
// });
// owl.on('dragged.owl.carousel', function(event) {
//   console.log(indexSwiper);
// });










$('.swiper-slide-active').each(function() {
  $(this).addClass('active');
});
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
  setTimeout(function() {
    $('.owl-thumb-item').removeClass('active');
    $('.swiper-slide-active').each(function() {
      $(this).addClass('active');
    });
  }, 500);
});




//team

var teamSwiper = new Swiper('.swiper-team', {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
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
  loop: true,
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



//cabinet

var cabinetSlider = new Swiper('.swiper-cabinet', {
  slidesPerView: 4,
  spaceBetween: 1,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    850: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.swiper-cabinet-right',
    prevEl: '.swiper-cabinet-left',
  },
});


//tabs cabinet
$('ul.tabs__caption-1').on('click', 'li:not(.active)', function(e) {
  e.preventDefault();
  let th = $(this);

  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content-1').fadeOut().removeClass('active');
  setTimeout(function() {
    $(th).closest('div.tabs').find('div.tabs__content-1').eq($(th).index()).fadeIn();
    cabinetSlider.update();
  }, 400);
});
