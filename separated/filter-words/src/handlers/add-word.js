import { logger } from '/lib/logger.js';

import { words } from '../data.js';

export const addHandler = () => {
  debugger;
  // read user input
  const newWord = document.getElementById('word').value;

  // read from state
  const newAll = words.all.concat();
  const query = words.query;

  // do core logic
  newAll.push(newWord);
  const newFiltered = newAll.filter(word => word.includes(query));

  // update state
  words.filtered = newFiltered;
  words.all = newAll;

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
    handler: 'add',
    newWord,
    words,
  });
};
