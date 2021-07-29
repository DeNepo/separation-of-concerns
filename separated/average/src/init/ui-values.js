import { measurements } from '../data.js';

// render initial UI using measurements measurements
document.getElementById('current-average').innerHTML = measurements.average;

document.getElementById('close-open-button').innerHTML = measurements.closed
  ? 'open measurements'
  : 'close measurements';

document.getElementById('measurement-button').value = measurements.closed
  ? 'measurements are closed'
  : 'add measurement';
