const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btnEl = document.querySelector('#btn');
const color = document.querySelector('.color');

btnEl.addEventListener('click', function() {
  // Get random number between 0 ~ 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}