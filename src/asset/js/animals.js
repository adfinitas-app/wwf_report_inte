let images = {
  'faucon': '../dist/asset/img/faucon-pelerin.jpg',
  'rainette': '../dist/asset/img/rainette-verte.jpg',
  'loup': '../dist/asset/img/loup.jpg',
  'alouette': '../dist/asset/img/alouette-des-champs.jpg'
}
let zoom = $('.zoom__background');

let width = $('.close')
.parent()
.outerWidth();
$('.left-panel').css({left: -width})

$('.btn-animals').each(function(index) {
  
  $(this).mouseenter(function() {
    let index = this.dataset['image'];
    if (zoom.attr('src') != images[index]) {
      zoom.fadeOut(200, function() {
        zoom.attr('src', images[index]);
      })
      .fadeIn(200);
      $('.btn-animals').each(function() {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
    }
  });
  
  $(this).click(function() {
    let index = this.dataset['image'];
    $('.content').hide();
    $('.content-' + index).show();
    $('.left-panel').animate({
      left: 0
    }, 600);
  })
});

$('.close').click(function() {
  let width = $(this)
  .parent()
  .outerWidth();
  $('.left-panel').animate({
    left: -width
  }, 600);
});

$('#zoom-slick').slick({
  infinite: false,
  "slidesToShow": 1,
  "slidesToScroll": 1,
  "centerMode": false,
  "mobileFirst": false,
  "nextArrow": null,
  "prevArrow": null
});

let oldZoom = null;
let caretZoom = true;
$('#zoom-caret-l').hide();
$('#zoom-slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
  // if (currentSlide != 0) {
  //   $('#zoom-caret-r').fadeOut(100);
  //   caretZoom = false;
  // } else {
  //   $('#zoom-caret-r').fadeIn(100);
  //   caretZoom = true;
  // }
  if (currentSlide != 4) {
    $('#zoom-caret-l').fadeOut(100);
    $('#zoom-caret-r').fadeIn(100);
    caretZoom = false;
  } else {
    $('#zoom-caret-l').fadeIn(100);
    $('#zoom-caret-r').fadeOut(100);
    caretZoom = true;
  }
oldZoom = currentSlide;
});

$('.zoom-slide').click(function() {
  if (this.dataset['target'] != null) {
    $('.content').hide();
    $('.content-' + this.dataset['target']).show();
    $('.zoom-panel-mobile').animate({
      left: -width
    }, 600);
    $('body').css('overflow-y', 'hidden');
    $('.mobile-wrapper').css('overflow-y', 'hidden');
  }
});

$('.zoom-mobile-close').click(function() {
  let panelZoomMobileWidth = $('.zoom-panel-mobile').outerWidth();
  $('.zoom-panel-mobile').animate({
    left: -panelZoomMobileWidth
  }, 600);
  $('body').css('overflow-y', 'auto');
  $('.mobile-wrapper').css('overflow-y', 'auto');
});