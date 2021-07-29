import { openCloseHandler } from '../handlers/open-close.js';

document
  .getElementById('toggle-is-open')
  .addEventListener('change', openCloseHandler);
