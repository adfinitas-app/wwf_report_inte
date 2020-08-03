let images = {
  'faucon': 'https://via.placeholder.com/1300x732',
  'rainette': 'dist/asset/img/rainette-verte.png',
  'loup': 'dist/asset/img/loup.png',
  'alouette': 'dist/asset/img/alouette-des-champs.png'
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
      zoom.fadeOut(400, function() {
        zoom.attr('src', images[index]);
      })
      .fadeIn(500);
    }
  });

  $(this).click(function() {
    let index = this.dataset['image'];
    let width = $(this)
    .parent()
    .outerWidth();
    $('.content').hide();
    $('.content-' + index).show();
    $('.left-panel').animate({
      left: 0
    }, 600);
    console.log('.content-' + index);
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