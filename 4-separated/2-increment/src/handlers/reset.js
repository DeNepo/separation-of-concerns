import { CURRENT_ID, STEP_ID } from '../../data/constants.js';

import { state } from '../../data/state.js';

export const resetHandler = () => {
  // reset state
  state.current = 0;
  state.past = [];
  state.step = 1;

  // reset UI
  document.getElementById(CURRENT_ID).innerHTML = state.current;
  document.getElementById(STEP_ID).value = state.step;
};
