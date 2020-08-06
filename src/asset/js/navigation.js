$('.nav-button').hide();
let headOffSet = $('#header-download')[0].offsetTop;
let ipvOffset = $('#ipv')[0].offsetTop;
let done = false;
window.onscroll = function() {
  if (window.pageYOffset > headOffSet) {
    $('.nav-items').addClass('with-button');
    $('.nav-button').show(400);
  } else {
    $('.nav-items').removeClass('with-button');
    $('.nav-button').hide();
  }
  if (window.pageYOffset > ipvOffset && done != true) {
    done = true;
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

$('.nav-menu a').each(function() {
  let hrefMobile = this.dataset['mobileHref'];
  let href = $(this).attr('href');
  if (hrefMobile != null) {
    if ($(window).width() < 768) {
      $(this).attr('href', hrefMobile);
      $(this).click(function() {
        toggleNavbar();
      });
    } else {
      $(this).click(function() {
        toggleNavbar();
        switch(hrefMobile) {
          case '#why':
          miniFirstReset()
          moveFirst('#sh-why');
          $('#sh-why').addClass('active');
          $('#how').hide();
          $('#how').addClass('d-md-none');
          $('#why').fadeIn(500);
          break;
          case '#how':
          miniFirstReset()
          moveFirst('#sh-how');
          $('#sh-how').addClass('active');
          $('#why').hide();
          $('#how').removeClass('d-md-none');
          $('#how').fadeIn(500);
          break;
          case '#importance':
          miniSecondReset()
          moveSecond('#sh-importance');
          $('#sh-importance').addClass('active');
          $('#what').hide();
          $('#what').addClass('d-md-none');
          $('#importance').fadeIn(500);
          break;
          case '#what':
          miniSecondReset()
          moveSecond('#sh-what');
          $('#sh-what').addClass('active');
          $('#importance').hide();
          $('#what').removeClass('d-md-none');
          $('#what').fadeIn(500);
          break;
          default:
          console.error('Error occured !')
        }
      });
    }
  }
});

function miniFirstReset() {
  $("#mini-navbar-first a").each(() => {
    $("#mini-navbar-first a").removeClass('active');
  });
}

function moveFirst(id) {
  var position = $(id)
      .parent()
      .position();
  var width = $(id)
      .parent()
      .width();
  $("#mini-navbar-first .slide1").css({ opacity: 1, left: +position.left, width: width });
}

function miniSecondReset() {
  $("#mini-navbar-second a").each(() => {
    $("#mini-navbar-second a").removeClass('active');
  });
}

function moveSecond(id) {
  var position = $(id)
      .parent()
      .position();
  var width = $(id)
      .parent()
      .width();
  $("#mini-navbar-second .slide1").css({ opacity: 1, left: +position.left, width: width });
}