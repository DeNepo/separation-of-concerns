import { INPUT_ID, OUTPUT_ID, QUERY_ID } from '../../data/constants.js';

import { state } from '../../data/state.js';

export const resetWords = () => {
  // debugger;

  // update state
  state.words = [];
  state.query = '';
  state.result = '';

  // re-render UI from state
  document.getElementById(INPUT_ID).value = '';
  document.getElementById(QUERY_ID).value = '';
  document.getElementById(OUTPUT_ID).innerHTML = '';

  // log user interaction
  console.log('resetHandler:', state);
};
