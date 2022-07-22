import { LOAD_EVENT } from '../../data/constants.js';

import { setupUI } from '../handlers/setup-ui.js';

export const appLoad = (element) => {
  element.addEventListener(LOAD_EVENT, setupUI);
};
