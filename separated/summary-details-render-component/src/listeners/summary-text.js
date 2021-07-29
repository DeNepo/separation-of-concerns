import { summaryTextHandler } from '../handlers/summary-text.js';

document
  .getElementById('new-summary-text')
  .addEventListener('keyup', summaryTextHandler);
