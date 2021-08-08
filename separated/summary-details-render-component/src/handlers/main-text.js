import { logger } from '/lib/logger.js';

import { componentState } from '../data.js';
import { infoElement } from '../components/info-element.js';

export const mainTextHandler = () => {
  debugger;
  // read user input
  const newMainText = document.getElementById('new-main-text').value;

  // update state
  componentState.mainText = newMainText;

  // update UI from state
  const detailsContainer = document.getElementById('details-container');
  detailsContainer.innerHTML = '';
  const newInfoComponent = infoElement(componentState);
  detailsContainer.appendChild(newInfoComponent);

  // log interaction
  logger.add({
    handler: 'main text',
    newMainText,
    componentState,
    newInfoComponent,
  });
};
