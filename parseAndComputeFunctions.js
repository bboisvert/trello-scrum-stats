/**
 * Created by bertrand on 26/03/17.
 */

/**
 * Computes statistics of one scrit
 * @param sprint is the name of one sprint. Name has to be contained in the begining of a column title
 * @returns {{total: *, terminees: *, enCours: *, restantes: number, nbJoursHomme: (Blob|ArrayBuffer|Array.<T>|string|*|jQuery), velocite: {jByU: string, uByJ: string}}}
 */
var statsSprint = function(sprint) {
  var sommeUnitesSprint = $.map($('.js-list-content').has('h2:contains('+sprint+')').find('.list-card-details').has('span:contains("")').find('a'), function (element) { var n = Number(($(element).text()).slice(-2, -1)); return isNaN(n) ? 0 : n }).reduce(function(a, b) { return a + b; }, 0);
  var sommeUnitesTerminees = $.map($('.js-list-content').has('h2:contains('+sprint+')').find('.list-card-details').has('.card-label-green').has('span:contains("")').find('a'), function (element) { var n = Number(($(element).text()).slice(-2, -1)); return isNaN(n) ? 0 : n }).reduce(function(a, b) { return a + b; }, 0);
  var sommeUnitesEnCours = $.map($('.js-list-content').has('h2:contains('+sprint+')').find('.list-card-details').has('.card-label-yellow').has('span:contains("")').find('a'), function (element) { var n = Number(($(element).text()).slice(-2, -1)); return isNaN(n) ? 0 : n }).reduce(function(a, b) { return a + b; }, 0);
  var unitesRestantesSprint5 = sommeUnitesSprint - sommeUnitesTerminees;
  var nbJoursHomme = $('.js-list-content').has('h2:contains('+sprint+')').find('h2').text().slice(-6, -4);
  return {
    total: sommeUnitesSprint,
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