import { logger } from '/lib/logger.js';

import { average } from '../logic/average.js';
import { measurements } from '../data.js';

export const addMeasurementHandler = event => {
  debugger;

  // read user input
  const newMeasurementStr = event.target.form.measurement.value;
  const newMeasurement = Number(newMeasurementStr);

  // read from measurements
  const validMeasurements = measurements.validMeasurements;
  const invalidMeasurements = measurements.invalidMeasurements;
  const currentAverage = measurements.average;

  // perform core logic
  let newAverage;
  if (Number.isNaN(newMeasurement)) {
    invalidMeasurements.push(newMeasurementStr);
    newAverage = currentAverage;
  } else {
    validMeasurements.push(newMeasurement);
    newAverage = average(validMeasurements);
  }

  // update measurements
  measurements.validMeasurements = validMeasurements;
  measurements.invalidMeasurements = invalidMeasurements;
  measurements.average = newAverage;

  // re-render UI from measurements
  document.getElementById('current-average').innerHTML = measurements.average;

  // log action
  logger.add({
    handler: 'add measurement',
    event,
    newMeasurementStr,
    newMeasurement,
    measurements,
  });
};
