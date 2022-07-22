import { CONTAINER_ID, MAIN_ID } from '../../data/constants.js';

import { state } from '../../data/state.js';

export const mainTextHandler = () => {
  debugger;
  // read user input
  const newMainText = document.getElementById(MAIN_ID).value;

  // update state
  state.mainText = newMainText;

  // update UI from state
  const detailsEl = document.getElementById(CONTAINER_ID);
  const pEl = detailsEl.children[1];
  pEl.innerHTML = state.mainText;

  // log interaction
  console.log('update main text:', newMainText);
};
