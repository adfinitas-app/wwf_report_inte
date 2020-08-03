$(document).ready(function(){
  $('#what').hide();

  $('#sh-importance').click((event) => {
    event.preventDefault();
    $('#what').hide();
    $('#what').addClass('d-sm-none');
    $('#importance').fadeIn(500);
  })
  
  $('#sh-what').click((event) => {
    event.preventDefault();
    $('#importance').hide();
    $('#what').removeClass('d-sm-none');
    $('#what').fadeIn(500);
  })
});