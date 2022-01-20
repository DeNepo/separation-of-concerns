import { data } from '../../../data.js';

import { sortNumbers } from '../utils/sort-numbers.js';

import { listComponent } from '../components/list.js';

export const removeNumberHandler = (event) => {
  debugger; // entry point: user interaction

  /*
    you don't need to check the element type since the event is custom
      only the elements rendered in the list will dispatch a removeNumber event!
    you also don't need to cast the input to a number
      it is already stored as a number in the .detail property!

    the handler needs to "know" the behavior of the list item components
      -> they emit `removeNumber` events
    but it DOES NOT need to know the component's implementation!
      -> the component could be written with LI, or DIV, or anything else
        and you would not need to change this handler
  */

  // process user input
  const toRemove = event.detail.number;

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
