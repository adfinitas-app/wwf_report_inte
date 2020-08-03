$('.nav-button').hide();
let headOffSet = $('#header-download')[0].offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > headOffSet) {
    $('.nav-items').addClass('with-button');
    $('.nav-button').show(400);
  } else {
    $('.nav-items').removeClass('with-button');
    $('.nav-button').hide();
  }
};

$('.toggler').click(function() {
  toggleNavbar();
});

function toggleNavbar() {
  let navWidth = $('.navigation__collapse').parent().outerWidth();
  let collapseWidth = $('.navigation__collapse').outerWidth();
  let navL = $('.navigation__collapse').position().left;
  if (navL <= navWidth - collapseWidth) {
    $('.navigation__collapse').animate({
      left: +navWidth,
    }, 500);
    $('.toggler').removeClass('active');
    if ($(window).width() < 576)
      $('body').css('overflow-y', 'auto');
  } else {
    $('.navigation__collapse').animate({
      left: navWidth - collapseWidth,
    }, 500);
    $('.toggler').addClass('active');
    if ($(window).width() < 576)
      $('body').css('overflow-y', 'hidden');
  }
}