$(document).ready(function(){
  $('#how').hide();

  $('#sh-why').click((event) => {
    event.preventDefault();
    $('#how').hide();
    $('#how').addClass('d-sm-none');
    $('#why').fadeIn(500);
  })
  
  $('#sh-how').click((event) => {
    event.preventDefault();
    $('#why').hide();
    $('#how').removeClass('d-sm-none');
    $('#how').fadeIn(500);
  })
});