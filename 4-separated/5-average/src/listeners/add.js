import { ADD_EVENT } from '../../data/constants.js';

import { addNumberHandler } from '../handlers/add.js';

export const addListener = (element, on = true) => {
  if (on) {
    element.addEventListener(ADD_EVENT, addNumberHandler);
  } else {
    element.removeEventListener(ADD_EVENT, addNumberHandler);
  }
};
