import { state } from '../../data/state.js';

import { wordsList } from '../components/words-list.js';

export const filterHandler = () => {
  debugger;
  // read user input
  const newQuery = document.getElementById('query-field').value;

  // read state
  const allWords = state.all.concat();

  // search state
  const newFiltered = allWords.filter((word) => word.includes(newQuery));

  // update state
  state.filtered = newFiltered;
  state.query = newQuery;

  // update UI with state
  const listEl = document.getElementById('filtered-words');
  listEl.innerHTML = '';
  const newWordsList = wordsList(state.filtered);
  listEl.appendChild(newWordsList);
};
