import { logger } from '/lib/logger.js';

import { dictionary } from '../data.js';

export const removeHandler = () => {
  debugger;
  // read user input
  const toRemove = document.getElementById('word').value;

  // read from state
  const words = dictionary.words;

  // carry out the logic logic
  //  remove the word
  const newWords = words.filter(word => word !== toRemove);

  // update state
  dictionary.words = newWords;

  // update UI using state
  document.getElementById('result').innerHTML = dictionary.result; // cool!  triggering an event on the input to call the query handler
  //  this makes sure the search results are always up to date
  document.getElementById('query-field').dispatchEvent(new Event('keyup'));
  // notice: the logs will show "query" before "add"
  //  the query handler is called, executed, and logs before this handler logs

  // log user interaction
  //  story name, user input, copy of state
  logger.add({
    handler: 'remove',
    toRemove,
    dictionary,
  });
};
