import { DOWN_EVENT } from '../../data/constants.js';

import { downHandler } from '../handlers/down.js';

export const down = (element) => {
  element.addEventListener(DOWN_EVENT, downHandler);
};
