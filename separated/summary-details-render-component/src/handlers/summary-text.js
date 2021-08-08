import { logger } from '/lib/logger.js';

import { componentState } from '../data.js';
import { infoElement } from '../components/info-element.js';

export const summaryTextHandler = () => {
  debugger;
  // read user input
  const newSummaryText = document.getElementById('new-summary-text').value;

  // update state
  componentState.summaryText = newSummaryText;

  // update UI from state
  const detailsContainer = document.getElementById('details-container');
  detailsContainer.innerHTML = '';
  const newInfoComponent = infoElement(componentState);
  detailsContainer.appendChild(newInfoComponent);

  // log interaction
  logger.add({
    handler: 'summary text',
    newSummaryText,
    componentState,
    newInfoComponent,
  });
};
