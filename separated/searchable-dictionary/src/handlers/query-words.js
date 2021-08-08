import { logger } from '/lib/logger.js';

import { dictionary } from '../data.js';

export const queryHandler = event => {
  debugger;
  // read user input
  const newQuery = event.target.value;

  // read state
  const words = dictionary.words;

  // search state
  const queryResult = words.find(word => word.includes(newQuery));
  const newResult = queryResult || '';

  // update state
  dictionary.result = newResult;
  dictionary.query = newQuery;

  // display for user
  document.getElementById('result').innerHTML = dictionary.result;

  // log user interaction
  //  story name, user input, copy of state
  logger.add({
    handler: 'query',
    event,
    newQuery,
    dictionary,
  });
};
