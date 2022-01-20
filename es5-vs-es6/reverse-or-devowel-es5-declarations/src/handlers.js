'use strict';

debugger; // once when the script is loaded

/**
 * it will:
 * - read user input and configurations from the event
 * - compute the final value using the program's utils
 * - render the final value to the DOM
 *
 * uses: reverse, removeVowels
 */
function handleClick(event) {
  debugger; // each time a user clicks the button

  var form = event.target.form;
  var input = form.text.value;
  var action = form.action.value;
  var result;

  // wait, where do these functions come from?
  //  not so clear without imports!
  if (action === 'reverse') {
    result = reverseString(input);
  } else {
    result = removeVowels(input);
  }

  form.output.value = result;

  // log the interaction for developers
  console.log(input, action, result);
}

debugger;
