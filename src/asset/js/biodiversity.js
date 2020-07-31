$(document).ready(function(){
  $('#what').hide();

  $('#sh-importance').click((event) => {
    event.preventDefault();
    $('#what').hide();
    $('#importance').fadeIn(500);
  })
  
  $('#sh-what').click((event) => {
    event.preventDefault();
    $('#importance').hide();
    $('#what').fadeIn(500);
  })
});