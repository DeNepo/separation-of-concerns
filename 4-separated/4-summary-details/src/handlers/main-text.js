import { CONTAINER_ID, MAIN_ID } from '../../data/constants.js';

import { state } from '../../data/state.js';

import { infoElement } from '../components/info-element.js';

export const mainTextHandler = () => {
  debugger;
  // read user input
  const newMainText = document.getElementById(MAIN_ID).value;

  // update state
  state.mainText = newMainText;

  // update UI from state
  const detailsContainer = document.getElementById(CONTAINER_ID);
  detailsContainer.innerHTML = '';
  const newInfoComponent = infoElement(state);
  detailsContainer.appendChild(newInfoComponent);

  // log interaction
  console.log('update main text:', newMainText);
};
