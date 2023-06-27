'use strict';
// Selecting Relevant Elements
const player1TotalScoreEl = document.querySelector('#score--0');
const player2TotalScoreEl = document.querySelector('#score--1');
const player1CurrentScoreEl = document.getElementById('current--0');
const player2CurrentScoreEl = document.getElementById('current--1');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const diceEl = document.querySelector('.dice');
const player1Panel = document.querySelector('.player--0');
const player2Panel = document.querySelector('.player--1');
// Resetting UI
player1TotalScoreEl.textContent = 0;
player2TotalScoreEl.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
const totalScore = [0, 0];
let playing = true;
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1Panel.classList.toggle('player--active');
  player2Panel.classList.toggle('player--active');
};

// IMPLEMENTING THE GAME LOGIC
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate a random dice number
    const randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${randomDiceNumber}.png`;
    if (randomDiceNumber === 1) {
      switchPlayer();
      //switch player
    } else {
      // add the dice number to the current score
      currentScore += randomDiceNumber;
      // display the score
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

// IMPLEMEMENTING USER HOLD GAME
btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to total score
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];

    // check if total score >= 100
    if (totalScore[activePlayer] >= 20) {
      playing = false;
      // player wins
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      // else, switch player
      switchPlayer();
    }
  }
});
// ASSIGNMENT
// IMPLEMENT THE RESET GAME BUTTON BY DOING THE FOLLOWING
// RESET THE CURRENT SCORE TO ZERO
// RESET THE TEXT CONTENT OF THE CURRENT SCORE ELEMENT FOR BOTH PLAYERS TO ZERO
// RESET THE TOTAL SCORE TO ZERO
// RESET THE TEXT CONTENT OF THE TOTAL SCORE ELEMENT FOR BOTH PLAYERS TO ZERO
// SET PLAYING TO TRUE
// REMOVE THE PLAYER WINNER CLASS FROM WHOEVER THE WINNER OF THE GAME IS
// ADD THE PLAYER ACTIVE CLASS TO PLAYER 1