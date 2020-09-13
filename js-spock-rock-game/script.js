import {startConfetti, stopConfetti, removeConfetti} from './confetti.js';

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultEl = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcon = document.querySelectorAll('.far');

const choices = {
	rock: {
		name: 'Rock',
		defeats: ['scissors', 'lizard']
	},
	paper: {
		name: 'Paper',
		defeats: ['rock', 'spock']
	},
	scissors: {
		name: 'Scissors',
		defeats: ['paper', 'lizard']
	},
	lizard: {
		name: 'Lizard',
		defeats: ['paper', 'spock']
	},
	spock: {
		name: 'Spock',
		defeats: ['scissors', 'rock']
	},
};

let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;

// Reset Icon function after one of the icon get selected
function resetIcon() {
	allGameIcon.forEach(function (icon) {
		icon.classList.remove('selected');
	});
	stopConfetti();
	removeConfetti();
}

// Reset score & playerChoice / computerChoice
function resetAll(){
	playerScoreNumber = 0;
	computerScoreNumber = 0;
	playerScoreEl.textContent = playerScoreNumber;
	computerScoreEl.textContent = computerScoreNumber;
	playerChoiceEl.textContent = '';
	computerChoiceEl.textContent = '';
	resultText.textContent = '';
	resetIcon();
}
window.resetAll = resetAll;

// Random computer choice
function computerRandomChoice(){
	const computerChoiceNumber = Math.random();
	if(computerChoiceNumber < 0.2){
		computerChoice = 'rock';
	} else if(computerChoiceNumber <= 0.4){
		computerChoice = 'paper';
	} else if(computerChoiceNumber <= 0.6){
		computerChoice = 'scissors';
	} else if(computerChoiceNumber <= 0.8){
		computerChoice = 'lizard';
	} else {
		computerChoice = 'spock';
	}
}

// Add 'selected' styling and computerChoice
function displayComputerSelect() {
	switch (computerChoice) {
		case 'rock':
			computerRock.classList.add('selected');
			computerChoiceEl.textContent = ' --- Rock';
			break;
		case 'scissors':
			computerScissors.classList.add('selected');
			computerChoiceEl.textContent = ' --- Scissors';
			break;
		case 'paper':
			computerPaper.classList.add('selected');
			computerChoiceEl.textContent = ' --- Paper';
			break;
		case 'lizard':
			computerLizard.classList.add('selected');
			computerChoiceEl.textContent = ' --- Lizard';
			break;
		case 'spock':
			computerSpock.classList.add('selected');
			computerChoiceEl.textContent = ' --- Spock';
			break;
	}
}

// Passing player selection value and styling icons
function select(playerChoice) {
	checkResult(playerChoice);
	// Add 'selected' styling and playerChoice
	switch (playerChoice) {
		case 'rock':
			playerRock.classList.add('selected');
			playerChoiceEl.textContent = ' --- Rock';
			break;
		case 'scissors':
			playerScissors.classList.add('selected');
			playerChoiceEl.textContent = ' --- Scissors';
			break;
		case 'paper':
			playerPaper.classList.add('selected');
			playerChoiceEl.textContent = ' --- Paper';
			break;
		case 'lizard':
			playerLizard.classList.add('selected');
			playerChoiceEl.textContent = ' --- Lizard';
			break;
		case 'spock':
			playerSpock.classList.add('selected');
			playerChoiceEl.textContent = ' --- Spock';
			break;
	}
}

function updateScore(playerChoice){
	// Check result, increase score, update resultText
	// Tie Result
	if(playerChoice === computerChoice){
		resultText.textContent = "It's a tie!";
	} else {
		const choice = choices[playerChoice];
		if(choice.defeats.indexOf(computerChoice) > -1){
			// Player Won
			startConfetti();
			resultText.textContent = "You Won!";
			playerScoreNumber++;
			playerScoreEl.textContent = playerScoreNumber;
		} else {
			// Player Lose
			resultText.textContent = "You Lose!";
			computerScoreNumber++;
			computerScoreEl.textContent = computerScoreNumber;
		}
	}
}

// Call function to process turn
function checkResult(playerChoice) {
	// Reset selected icon
	resetIcon();
	computerRandomChoice();
	displayComputerSelect();
	updateScore(playerChoice);
}
window.select = select;

// set initial value when window load
resetAll();