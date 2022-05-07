'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMsg = function(el, message) {
    document.querySelector(el).textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        // document.querySelector('.message').textContent = '⛔️　No number!';
        displayMsg('.message', '⛔️　No number!');
    } else if(guess === secretNumber) {
        // document.querySelector('.number').textContent = secretNumber;
        displayMsg('.number', secretNumber);
        // document.querySelector('.message').textContent = '🎉 Correct number!';
        displayMsg('.message', '🎉 Correct number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            // document.querySelector('.highscore').textContent = highscore;
            displayMsg('.highscore', highscore);
        }
    
    } else if(guess !== secretNumber) {
        if(score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMsg('.message', guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            // document.querySelector('.score').textContent = score;
            displayMsg('.score', score);
        } else {
            // document.querySelector('.message').textContent = 'You lost the game!';
            displayMsg('.message', 'You lost the game!');
            // document.querySelector('.score').textContent = 0;
            displayMsg('.score', 0);
        }
    }
})

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})