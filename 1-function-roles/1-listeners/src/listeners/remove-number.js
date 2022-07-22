import { state } from '../../data/state.js';

import { REMOVE_EVENT, OUTPUT_ID, LIST_CLASS } from '../../data/constants.js';

export const removeNumber = (id = '') => {
  document.getElementById(id).addEventListener(REMOVE_EVENT, (event) => {
    debugger; // each time the user removes a number

    // only continue if the user clicked a list item
    if (event.target.nodeName !== 'LI') {
      return;
    }

    // --- process user input ---
    const toRemove = Number(event.target.innerText);

    // --- update state ---
    state.numbers = state.numbers.filter((number) => number !== toRemove);

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
  });
};
