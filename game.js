// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

function makeBlue (evt) {
  evt.target.classList.toggle('blue')
  updateCounts()  
}

function hide (evt) {
  evt.target.classList.toggle('invisible')
  updateCounts()
}

function getAmountOfElements(type) {
  return document.getElementsByClassName(type).length;
}

function updateCounts () {
  var totals = {
    blue: getAmountOfElements('blue'),
    green: getAmountOfElements('green'),
    invisible: getAmountOfElements('invisible')
  };
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
 document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
