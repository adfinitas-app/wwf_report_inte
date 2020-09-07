let allCharts = $('.ipv-chart');
let buttons = $('.ipv-btn');
let containerHelp = $('.ipv-help-container')
let currentTarget = 'all'

let text = {
  all: {
    fr: "Cet index est composé de 283 espèces. 92 de ces espèces sont des oiseaux, 3 des mammifères, 34 des sauterelles et criquets, 62 des odonates (libellules et demoiselles), 6 des reptiles, 12 des amphibiens, et 74 des papillons de jour. La tendance générale de cet index est une augmentation modérée de 0,2 % par an. Sur les 10 dernières années, cette tendance est considérée comme stable.",
    nl: "Deze index is samengesteld uit 283 soorten: 92 soorten vogels, 3 soorten zoogdieren, 34 soorten sprinkhanen en krekels, 62 soorten Odonata (libellen en juffers), 6 soorten reptielen, 12 soorten amfibieën en 74 soorten dagvlinders. De algemene trend van deze index is een gematigde stijging (+0,2% per jaar). De afgelopen 10 jaar wordt deze trend als stabiel beschouwd."
  },
  field: {
    fr: "Cet index est composé de 19 espèces d’oiseaux. La tendance générale de cet index est un déclin modéré de -3,3 % par an. Sur les 10 dernières années, cette tendance est de -3.5 % par an, en déclin modéré également.",
    nl: "Deze index is samengesteld uit 19 soorten vogels. De algemene trend van deze index is een gematigde daling (-3,3% per jaar). Deze trend bedraagt de laatste 10 jaar -3,5% per jaar en vertoont dus ook een gematigde daling."
  },
  humidity: {
    fr: "Cet index est composé de 80 espèces. 10 de ces espèces sont des oiseaux, 62 des odonates, 4 des sauterelles et criquets, et 4 des amphibiens. La tendance générale de cet index est une augmentation modérée de 1,4 % par an. Sur les 10 dernières années, cette tendance est stable.",
    nl: "Deze index is samengesteld uit 80 soorten: 10 soorten vogels, 4 soorten sprinkhanen en krekels, 62 soorten Odonata (libellen en juffers) en 4 soorten amfibieën. De algemene trend van deze index is een gematigde stijging (+1,4% per jaar). De afgelopen 10 jaar is deze trend stabiel."
  },
  forest: {
    fr: "Cet index est composé de 37 espèces. 25 de ces espèces sont des oiseaux, 1 mammifère, 2 des sauterelles et criquets, 1 amphibien, et 8 des papillons de jour. La tendance généralede cet index est un déclin modéré de 1,1 % par an. Sur les 10 dernières années, cette tendance est stable.",
    nl: "Deze index is samengesteld uit 37 soorten: 25 soorten vogels, 1 soort zoogdier, 2 soorten sprinkhanen en krekels, 1 soort amfibie en 8 soorten dagvlinders. De algemene trend van deze index is een gematigde daling (-1,1% per jaar). De afgelopen 10 jaar is deze trend stabiel."
  },
}

buttons.each(function() {
  let target = this.dataset['target'];
  $(this).click(function() {
    hideChart()
    $('.ipv-' + target).fadeIn(250);
    $(this).addClass('active');
    currentTarget = target
  });
});

$('#ipv-help').hover(function() {
  if ($(this).hasClass('fr')) {
    containerHelp.text(text[currentTarget]['fr'])
  } else if ($(this).hasClass('nl')) {
    containerHelp.text(text[currentTarget]['nl'])
  } else {
    containerHelp.text(text[currentTarget]['fr'])
  }
  containerHelp.removeClass('d-none')
  containerHelp.mouseleave(function() {
    $(this).addClass('d-none')
  })
})

function hideChart() {
  buttons.each(function() {
    $(this).removeClass('active');
  });
  allCharts.each(function() {
    $(this).hide();
  });
}