$(document).ready(function () {

  var swiper = new Swiper('.MainSlider-container', {
    // spaceBetween: 0,
    // loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    effect: 'fade',
    speed: 500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.main-slider-next',
      prevEl: '.main-slider-prev',
    },
    slidesPerView: 1,
  });

  var swiper = new Swiper('.team-container', {
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    }
  });
});

$('[data-fancybox]').fancybox({

buttons: [
  "zoom",
  // "share",
  "slideShow",
  "fullScreen",
  "download",
  "thumbs",
  "close"
],
transitionEffect: "slide",

});


////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
//////////////////  main  //////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////


$(document).ready(function () {
  //spinner
  $(".spinner ").fadeOut("slow");

  //SmoothScroll js
  var scroll = new SmoothScroll('a[href*="#"]');

  //AOS js
  AOS.init({
    offset: 90, // offset (in px) from the original trigger point
    duration: 500, // values from 0 to 3000, with step 50ms
  });

  // SideNav Default Options
  $('.button-collapse').sideNav({
    edge: 'right',
    breakpoint: 992,
    menuWidth: 240,
  });

});