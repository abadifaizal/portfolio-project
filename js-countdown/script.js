const inputContainer = document.querySelector('#input-container');
const countdownForm = document.querySelector('#countdown-form');
const dateEl = document.querySelector('#date-picker');
const countdownEl = document.querySelector('#countdown');
const countdownElTitle = document.querySelector('#countdown-title');
const countdownBtn = document.querySelector('#countdown-button');
const timeElements = document.querySelectorAll('span');
const completeEl = document.querySelector('#complete');
const completeElInfo = document.querySelector('#complete-info');
const completeBtn = document.querySelector('#complete-button');

// Global Variable
let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;
let saveCountdown;

// Time Calculation
const second = 1000; // 1s is 1000milisecond
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date Input Min to today's date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Populate Countdown / Complete UI
function updateDOM(){
    countdownActive = setInterval(function(){
        // Time past since 1 january 1970 until now in miliseconds
        const now = new Date().getTime(); 
        // Distance time past form 1 junary 1970 until now
        const distance = countdownValue - now; 
        const days = Math.floor(distance / day);
        const hours = Math.floor((distance % day) / hour);
        const minutes = Math.floor((distance % hour) / minute);
        const seconds = Math.floor((distance % minute) / second);

        // Hide input
        inputContainer.hidden = true;

        // If the countdown is completed or ended or today date
        if(distance < 0){
            countdownEl.hidden = true;
            clearInterval(countdownActive);
            completeElInfo.textContent = `${countdownTitle} finished on ${countdownDate}`;
            completeEl.hidden = false;
        } else {
            // Populating countdown
            countdownElTitle.textContent = `${countdownTitle}`;
            timeElements[0].textContent = `${days}`;
            timeElements[1].textContent = `${hours}`;
            timeElements[2].textContent = `${minutes}`;
            timeElements[3].textContent = `${seconds}`;
            // Hidden Complete element
            completeEl.hidden = true;
            // Show Countdown
            countdownEl.hidden = false;
        }
    }, second);
}

// Take value from input
function updateCountdown(event){
    event.preventDefault();
    countdownTitle = event.srcElement[0].value;
    countdownDate = event.srcElement[1].value;
    saveCountdown = {
        title: countdownTitle,
        date: countdownDate,
    }
    // Save countdown item to local storage, and convert object to string
    localStorage.setItem('countdown', JSON.stringify(saveCountdown));
    if(countdownDate === ''){
        alert('Please Input date to countdown');
    } else {
        // get number version of current date, update DOM
        countdownValue = new Date(countdownDate).getTime();
        updateDOM();
    }
}

// Reset All values
function reset(){
    // Stop the countdown
    clearInterval(countdownActive);
    // Hide Countdown, Show input
    countdownEl.hidden = true;
    completeEl.hidden = true;
    inputContainer.hidden = false;
    // Reset Countdown Value
    countdownTitle = '';
    countdownDate = '';
    // Remove date from localStorage
    localStorage.removeItem('countdown');
}

function restorePreviousCountdown(){
    // Get countdown from localstorage if available
    if(localStorage.getItem('countdown')){
        inputContainer.hidden = true;
        // Get item from localstorage, and convert string back to object
        saveCountdown = JSON.parse(localStorage.getItem('countdown'));
        countdownTitle = saveCountdown.title;
        countdownDate = saveCountdown.date;
        // get number version of current date, update DOM 
        countdownValue = new Date(countdownDate).getTime();
        updateDOM();
    }
}

countdownForm.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener('click', reset);
completeBtn.addEventListener('click', reset);

// Run function onload and check the localStorage first
restorePreviousCountdown();