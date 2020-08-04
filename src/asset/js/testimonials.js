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