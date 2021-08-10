import { saveNoCopiesHandler } from './handler.js';

export const listener = () => {
  document
    .getElementById('no-copies-button')
    .addEventListener('click', saveNoCopiesHandler);
};
