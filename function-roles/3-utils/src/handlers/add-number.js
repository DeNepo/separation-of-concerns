import { data } from '../../../data.js';

import { sortNumbers } from '../utils/sort-numbers.js';

export const addNumberHandler = (event) => {
  debugger; // entry point: user interaction

  // process user input
  const newNumber = Number(event.target.value);

  // update state
  data.numbers.push(newNumber);

  // read state
  const unsortedNumbers = [...data.numbers];

  // sort the copied state
  const sortedNumbers = sortNumbers(unsortedNumbers);

  // update the UI
  const unsortedListItems = unsortedNumbers
    .map((number) => `<li>${number}</li>`)
    .join('\n');
  document.getElementById('unsorted-container').innerHTML = `
    <ul class="no-dots">
      ${unsortedListItems}
    </ul>`;

  const sortedLisItems = sortedNumbers
    .map((number) => `<li>${number}</li>`)
    .join('\n');
  document.getElementById('sorted-container').innerHTML = `
    <ul class="no-dots">
      ${sortedLisItems}
    </ul>`;
};
