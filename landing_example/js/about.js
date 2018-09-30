$(document).ready(function () {
  var pathname = window.location.pathname;
  $('.menu > a[href="' + pathname + '"]').addClass('active');
});

