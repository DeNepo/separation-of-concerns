import { state } from '../../data/state.js';

import { OUTPUT_ID } from '../../data/constants.js';

import { sortNumbers } from '../utils/sort-numbers.js';

import { numberList } from '../components/number-list.js';

export const addOne = (event) => {
  debugger; // each time the user adds a number

  // --- process user input ---
  const newNumber = Number(event.target.value);

  // --- update state ---
  state.numbers.push(newNumber);

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
