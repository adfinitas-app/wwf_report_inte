$('.popup').hide();
setTimeout(function(){
  $('.popup').fadeIn(500);
}, 30000);

$('#popup-close').click((event) => {
  event.preventDefault();
  $('.popup').fadeOut(100);
});