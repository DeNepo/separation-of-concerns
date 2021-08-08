import { logger } from '/lib/logger.js';

import { numbers } from '../data.js';

export const setStep = event => {
  debugger;

  // read user input
  const newStepInput = event.target.value;
  const newStep = Number(newStepInput);
  if (Number.isNaN(newStep)) {
    // this should never happen because the input is type number
    // but just in case
    return;
  }

  // update state
  numbers.step = newStep;

  // log action for developers
  logger.add({
    handler: 'set step',
    newStepInput,
    newStep,
    numbers,
  });
};
