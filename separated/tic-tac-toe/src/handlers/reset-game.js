import { logger } from '/lib/logger.js';

import { game } from '../data.js';

export const resetGame = () => {
  debugger;
  // update state
  game.board = [null, null, null, null, null, null, null, null, null];
  game.players = {
    next: 'X',
    previous: 'O',
  };
  game.winner = null;

  // update UI from state
  for (let id = 0; id < 9; id++) {
    document.getElementById(id).innerHTML = game.board[id];
  }

  // log action
  logger.add({
    handler: 'reset board',
    game,
  });
};
