import { logger } from '/lib/logger.js';

import { numbers } from '../data.js';

export const down = () => {
  debugger;
  // update state
  numbers.past.push(numbers.current);
  numbers.current -= 1;

  // render to user
  document.getElementById('current-number').innerHTML = numbers.current;

  // log action for developers
  logger.add({
    handler: 'down',
    numbers,
  });
};
