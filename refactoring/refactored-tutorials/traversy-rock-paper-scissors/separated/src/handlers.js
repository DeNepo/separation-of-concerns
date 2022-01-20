import { scoreboard } from './data.js';

import { getComputerChoice, getWinner } from './utils.js';
import { renderModalBody, renderScore } from './components.js';

export const play = (e) => {
  // read user input
  const playerChoice = e.target.id;

  // core logic
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  // update state
  if (winner === 'player') {
    scoreboard.player += 1;
  } else {
    scoreboard.computer += 1;
  }

  // update UI

  //  re-render and display the modal
  const newModalBody = renderModalBody(winner, computerChoice);
  document.getElementById('result').innerHTML = newModalBody;
  document.querySelector('.modal').style.display = 'block';
  //  re-render the score
  const newScoreBody = renderScore(scoreboard.player, scoreboard.computer);
  document.getElementById('score').innerHTML = newScoreBody;
  //  display the restart option
  document.getElementById('restart').style.display = 'inline-block';

  // log interaction
  console.log('play:', playerChoice, computerChoice);
};

export const restartGame = () => {
  scoreboard.player = 0;
  scoreboard.computer = 0;

  document.getElementById('score').innerHTML = renderScore(0, 0);
};

export const clearModal = (e) => {
  if (e.target.className === 'modal') {
    document.querySelector('.modal').style.display = 'none';
    console.log('cleared modal');
  }
};
