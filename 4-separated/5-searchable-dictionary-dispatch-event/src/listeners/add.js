import { ADD_EVENT } from '../../data/constants.js';

import { addWord } from '../handlers/add-word.js';

export const add = (element) => {
  element.addEventListener(ADD_EVENT, addWord);
};
