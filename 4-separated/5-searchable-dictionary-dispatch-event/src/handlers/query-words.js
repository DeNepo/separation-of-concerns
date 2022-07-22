import { OUTPUT_ID } from '../../data/constants.js';

import { state } from '../../data/state.js';

export const queryWords = (event) => {
  debugger;
  // read user input
  const newQuery = event.target.value;

  // read state
  const words = state.words;

  // search state
  const queryResult = words.find((word) => word.includes(newQuery));
  const newResult = queryResult || '';

  // update state
  state.result = newResult;
  state.query = newQuery;

  // display for user
  document.getElementById(OUTPUT_ID).innerHTML = state.result;

  // log user interaction
  console.log('queryHandler:', state);
};
