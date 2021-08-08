import { logger } from '/lib/logger.js';

import { componentState } from '../data.js';

export const openCloseHandler = () => {
  debugger;
  // read user input
  const newIsOpen = document.getElementById('toggle-is-open').checked;

  // update state
  componentState.isOpen = newIsOpen;

  // update UI from state
  document.getElementById('ui-element').open = componentState.isOpen;

  // log interaction
  logger.add({
    handler: 'open, close',
    newIsOpen,
    componentState,
  });
};
