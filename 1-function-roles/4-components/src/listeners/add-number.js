import { ADD_EVENT } from '../../data/constants.js';

import { addOne } from '../handlers/add-one.js';

export const addNumber = (id = '') => {
  document.getElementById(id).addEventListener(ADD_EVENT, addOne);
};
