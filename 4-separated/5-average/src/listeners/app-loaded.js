import { INIT_EVENT } from '../../data/constants.js';

import { initializeUI } from '../handlers/initialize-ui.js';

export const appLoaded = (element) => {
  element.addEventListener(INIT_EVENT, initializeUI);
};
