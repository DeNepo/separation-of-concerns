import { REVERSE_EVENT } from '../../data/constants.js';

import { reverseInput } from '../handlers/reverse-input.js';

export const reverseWhenUpdated = (element) => {
  element.addEventListener(REVERSE_EVENT, reverseInput);
};
