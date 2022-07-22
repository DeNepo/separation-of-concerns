import {
  ADD_ID,
  TOGGLE_INPUT_ID,
  CLOSE_MESSAGE,
  OPEN_MESSAGE,
  ACCEPTING_MESSAGE,
  NOT_ACCEPTING_MESSAGE,
} from '../../data/constants.js';

import { state } from '../../data/state.js';

import { addListener } from '../listeners/add.js';

export const closeOpenHandler = () => {
  debugger;

  // update numbers
  state.closed = !state.closed;

  // update UI based on numbers
  const numbersButton = document.getElementById(ADD_ID);
  const closeButton = document.getElementById(TOGGLE_INPUT_ID);
  if (state.closed) {
    numbersButton.value = NOT_ACCEPTING_MESSAGE;
    addListener(numbersButton, false);

    closeButton.innerText = OPEN_MESSAGE;
  } else {
    numbersButton.value = ACCEPTING_MESSAGE;
    addListener(numbersButton, true);

    closeButton.innerText = CLOSE_MESSAGE;
  }
};
