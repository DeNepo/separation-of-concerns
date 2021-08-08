import { logger } from '/lib/logger.js';

import { words } from '../data.js';

export const resetHandler = () => {
  debugger;

  // update state
  words.query = '';
  words.filtered = [];
  words.all = [];

  // re-render UI from state
  document.getElementById('filtered-words').innerHTML = '';
  document.getElementById('query-field').value = '';
  document.getElementById('word').value = '';

  // log user interaction
  //  user story name, user input, copy of state
  logger.add({
    handler: 'reset',
    words,
  });
};
