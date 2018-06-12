import 'jquery-modal';

//menu open
$('.menu-open').on('click', function() {
  event.preventDefault();
  $('.menu').fadeToggle();
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
let comand = $('.command').offset().top - 200;
let scrollWindow;
  
$(window).on('scroll', function() {
  scrollWindow = $(this).scrollTop();
  console.log(target);
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
    $('.command-1').addClass('active');
  }
});
