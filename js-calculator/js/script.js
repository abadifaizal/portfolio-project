let totalCalc = 0;
let initialState = '0';
let previousOperator;
const screenEl = document.querySelector('.screen');
const calcBtnEl = document.querySelectorAll('.calc-button');

calcBtnEl.forEach(btnEl => {
  btnEl.addEventListener('click', function handleClick(event) {
    // console.log(event.target.textContent);
    checkBtnValue(event.target.textContent);
  });
});

function checkBtnValue(value) {
  if(isNaN(parseInt(value))) {
    // handle Symbol
    handleSymbol(value);
  } else {
    // handle Number
    handleNumber(value);
  }
  screenEl.innerText = initialState;
}

function handleNumber(value) {
  if(initialState === '0') {
    initialState = value;
  } else {
    initialState += value;
  }
}

function handleMath(value) {
  if(initialState === 0) {
    // do nothing
    return
  }

  const innnerInitialState = parseInt(initialState);
  if(totalCalc === 0) {
    totalCalc = innnerInitialState;
  } else {
    flushOperation(innnerInitialState);
  }

  previousOperator = value;
  initialState = '0';
}

function flushOperation(innnerInitialState) {
  if(previousOperator === '+') {
    totalCalc += innnerInitialState;
  } else if(previousOperator === '-') {
    totalCalc -= innnerInitialState;
  } else if(previousOperator === '×') {
    totalCalc *= innnerInitialState;
  } else if(previousOperator === '÷') {
    totalCalc /= innnerInitialState;
  }
}

function handleSymbol(value) {
  switch(value) {
    case "C": 
      initialState = '0';
      totalCalc = 0;
      break;
    case "=":
      if(previousOperator === null) {
        // need two numbers to do math
        return;
      }
      flushOperation(parseInt(initialState));
      previousOperator = null;
      initialState =+ totalCalc;
      totalCalc = 0;
      break;
    case "←":
      if(initialState.length === 1) {
        initialState = '0';
      } else {
        initialState = initialState.substring(0, initialState.length - 1);
      }
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(value);
      break;
  }
}