'use strict';
const bodyElement = document.querySelector('body');
const guessedNumber = document.querySelector('.guess');
const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const newGameBtn = document.querySelector('.again');
const highScore = document.querySelector('.highscore');
const scoreEl = document.querySelector('.score');
const randomNumberEl = document.querySelector('.number');
const randomNumber = Math.trunc(Math.random() * 20) + 1;
randomNumberEl.textContent = randomNumber;
let score = 20;
// IMPLEMENTING GAME LOGIC
checkBtn.addEventListener('click', function () {
  const guessedNumberValue = Number(guessedNumber.value);
  if (!guessedNumberValue) {
    message.textContent = '🛑 No Number';
  } 
  
  else if (guessedNumberValue < randomNumber) {
    if (score > 0) {
      message.textContent = '😒 Too Low';
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = 'You lost the game';
    }
  }
  
  else if (guessedNumberValue > randomNumber) {
    if (score > 0) {
      message.textContent = '⛈️ Too High';
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = 'You lost the game';
    }
  }

  else if (guessedNumberValue === randomNumber) {
    message.textContent = '🙌 You are correct';
    bodyElement.style.backgroundColor = '#60af42';
    randomNumberEl.style.width = '30rem';
  }
});
