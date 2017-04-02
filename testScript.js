//$.map($('.js-list-content').has('h2:contains("Sprint 5")').find('.list-card-details').has('.card-label-green').has('span:contains("BB")').find('a'), function (element) { var n = Number(($(element).text()).slice(-2, -1)); return isNaN(n) ? 0 : n }).reduce(function(a, b) { return a + b; }, 0);


var contentSprint = function(sprint){
  var sprintStats = computeSprintStats(sprint)
  return "<div class=\"Sprint\"'><h3>"+sprint+"</h3>"
      + "<ul>" +
    "<li>Total unites: "+sprintStats.total+"</li>" +
    "<li>Unités terminées: "+sprintStats.terminees+"</li>" +
    "<li>Unités en cours: "+sprintStats.enCours+"</li>" +
    "<li>Unités restantes: "+sprintStats.restantes+"</li>" +
    "<li>Nombre de jours-homme: "+sprintStats.nbJoursHomme+"</li>" +
    "<li>Vélocité j/U: "+sprintStats.velocite.jByU+"</li>" +
    "<li>Vélocité U/j: "+sprintStats.velocite.uByJ+"</li>" +
    "</ul>" +
    "</div>";
};

// Build the content of the modal
var content2=
    contentSprint("Sprint 4")+
    contentSprint("Sprint 5")+
    contentSprint("Sprint 6")+
    contentSprint("Sprint 7")+
    contentSprint("Sprint 8")+
    contentSprint("Sprint 9")+
    contentSprint("Sprint 10")+
    contentSprint("Sprint 13")
  ;




//'<div id="modal" class="modal fade" tabindex="-1" role="dialog">'+content2+'</div>';


/*
var mod = '<div id="modal1" class="modalmask">'
+'  <div class="modalbox movedown">'
  +'  <a href="#close" title="Close" class="close">X</a>'
  +'  <h2>Alert</h2>'
+'  <p>Alert alert.</p>'
+'</div>'
  +'</div>';
*/

var mod = '<div id="myModal" class="modal">'
+'  <div class="modal-content">'
+'  <div class="modal-header">'
+'  <span class="close">&times;</span>'
+'<h2>Modal Header</h2>'
+'</div>'
//+     '<span class="close">&times;</span>'
//+'  <a href="#close" title="Close" class="close">X</a>'
+'  <div class="modal-body">'+content2+'</div>'
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
//document.body.innerHTML += mod;
$('body').prepend(mod);

/*
var node = document.createElement("A");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);
node.setAttribute('href', "#modal2");
*/


//var node = '<button type="button">prout</button>'

//document.getElementsByClassName("header-boards-button")[0].appendChild(node);

//$("#modal2").modal();
//$('#modal2').modal();
/*el = document.getElementById("modal2");
el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";*/
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


// Get the modal
var modal = document.getElementById('myModal');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
modal.style.display = "flex";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}