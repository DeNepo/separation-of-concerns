import { NUMBER_ID } from '../../data/constants.js';

import { state } from '../../data/state.js';

export const initialize = () => {
  document.getElementById(NUMBER_ID).innerHTML = state.current;
};
