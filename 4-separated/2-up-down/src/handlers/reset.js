import { NUMBER_ID } from '../../data/constants.js';

import { state } from '../../data/state.js';

export const resetHandler = () => {
  // reset state
  state.current = 0;
  state.past = [];

  // reset UI
  document.getElementById(NUMBER_ID).innerHTML = state.current;

  // log user interaction
  console.log('reset', state);
};
