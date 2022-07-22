import { state } from '../../data/state.js';
import { determineWinner } from '../utils/determine-winner.js';

export const placeMove = (event) => {
  debugger;
  // read & process user input
  const index = event.target.id;

  // log move for the developer
  console.log('place move:', index);

  // checks state to see if this square has been played
  if (state.board[index] !== null) {
    alert('this square has already been played');
    return;
  }

  // update board in state
  state.board[index] = state.players.next;

  // update players in state
  const previousPlayer = state.players.previous;
  state.players.previous = state.players.next;
  state.players.next = previousPlayer;

  // update UI using state
  event.target.innerHTML = state.board[index];

  // // a challenge, make this game detect if there is a winner
  // const winner = determineWinner(board);
  // ...
};
