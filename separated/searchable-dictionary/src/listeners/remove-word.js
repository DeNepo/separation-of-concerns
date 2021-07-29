import { removeHandler } from '../handlers/remove-word.js';

// attach handler to UI with event listener
document
  .getElementById('remove-button')
  .addEventListener('click', removeHandler);
