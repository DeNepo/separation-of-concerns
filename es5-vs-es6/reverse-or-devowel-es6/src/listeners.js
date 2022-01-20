import { handleClick } from './handlers.js';

debugger; // once when the module is loaded

export const doItListener = (id = '') => {
  debugger; // once when the listeners are attached

  document.getElementById(id).addEventListener('click', handleClick);
};

debugger;
