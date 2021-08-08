import { logger } from '/lib/logger.js';

import { words } from '../data.js';

export const filterHandler = () => {
  debugger;
  // read user input
  const newQuery = document.getElementById('query-field').value;

  // read state
  const allWords = words.all.concat();

  // search state
  const newFiltered = allWords.filter(word => word.includes(newQuery));

  // update state
  words.filtered = newFiltered;
  words.query = newQuery;

  // update UI with state
  const listEl = document.getElementById('filtered-words');
  listEl.innerHTML = '';
  for (let word of words.filtered) {
    const li = document.createElement('li');
    li.innerHTML = word;
    listEl.appendChild(li);
  }

  // log user interaction
  //  story name, user input, copy of state
  logger.add({
    handler: 'filter',
    newQuery,
    words,
  });
};
