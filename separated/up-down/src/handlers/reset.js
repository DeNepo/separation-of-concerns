import { logger } from '/lib/logger.js';

import { numbers } from '../data.js';

export const resetHandler = () => {
  // reset state
  numbers.current = 0;
  numbers.past = [];

  // reset UI
  document.getElementById('current-number').innerHTML = numbers.current;

  // log user interaction
  logger.add({
    handler: 'reset',
    numbers,
  });
};
