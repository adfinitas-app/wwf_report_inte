$("#mini-navbar-first a").on("click", function() {
  var position = $(this)
      .parent()
      .position();
  var width = $(this)
      .parent()
      .width();
  $("#mini-navbar-first .slide1").css({ opacity: 1, left: +position.left, width: width });
  $("#mini-navbar-first a").each(() => {
    $("#mini-navbar-first a").removeClass('active');
  });
  $(this).addClass('active');
});

$("#mini-navbar-first a").on("mouseover", function() {
  var position = $(this)
      .parent()
      .position();
  var width = $(this)
      .parent()
      .width();
  $("#mini-navbar-first .slide2")
      .css({
          opacity: 1,
          left: +position.left,
          width: width
      })
      .addClass("squeeze");
});

$("#mini-navbar-first a").on("mouseout", function() {
  $("#mini-navbar-first .slide2")
      .css({ opacity: 0 })
      .removeClass("squeeze");
});

var currentWidth = $("#mini-navbar-first .nav")
  .find(".active")
  .parent("li")
  .width();
var current = $(".nav .active").position();
$("#mini-navbar-first .slide1").css({ left: +current.left, width: currentWidth });