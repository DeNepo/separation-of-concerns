import { logger } from '/lib/logger.js';

import { words } from '../data.js';
import { wordsList } from '../components/words-list.js';

export const resetHandler = () => {
  debugger;

  // update state
  words.query = '';
  words.filtered = [];
  words.all = [];

  // re-render UI from state
  const listEl = document.getElementById('filtered-words');
  listEl.innerHTML = '';
  const newWordsList = wordsList(words.filtered);
  listEl.appendChild(newWordsList);

  document.getElementById('query-field').value = words.query;
  document.getElementById('word').value = '';

  // log user interaction
  //  user story name, user input, copy of state
  logger.add({
    handler: 'reset',
    words,
    newWordsList,
  });
};
