import { state } from '../../data/state.js';

import { OUTPUT_ID, LIST_CLASS } from '../../data/constants.js';

import { sortNumbers } from '../utils/sort-numbers.js';
import { filterNumber } from '../utils/filter-number.js';

export const removeOne = (event) => {
  debugger; // each time the user removes a number

  // only continue if the user clicked a list item
  if (event.target.nodeName !== 'LI') {
    return;
  }

  // --- process user input ---
  const toRemove = Number(event.target.innerText);

  // --- update state ---
  state.numbers = filterNumber(state.numbers, toRemove);

  // --- read state to update the UI ---

  // sort a copy of all saved numbers
  const sortedNumbers = sortNumbers(state.numbers);

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
