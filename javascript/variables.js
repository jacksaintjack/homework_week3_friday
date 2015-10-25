//Global Variables
var inputValues = [];
var answer;
var displayArea = document.getElementById('displayArea');
var inputDisplay;
var clearSelect = document.getElementById('clear');
var sevenSelect = document.getElementById('seven');
var eightSelect = document.getElementById('eight');
var nineSelect = document.getElementById('nine');
var divideSelect = document.getElementById('divide');
var fourSelect = document.getElementById('four');
var fiveSelect = document.getElementById('five');
var sixSelect = document.getElementById('six');
var multiplySelect = document.getElementById('multiply');
var oneSelect = document.getElementById('one');
var twoSelect = document.getElementById('two');
var threeSelect = document.getElementById('three');
var subtractSelect = document.getElementById('subtract');
var zeroSelect = document.getElementById('zero');
var decimalSelect = document.getElementById('decimal');
var equalSelect = document.getElementById('equal');
var addSelect = document.getElementById('add');
var displayReturn = function(){
  inputDisplay = inputValues.join("");
  return inputDisplay;
};
var handlerSelect;
var backgroundHandler = function(){
  handlerSelect.style.background = 'rgba(104, 178, 91, 0.7)';
  setTimeout(function(){
  handlerSelect.style.background = '#68B25B';
},100);
};

var colorHandler = function(){
  handlerSelect.style.color = 'white';
  setTimeout(function(){
  handlerSelect.style.color = 'black';
},100);
};
