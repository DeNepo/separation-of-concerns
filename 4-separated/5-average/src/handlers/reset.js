import {
  ACCEPTING_MESSAGE,
  ADD_ID,
  AVERAGE_ID,
  FORM_ID,
} from '../../data/constants.js';

import { state } from '../../data/state.js';

import { addNumberHandler } from './add.js';

export const resetNumbersHandler = () => {
  debugger;

  // update numbers
  state.validNumbers = [];
  state.invalidNumbers = [];
  state.average = 0;
  state.closed = false;

  // update UI
  document.getElementById(AVERAGE_ID).innerHTML = state.average;
  document.getElementById(FORM_ID).number.value = 0;

  const numbersButton = document.getElementById(ADD_ID);
  numbersButton.addEventListener(ADD_ID, addNumberHandler);
  numbersButton.value = ACCEPTING_MESSAGE;
};
