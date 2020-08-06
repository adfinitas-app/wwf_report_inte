$(window).resize(function() {
  if ($('.close').parent().position().left != 0) {
    let panelWidth = $('.close').parent().outerWidth();
    $('.left-panel').css({left: -panelWidth})
  }

  if ($('.zoom-panel-mobile').position().left != 0) {
    let panelZoomMobileWidth = $('.zoom-panel-mobile').outerWidth();
    $('.zoom-panel-mobile').css({left: -panelZoomMobileWidth});
  }
  
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
  let panelZoomMobileWidth = $('.zoom-panel-mobile').outerWidth();
  $('.zoom-panel-mobile').css({left: -panelZoomMobileWidth});
  let navWidth = $('.navigation__collapse').parent().outerWidth();
  $('.navigation__collapse').css({left: +navWidth})
  $('.testimonials-text').each(function() {
    if (!$(this).is('#M-HE'))
      $(this).hide();
  });
  $('#HE').show();
  if ($(window).width() < 768) {
    init_ipv();
  }
});