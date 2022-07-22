import { ADD_EVENT } from '../../data/constants.js';

import { addHandler } from '../handlers/add-word.js';

export const addWordListener = (element) => {
  element.addEventListener(ADD_EVENT, addHandler);
};
