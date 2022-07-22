import { INTERFACE_ID } from '../data/constants.js';

import { updateOnMove } from './listeners/update-on-move.js';

debugger; // program entry point

updateOnMove(document.getElementById(INTERFACE_ID));
