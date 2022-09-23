const letters = document.querySelectorAll('.scoreboard-letter');
const loading = document.querySelector('.info-bar');
const ANSWER_LENGTH = 5;
const ROUNDS = 6;

async function init() {
  let currentGuess = '';
  let currentRow = 0;
  let isLoading = true;

  const response = await fetch("https://words.dev-apis.com/word-of-the-day");
  const responseObj = await response.json();
  const word = responseObj.word.toUpperCase();
  const wordParts = word.split("");
  let done = false;
  isLoading = false;
  setLoading(isLoading);

  function addLetter(letter) {
    if(currentGuess.length < ANSWER_LENGTH) {
      // add letter to the end
      currentGuess += letter;
    } else {
      // replace the last letter
      currentGuess = currentGuess.substring(0, currentGuess.length - 1) + letter;
    }

    // show the input letter into the DOM
    // ANSWER_LENGTH * currentRow it's mean that check where is the current row
    letters[ANSWER_LENGTH * currentRow + currentGuess.length - 1].innerText = letter;
  }

  async function commit() {
    if(currentGuess.length !== ANSWER_LENGTH) {
      // do nothing
      return;
    }

    // validate the word
    isLoading = true;
    setLoading(isLoading);
    const res = await fetch("https://words.dev-apis.com/validate-word", {
      method: "POST",
      body: JSON.stringify({word:currentGuess}),
    });

    const resObj = await res.json();
    const validWord = resObj.validWord;
    // const {validWord} = resObj;

    isLoading = false;
    setLoading(isLoading);

    if(!validWord) {
      markInvalidWord();
      return;
    }

    // marking as "correct" "close" or "wrong"
    const guessParts = currentGuess.split("");
    const map = makeMap(wordParts);
    let allRight = true;

    for(let i = 0; i < ANSWER_LENGTH; i++) {
      // mark as correct
      if(guessParts[i] === wordParts[i]) {
        letters[currentRow * ANSWER_LENGTH + i].classList.add('correct');
        map[guessParts[i]]--;
      }
    }

    for(let i = 0; i < ANSWER_LENGTH; i++) {
      if(guessParts[i] === wordParts[i]) {
        // do nothing
      } else if(wordParts.includes(guessParts[i]) && map[guessParts[i]] > 0) {
        // mark as close
        allRight = false;
        letters[currentRow * ANSWER_LENGTH + i].classList.add('close');
        map[guessParts[i]]--;
      } else {
        // mark as incorrect
        allRight = false;
        letters[currentRow * ANSWER_LENGTH + i].classList.add('wrong');
      }
    }

    // did they win or lose?
    currentRow++;
    if(allRight) {
      // win
      document.querySelector('.brand').classList.add('winner');
      done = true;
    } else if (currentRow === ROUNDS) {
      alert(`you lose, the word was ${word}`);
      done = true;
    }
    currentGuess = '';
  }

  function backspace() {
    currentGuess = currentGuess.substring(0, currentGuess.length - 1);
    letters[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = "";
  }

  function markInvalidWord(){
    for(let i = 0; i < ANSWER_LENGTH; i++) {
      letters[currentRow * ANSWER_LENGTH + i].classList.remove('invalid');
      setTimeout(() => {
        letters[currentRow * ANSWER_LENGTH + i].classList.add('invalid');
      }, 10);
    }
  }

  document.addEventListener('keydown', function handleKeyPress(event) {
    if(done || isLoading) {
      // do nothing
      return;
    }

    const action = event.key;
    if(action === 'Enter') {
      commit();
    } else if(action === 'Backspace') {
      backspace();
    } else if(isLetter(action)){
      addLetter(action.toUpperCase());
    } else {
      // do nothing
      return;
    }
  })
}

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

function setLoading(isLoading) {
  loading.classList.toggle('hidden', !isLoading);
}

function makeMap(array) {
  const obj = {};
  for(let i = 0; i < array.length; i++) {
    const letter = array[i];
    if(obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }
  return obj;
}

init();