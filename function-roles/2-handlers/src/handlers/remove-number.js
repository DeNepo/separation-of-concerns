import { data } from '../../../data.js';

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
  const sortedNumbers = [...data.numbers];
  const unsortedNumbers = [...data.numbers];

  // sort the copied state
  sortedNumbers.sort((a, b) => a - b);

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
