import { state } from '../../data/state.js';

import { OUTPUT_ID } from '../../data/constants.js';

import { sortNumbers } from '../utils/sort-numbers.js';
import { filterNumber } from '../utils/filter-number.js';

import { numberList } from '../components/number-list.js';

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
  const newList = numberList(sortedNumbers);

  // append the list to the DOM
  const listContainer = document.getElementById(OUTPUT_ID);
  listContainer.innerHTML = '';
  listContainer.appendChild(newList);
};
