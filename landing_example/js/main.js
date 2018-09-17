$(document).ready(function(){
  // Main screen slider
  $('.presentation').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: 'dots',
    mobileFirst: true
  });
  // Technology block slider
  $('.technology-slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: 'dots-dark',
    mobileFirst: true,
    slidesToShow: 3,
    slidesToScroll:1
  });
  // mobile menu
  // make sure mobile menu is hidden on first appearance on mobile screens
  var myLanding = {
    mobileMenu: $('.menu'),
    toggleButton: $('.menu-toggle'),
    mobileMenuBreakpoint: 900
  };
  myLanding.hideMenu = function (e) {
    myLanding.mobileMenu.hide();
  };
  myLanding.toggleMenu = function (e) {
    myLanding.mobileMenu.slideToggle(300)
  };
  myLanding.showMenu = function (e) {
    myLanding.mobileMenu.show();
  };
  myLanding.toggleMenuOnWindowResize = function (e) {
    if(window.innerWidth > myLanding.mobileMenuBreakpoint) {
      myLanding.showMenu();
      myLanding.toggleButton.addClass('open');
    } else {
      myLanding.hideMenu();
      myLanding.toggleButton.removeClass('open')
    }
  };

  myLanding.toggleMenuOnWindowResize();

  myLanding.toggleButton.click(function (e) {
    e.preventDefault();
    myLanding.toggleButton.toggleClass('open');
    myLanding.toggleMenu();
  });

  $(window).resize(function (e) {
    myLanding.toggleMenuOnWindowResize();
  });
});
