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
        breakpoint: 400,
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
          slidesToShow: 1
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
  myLanding.hideMenu = function(e){
    myLanding.mobileMenu.hide();
  };
  myLanding.toggleMenu = function(e){
    myLanding.mobileMenu.slideToggle(300);
  };
  myLanding.showMenu = function(e) {
    myLanding.mobileMenu.show();
  };
  myLanding.toggleMenuOnWindowResize = function(e){
    if(window.innerWidth > myLanding.mobileMenuBreakpoint) {
      myLanding.showMenu();
      myLanding.toggleButton.addClass('open');
    } else {
      myLanding.hideMenu();
      myLanding.toggleButton.removeClass('open');
    }
  };

  myLanding.toggleMenuOnWindowResize();

  myLanding.toggleButton.click(function(e) {
    e.preventDefault();
    myLanding.toggleButton.toggleClass('open');
    myLanding.toggleMenu();
  });

  $(window).resize(function(e){
    myLanding.toggleMenuOnWindowResize();
  });

  $(document).click(function(e) {
    var targetIsMenuOrButton = $(e.target).closest('.menu').length || !$(e.target).closest('.menu-toggle').length;
    if(targetIsMenuOrButton && window.innerWidth < myLanding.mobileMenuBreakpoint) {
      myLanding.hideMenu();
      myLanding.toggleButton.removeClass('open');
    }
  });
  myLanding.stickyHeader = $('.sticky-header');
  myLanding.minHeightForScroll = window.outerHeight-10;

  myLanding.toggleStickyMenu = function(e) {
    var isScrollEnough = window.pageYOffset > myLanding.minHeightForScroll;
    if(isScrollEnough) {
      myLanding.stickyHeader.hide().addClass('sticked').show();
    } else {
      myLanding.stickyHeader.removeClass('sticked');
    }
  };
  myLanding.didScroll = false;
  myLanding.toggleStickyHeader = function() {
    myLanding.didScroll = true;
    myLanding.toggleStickyMenu();

  };
  window.onscroll = myLanding.toggleStickyHeader;

  // debounce scroll event
  setInterval(function() {
    if(myLanding.didScroll) {
      myLanding.didScroll = false;
    }
  }, 100);

  // Modal
  myLanding.orderModal = $('.modal');
  myLanding.modalToggler = $('[data-toggle="modal"]');
  myLanding.modalToggler.click(function(e){
    e.preventDefault();
    myLanding.orderModal.fadeToggle();
    $('body').toggleClass('is-modal-open');
  });

  // upload file
  myLanding.showFormSuccess = function () {
    $('.modal-title h2').html("Thank you!");
    $('#request_project').hide();
    setTimeout(function(e){
      $('.modal-title h2').html("Оrder one more project");
      document.getElementById("request_project").reset();
      $('#request_project').fadeIn(300);
    }, 3000);
  };
  myLanding.showFormError = function () {
    $('.modal-title h2').html("Something went wrong!");
    $('#file-name').html("");
  };
  $('#file_input').on('change', function (e) {
    $('#file-name').html(this.file[0].name)
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
















