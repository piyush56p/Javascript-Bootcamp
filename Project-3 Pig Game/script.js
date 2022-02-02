'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//starting conditions

btnNew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  const scores = [0, 0];
  let currentScore = 0;
  let activePlayer = 0;
  let playing = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');

  const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    //toggle background for active player
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  };
  //Rolling the dice
  btnRoll.addEventListener('click', function () {
    if (playing) {
      //1. Generate a random dice roll
      const dice = Math.trunc(Math.random() * 6) + 1;
      console.log(dice);
      //2. Display dice
      diceEl.classList.remove('hidden');
      diceEl.src = `dice-${dice}.png`;
      //3. check for rolled 1
      if (dice != 1) {
        //add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;
        //current0El.textContent = currentScore;
      } else {
        //switch to next player
        switchPlayer();
      }
    }
  });
  btnHold.addEventListener('click', function () {
    if (playing) {
      //Add current score to active player score

      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
      //check if score == 100,if tru winds else change active player
      if (scores[activePlayer] >= 10) {
        //Finsish game
        playing = false;
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
      } else {
        switchPlayer();
      }
    }
    //switch
  });
});
