let allCharts = $('.ipv-chart');
let buttons = $('.ipv-btn');

buttons.each(function() {
  let target = this.dataset['target'];
  $(this).click(function() {
    hideChart()
    $('.ipv-' + target).fadeIn(250);
    $(this).addClass('active');
  });
});

function hideChart() {
  buttons.each(function() {
    $(this).removeClass('active');
  });
  allCharts.each(function() {
    $(this).hide();
  });
}