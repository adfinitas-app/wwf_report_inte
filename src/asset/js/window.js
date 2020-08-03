$(window).resize(function() {
  let panelWidth = $('.close').parent().outerWidth();
  $('.left-panel').css({left: -panelWidth})
  let navWidth = $('.navigation__collapse').parent().outerWidth();
  $('.navigation__collapse').css({left: +navWidth})
  $('.toggler').removeClass('active');
});

$(document).ready(function(){
  let panelWidth = $('.close').parent().outerWidth();
  $('.left-panel').css({left: -panelWidth})
  let navWidth = $('.navigation__collapse').parent().outerWidth();
  $('.navigation__collapse').css({left: +navWidth})
});