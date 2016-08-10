$('a[data-click="modal"]').click(function (e) {
  e.preventDefault();
  $('.modal, .mask').addClass('active');
});

$('.mask').click(function () {
  $('.mask, .modal').removeClass('active');
});