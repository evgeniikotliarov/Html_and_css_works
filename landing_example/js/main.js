$(document).ready(function () {
  // Main screen slider
  $('.presentation').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: 'dots',
    mobileFirst: true,
    speed: 500,
    fade: true
  });

  $('.technology-slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: 'dots-dark',
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });


  $('.portfolio-slider').slick({
    autoplay: false,
    arrows: false,
    dots: true,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dotsClass: 'dots-dark',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // mobile menu
  // make sure mobile menu is hidden on first appearance on mobile screens
  var myLanding = {
    mobileMenu: $('.menu'),
    toggleButton: $('.menu-toggle'),
    mobileMenuBreakpoint: 1000
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
    if (window.innerWidth > myLanding.mobileMenuBreakpoint) {
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
  $(document).click(function (e) {
    var targetIsMenuOrButton = $(e.target).closest('.menu').length || !$(e.target).closest('.menu-toggle').length;
    if (targetIsMenuOrButton && window.outerWidth < myLanding.mobileMenuBreakpoint) {
      myLanding.hideMenu();
      myLanding.toggleButton.removeClass('open');
    }
  });

  myLanding.stickyHeader = $('.sticky-header');

  myLanding.toggleStickyMenu = function (e) {
    var isScrollEnough = window.pageYOffset > (window.outerHeight - 10);
    if (isScrollEnough) {
      myLanding.stickyHeader.hide().addClass('sticked').show();
    } else {
      myLanding.stickyHeader.removeClass('sticked');
    }
  };
  $(window).scroll(function (e) {
    myLanding.toggleStickyMenu()
  });
  myLanding.toggleStickyMenu()
});

