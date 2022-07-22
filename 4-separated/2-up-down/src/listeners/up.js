import { UP_EVENT } from '../../data/constants.js';

import { upHandler } from '../handlers/up.js';

export const up = (element) => {
  element.addEventListener(UP_EVENT, upHandler);
};
