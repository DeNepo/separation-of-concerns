import { reverse } from '../utils/reverse.js';

export const reverseInput = (event) => {
  // entry point for the user interaction
  debugger;

  // read user input from event
  const input = event.target.value;

  // pass user input through core utils
  const reversed = reverse(input);

  // render result for user
  document.getElementById('output').innerHTML = reversed;

  // log action for developer
  console.log('--- user action ---');
  console.log('input:', typeof input + ',', input);
  console.log('output', typeof reversed + ',', reversed);
};
