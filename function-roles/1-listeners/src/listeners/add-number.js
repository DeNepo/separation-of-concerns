import { data } from '../../../data.js';

export const addNumberListener = (id = '') => {
  document.getElementById(id).addEventListener('change', (event) => {
    debugger; // entry point: user interaction

    // process user input
    const newNumber = Number(event.target.value);

    // update state
    data.numbers.push(newNumber);

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
  });
};
