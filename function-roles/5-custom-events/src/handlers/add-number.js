import { data } from '../../../data.js';

import { sortNumbers } from '../utils/sort-numbers.js';

import { listComponent } from '../components/list.js';

export const addNumberHandler = (event) => {
  debugger; // entry point: user interaction

  // read event data, no need to cast it to a number!
  //  custom events for the win
  const newNumber = event.detail.number;

  // update state
  data.numbers.push(newNumber);

  // read state
  const unsortedNumbers = [...data.numbers];

  // sort the copied state
  const sortedNumbers = sortNumbers(unsortedNumbers);

  // update the UI
  const unsortedRoot = document.getElementById('unsorted-container');
  unsortedRoot.innerHTML = '';
  unsortedRoot.appendChild(listComponent(unsortedNumbers));

  const sortedRoot = document.getElementById('sorted-container');
  sortedRoot.innerHTML = '';
  sortedRoot.appendChild(listComponent(sortedNumbers));
};
