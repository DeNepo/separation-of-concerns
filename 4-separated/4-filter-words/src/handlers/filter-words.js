import { FILTERED_ID, QUERY_ID } from '../../data/constants.js';

import { state } from '../../data/state.js';

import { wordList } from '../components/word-list.js';

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
  const listContainerEl = document.getElementById(FILTERED_ID);
  listContainerEl.innerHTML = '';
  listContainerEl.appendChild(wordList(state.filtered));
};
