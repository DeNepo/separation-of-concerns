import { initializeApp, handleTyping } from './handlers.js';

debugger; // once when the module is loaded

export const initListener = () => {
  debugger; // once when the listeners are attached

  document.addEventListener('DOMContentLoaded', initializeApp);
};

export const removeCharactersListener = (id = '') => {
  debugger; // once when the listeners are attached

  document.getElementById(id).addEventListener('input', handleTyping);
};

debugger;
