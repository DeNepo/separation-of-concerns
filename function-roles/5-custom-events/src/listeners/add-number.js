import { addNumberHandler } from '../handlers/add-number.js';

export const addNumberListener = (id = '') => {
  // listening for custom event!
  document.getElementById(id).addEventListener('addNumber', addNumberHandler);
};
