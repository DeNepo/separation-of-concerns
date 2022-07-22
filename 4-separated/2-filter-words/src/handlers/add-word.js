import { FILTERED_ID, WORD_ID } from '../../data/constants.js';

import { state } from '../../data/state.js';

export const addHandler = () => {
  debugger;
  // read user input
  const newWord = document.getElementById(WORD_ID).value;

  // read from state
  const newAll = state.all.concat();
  const query = state.query;

  // do core logic
  newAll.push(newWord);
  const newFiltered = newAll.filter((word) => word.includes(query));

  // update state
  state.filtered = newFiltered;
  state.all = newAll;

  // update UI with state
  const listEl = document.getElementById(FILTERED_ID);
  listEl.innerHTML = '';
  for (let word of state.filtered) {
    const li = document.createElement('li');
    li.innerHTML = word;
    listEl.appendChild(li);
  }
};
