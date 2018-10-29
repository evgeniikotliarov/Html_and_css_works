$(document).ready(function () {

  var pathname = window.location.pathname;
  $('.menu > a[href="' + pathname + '"]').addClass('active');

  $('.project-slider').slick({
    autoplay: false,
    arrows: false,
    dots: true,
    dotsClass: 'dots-dark'
  });
});