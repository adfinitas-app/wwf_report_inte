$('.profile-item').each(function(index) {
  $(this).hover(function() {
    let old = $('.profile-item.active')[0];
    if (this != old) {
      $('.profile-item').each(function() {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
      $('.testimonials-text').each(function() {
        $(this).hide();
      });
      $('#' + this.dataset['target']).fadeIn(200);
    }
  });
});

let slideId = ["M-HE", "M-HS", "M-JYP", "M-MH", "M-OS"];

$('#testimonials-slick').slick({
  infinite: false,
  "slidesToShow": 1,
  "slidesToScroll": 1,
  "centerMode": true,
  "mobileFirst": true,
  "nextArrow": null,
  "prevArrow": null
});

let old = null;
let caret = true;
$('#testimonials-slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
  if (old != currentSlide) {
    $('.testimonials-text.mob').each(function() {
      $(this).hide();
    });
    $('#' + slideId[currentSlide]).fadeIn(200)
    if (caret == true || currentSlide != 0) {
      $('#testimonials-caret').fadeOut(100);
      caret = false;
    } else {
      $('#testimonials-caret').fadeIn(100);
      caret = true;
    }
    old = currentSlide;
  }
});