import { ADD_ID, TOGGLE_INPUT_ID, RESET_ID } from '../data/constants.js';

import { appLoaded } from './listeners/app-loaded.js';
import { addListener } from './listeners/add.js';
import { closeOpenListener } from './listeners/close-open.js';
import { resetListener } from './listeners/reset.js';

// this file is the program's Entry Point
debugger;

// set app listeners

appLoaded(document);

addListener(document.getElementById(ADD_ID), true);

closeOpenListener(document.getElementById(TOGGLE_INPUT_ID));

resetListener(document.getElementById(RESET_ID));
