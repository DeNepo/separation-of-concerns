import { CONTAINER_ID, SUMMARY_ID } from '../../data/constants.js';

import { state } from '../../data/state.js';

export const summaryTextHandler = () => {
  debugger;
  // read user input
  const newSummaryText = document.getElementById(SUMMARY_ID).value;

  // update state
  state.summaryText = newSummaryText;

  // update UI from state
  const detailsEl = document.getElementById(CONTAINER_ID);
  const summaryEl = detailsEl.children[0];
  summaryEl.innerHTML = state.summaryText;

  // log interaction
  console.log('change summary text:', newSummaryText);
};
