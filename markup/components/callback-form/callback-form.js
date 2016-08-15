$(document).ready(function(){
  $('.numbered').numbered({
    mask: '+7 (###) ### - ## - ##',
    placeholder: '+7 (___)  ___  -  __  - __',
    empty: '_'
  });
  $(".js-form").submit(function() {
    var form_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "send.php",
      data: form_data,
      success: function() {
        alert("Ваше сообщение отпрвлено!");
      }
    });
  });
});