import { REMOVE_EVENT } from '../../data/constants.js';

import { removeOne } from '../handlers/remove-one.js';

export const removeNumber = (id = '') => {
  document.getElementById(id).addEventListener(REMOVE_EVENT, removeOne);
};
