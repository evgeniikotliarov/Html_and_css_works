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

  document.getElementById('request_project').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var name = document.getElementById('name').value;
    var phone_or_email = document.getElementById('phone_or_email').value;
    var about_project = document.getElementById('about_project').value;
    var file = document.getElementById('file_input').files[0];

    var formData = new FormData();
    formData.append('name', name);
    formData.append('phone_or_email', phone_or_email);
    formData.append('about_project', about_project);
    formData.append('file', file);

    fetch('http://localhost:63342/send', {
      method: 'POST',
      body: formData
    }).then(function (value) {
      myLanding.showFormSuccess();
    }).catch(function (reason) {
      myLanding.showFormError();
    })
  })
});
















