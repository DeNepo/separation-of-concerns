import { MAIN_EVENT } from '../../data/constants.js';

import { mainTextHandler } from '../handlers/main-text.js';

export const mainText = (element) => {
  element.addEventListener(MAIN_EVENT, mainTextHandler);
};
