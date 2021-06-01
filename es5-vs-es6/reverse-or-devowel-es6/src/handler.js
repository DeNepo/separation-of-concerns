import { reverseString, removeVowels } from './logic.js';

debugger; // once when the module is loaded

/**
 * it will:
 * - read user input and configurations from the event
 * - compute the final value using the program's logic
 * - render the final value to the DOM
 *
 * uses: reverse, removeVowels
 */
export const handleClick = event => {
  debugger; // each time a user clicks the button

  const form = event.target.form;

  const input = form.text.value;
  const action = form.action.value;

  const result =
    action === 'reverse' ? reverseString(input) : removeVowels(input);

  form.output.value = result;

  // log the interaction for developers
  console.log(input, action, result);
};

debugger;
