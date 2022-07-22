import { CONTAINER_ID, SUMMARY_ID } from '../../data/constants.js';

import { state } from '../../data/state.js';

import { infoElement } from '../components/info-element.js';

export const summaryTextHandler = () => {
  debugger;
  // read user input
  const newSummaryText = document.getElementById(SUMMARY_ID).value;

  // update state
  state.summaryText = newSummaryText;

  // update UI from state
  const detailsContainer = document.getElementById(CONTAINER_ID);
  detailsContainer.innerHTML = '';
  const newInfoComponent = infoElement(state);
  detailsContainer.appendChild(newInfoComponent);

  // log interaction
  console.log('updated summary text:', newSummaryText);
};
