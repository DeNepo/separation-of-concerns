import { IGNORED_EVENTS } from '../../data/constants.js';

import { preventDefault } from '../handlers/prevent-default.js';

export const preventDefaultListener = (element) => {
  for (const event of IGNORED_EVENTS) {
    element.addEventListener(event, preventDefault);
  }
};
