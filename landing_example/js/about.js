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
    }, 100)
  });
  var teamMemberSlideWidth = $('.team-member.slick-slide').get(0).style.width;
  var sliderOffSet;
  var photoWidth = 210;
  var styleSheet;

  createStyleSheetOnPage = function () {
    styleSheet = document.createElement('style');
    styleSheet.innerHTML = ".slick-track {margin-left: auto}";
    document.body.appendChild(styleSheet);
  }();

  if ($(window).width() >= 800) {
    sliderOffSet = parseInt(teamMemberSlideWidth) - photoWidth + 53;
  } else if ($(window).width() >= 560) {
    photoWidth = 150;
    sliderOffSet = parseInt(teamMemberSlideWidth) - photoWidth + 24;
  } else {
    photoWidth = 150;
    sliderOffSet = (parseInt(teamMemberSlideWidth) - photoWidth) / 2;
  }

  var myLanding = {
    mobileMenu: $('.menu'),
    toggleButton: $('.menu-toggle'),
    mobileMenuBreakpoint: 900
  };

  // Modal
  myLanding.orderModal = $('.modal');
  myLanding.modalToggler = $('[data-toggle="modal"]');
  myLanding.modalToggler.click(function (e) {
    e.preventDefault();
    myLanding.orderModal.fadeToggle();
    $('body').toggleClass('is-modal-open');
  });
});

