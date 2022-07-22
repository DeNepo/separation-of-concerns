import { CURRENT_ID, STEP_ID } from '../../data/constants.js';

import { state } from '../../data/state.js';

export const setupUI = () => {
  document.getElementById(CURRENT_ID).innerHTML = state.current;

  document.getElementById(STEP_ID).value = state.step;
};
