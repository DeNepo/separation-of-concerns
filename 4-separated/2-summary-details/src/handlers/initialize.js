import {
  CONTAINER_ID,
  MAIN_ID,
  SUMMARY_ID,
  TOGGLE_ID,
} from '../../data/constants.js';

import { state } from '../../data/state.js';

export const initialize = () => {
  debugger;

  // render initial uiElement
  const detailsEl = document.getElementById(CONTAINER_ID);
  detailsEl.open = state.isOpen;

  const summaryEl = detailsEl.children[0];
  summaryEl.innerHTML = state.summaryText;

  const pEl = detailsEl.children[1];
  pEl.innerHTML = state.mainText;

  // render initial control pannel
  document.getElementById(TOGGLE_ID).checked = state.isOpen;
  document.getElementById(SUMMARY_ID).value = state.summaryText;
  document.getElementById(MAIN_ID).value = state.mainText;
};
