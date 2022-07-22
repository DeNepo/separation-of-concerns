debugger; // once when the script is loaded

const myWords = ['javascript', 'course', 'jsbeginner'];
let player = {};
const message = document.querySelector('.message');
const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  debugger; // each time the user starts the game

  output1.innerHTML = '';
  output2.innerHTML = '';
  if (myWords.length > 0) {
    btn.style.display = 'none';
    myWords.sort(function () {
      return 0.5 - Math.random();
    });
    let theWord = myWords.shift();
    player.solution = theWord.split('');
    buildBoard();
  } else {
    message.style.color = 'black';
    message.innerHTML = 'no more words';
  }
});

function buildBoard() {
  player.solution.forEach(function (letter) {
    let div = document.createElement('div');
    div.classList.add('letter2');
    div.innerText = '_';
    div.myLetter = letter;
    output2.appendChild(div);
  });
  let solutionLetter = document.querySelectorAll('.letter2');
  for (let x = 0; x < 26; x++) {
    let temp = String.fromCharCode(65 + x);
    let div = document.createElement('div');
    div.classList.add('letter');
    div.myLetter = temp;
    let handler = function (e) {
      debugger; // each time the user clicks a letter

      div.removeEventListener('click', handler);
      div.classList.add('done');
      let counter = 0;
      let guess = 0;
      let mes;
      solutionLetter.forEach(function (letter) {
        if (letter.innerHTML != '_') {
          counter++;
        }
        if (letter.myLetter.toUpperCase() === temp) {
          letter.innerHTML = temp;
          guess++;
        }
      });
      if (guess > 0) {
        let mul = guess > 1 ? 'times' : 'time';
        mes = 'You found ' + temp + ' letter ' + guess + ' ' + mul;
        message.style.color = 'green';
      } else {
        message.style.color = 'red';
        mes = 'Not found';
      }
      let letterLeft = solutionLetter.length - (guess + counter);
      message.innerHTML = mes + '<br>' + letterLeft + ' letters left';
      if (letterLeft < 1) {
        btn.style.display = 'block';
      }
    };
    div.addEventListener('click', handler);
    div.innerHTML = temp;
    output1.appendChild(div);
  }
}
