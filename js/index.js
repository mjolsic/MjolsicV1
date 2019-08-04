//elementsAddEventListener(document, "click", "seeIfClicked", event);


var musicPlayerContainer = document.querySelector('.musicPlayerContainer')
function elementsAddEventListener(input, events, anonymousFunction, parameters){
  if (parameters){
    input.addEventListener(events, function(){window[anonymousFunction](parameters)});
  }
  else{
    input.addEventListener(events, window[anonymousFunction]);
  }
}

function seeIfClicked(event){
  //If condition for checkboxes on table being clicked

    //console.log(event.target)

}
