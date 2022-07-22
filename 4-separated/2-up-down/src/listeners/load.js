import { LOAD_EVENT } from '../../data/constants.js';

import { initialize } from '../handlers/initialize.js';

export const load = (element) => {
  element.addEventListener(LOAD_EVENT, initialize);
};
