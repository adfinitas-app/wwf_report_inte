$(document).ready(function() {
  handleLanguage()
});


function handleLanguage() {
  var path = window.location.pathname
  var origin   = window.location.origin;
  var t = document.location.search.substring(1)

  var url = origin == "" ? origin + '/fr' + t : origin + '/fr' + t
  
  if (path == '/') {
      window.location.replace(url);
      language = "fr"
  }
  else if (path.indexOf('/fr') !== -1)
      language = "fr"
  else if (path.indexOf('/nl') !== -1)
      language = "nl"
}

function toggleLanguage(lang) {
  var path = window.location.pathname
  var origin   = window.location.origin;
  var url

  if (lang === "fr") {
    url = origin + '/fr'
  } else if (lang === "nl") {
    url = origin + '/nl'
  }
  window.location.replace(url);
}