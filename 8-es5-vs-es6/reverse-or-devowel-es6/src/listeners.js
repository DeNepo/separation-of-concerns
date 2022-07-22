import { handleClick } from './handlers.js';

debugger; // once when the module is loaded

export const doItListener = (element) => {
  debugger; // once when the listeners are attached

  element.addEventListener('click', handleClick);
};

debugger;
