var d = document
var container = $('.thanks-container')
var bt_container = d.createElement('div')
bt_container.classList.add('container')

var content_fr = '<img class="thx-close close" src="../dist/asset/img/icon-close.svg"> \
<h4>Remerciements</h4> \
<p><b>Comité de Direction :</b> Hilde Eggermont (Plateforme Belge pour la Biodiversité, Institut Royal des Sciences Naturelles de Belgique), Marc Herremans (Natuurpunt), Jean-Yves Paquet (Natagora), Olga Szczodry (WWF-Belgique - Présidente).</p> \
<p><b>Comité Scientifique :</b> conseils scientifiques dans l’élaboration du chapitre 2, le développement des indices et leur interprétation Lander Baeten (Universiteit Gent), Marc Dufrêne (Université de Liège), Philippe Goffart (Département de l’Étude du milieu naturel et agricole/Service Public de Wallonie - DEMNA/SPW), Marc Herremans (Natuurpunt), René-Marie Lafontaine (Institut Royal des Sciences Naturelles de Belgique), Valentina Marconi (Zoological Society of London), Thomas Neyens (Katholieke Universiteit Leuven, Universiteit Hasselt), Jean-Yves Paquet (Natagora), Pierre Rasmont (Université de Mons), Arco van Strien (Centraal Bureau voor de Statistiek - CBS), Hendrik Segers (Point Focal National pour la Convention sur la Diversité Biologique, Institut Royal des Sciences Naturelles de Belgique - Président).</p> \
<p><b>Comité de Concertation :</b> conseils dans l’élaboration des contenus des chapitres 1 et 3 et relectures Olivier Beck (Bruxelles Environnement), Lionel Delvaux (Inter-Environnement Wallonie), André Heughebaert (Plateforme Belge pour la Biodiversité), Bruno Kestemont (Service Public Fédéral Economie), Frederik Leliaert (Jardin Botanique de Meise), Marc Peeters (Institut Royal des Sciences Naturelles de Belgique), Julien Piqueray (Natagriwal), Xavier Rollin (Département de la Nature et des Forêts/Service Public de Wallonie - DNF/SPW), Anik Schneiders (Instituut voor Natuur- en Bosonderzoek - INBO), Bernard Van Elegem (Agentschap voor Natuur en Bos - ANB), Hilde Eggermont (Plateforme Belge pour la Biodiversité, Institut Royal des Sciences Naturelles de Belgique - Présidente).</p> \
<p><b>Analyse :</b> préparation des données, calculs des indices par espèces et des Index Planète Vivante Antoine Derouaux (Natagora), Kristijn Swinnen (Natuurpunt), Hans Van Calster (INBO), Arco van Strien (Centraal Bureau voor de Statistiek - CBS), Anne Weiserbs (Natagora).</p> \
<p>Nous avons également pu compter sur l’implication et le soutien de nombreuses personnes lors de la rédaction du rapport, et nous souhaitons remercier ces personnes de tout cœur :</p> \
<p><b>Rédaction :</b> Hilde Eggermont (Plateforme Belge pour la Biodiversité, Institut Royal des Sciences Naturelles de Belgique), Olga Szczodry (WWF-Belgique).</p> \
<p><b>Rédaction finale :</b> Pantarein Publishing , Michel Fautsch (Nature in Progress), Esther Favre-Félix (WWF-Belgique), Wendy Schats (WWF-Belgique).</p> \
<p><b>Contributions au texte :</b> Tim Adriaens (Instituut voor Natuur- en Bosonderzoek - INBO), Constance Fastré (Consultante WWF-Belgique), Michel Fautsch (Nature in Progress), Dirk Maes (Instituut voor Natuur- en Bosonderzoek - INBO), Corentin Rousseau (WWF-Belgique),  Sofie Ruysschaert (WWF-Belgique), Marie Suleau (WWF-Belgique), Arno Thomaes (Instituut voor Natuur- en Bosonderzoek - INBO), Pepijn T’Hooft (WWF-Belgique), Sarah Vanden Eede (WWF-Belgique), Sam Van de Poel (Natuurpunt).</p> \
<p>Nous exprimons également notre gratitude aux nombreuses personnes qui ont contribué de façon ponctuelle à ce projet, lui permettant ainsi d’aboutir :</p> \
<p>Yvan Barbier (Département de l’Étude du milieu naturel et agricole/Service Public de Wallonie - DEMNA/SPW), Hubert Bedoret (Natagriwal), Dimitri Brosens (Plateforme Belge pour la Biodiversité, Instituut voor Natuur- en Bosonderzoek - INBO), Maxime Coupremanne (Plateforme Belge pour la Biodiversité, Département de l’Étude du milieu naturel et agricole/Service Public de Wallonie - DEMNA/SPW), Céline De Caluwé (WWF-Belgique), Anne-Kristine de Caritat (Springtime), Geert Deknijf (Instituut voor Natuur- en Bosonderzoek - INBO), Louis-Marie Delescaille (Département de l’Étude du milieu naturel et agricole/Service Public de Wallonie - DEMNA/SPW), Luc Derochette (Département de l’Étude du milieu naturel et agricole/Service Public de Wallonie - DEMNA/SPW), Sarah Doornbos (WWF-Nederland), Laurent Drijvers (bénévole WWF-Belgique), Morgane Folshweiller (Université de Mons), Sandrine Godefroid (Jardin Botanique de Meise), Eric Graitson (Natagora), Jan Haelters (Institut Royal des Sciences Naturelles de Belgique - IRSNB), David Ideler (bénévole WWF-Belgique), Iliana Janssens (WWF-Belgique), Thierry Kinet (Natagora), Nicolas Mayon (Groupe de Travail Gomphus), Louise McRae (Zoological Society of London), Helen Michels (Instituut voor Natuur- en Bosonderzoek - INBO), Gregory Motte (Département de l’Étude du milieu naturel et agricole/Service Public de Wallonie - DEMNA/SPW), Natasja Oerlemans (WWF-Nederland), Paula Oset (Vlaams Instituut voor de Zee - VLIZ), Lennert Schepers (Vlaams Instituut voor de Zee - VLIZ), Dries Van de Loock (Consultant WWF-Belgique), Lara Van de Merckt (bénévole WWF-Belgique), Wouter Van Landuyt (Instituut voor Natuur- en - INBO), Wim Veraghtert (Natuurpunt) \
En enfin, un énorme merci est destiné à tous les observateurs volontaires contribuant chaque jour à faire vivre la plateforme obervations.be. Ils sont les piliers de ce projet, à la source des données : ce rapport n’aurait pas été possible sans eux. Merci de contribuer activement à la préservation de notre patrimoine naturel.</p>'

