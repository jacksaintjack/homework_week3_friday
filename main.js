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


document.getElementById('add').addEventListener('click', function(){
  displayReturn(inputValues.push("+"));
  displayArea.innerHTML = inputDisplay;
  handlerSelect = addSelect;
  colorHandler();
});

//The equal function. evals the array


equalSelect.addEventListener('click', function(){
    answer = eval(inputDisplay);
    handlerSelect = equalSelect;
    backgroundHandler();

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
