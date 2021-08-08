import { logger } from '/lib/logger.js';

export const preventDefault = event => {
  event.preventDefault();

  logger.add({
    handler: 'prevent default',
    event,
  });
};
