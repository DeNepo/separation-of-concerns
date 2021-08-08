import { logger } from '/lib/logger.js';

import { game } from '../data.js';
import { determineWinner } from '../logic/determine-winner.js';

export const placeMove = event => {
  debugger;
  // read & process user input
  const index = event.target.id;

  // checks state to see if this square has been played
  if (game.board[index] !== null) {
    alert('this square has already been played');
    logger.add({
      handler: 'place move',
      index,
      exit: 'square has already been played',
    });
    return;
  }

  // update board in state
  game.board[index] = game.players.next;

  // update players in state
  const previousPlayer = game.players.previous;
  game.players.previous = game.players.next;
  game.players.next = previousPlayer;

  // update UI using state
  event.target.innerHTML = game.board[index];

  // // a challenge, make this game detect if there is a winner
  // const winner = determineWinner(board);
  // if (winner !== null) {
  //
  // }

  // log action
  logger.add({
    handler: 'place move',
    event,
    target: event.target,
    index,
    game,
  });
};
