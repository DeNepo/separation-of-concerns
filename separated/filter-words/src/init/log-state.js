import { logger } from '/lib/logger.js';

import { words } from '../data.js';

// log initial state
logger.add({
  initialWords: words,
});