var content_nl = '<img class="thx-close close" src="../dist/asset/img/icon-close.svg"> \
<h4>Dankbetuiging</h4> \
<p><b>Bestuurscomité :</b> Hilde Eggermont (Belgisch Biodiversiteitsplatform, Koninklijk Belgisch Instituut voor Natuurwetenschappen), Marc Herremans (Natuurpunt), Jean-Yves Paquet (Natagora), Olga Szczodry (WWF-België - Voorzitter).</p> \
<p><b>Wetenschappelijk comité :</b> wetenschappelijk advies bij de uitwerking van hoofdstuk 2, de ontwikkeling van indexen en hun interpretatie Lander Baeten (Universiteit Gent), Marc Dufrêne (Université de Liège), Philippe Goffart (Département de l’Étude du milieu naturel et agricole/Service Public de Wallonie - DEMNA/SPW), Marc Herremans (Natuurpunt), René-Marie Lafontaine (Koninklijk Belgisch Instituut voor Natuurwetenschappen), Valentina Marconi (Zoological Society of London), Thomas Neyens (Katholieke Universiteit Leuven, Universiteit Hasselt), Jean-Yves Paquet (Natagora), Pierre Rasmont (Université de Mons), Arco van Strien (Centraal Bureau voor de Statistiek - CBS), Hendrik Segers (Nationaal Knooppunt voor het Verdrag inzake Biologische Diversiteit, Koninklijk Belgisch Instituut voor Natuurwetenschappen - Voorzitter).</p> \
<p><b>Overlegcomité :</b> advies bij het uitwerken van de inhoud van hoofdstuk 1 en 3 en proeflezen Olivier Beck (Leefmilieu Brussel), Lionel Delvaux (Inter-Environnement Wallonie), André Heughebaert (Belgisch Biodiversiteitsplatform), Bruno Kestemont (Federale Overheidsdienst Economie), Frederik Leliaert (Plantentuin Meise), Marc Peeters (Koninklijk Belgisch Instituut voor Natuurwetenschappen), Julien Piqueray (Natagriwal), Xavier Rollin (Département de la Nature et des Forêts/Service Public de Wallonie - DNF/SPW), Anik Schneiders (Instituut voor Natuur- en Bosonderzoek - INBO), Bernard Van Elegem (Agentschap voor Natuur en Bos - ANB), Hilde Eggermont (Belgisch Biodiversiteitsplatform, Koninklijk Belgisch Instituut voor Natuurwetenschappen - Voorzitter).</p> \
<p><b>Analyse :</b> voorbereiding van de gegevens, berekening van de indexen per ort en van de Living Planet Indexen Antoine Derouaux (Natagora), Kristijn Swinnen (Natuurpunt), Hans Van Calster (Instituut voor Natuur- en Bosonderzoek - INBO), Arco van Strien (Centraal Bureau voor de Statistiek - CBS), Anne Weiserbs (Natagora).</p> \
<p>Nous avons également pu compter sur l’implication et le soutien de nombreuses personnes lors de la rédaction du rapport, et nous souhaitons remercier ces personnes de tout cœur :</p> \
<p><b>Redactie :</b> Hilde Eggermont (Belgisch Biodiversiteitsplatform, Koninklijk Belgisch Instituut voor Natuurwetenschappen), Olga Szczodry (WWF-België).</p> \
<p><b>Eindredactie :</b> Pantarein Publishing, Michel Fautsch (Nature in Progress), Esther Favre-Félix (WWF-België), Wendy Schats (WWF-België).</p> \
<p><b>Tekst :</b> Tim Adriaens (Instituut voor Natuur- en Bosonderzoek - INBO), Constance Fastré (consulent WWF-België), Michel Fautsch (Nature in Progress), Dirk Maes (Instituut voor Natuur- en Bosonderzoek - INBO), Corentin Rousseau (WWF-België), Sofie Ruysschaert (WWF-België), Marie Suleau (WWF-België), Arno Thomaes (Instituut voor Natuur- en Bosonderzoek - INBO), Pepijn T’Hooft (WWF-België), Sarah Vanden Eede (WWF-België), Sam Van de Poel (Natuurpunt).</p> \
<p>Naast de mensen die deel uitmaken van de comités en het redactieteam (zie pagina 2), willen we graag ook volgende personen bedanken voor hun bijdrage :</p> \
<p>Yvan Barbier (Département de l’Étude du milieu naturel et agricole/Service Public de Wallonie - DEMNA/SPW), Hubert Bedoret (Natagriwal), Dimitri Brosens (Belgisch Biodiversiteitsplatform, Instituut voor Natuur- en Bosonderzoek - INBO), Maxime Coupremanne (Belgisch Biodiversiteitsplatform, Département de l’Étude du milieu naturel et agricole/Service Public de Wallonie - DEMNA/SPW), Céline De Caluwé (WWF-België), Anne-Kirstine de Caritat (Springtime), Geert Deknijf (Instituut voor Natuur- en Bosonderzoek - INBO), Louis-Marie Delescaille (Département de l’Étude du milieu naturel et agricole/Service Public de Wallonie - DEMNA/SPW), Luc Derochette (Département de l’Étude du milieu naturel et agricole/Service Public de Wallonie - DEMNA/SPW), Sarah Doornbos (WWF-Nederland), Laurent Drijvers (vrijwilliger WWF-België), Morgane Folshweiller (Université de Mons), Sandrine Godefroid (Plantentuin Meise), Eric Graitson (Natagora), Jan Haelters (Koninklijk Belgisch Instituut voor Natuurwetenschappen - KBIN), David Ideler (vrijwilliger WWF-België), Iliana Janssens (WWF-België), Thierry Kinet (Natagora), Nicolas Mayon (Werkgroep Gomphus), Louise McRae (Zoological Society of London), Helen Michels (Instituut voor Natuur- en Bosonderzoek - INBO), Gregory Motte (Département de l’Étude du milieu naturel et agricole/Service Public de Wallonie - DEMNA/SPW), Natasja Oerlemans (WWF-Nederland), Paula Onet (Vlaams Instituut voor de Zee - VLIZ), Lennert Schepers (Vlaams Instituut voor de Zee - VLIZ), Dries Van de Loock (consulent WWF-België), Lara Van de Merckt (vrijwilliger WWF-België), Wouter Van Landuyt (Instituut voor Natuur- en Bosonderzoek - INBO), Wim Veraghtert (Natuurpunt). \
We bedanken eveneens de vrijwilligers die met hun veldobservaties hebben bijgedragen aan het platform waarnemingen.be: zonder hen was dit rapport niet mogelijk geweest.</p>'

