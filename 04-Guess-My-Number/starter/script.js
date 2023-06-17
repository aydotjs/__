'use strict';
const bodyElement = document.querySelector('body'),
  guessedNumber = document.querySelector('.guess'),
  message = document.querySelector('.message'),
  checkBtn = document.querySelector('.check'),
  newGameBtn = document.querySelector('.again'),
  highScoreEl = document.querySelector('.highscore'),
  scoreEl = document.querySelector('.score'),
  randomNumberEl = document.querySelector('.number');
  
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (msg) {
  message.textContent = msg;
};
// IMPLEMENTING GAME LOGIC
checkBtn.addEventListener('click', function () {
  const guessedNumberValue = Number(guessedNumber.value);
  if (!guessedNumberValue) {
    displayMessage('No Number');
  } else if (guessedNumberValue !== randomNumber) {
    if (score > 0) {
      message.textContent =
        guessedNumberValue > randomNumber ? '⛈️Too High' : '😒Too Low';
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('You lost the game');
    }
  } else if (guessedNumberValue === randomNumber) {
    displayMessage('🙌 You are correct');
    bodyElement.style.backgroundColor = '#60af42';
    randomNumberEl.style.width = '30rem';
    randomNumberEl.textContent = randomNumber;
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  }
});
// RESETTING THE GAME
newGameBtn.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  score = 20;
  bodyElement.style.backgroundColor = '#222';
  scoreEl.textContent = score;
  guessedNumber.value = '';
  randomNumberEl.textContent = '?';
});

