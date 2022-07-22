import { UP_ID, DOWN_ID, STEP_ID, RESET_ID } from '../data/constants.js';

import { appLoad } from './listeners/app-load.js';
import { incrementListeners } from './listeners/increment.js';
import { resetListener } from './listeners/reset.js';
import { setStepListener } from './listeners/set-step.js';

// this file is the program's Entry Point
debugger;

appLoad(document);

incrementListeners(
  document.getElementById(UP_ID),
  document.getElementById(DOWN_ID),
);
resetListener(document.getElementById(RESET_ID));
setStepListener(document.getElementById(STEP_ID));
