$('.nav-button').hide();
let headOffSet = $('#header-download')[0].offsetTop;
let ipvOffset = $('#ipv')[0].offsetTop - $('#ipv')[0].offsetHeight;
let done = false;
window.onscroll = function() {
  if (window.pageYOffset > headOffSet) {
    $('.nav-items').addClass('with-button');
    $('.nav-button').show(400);
  } else {
    $('.nav-items').removeClass('with-button');
    $('.nav-button').hide();
  }
  console.log(ipvOffset + ' / ' + window.pageYOffset);
  console.log(done);
  if (window.pageYOffset > ipvOffset && done != true) {
    done = true;
    console.error('Activate');
    init_ipv();
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
    $('.popup').animate({
      right: 40,
    }, 500);
    $('.toggler').removeClass('active');
    if ($(window).width() < 576)
      $('body').css('overflow-y', 'auto');
  } else {
    $('.navigation__collapse').animate({
      left: navWidth - collapseWidth,
    }, 500);
    $('.popup').animate({
      right: +collapseWidth + 40,
    }, 500);
    $('.toggler').addClass('active');
    $('.popup').addClass('nav-open');
    if ($(window).width() < 576)
      $('body').css('overflow-y', 'hidden');
  }
}