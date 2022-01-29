'use strict';
/*
console.log(document.querySelector('.message').textContent);

/*
//DOM -> Document Object model
Structured representation of html documents, allows javascript to access html Elements and styles to manipulate them.

document.querySelector('.message').textContent = 'Correct Number ';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
//handling clicks of a button

document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.message').textContent = 'Start Guessing...';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //no guess
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost BBygirl';
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost BBygirl';
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  //displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
