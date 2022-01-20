import { removeNumberHandler } from '../handlers/remove-number.js';

export const removeNumberListener = (id = '') => {
  // listening for custom event!
  document
    .getElementById(id)
    .addEventListener('removeNumber', removeNumberHandler);
};
