import { RESET_EVENT } from '../../data/constants.js';

import { resetWords } from '../handlers/reset-words.js';

export const reset = (element) => {
  element.addEventListener(RESET_EVENT, resetWords);
};
