import { UP_ID, DOWN_ID, RESET_ID } from '../data/constants.js';

import { load } from './listeners/load.js';
import { up } from './listeners/up.js';
import { down } from './listeners/down.js';
import { reset } from './listeners/reset.js';

// this file is the program's Entry Point
debugger;

load(document);

up(document.getElementById(UP_ID));
down(document.getElementById(DOWN_ID));
reset(document.getElementById(RESET_ID));
