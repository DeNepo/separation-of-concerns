import { logger } from '/lib/logger.js';

import { componentState } from '../data.js';

export const mainTextHandler = () => {
  debugger;
  // read user input
  const newMainText = document.getElementById('new-main-text').value;

  // update state
  componentState.mainText = newMainText;

  // update UI from state
  const detailsEl = document.getElementById('ui-element');
  const pEl = detailsEl.children[1];
  pEl.innerHTML = componentState.mainText;

  // log interaction
  logger.add({
    handler: 'main text',
    newMainText,
    componentState,
  });
};
