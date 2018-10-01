$(document).ready(function () {
  var pathname = window.location.pathname;
  $('.menu > a[href="' + pathname + '"]').addClass('active');

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

