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
});

