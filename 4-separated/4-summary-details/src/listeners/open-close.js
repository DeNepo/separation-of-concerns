import { TOGGLE_EVENT } from '../../data/constants.js';

import { openCloseHandler } from '../handlers/open-close.js';

export const openClose = (element) => {
  element.addEventListener(TOGGLE_EVENT, openCloseHandler);
};
