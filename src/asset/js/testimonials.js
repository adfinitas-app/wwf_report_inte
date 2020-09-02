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
  "centerMode": false,
  "mobileFirst": true,
  "nextArrow": null,
  "prevArrow": null
});

let old = null;
let caret = true;
$('#testimonials-slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
  if (old != currentSlide) {
    // $('.testimonials-text.mob').each(function() {
    //   $(this).hide();
    // });
    // $('#' + slideId[currentSlide]).fadeIn(200)
    if (currentSlide != 4) {
      $('#testimonials-caret-r').fadeIn(100);
    } else {
      $('#testimonials-caret-r').fadeOut(100);
    }
    if (currentSlide != 0) {
      $('#testimonials-caret-l').fadeIn(100);
    } else {
      $('#testimonials-caret-l').fadeOut(100);
    }
    old = currentSlide;
  }
});