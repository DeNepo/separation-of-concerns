import { state } from '../data/state.js';

debugger; // once when the program is initialized

// ==== the user can add a new number to state ====

document.getElementById('next-number').addEventListener('change', (event) => {
  debugger; // each time the user changes the 'next-number' input

  // --- read the user's input ---
  const inputValue = event.target.value;
  const nextNumber = Number(inputValue);

  // --- update state ---
  state.allNumbers.push(nextNumber);
  state.currentNumber = state.allNumbers.at(-1);

  // --- update UI ---

  // create new HTML string
  const liString = `<li class="number-item">${state.currentNumber}</li>`;

  // add the new item to the history
  const backwardsContainer = document.getElementById('number-history');
  backwardsContainer.innerHTML = liString + backwardsContainer.innerHTML;
});

// ==== the user can change the input's value ====

document
  .getElementById('number-history')
  .addEventListener('mouseover', (event) => {
    debugger; // each time the user moves the mouse over 'number-history'

    // only do something if the user is hovering over an LI child
    if (event.target.nodeName !== 'LI') {
      return;
    }

    // read the user's input
    const targetText = event.target.innerText;
    const userNumber = Number(targetText);

    // update state
    state.currentNumber = userNumber;

    // update the UI
    document.getElementById('next-number').value = state.currentNumber;
  });
