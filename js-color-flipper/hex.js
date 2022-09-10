const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnEl = document.querySelector('#btn');
const colorEl = document.querySelector('.color');

btnEl.addEventListener('click', function() {
  let hexColor = '#';
  for(let i=0; i<6; i++) {
    hexColor += hex[getRandomNumber()];
    console.log(hexColor);
  }
  colorEl.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}