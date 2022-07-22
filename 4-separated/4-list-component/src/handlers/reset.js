import { state } from '../../data/state.js';

import { wordsList } from '../components/words-list.js';

export const resetHandler = () => {
  debugger;

  // update state
  state.query = '';
  state.filtered = [];
  state.all = [];

  // re-render UI from state
  const listEl = document.getElementById('filtered-words');
  listEl.innerHTML = '';
  const newWordsList = wordsList(state.filtered);
  listEl.appendChild(newWordsList);

  document.getElementById('query-field').value = state.query;
  document.getElementById('word').value = '';
};
