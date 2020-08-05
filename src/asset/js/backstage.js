$(document).ready(function(){
  $('#how').hide();

  $('#sh-why').click((event) => {
    event.preventDefault();
    $('#how').hide();
    $('#how').addClass('d-md-none');
    $('#why').fadeIn(500);
  })
  
  $('#sh-how').click((event) => {
    event.preventDefault();
    $('#why').hide();
    $('#how').removeClass('d-md-none');
    $('#how').fadeIn(500);
  })
});