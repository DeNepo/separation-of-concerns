import { CONTAINER_ID, TOGGLE_ID } from '../../data/constants.js';

import { state } from '../../data/state.js';

import { infoElement } from '../components/info-element.js';

export const openCloseHandler = () => {
  debugger;
  // read user input
  const newIsOpen = document.getElementById(TOGGLE_ID).checked;

  // update state
  state.isOpen = newIsOpen;

  // update UI from state
  const detailsContainer = document.getElementById(CONTAINER_ID);
  detailsContainer.innerHTML = '';
  const newInfoComponent = infoElement(state);
  detailsContainer.appendChild(newInfoComponent);

  // log interaction
  console.log('open or close:', newIsOpen);
};
