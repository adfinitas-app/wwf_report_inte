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