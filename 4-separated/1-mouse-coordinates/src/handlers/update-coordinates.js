import { COORDINATES_ID } from '../../data/constants.js';

import { format } from '../utils/format.js';

export const updateCoordinates = (event) => {
  debugger; // entry point for each interaction

  // read user input from event
  const xValue = event.pageX;
  const yValue = event.pageY;

  // execute core logic
  const formattedCoordinates = format(xValue, yValue);

  // render result for user
  document.getElementById(COORDINATES_ID).innerHTML = formattedCoordinates;

  // log action for developers
  console.log('\n--- user action ---');
  console.log('xValue:', xValue);
  console.log('yValue:', yValue);
};