function view_thanks_box(lang) {
  if (lang === "fr") {
    adding_content(content_fr)
  } else if (lang === "nl") {
    adding_content(content_nl)
  } else {
    adding_content(content_fr)
  }
}

function adding_content(content) {
  var top = $(window).scrollTop()
  var width = $(container).width()
  container.append(bt_container)
  container[0].firstChild.innerHTML = '<div class="row justify-content-center"><div class="col-md-8 thanks-container__col overflow-scroll"></div></div>'
  $('.thanks-container__col').append(content)
  container.css({
    "z-index": "500",
    "position": "absolute",
    "top": top + 60 +"px",
    "left": -width,
    "padding-top": "50px",
    "padding-bottom": "50px",
    "height": "calc(100vh - 60px)"
  })
  container.animate({
    "left": "0",
  }, 500)
  $('body').css('overflow-y', 'hidden');
  $('.mobile-wrapper').css('overflow-y', 'hidden');
  
  $('.thx-close').click(function() {
    container.animate({
      "left": -width,
    }, 500)
    setTimeout(function(){
      container.empty()
      container.css({
        "z-index": "500",
        "position": "absolute",
        "top": "0",
        "padding-top": "0",
        "padding-bottom": "0",
        "height": "0"
      })
    }, 550);
    $('body').css('overflow-y', 'auto');
    $('.mobile-wrapper').css('overflow-y', 'auto');
  })
}