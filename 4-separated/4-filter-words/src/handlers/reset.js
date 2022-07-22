import { FILTERED_ID, QUERY_ID, WORD_ID } from '../../data/constants.js';
import { state } from '../../data/state.js';

export const resetHandler = () => {
  debugger;

  // update state
  state.query = '';
  state.filtered = [];
  state.all = [];

  // re-render UI from state
  document.getElementById(FILTERED_ID).innerHTML = '';
  document.getElementById(QUERY_ID).value = '';
  document.getElementById(WORD_ID).value = '';
};
