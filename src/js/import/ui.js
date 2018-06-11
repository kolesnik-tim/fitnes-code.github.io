import modal from 'jquery-modal';
import ScrollMagic from 'scrollmagic';

//menu open
$('.menu-open').on('click', function() {
  event.preventDefault();
  $('.menu').fadeToggle();
  $(this).toggleClass('active');
});



//якорь
$('.menu ul').on('click','a', function(event) {
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top - 100}, 1500);
  $('.menu').fadeOut();
  $('.menu-open').removeClass('active');
});

//scrolmagic

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {duration: 700}
});


new ScrollMagic.Scene({triggerElement: '#intro'})
  .setClassToggle('#intro-1', 'active') // add class toggle
  .addTo(controller);
new ScrollMagic.Scene({triggerElement: '#target'})
  .setClassToggle('.target-1', 'active') // add class toggle
  .addTo(controller);
// new ScrollMagic.Scene({triggerElement: '#space'})
//   .setClassToggle('#space', 'active') // add class toggle
//   .addTo(controller);
new ScrollMagic.Scene({triggerElement: '#code'})
  .setClassToggle('#code-1', 'active') // add class toggle
  .addTo(controller);
new ScrollMagic.Scene({triggerElement: '#comand'})
  .setClassToggle('.comand-1', 'active') // add class toggle
  .addTo(controller);
