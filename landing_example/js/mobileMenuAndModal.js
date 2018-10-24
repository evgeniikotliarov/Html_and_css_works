$(document).ready(function () {
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
  //file upload
  myLanding.showFormSuccess = function () {
    $('.modal-title h2').html("Thank you!<br/> We'll contact you soon!");
    $('#request_project').hide();
    setTimeout(function (e) {
      $('.modal-title h2').html("You want more?");
      document.getElementById("request_project").reset();
      $('#request_project').fadeIn(300);
    }, 3000);
  };
  myLanding.showFormError = function () {
    $('.modal-title h2').html("Something went wrong, please try again");
    $('#file-name').html("");

  };
  $('#file_input').on('change', function (e) {
    $('#file-name').html(this.files[0].name);
  });
});
