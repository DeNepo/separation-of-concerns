import { logger } from '/lib/logger.js';

import { measurements } from '../data.js';
import { addMeasurementHandler } from './add.js';

export const closeOpenHandler = () => {
  debugger;

  // update measurements
  measurements.closed = !measurements.closed;

  // update UI based on measurements
  const measurementsButton = document.getElementById('measurement-button');
  const closeButton = document.getElementById('close-open-button');
  if (measurements.closed) {
    measurementsButton.value = 'measurements are closed';
    measurementsButton.removeEventListener('click', addMeasurementHandler);
    closeButton.innerHTML = 'open measurements';
  } else {
    measurementsButton.value = 'add measurement';
    measurementsButton.addEventListener('click', addMeasurementHandler);
    closeButton.innerHTML = 'close measurements';
  }

  // log action
  logger.add({
    handler: 'close/open measurements',
    measurements,
  });
};
