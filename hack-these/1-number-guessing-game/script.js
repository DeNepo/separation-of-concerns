debugger; // once when the script is loaded

let game = {
  min: 1,
  max: 10,
};
document.addEventListener('DOMContentLoaded', function () {
  debugger; // once when the user interface has been built

  game.output = document.querySelector('.output');
  game.message = document.querySelector('.message');
  game.guessInput = document.querySelector('input');
  game.btn = document.querySelector('button');
  game.btn.addEventListener('click', guessValue);
  init();
});

function guessValue() {
  debugger; // each time the user places their guess

  if (game.btn.classList.contains('replay')) {
    init();
    game.btn.innerHTML = 'Guess';
    game.guessInput.style.display = 'block';
    game.btn.classList.remove('replay');
  } else {
    game.guesses++;
    let tempGuess = game.guessInput.value;
    game.guessInput.value = '';
    tempGuess = parseInt(tempGuess);
    if (isNaN(tempGuess)) {
      message(`Please enter only Digits`, 'red');
    } else if (tempGuess === game.num) {
      message(
        `Correct guess of ${game.num} in ${game.guesses} guesses`,
        'green',
      );
      gameOver();
    } else {
      let holder =
        tempGuess > game.num
          ? {
              c: 'blue',
              m: 'Was Lower',
            }
          : {
              c: 'purple',
              m: 'Was Higher',
            };
      message(holder.m, holder.c);
    }
  }
}

function gameOver() {
  game.btn.innerHTML = 'Restart Game';
  game.guessInput.style.display = 'none';
  game.btn.classList.add('replay');
  game.max += 5;
}

function init() {
  game.guesses = 0;
  game.num = ranNumber(game.min, game.max);
  let tempMes = `Guess a number from ${game.min} to ${game.max}`;
  message(tempMes, 'blue');
}

function ranNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function message(mes, clr) {
  game.message.innerHTML = mes;
  game.message.style.color = clr || 'black';
  game.guessInput.style.borderColor = clr || 'black';
  game.btn.style.backgroundColor = clr || 'black';
  game.btn.style.color = 'white';
}
