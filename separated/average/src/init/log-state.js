import { logger } from '/lib/logger.js';

import { measurements } from '../data.js';

// log initial state
logger.add({
  initialMeasurements: measurements,
});
