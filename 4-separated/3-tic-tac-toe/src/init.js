import { BOARD_ID, RESET_ID } from '../data/constants.js';

import { placeMoveListener } from './listeners/place-move.js';
import { resetGameListener } from './listeners/reset-game.js';

// this file is the program's Entry Point
debugger;

placeMoveListener(document.getElementById(BOARD_ID));
resetGameListener(document.getElementById(RESET_ID));
