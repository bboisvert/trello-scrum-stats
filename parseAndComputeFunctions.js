/**
 * Created by bertrand on 26/03/17.
 */

if (!Array.prototype.last){
  Array.prototype.last = function(){
    return this[this.length - 1];
  };
};

var extractValueFromCardTitle = function (cardTitle){
    var regex = /\d+U$/g;
    var matches = regex.exec($(cardTitle).text());
    var n = 0;
    if (matches){
      var cardValue = matches.last();
      n = Number(cardValue.slice(0, -1));
    }
    return isNaN(n) ? 0 : n
  };

/**
 * Computes statistics of one scrit
 * @param sprint is the name of one sprint. Name has to be contained in the begining of a column title
 * @returns {{total: *, terminees: *, enCours: *, restantes: number, nbJoursHomme: (Blob|ArrayBuffer|Array.<T>|string|*|jQuery), velocite: {jByU: string, uByJ: string}}}
 */
var computeSprintStats = function(sprintDOM) {
  var joursHommeRegex = /(\d+[\.|,]?\d*)\s*j\-h$/g;
  var sprintTitleLine = sprintDOM.find('h2').first().text();
  var matches = joursHommeRegex.exec(sprintTitleLine);
  nbJoursHomme = matches ? matches[1].replace(",",".") : 0;
  if (nbJoursHomme == 0){
    return null;
  }

  var sommeUnitesSprint =
    $.map(sprintDOM // select the sprint
      .find('.list-card-details').has('span:contains("")').find('.list-card-title'), // map on each card title in the sprint
      extractValueFromCardTitle)
      .reduce(
        function(a, b) {
          return a + b;
        },
        0
      );

  var sommeUnitesTerminees = $.map(sprintDOM.find('.list-card-details').has('.card-label-green').has('span:contains("")').find('.list-card-title'), extractValueFromCardTitle).reduce(function(a, b) { return a + b; }, 0);
  var sommeUnitesEnCours = $.map(sprintDOM.find('.list-card-details').has('.card-label-yellow').has('span:contains("")').find('.list-card-title'), extractValueFromCardTitle).reduce(function(a, b) { return a + b; }, 0);
  var unitesRestantesSprint5 = sommeUnitesSprint - sommeUnitesTerminees;


  //var nbJoursHomme = $('.js-list-content').has('h2:contains('+sprint+')').find('h2').first().text().slice(-6, -4);


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