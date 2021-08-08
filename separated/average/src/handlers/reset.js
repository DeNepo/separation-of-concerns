import { logger } from '/lib/logger.js';

import { measurements } from '../data.js';
import { addMeasurementHandler } from './add.js';

export const resetMeasurementsHandler = () => {
  debugger;

  // update measurements
  measurements.validMeasurements = [];
  measurements.invalidMeasurements = [];
  measurements.average = 0;
  measurements.closed = false;

  // update UI
  document.getElementById('current-average').innerHTML = measurements.average;
  document.getElementById('input-form').measurement.value = '';

  const measurementsButton = document.getElementById('measurement-button');
  measurementsButton.addEventListener('click', addMeasurementHandler);
  measurementsButton.value = 'add measurement';

  // log action
  logger.add({
    handler: 'reset measurements',
    measurements,
  });
};
