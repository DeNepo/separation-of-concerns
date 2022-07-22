import { OUTPUT_ID } from '../../data/constants.js';

import { reverseAndUpper } from '../utils/reverse-and-upper.js';

export const transformInput = (event) => {
  // read user input from event
  const input = event.target.value;

  // execute core logic
  const reversedUppercase = reverseAndUpper(input);

  // render result for user
  document.getElementById(OUTPUT_ID).innerHTML = reversedUppercase;

  // log action for developers
  console.log('\n--- user action ---');
  console.log('input:', input);
  console.log('reversedUppercase:', reversedUppercase);
};
