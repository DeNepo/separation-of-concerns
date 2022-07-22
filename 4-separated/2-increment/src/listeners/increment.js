import { INCREMENT_EVENT } from '../../data/constants.js';

import { incrementCurrent } from '../handlers/increment-current.js';

export const incrementListeners = (upEl, downEl) => {
  upEl.addEventListener(INCREMENT_EVENT, incrementCurrent);
  downEl.addEventListener(INCREMENT_EVENT, incrementCurrent);
};
