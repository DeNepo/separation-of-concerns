import { STEP_SIZE_EVENT } from '../../data/constants.js';

import { setStep } from '../handlers/set-step.js';

export const setStepListener = (element) => {
  element.addEventListener(STEP_SIZE_EVENT, setStep);
};
