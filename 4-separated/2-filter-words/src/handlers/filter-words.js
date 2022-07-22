import { FILTERED_ID, QUERY_ID } from '../../data/constants.js';
import { state } from '../../data/state.js';

export const filterHandler = () => {
  debugger;
  // read user input
  const newQuery = document.getElementById(QUERY_ID).value;

  // read state
  const allWords = state.all.concat();

  // search state
  const newFiltered = allWords.filter((word) => word.includes(newQuery));

  // update state
  state.filtered = newFiltered;
  state.query = newQuery;

  // update UI with state
  const listEl = document.getElementById(FILTERED_ID);
  listEl.innerHTML = '';
  for (let word of state.filtered) {
    const li = document.createElement('li');
    li.innerHTML = word;
    listEl.appendChild(li);
  }
};
