let totalCalc = 0;
let initialState = 0;
let previousOperator;
const screenEl = document.querySelector('.screen');
const calcBtnEl = document.querySelectorAll('.calc-button');

calcBtnEl.forEach(btnEl => {
  btnEl.addEventListener('click', function handleClick(event) {
    console.log(event.target.textContent);
    checkBtnValue(event.target.textContent);
  });
});

function checkBtnValue(value) {
  if(isNaN(parseInt(value))) {
    console.log(value, 'Is not a number');
    // handle Symbol
  } else {
    console.log(value, 'Is a number');
    // handle Number
  }
}

