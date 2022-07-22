import { state } from '../../data/state.js';

import { OUTPUT_ID, LIST_CLASS } from '../../data/constants.js';

export const addOne = (event) => {
  debugger; // each time the user adds a number

  // --- process user input ---
  const newNumber = Number(event.target.value);

  // --- update state ---
  state.numbers.push(newNumber);

  // --- read state to update the UI ---

  // sort a copy of all saved numbers
  const sortedNumbers = [...state.numbers].sort((a, b) => a - b);

  // render a new list
  const numberItems = sortedNumbers
    .map((number) => `<li>${number}</li>`)
    .join('\n');
  const itemsList = `
    <ul class="${LIST_CLASS}">
      ${numberItems}
    </ul>`;

  // append the list to the DOM
  document.getElementById(OUTPUT_ID).innerHTML = itemsList;
};
