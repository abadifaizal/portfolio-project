const inputContainer = document.querySelector('#input-container');
const countdownForm = document.querySelector('#countdown-form');
const dateEl = document.querySelector('#date-picker');
const countdownEl = document.querySelector('#countdown');
const countdownElTitle = document.querySelector('#countdown-title');
const countdowntBtn = document.querySelector('#countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

const second = 1000; // 1s is 1000milisecond
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date Input Min to today's date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Populate Countdown / Complete UI
function updateDOM(){
    // Time past since 1 january 1970 until now in miliseconds
    const now = new Date().getTime(); 
    // Distance time past form 1 junary 1970 until now
    const distance = countdownValue - now; 
    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    // Populating countdown
    countdownElTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    // Hide input
    inputContainer.hidden = true;
    // Show Countdown
    countdownEl.hidden = false;
}

// Take value from input
function updateCountdown(event){
    event.preventDefault();
    countdownTitle = event.srcElement[0].value;
    countdownDate = event.srcElement[1].value;

    // get number version of date
    countdownValue = new Date(countdownDate).getTime();

    updateDOM();
}

countdownForm.addEventListener('submit', updateCountdown);