import { state } from '../../data/state.js';

import { wordsList } from '../components/words-list.js';

export const addHandler = () => {
  debugger;
  // read user input
  const newWord = document.getElementById('word').value;

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
  const listEl = document.getElementById('filtered-words');
  listEl.innerHTML = '';
  const newWordsList = wordsList(state.filtered);
  listEl.appendChild(newWordsList);
};
