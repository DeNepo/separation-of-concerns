import { RESET_EVENT } from '../../data/constants.js';

import { resetHandler } from '../handlers/reset.js';

export const reset = (element) => {
  element.addEventListener(RESET_EVENT, resetHandler);
};
