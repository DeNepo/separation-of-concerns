import { logger } from '/lib/logger.js';

import { numbers } from '../data.js';

export const incrementCurrent = event => {
  debugger;
  const action = event.target.id;

  // update state
  numbers.past.push(numbers.current);
  if (action === 'up') {
    numbers.current += numbers.step;
  } else if (action === 'down') {
    numbers.current -= numbers.step;
  } else {
    // somehow this handler was attached to a wrong element
    return;
  }

  // render to user
  document.getElementById('current-number').innerHTML = numbers.current;

  // log action for developers
  logger.add({
    handler: 'increment current',
    action,
    numbers,
  });
};
