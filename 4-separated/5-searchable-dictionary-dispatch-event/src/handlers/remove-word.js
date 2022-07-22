import {
  INPUT_ID,
  OUTPUT_ID,
  QUERY_EVENT,
  QUERY_ID,
} from '../../data/constants.js';

import { state } from '../../data/state.js';

export const removeWord = () => {
  debugger;
  // read user input
  const toRemove = document.getElementById(INPUT_ID).value;

  // read from state
  const words = state.words;

  // carry out the logic logic
  //  remove the word
  const newWords = words.filter((word) => word !== toRemove);

  // update state
  state.words = newWords;

  // update UI using state
  document.getElementById(OUTPUT_ID).innerHTML = state.result; // cool!  triggering an event on the input to call the query handler
  //  this makes sure the search results are always up to date
  document.getElementById(QUERY_ID).dispatchEvent(new Event(QUERY_EVENT));
  // notice: the logs will show "query" before "add"
  //  the query handler is called, executed, and logs before this handler logs

  // log user interaction
  console.log('removeHandler:', state);
};
