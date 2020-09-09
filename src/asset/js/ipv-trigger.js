let bool = false
$(window).scroll(function() {
  var hT = $('#ipv').offset().top,
      hH = $('#ipv').outerHeight() / 2,
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH) && bool != true){
      init_ipv();
      bool = true
  }
});