//$.map($('.js-list-content').has('h2:contains("Sprint 5")').find('.list-card-details').has('.card-label-green').has('span:contains("BB")').find('a'), function (element) { var n = Number(($(element).text()).slice(-2, -1)); return isNaN(n) ? 0 : n }).reduce(function(a, b) { return a + b; }, 0);

var statsSprint = function(sprint) {
  var sommeUnitesSprint5 = $.map($('.js-list-content').has('h2:contains('+sprint+')').find('.list-card-details').has('span:contains("")').find('a'), function (element) { var n = Number(($(element).text()).slice(-2, -1)); return isNaN(n) ? 0 : n }).reduce(function(a, b) { return a + b; }, 0);
  var sommeUnitesTerminees = $.map($('.js-list-content').has('h2:contains('+sprint+')').find('.list-card-details').has('.card-label-green').has('span:contains("")').find('a'), function (element) { var n = Number(($(element).text()).slice(-2, -1)); return isNaN(n) ? 0 : n }).reduce(function(a, b) { return a + b; }, 0);
  var sommeUnitesEnCours = $.map($('.js-list-content').has('h2:contains('+sprint+')').find('.list-card-details').has('.card-label-yellow').has('span:contains("")').find('a'), function (element) { var n = Number(($(element).text()).slice(-2, -1)); return isNaN(n) ? 0 : n }).reduce(function(a, b) { return a + b; }, 0);
  var unitesRestantesSprint5 = sommeUnitesSprint5 - sommeUnitesTerminees;
  var nbJoursHomme = $('.js-list-content').has('h2:contains('+sprint+')').find('h2').text().slice(-6, -4);
  return {
    total: sommeUnitesSprint5,
    terminees: sommeUnitesTerminees,
    enCours: sommeUnitesEnCours,
    restantes: unitesRestantesSprint5,
    nbJoursHomme: nbJoursHomme,
    velocite: {
      jByU: (nbJoursHomme/sommeUnitesTerminees).toFixed(2),
      uByJ: (sommeUnitesTerminees/nbJoursHomme).toFixed(2)
    }
  }
};

//console.log("prout");
var unitesRestantesSprins5et6 = statsSprint("Sprint 5").restantes + statsSprint("Sprint 6").restantes;
var unitesRestantesSprins6et7 = statsSprint("Sprint 6").restantes + statsSprint("Sprint 7").restantes;


alert(
  "Sprint 4\n"
  + "Total unites: "+statsSprint("Sprint 4").total+"\n"
  + "Unités terminées: "+statsSprint("Sprint 4").terminees+"\n"
  + "Unités en cours: "+statsSprint("Sprint 4").enCours+"\n"
  + "Unités restantes: "+statsSprint("Sprint 4").restantes+"\n"
  + "Nombre de jours-homme: "+statsSprint("Sprint 4").nbJoursHomme+"\n"
  + "Vélocité j/U: "+statsSprint("Sprint 4").velocite.jByU+"\n"
  + "Vélocité U/j: "+statsSprint("Sprint 4").velocite.uByJ+"\n"
  + "\n"
  + "Sprint 5\n"
  + "Total unites: "+statsSprint("Sprint 5").total+"\n"
  + "Unités terminées: "+statsSprint("Sprint 5").terminees+"\n"
  + "Unités en cours: "+statsSprint("Sprint 5").enCours+"\n"
  + "Unités restantes: "+statsSprint("Sprint 5").restantes+"\n"
  + "Nombre de jours-homme: "+statsSprint("Sprint 5").nbJoursHomme+"\n"
  + "Vélocité j/U: "+statsSprint("Sprint 5").velocite.jByU+"\n"
  + "Vélocité U/j: "+statsSprint("Sprint 5").velocite.uByJ+"\n"
  + "\n"
  + "Sprint 6\n"
  + "Total unites: "+statsSprint("Sprint 6").total+"\n"
  + "Unités terminées: "+statsSprint("Sprint 6").terminees+"\n"
  + "Unités en cours: "+statsSprint("Sprint 6").enCours+"\n"
  + "Unités restantes: "+statsSprint("Sprint 6").restantes+"\n"
  + "Nombre de jours-homme: "+statsSprint("Sprint 6").nbJoursHomme+"\n"
  + "Vélocité j/U: "+statsSprint("Sprint 6").velocite.jByU+"\n"
  + "Vélocité U/j: "+statsSprint("Sprint 6").velocite.uByJ+"\n"
  + "\n"
  + "Sprint 7\n"
  + "Total unites: "+statsSprint("Sprint 7").total+"\n"
  + "Unités terminées: "+statsSprint("Sprint 7").terminees+"\n"
  + "Unités en cours: "+statsSprint("Sprint 7").enCours+"\n"
  + "Unités restantes: "+statsSprint("Sprint 7").restantes+"\n"
  + "Nombre de jours-homme: "+statsSprint("Sprint 7").nbJoursHomme+"\n"
  //+ "Vélocité: "+statsSprint("Sprint 7").velocite+"\n"
  + "\n"
  + "Sprint 6 + Sprint 7\n"
  + "Unités restantes: "+unitesRestantesSprins6et7+"\n"
  + "\n"
  + "Sprint P2 Bis\n"
  + "Total unites: "+statsSprint("P2 Bis").total+"\n"
  + "Unités terminées: "+statsSprint("P2 Bis").terminees+"\n"
  + "Unités en cours: "+statsSprint("P2 Bis").enCours+"\n"
  + "Unités restantes: "+statsSprint("P2 Bis").restantes+"\n"
  + "Nombre de jours-homme: "+statsSprint("Sprint 4").nbJoursHomme+"\n");
