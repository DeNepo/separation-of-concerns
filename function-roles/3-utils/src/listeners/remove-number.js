import { removeNumberHandler } from '../handlers/remove-number.js';

export const removeNumberListener = (id = '') => {
  document.getElementById(id).addEventListener('click', removeNumberHandler);
};
