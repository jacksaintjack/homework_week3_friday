///Clear Button
clearSelect.addEventListener('click', function(){
  displayArea.innerText = 0;
  return inputValues = [];
});

///Row Two Buttons Functions
sevenSelect.addEventListener('click', function(){
  displayReturn(inputValues.push(7));
  displayArea.innerText = inputDisplay;
  handlerSelect = sevenSelect;
  backgroundHandler();
});

eightSelect.addEventListener('click', function(){
  displayReturn(inputValues.push(8));
  displayArea.innerText = inputDisplay;
  handlerSelect = eightSelect;
  backgroundHandler();
});

nineSelect.addEventListener('click', function(){
  displayReturn(inputValues.push(9));
  displayArea.innerText = inputDisplay;
  handlerSelect = nineSelect;
  backgroundHandler();
});

divideSelect.addEventListener('click', function(){
  displayReturn(inputValues.push("/"));
  displayArea.innerText = inputDisplay;
  handlerSelect = divideSelect;
  colorHandler();
});

///Row Three Buttons Functions
fourSelect.addEventListener('click', function(){
  displayReturn(inputValues.push(4));
  displayArea.innerText = inputDisplay;
  handlerSelect = fourSelect;
  backgroundHandler();
});

fiveSelect.addEventListener('click', function(){
  displayReturn(inputValues.push(5));
  displayArea.innerText = inputDisplay;
  handlerSelect = fiveSelect;
  backgroundHandler();
});
sixSelect.addEventListener('click', function(){
  displayReturn(inputValues.push(6));
  displayArea.innerText = inputDisplay;
  handlerSelect = sixSelect;
  backgroundHandler();
});

multiplySelect.addEventListener('click', function(){
  displayReturn(inputValues.push("*"));
  displayArea.innerText = inputDisplay;
  handlerSelect = multiplySelect;
  colorHandler();
});

///Row Four Buttons Functions
oneSelect.addEventListener('click', function(){
  displayReturn(inputValues.push(1));
  displayArea.innerText = inputDisplay;
  handlerSelect = oneSelect;
  backgroundHandler();
});

twoSelect.addEventListener('click', function(){
  displayReturn(inputValues.push(2));
  displayArea.innerText = inputDisplay;
  handlerSelect = twoSelect;
  backgroundHandler();
});

threeSelect.addEventListener('click', function(){
  displayReturn(inputValues.push(3));
  displayArea.innerText = inputDisplay;
  handlerSelect = threeSelect;
  backgroundHandler();
});

subtractSelect.addEventListener('click', function(){
  displayReturn(inputValues.push("-"));
  displayArea.innerText = inputDisplay;
  handlerSelect = subtractSelect;
  colorHandler();

});

///Row Four Buttons Functions
zeroSelect.addEventListener('click', function(){
  displayReturn(inputValues.push(0));
  displayArea.innerText = inputDisplay;
  handlerSelect = zeroSelect;
  backgroundHandler();
});

decimalSelect.addEventListener('click', function(){
  displayReturn(inputValues.push("."));
  displayArea.innerText = inputDisplay;
  handlerSelect = decimalSelect;
  backgroundHandler();
});


addSelect.addEventListener('click', function(){
  displayReturn(inputValues.push("+"));
  displayArea.innerHTML = inputDisplay;
  handlerSelect = addSelect;
  colorHandler();
});

//The equal function. evals the array


equalSelect.addEventListener('click', function(){
    handlerSelect = equalSelect;
    backgroundHandler();

    function emptyArray(){
      inputValues = [];
    }

    function lastAnswer(){
      inputValues.push(answer);
    }
    try {
      answer = eval(inputDisplay);
    } catch (error) {
      if(answer === undefined){
        answer = "error";
        return answer;
      }
    }
        emptyArray();
        lastAnswer();
        displayArea.innerText = answer;
        return answer;
});
