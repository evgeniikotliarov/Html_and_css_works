$(document).ready(function () {
  var pathname = window.location.pathname;
  $('.menu > a[href="' + pathname + '"]').addClass('active');

  $('.team-members-slider').slick({
    autoplay: false,
    arrows: false,
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    dotsClass: 'dots-dark',
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $(window).resize(function () {
    setTimeout(function () {
      $('.team-member').css('visibility', 'visible');
    }, 100);
  });

  var teamMemberSlideWidth = $('.team-member.slick-slide').get(0).style.width;
  var sliderOffset;
  var photoWidth = 210;
  var styleSheet;

  createStylesheetOnPage = function () {
    styleSheet = document.createElement('style')
    styleSheet.innerHTML = ".slick-track {margin-left: auto; }";
    document.body.appendChild(styleSheet);
  }();

  if ($(window).width() >= 800) {
    sliderOffset = parseInt(teamMemberSlideWidth) - photoWidth + 53;
  } else if ($(window).width() > 560) {
    photoWidth = 150;
    sliderOffset = parseInt(teamMemberSlideWidth) - photoWidth + 24;
  } else {
    photoWidth = 150;
    sliderOffset = (parseInt(teamMemberSlideWidth) - photoWidth) / 2;
  }

  styleSheet.innerHTML = ".slick-track {margin-left: " + sliderOffset + "px; }";

  if ($(window).width() < 500) {
    var photoWidth = 150;

    $('.team-members-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      var slidesCount = 12;
      var slidePageNumber = (nextSlide / (slidesCount / 6)).toFixed(0);
      if (slidePageNumber >= 1) {
        standardOffset = (slick.slideWidth) * 2 * slidePageNumber;
        styleSheet.innerHTML = ".slick-track {margin-left: " + sliderOffset + "px; }";
      } else {
        sliderOffset = (parseInt(teamMemberSlideWidth) - photoWidth) / 2;
        styleSheet.innerHTML = ".slick-track {margin-left: " + sliderOffset + "px; }";
      }
    });
  }

  var myLanding = {
    mobileMenu: $('.menu'),
    toggleButton: $('.menu-toggle'),
    mobileMenuBreakpoint: 900
  };
  myLanding.hideMenu = function (e) {
    myLanding.mobileMenu.hide();
  };
  myLanding.toggleMenu = function (e) {
    myLanding.mobileMenu.slideToggle(300);
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
      myLanding.toggleButton.removeClass('open');
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
    if (targetIsMenuOrButton && window.innerWidth < myLanding.mobileMenuBreakpoint) {
      myLanding.hideMenu();
      myLanding.toggleButton.removeClass('open');
    }
  });
  myLanding.stickyHeader = $('.home_page');
  myLanding.minHeightForScroll = 300;

  myLanding.toggleStickyMenu = function (e) {
    var isScrollEnough = window.pageYOffset > myLanding.minHeightForScroll;
    if (isScrollEnough) {
      myLanding.stickyHeader.hide().addClass('sticked').show();
    } else {
      myLanding.stickyHeader.removeClass('sticked');
    }
  };
  myLanding.didScroll = false;
  myLanding.toggleStickyHeader = function () {
    myLanding.didScroll = true;
    myLanding.toggleStickyMenu();

  };
  window.onscroll = myLanding.toggleStickyHeader;

  // Modal
  myLanding.orderModal = $('.modal');
  myLanding.modalToggler = $('[data-toggle="modal"]');
  myLanding.modalToggler.click(function (e) {
    e.preventDefault();
    myLanding.orderModal.fadeToggle();
    $('body').toggleClass('is-modal-open');
  });
});

