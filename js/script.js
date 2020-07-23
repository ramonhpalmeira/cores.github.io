window.addEventListener('load', start);

var rangeRed = document.querySelector('#red');
var rangeGreen = document.querySelector('#green');
var rangeBlue = document.querySelector('#blue');

var btRed = document.querySelector('#btRed');
var btGreen = document.querySelector('#btGreen');
var btBlue = document.querySelector('#btBlue');

var cRed = rangeRed.value;
var cGreen = rangeGreen.value;
var cBlue = rangeBlue.value;

var dColor = document.querySelector('#divColor');

function start() {
  btRed.value = cRed;
  btGreen.value = cGreen;
  btBlue.value = cBlue;

  rangeRed.addEventListener('input', setColor);
  rangeGreen.addEventListener('input', setColor);
  rangeBlue.addEventListener('input', setColor);

  setColor();
}

function setColor() {
  cRed = rangeRed.value;
  cGreen = rangeGreen.value;
  cBlue = rangeBlue.value;

  btRed.value = cRed;
  btGreen.value = cGreen;
  btBlue.value = cBlue;

  var rgb = 'rgb(' + cRed + ',' + cGreen + ',' + cBlue + ')';

  dColor.style.backgroundColor = rgb;
}
