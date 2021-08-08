import { logger } from '/lib/logger.js';

import { dictionary } from '../data.js';

export const resetHandler = () => {
  // debugger;

  // update state
  dictionary.words = [];
  dictionary.query = '';
  dictionary.result = '';

  // re-render UI from state
  document.getElementById('word').value = '';
  document.getElementById('query-field').value = '';
  document.getElementById('result').innerHTML = '';

  // log user interaction
  //  user story name, user input, copy of state
  logger.add({
    handler: 'reset',
    dictionary,
  });
};
