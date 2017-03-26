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



var contentSprint = function(sprint){
  return "<div style=\"float: left; padding-left: 10px\">"+sprint+"<br />"
      + "<ul>" +
    "<li>Total unites: "+statsSprint(sprint).total+"</li>" +
    "<li>Unités terminées: "+statsSprint(sprint).terminees+"</li>" +
    "<li>Unités en cours: "+statsSprint(sprint).enCours+"</li>" +
    "<li>Unités restantes: "+statsSprint(sprint).restantes+"</li>" +
    "<li>Nombre de jours-homme: "+statsSprint(sprint).nbJoursHomme+"</li>" +
    "<li>Vélocité j/U: "+statsSprint(sprint).velocite.jByU+"</li>" +
    "<li>Vélocité U/j: "+statsSprint(sprint).velocite.uByJ+"</li>" +
    "</ul>" +
    "</div>";
};

var content2=
  '<span>' +
    contentSprint("Sprint 4")+
    contentSprint("Sprint 5")+
    contentSprint("Sprint 6")+
    contentSprint("Sprint 7")+
    contentSprint("Sprint 8")+
    contentSprint("Sprint 9")+
    contentSprint("Sprint 10")+
    "</span>"
  ;

var bootstrapModal =
'<div id="myModal" class="modal fade" tabindex="-1" role="dialog">'
+'  <div class="modal-dialog">'
+'  <div class="modal-content">'
+'  <div class="modal-header">'
+'  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
+'<h4 class="modal-title">Modal title</h4>'
+'</div>'
+'<div class="modal-body">'
+'  <p>One fine body&hellip;</p>'
+'</div>'
+'<div class="modal-footer">'
+'  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
+'  <button type="button" class="btn btn-primary">Save changes</button>'
+'</div>'
+'</div><!-- /.modal-content -->'
+'</div><!-- /.modal-dialog -->'
+'</div><!-- /.modal -->';


//'<div id="modal" class="modal fade" tabindex="-1" role="dialog">'+content2+'</div>';

var content =
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
  + "Nombre de jours-homme: "+statsSprint("Sprint 4").nbJoursHomme+"\n";

/*
var mod = '<div id="modal1" class="modalmask">'
+'  <div class="modalbox movedown">'
  +'  <a href="#close" title="Close" class="close">X</a>'
  +'  <h2>Alert</h2>'
+'  <p>Alert alert.</p>'
+'</div>'
  +'</div>';
*/

var mod = '<div id="modal2" class="modalmask">'
+'  <div class="modalbox resize">'
+'  <a href="#close" title="Close" class="close">X</a>'
  +'  <a href="#close" title="Close" class="close">X</a>'
  +'  <h2>Alert</h2>'
+'  <div>'+content2+'</div>'
+'</div>'
  +'</div>';


/*
document.body.innerHTML += '<dialog>'+content2+'<br><button>Close</button></dialog>';
var dialog = document.querySelector("dialog")
dialog.querySelector("button").addEventListener("click", function() {
  dialog.close()
})
dialog.showModal()
  */
document.body.innerHTML += mod;

var node = document.createElement("A");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);
node.setAttribute('href', "#modal2");



//var node = '<button type="button">prout</button>'

document.getElementsByClassName("header-boards-button")[0].appendChild(node);

//document.querySelector("dialog").showModal();

//$( "#dialog" ).showModal();

/*
$( "#dialog" ).dialog({ autoOpen: false });
$( "#dialog" ).dialog( "open" );*/

/*
var iframe = document.createElement('iframe');
iframe.src = content2;
iframe.frameBorder = 0;
iframe.id = "myFrame";
$(iframe).hide();//necessary otherwise frame will be visible
$(iframe).appendTo("body");
*/



console.log("prout");