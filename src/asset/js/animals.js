let images = {
  'faucon': '',
  'rainette': 'dist/asset/img/rainette-verte.png',
  'loup': 'dist/asset/img/loup.png',
  'alouette': 'dist/asset/img/alouette-des-champs.png'
}
let zoom = $('.zoom__background');

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
});