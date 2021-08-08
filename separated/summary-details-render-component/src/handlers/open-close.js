import { logger } from '/lib/logger.js';

import { componentState } from '../data.js';
import { infoElement } from '../components/info-element.js';

export const openCloseHandler = () => {
  debugger;
  // read user input
  const newIsOpen = document.getElementById('toggle-is-open').checked;

  // update state
  componentState.isOpen = newIsOpen;

  // update UI from state
  const detailsContainer = document.getElementById('details-container');
  detailsContainer.innerHTML = '';
  const newInfoComponent = infoElement(componentState);
  detailsContainer.appendChild(newInfoComponent);

  // log interaction
  logger.add({
    handler: 'open/closed',
    newIsOpen,
    componentState,
    newInfoComponent,
  });
};
