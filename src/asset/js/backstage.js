$(document).ready(function(){
  $('#how').hide();

  $('#sh-why').click((event) => {
    event.preventDefault();
    $('#how').hide();
    $('#why').fadeIn(500);
  })
  
  $('#sh-how').click((event) => {
    event.preventDefault();
    $('#why').hide();
    $('#how').fadeIn(500);
  })
});