import { REMOVE_EVENT } from '../../data/constants.js';

import { removeWord } from '../handlers/remove-word.js';

export const remove = (element) => {
  element.addEventListener(REMOVE_EVENT, removeWord);
};
