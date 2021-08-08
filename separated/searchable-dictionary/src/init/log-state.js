import { logger } from '/lib/logger.js';

import { dictionary } from '../data.js';

// log initial state
logger.add({
  initialDictionary: dictionary,
});
