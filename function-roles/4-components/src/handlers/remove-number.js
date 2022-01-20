import { data } from '../../../data.js';

import { sortNumbers } from '../utils/sort-numbers.js';

import { listComponent } from '../components/list.js';

export const removeNumberHandler = (event) => {
  debugger; // entry point: user interaction

  // not good!  the handler needs to "know" how you wrote your component
  if (event.target.nodeName !== 'LI') {
    return;
  }

  // process user input
  const toRemove = Number(event.target.innerHTML);

  // update state
  data.numbers = data.numbers.filter((number) => number !== toRemove);

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
