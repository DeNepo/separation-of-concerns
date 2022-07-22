import { state } from '../../data/state.js';

export const resetGame = () => {
  debugger;
  // update state
  state.board = [null, null, null, null, null, null, null, null, null];
  state.players = {
    next: 'X',
    previous: 'O',
  };
  state.winner = null;

  // update UI from state
  for (let id = 0; id < state.board.length; id++) {
    document.getElementById(id).innerHTML = state.board[id];
  }

  // log action
  console.log('resetting board');
};
