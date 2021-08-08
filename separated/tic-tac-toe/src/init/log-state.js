import { logger } from '/lib/logger.js';

import { game } from '../data.js';

// log initial state
logger.add({
  initialGame: game,
});
