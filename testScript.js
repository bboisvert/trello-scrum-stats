//$.map($('.js-list-content').has('h2:contains("Sprint 5")').find('.list-card-details').has('.card-label-green').has('span:contains("BB")').find('a'), function (element) { var n = Number(($(element).text()).slice(-2, -1)); return isNaN(n) ? 0 : n }).reduce(function(a, b) { return a + b; }, 0);

/**
 * Computes the stats of one sprint
 * @param sprint JQuery Objet of one Trello column
 * @returns {string}
 */
var contentSprint = function(sprint){
  var sprintStats = computeSprintStats(sprint);

  if (sprintStats) {
    var sprintTitle = sprint.find('.list-header-name').text();
    console.log("Title ", sprintTitle);

    var sprintNumberRegex = /(Sprint\s*\d+)/g;
    var match = sprintNumberRegex.exec(sprintTitle);
    var sprintNumber = match ? match[1] : "No number";

    console.log("sprint : ", sprintTitle);

    return "<div class=\"Sprint\"'><h3>"+sprintNumber+"</h3>"
      + "<table class=\"sprintStatsTable\">" +
      "<tr><td>Total unites: </td><td class=\"sprintStatValue\">"+sprintStats.total+"</td></tr>" +
      "<tr><td>Unités terminées: </td><td class=\"sprintStatValue\">"+sprintStats.terminees+"</td></tr>" +
      "<tr><td>Unités en cours: </td><td class=\"sprintStatValue\">"+sprintStats.enCours+"</td></tr>" +
      "<tr><td>Unités restantes: </td><td class=\"sprintStatValue\">"+sprintStats.restantes+"</td></tr>" +
      "<tr><td>Nombre de jours-homme: </td><td class=\"sprintStatValue\">"+sprintStats.nbJoursHomme+"</td></tr>" +
      "<tr><td>Vélocité j/U: </td><td class=\"sprintStatValue\">"+sprintStats.velocite.jByU+"</td></tr>" +
      "<tr><td>Vélocité U/j: </td><td class=\"sprintStatValue\">"+sprintStats.velocite.uByJ+"</td></tr>" +
      "</table>" +
      "</div>";
  } else {
    return "";
  }

};

var sprints = $('.js-list-content').has('h2:contains(Sprint)');

var content2="";

if (sprints.size() == 0) {
  content2 += "Aucun sprint";
} else {
  sprints.each(function (){
    content2 += contentSprint($( this ));
  });
}

// build the modal
var mod = '<div id="trelloScrumStatsModal" class="modal">'
+'  <div class="modal-content">'
+'  <div class="modal-header">'
+'  <span class="close">&times;</span>'
+'<h2>Avancement et vélocité projet</h2>'
+'</div>'
+'  <div class="modal-body">'+content2+'</div>'
+'</div>'
  +'</div>';

// remove old #trelloScrumStatsModal if exists
$('#trelloScrumStatsModal').remove();

// add the new modal to the DOM
$('body').prepend(mod);


// Get the modal
var modal = document.getElementById('trelloScrumStatsModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
modal.style.display = "flex";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};