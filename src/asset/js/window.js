$(window).resize(function() {
  // todo: Rework panel animation on window resize
  let panelWidth = $('.close').parent().outerWidth();
  $('.left-panel').css({left: -panelWidth})
  
  let navWidth = $('.navigation__collapse').parent().outerWidth();
  let collapseWidth = $('.navigation__collapse').outerWidth();
  if (!$('.toggler').hasClass('active'))
    $('.navigation__collapse').css({left: +navWidth})
  else
    $('.navigation__collapse').css({left: navWidth - collapseWidth})
});

$(document).ready(function(){
  let panelWidth = $('.close').parent().outerWidth();
  $('.left-panel').css({left: -panelWidth})
  let navWidth = $('.navigation__collapse').parent().outerWidth();
  $('.navigation__collapse').css({left: +navWidth})
  $('.testimonials-text').each(function() {
    $(this).hide();
  });
  $('#HE').show();
});