const inputContainer = document.querySelector('#input-container');
const countdownForm = document.querySelector('#countdown-form');
const dateEl = document.querySelector('#date-picker');

let countdownTitle = '';
let countdownDate = '';

// Set Date Input Min to today's date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Take value from input
function updateCountdown(event){
    event.preventDefault();
    countdownTitle = event.srcElement[0].value;
    countdownDate = event.srcElement[1].value;
}

countdownForm.addEventListener('submit', updateCountdown);