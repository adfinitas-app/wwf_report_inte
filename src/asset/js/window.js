$( window ).resize(function() {
  let width = $('.close').parent().outerWidth();
  $('.left-panel').css({left: -width})
});