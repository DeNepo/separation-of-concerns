import { TOGGLE_INPUT_EVENT } from '../../data/constants.js';

import { closeOpenHandler } from '../handlers/close-open.js';

export const closeOpenListener = (element) => {
  element.addEventListener(TOGGLE_INPUT_EVENT, closeOpenHandler);
};
