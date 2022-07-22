import { RESET_EVENT } from '../../data/constants.js';

import { resetHandler } from '../handlers/reset.js';

export const resetListener = (element) => {
  element.addEventListener(RESET_EVENT, resetHandler);
};
