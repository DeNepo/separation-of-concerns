import {
  INPUT_ID,
  OUTPUT_ID,
  QUERY_EVENT,
  QUERY_ID,
} from '../../data/constants.js';

import { state } from '../../data/state.js';

export const addWord = () => {
  debugger;
  // read user input
  const newWord = document.getElementById(INPUT_ID).value;

  // update state
  state.words.push(newWord);

  // update UI using state
  document.getElementById(OUTPUT_ID).innerHTML = state.result;
  // cool!  triggering an event on the input to call the query handler
  //  this makes sure the search results are always up to date
  document.getElementById(QUERY_ID).dispatchEvent(new Event(QUERY_EVENT));
  // notice: the logs will show "query" before "add"
  //  the query handler is called, executed, and logs before this handler logs

  // log for the developer
  console.log('addHandler:', state);
};
