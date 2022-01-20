import { addNumberHandler } from '../handlers/add-number.js';

export const addNumberListener = (id = '') => {
  document.getElementById(id).addEventListener('change', addNumberHandler);
};
