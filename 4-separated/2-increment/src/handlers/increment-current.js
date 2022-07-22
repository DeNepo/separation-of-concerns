import { CURRENT_ID } from '../../data/constants.js';

import { state } from '../../data/state.js';

export const incrementCurrent = (event) => {
  debugger;
  const action = event.target.id;

  // update state
  state.past.push(state.current);
  if (action === 'up') {
    state.current += state.step;
  } else if (action === 'down') {
    state.current -= state.step;
  } else {
    // somehow this handler was attached to a wrong element
    return;
  }

  // render to user
  document.getElementById(CURRENT_ID).innerHTML = state.current;
};
