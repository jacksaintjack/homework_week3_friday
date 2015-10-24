var inputValues = [];
var convertedValues;
var answer;
///Clear Button
document.getElementById('clear').addEventListener('click', function(){
  return document.getElementById('displayArea').innerText = 0
  return inputValues = [];
});

///Row Two Buttons Functions
document.getElementById('seven').addEventListener('click', function(){
 document.getElementById('displayArea').innerText = "7";
 return inputValues.push("7");
});

document.getElementById('eight').addEventListener('click', function(){
 document.getElementById('displayArea').innerText = 8;
 return inputValues.push("8");
});

document.getElementById('nine').addEventListener('click', function(){
 document.getElementById('displayArea').innerText = 9;
 return inputValues.push(9);
});

document.getElementById('divide').addEventListener('click', function(){
 document.getElementById('displayArea').innerText = "/";
 return inputValues.push("/");
});

///Row Three Buttons Functions
document.getElementById('four').addEventListener('click', function(){
  document.getElementById('displayArea').innerText = 4;
  return inputValues.push(4);
});

document.getElementById('five').addEventListener('click', function(){
  document.getElementById('displayArea').innerText = 5;
  return inputValues.push(5);
});

document.getElementById('six').addEventListener('click', function(){
  document.getElementById('displayArea').innerText = 6;
  return inputValues.push(6);
});

document.getElementById('multiply').addEventListener('click', function(){
  document.getElementById('displayArea').innerText = "*";
  return inputValues.push("*");
});

///Row Four Buttons Functions
document.getElementById('one').addEventListener('click', function(){
  document.getElementById('displayArea').innerText = 1;
  return inputValues.push(1);
});

document.getElementById('two').addEventListener('click', function(){
 document.getElementById('displayArea').innerText = 2;
 return inputValues.push(2);
});

document.getElementById('three').addEventListener('click', function(){
 document.getElementById('displayArea').innerText = 3;
 return inputValues.push(3);
});

document.getElementById('subtract').addEventListener('click', function(){
 document.getElementById('displayArea').innerText = "-";
 return inputValues.push("-");
});

///Row Four Buttons Functions
document.getElementById('zero').addEventListener('click', function(){
 document.getElementById('displayArea').innerText = 0;
 return inputValues.push(0);
});

document.getElementById('decimal').addEventListener('click', function(){
 document.getElementById('displayArea').innerText = ".";
 return inputValues.push(".");
});


document.getElementById('add').addEventListener('click', function(){
 document.getElementById('displayArea').innerText = "+";
 return inputValues.push("+");
});

//The equal function


document.getElementById('equal').addEventListener('click', function(){
  if(inputValues.length === 3){
  answer = eval(inputValues[0] + inputValues[1] + inputValues[2]);
} else if (inputValues.length === 5){
  answer = eval((inputValues[0] + inputValues[1] + inputValues[2]) + (inputValues[3] + inputValues[4]));
} else if(inputValues.length === 7){
  answer = eval((inputValues[0] + inputValues[1] + inputValues[2]) + (inputValues[3] + inputValues[4]) +
    (inputValues[5] + inputValues[6]));
}else if(inputValues.length === 9){
  answer = eval((inputValues[0] + inputValues[1] + inputValues[2]) + (inputValues[3] + inputValues[4]) +
    (inputValues[5] + inputValues[6]) + (inputValues[7] + inputValues[8]));
  document.getElementById('displayArea').innerText = answer;
 return answer;
});
