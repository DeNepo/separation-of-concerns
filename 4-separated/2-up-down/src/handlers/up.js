import { NUMBER_ID } from '../../data/constants.js';

import { state } from '../../data/state.js';

export const upHandler = () => {
  debugger;
  // update state
  state.past.push(state.current);
  state.current += 1;

  // render to user
  document.getElementById(NUMBER_ID).innerHTML = state.current;

  // log action for developers
  console.log('up', state);
};
