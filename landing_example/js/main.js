$(document).ready(function(){
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
        settings:  {
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
    slidesToShow: 4,
    slidesToScroll: 2,
    dotsClass: 'dots-dark',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 700,
        settings:  {
          slidesToShow: 2
        }
      },

      {
        breakpoint: 450,
        settings:  {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
















