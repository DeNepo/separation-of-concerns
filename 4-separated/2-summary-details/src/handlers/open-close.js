import { CONTAINER_ID, TOGGLE_ID } from '../../data/constants.js';

import { state } from '../../data/state.js';

export const openCloseHandler = () => {
  debugger;
  // read user input
  const newIsOpen = document.getElementById(TOGGLE_ID).checked;

  // update state
  state.isOpen = newIsOpen;

  // update UI from state
  document.getElementById(CONTAINER_ID).open = state.isOpen;

  // log interaction
  console.log('open or close:', newIsOpen);
};
