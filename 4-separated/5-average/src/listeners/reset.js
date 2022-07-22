import { RESET_EVENT } from '../../data/constants.js';

import { resetNumbersHandler } from '../handlers/reset.js';

export const resetListener = (element) => {
  element.addEventListener(RESET_EVENT, resetNumbersHandler);
};
