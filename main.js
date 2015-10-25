var inputValues = [];
var answer;
var displayArea = document.getElementById('displayArea')
var inputDisplay;

var displayReturn = function(){
  inputDisplay = inputValues.join(" ");
  return inputDisplay;
}


///Clear Button
document.getElementById('clear').addEventListener('click', function(){
  displayArea.innerText = 0
  return inputValues = [];
});

///Row Two Buttons Functions
document.getElementById('seven').addEventListener('click', function(){
  displayReturn();
  displayArea.innerText = inputDisplay
  return inputValues.push(7);
});

document.getElementById('eight').addEventListener('click', function(){
  displayReturn();
  displayArea.innerText = inputDisplay;
  return inputValues.push(8);
});

document.getElementById('nine').addEventListener('click', function(){
  displayReturn();
  displayArea.innerText = inputDisplay;
  return inputValues.push(9);
});

document.getElementById('divide').addEventListener('click', function(){
  displayReturn();
  displayArea.innerText = inputDisplay;
  return inputValues.push("/");
});

///Row Three Buttons Functions
document.getElementById('four').addEventListener('click', function(){
  displayReturn();
  displayArea.innerText = inputDisplay;
  return inputValues.push(4);
});

document.getElementById('five').addEventListener('click', function(){
  displayReturn();
  displayArea.innerText = inputDisplay;
  return inputValues.push(5);
});

document.getElementById('six').addEventListener('click', function(){
  displayReturn();
  displayArea.innerText = inputDisplay;
  return inputValues.push(6);
});

document.getElementById('multiply').addEventListener('click', function(){
  displayReturn();
  displayArea.innerText = inputDisplay;
  return inputValues.push("*");
});

///Row Four Buttons Functions
document.getElementById('one').addEventListener('click', function(){
  displayReturn();
  displayArea.innerText = inputDisplay;
  return inputValues.push(1);
});

document.getElementById('two').addEventListener('click', function(){
  displayReturn();
  displayArea.innerText = inputDisplay;
  return inputValues.push(2);
});

document.getElementById('three').addEventListener('click', function(){
  displayReturn();
  displayArea.innerText = inputDisplay;
  return inputValues.push(3);
});

document.getElementById('subtract').addEventListener('click', function(){
  displayReturn();
  displayArea.innerText = inputDisplay;
  return inputValues.push("-");
});

///Row Four Buttons Functions
document.getElementById('zero').addEventListener('click', function(){
  displayReturn();
  displayArea.innerText = inputDisplay;
  return inputValues.push(0);
});

document.getElementById('decimal').addEventListener('click', function(){
  displayReturn();
  displayArea.innerText = inputDisplay;
  return inputValues.push(".");
});


document.getElementById('add').addEventListener('click', function(){
  displayReturn();
  displayArea.innerHTML = inputDisplay;
  return inputValues.push("+");
});

//The equal function. evals the array


document.getElementById('equal').addEventListener('click', function(){
  if(inputValues.length === 3){
  answer = eval(inputValues[0] + inputValues[1] + inputValues[2]);
  } else if (inputValues.length === 5){
  answer = eval((inputValues[0] + inputValues[1] + inputValues[2]) + (inputValues[3] + inputValues[4]));
  } else if(inputValues.length === 7){
  answer = eval((inputValues[0] + inputValues[1] + inputValues[2]) + (inputValues[3] + inputValues[4]) +
    (inputValues[5] + inputValues[6]));
  } else if(inputValues.length === 9){
  answer = eval((inputValues[0] + inputValues[1] + inputValues[2]) + (inputValues[3] + inputValues[4]) +
    (inputValues[5] + inputValues[6]) + (inputValues[7] + inputValues[8]));
  } else if(inputValues.length === 11){
    answer = eval((inputValues[0] + inputValues[1] + inputValues[2]) + (inputValues[3] + inputValues[4]) +
      (inputValues[5] + inputValues[6]) + (inputValues[7] + inputValues[8]) + (inputValues[9] + inputValues[10]));
  } else if(inputValues.length === 12){
      answer = eval((inputValues[0] + inputValues[1] + inputValues[2]) + (inputValues[3] + inputValues[4]) +
        (inputValues[5] + inputValues[6]) + (inputValues[7] + inputValues[8]) + (inputValues[9] +
          inputValues[10]) + (inputValues[11] + inputValues[12]));
  } else {
    displayArea.innerText = "Error";
  }

    function emptyArray(){
      inputValues = [];
    }

    function lastAnswer(){
      inputValues.push(answer);
    }

    emptyArray();
    lastAnswer();
    displayArea.innerText = answer;
    return answer;
});
