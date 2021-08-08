import { logger } from '/lib/logger.js';

import { componentState } from '../data.js';

export const summaryTextHandler = () => {
  debugger;
  // read user input
  const newSummaryText = document.getElementById('new-summary-text').value;

  // update state
  componentState.summaryText = newSummaryText;

  // update UI from state
  const detailsEl = document.getElementById('ui-element');
  const summaryEl = detailsEl.children[0];
  summaryEl.innerHTML = componentState.summaryText;

  // log interaction
  logger.add({
    handler: 'summary text',
    newSummaryText,
    componentState,
  });
};
