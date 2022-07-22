import {
  AVERAGE_ID,
  TOGGLE_INPUT_ID,
  ADD_ID,
  OPEN_MESSAGE,
  CLOSE_MESSAGE,
  NOT_ACCEPTING_MESSAGE,
  ACCEPTING_MESSAGE,
} from '../../data/constants.js';

import { state } from '../../data/state.js';

export const initializeUI = () => {
  // render initial UI using state
  document.getElementById(AVERAGE_ID).innerHTML = state.average;

  document.getElementById(TOGGLE_INPUT_ID).innerHTML = state.closed
    ? OPEN_MESSAGE
    : CLOSE_MESSAGE;

  document.getElementById(ADD_ID).value = state.closed
    ? NOT_ACCEPTING_MESSAGE
    : ACCEPTING_MESSAGE;
};
