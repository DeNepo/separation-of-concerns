import { logger } from '/lib/logger.js';

import { dictionary } from '../data.js';

export const addHandler = () => {
  debugger;
  // read user input
  const newWord = document.getElementById('word').value;

  // update state
  dictionary.words.push(newWord);

  // update UI using state
  document.getElementById('result').innerHTML = dictionary.result;
  // cool!  triggering an event on the input to call the query handler
  //  this makes sure the search results are always up to date
  document.getElementById('query-field').dispatchEvent(new Event('keyup'));
  // notice: the logs will show "query" before "add"
  //  the query handler is called, executed, and logs before this handler logs

  // log user interaction
  //  story name, user input, copy of state
  logger.add({
    handler: 'add',
    newWord,
    dictionary,
  });
};
