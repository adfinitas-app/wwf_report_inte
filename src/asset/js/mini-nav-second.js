$("#mini-navbar-second a").on("click", function() {
  var position = $(this)
      .parent()
      .position();
  var width = $(this)
      .parent()
      .width();
  $("#mini-navbar-second .slide1").css({ opacity: 1, left: +position.left, width: width });
  $("#mini-navbar-second a").each(() => {
    $("#mini-navbar-second a").removeClass('active');
  });
  $(this).addClass('active');
});

$("#mini-navbar-second a").on("mouseover", function() {
  var position = $(this)
      .parent()
      .position();
  var width = $(this)
      .parent()
      .width();
  $("#mini-navbar-second .slide2")
      .css({
          opacity: 1,
          left: +position.left,
          width: width
      })
      .addClass("squeeze");
});

$("#mini-navbar-second a").on("mouseout", function() {
  $("#mini-navbar-second .slide2")
      .css({ opacity: 0 })
      .removeClass("squeeze");
});

var currentWidth = $("#mini-navbar-second .nav")
  .find(".active")
  .parent("li")
  .width();
var current = $(".nav .active").position();
$("#mini-navbar-second .slide1").css({ left: +current.left, width: currentWidth });