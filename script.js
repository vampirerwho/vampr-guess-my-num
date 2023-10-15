'use strict';
//random number gen
let secNum = Math.trunc(Math.random() * 20) + 1;

//score for manipulation
let score = 20;
//highscore var

let highscore = 0;
//click event listner
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number Input';
  }
  //when won
  else if (guess === secNum) {
    document.querySelector('.message').textContent = 'you won!🧕🧕';
    document.querySelector('.number').textContent = secNum;
    //css bg color and big font after guessed right number
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    //high score shit
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when too high guess
  else if (guess > secNum) {
    // making score stay on 0 and show text of loosing part 1
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high📈';
      //making score go down by 1 every time when cant guess
      score--;
      document.querySelector('.score').textContent = score;
      // part 2
    } else {
      document.querySelector('.message').textContent = 'you lose 🧕🧕';
      document.querySelector('.score').textContent = 0;
    }

    // when too low guessed
  } else if (guess < secNum) {
    score--;
    document.querySelector('.message').textContent = 'too low📉';
    document.querySelector('.score').textContent = score;
  }
});

//again click event listner ( reseting everything )

document.querySelector('.again').addEventListener('click', function () {
  //reset score
  score = 20;
  document.querySelector('.score').textContent = score;

  //reset variable input and that too high thing

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  secNum = Math.trunc(Math.random() * 20) + 1;
});
