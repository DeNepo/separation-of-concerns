import { logger } from '/lib/logger.js';

import { componentState } from '../data.js';

// log initial state
logger.add({
  initialComponentState: componentState,
});
