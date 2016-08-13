$('a[data-click="modal"]').click(function (e) {
  e.preventDefault();
  var modalItem = $(this).data('item');
  $(modalItem).addClass('active');
  $(modalItem).next('.mask').addClass('active');
});

$('.mask').click(function () {
  $('.mask, .modal').removeClass('active');
});