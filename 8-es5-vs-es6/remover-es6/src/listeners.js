import { initializeApp, handleTyping } from './handlers.js';

debugger; // once when the module is loaded

export const initListener = (element) => {
  debugger; // once when the listeners are attached

  element.addEventListener('DOMContentLoaded', initializeApp);
};

export const removeCharactersListener = (element) => {
  debugger; // once when the listeners are attached

  element.addEventListener('input', handleTyping);
};

debugger;
