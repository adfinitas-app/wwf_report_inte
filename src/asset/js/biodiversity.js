$(document).ready(function(){
  $('#what').hide();

  $('#sh-importance').click((event) => {
    event.preventDefault();
    $('#what').hide();
    $('#what').addClass('d-md-none');
    $('#importance').fadeIn(500);
  })
  
  $('#sh-what').click((event) => {
    event.preventDefault();
    $('#importance').hide();
    $('#what').removeClass('d-md-none');
    $('#what').fadeIn(500);
  })
});