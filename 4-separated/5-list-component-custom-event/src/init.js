import { ADD_ID, QUERY_ID, RESET_ID } from '../data/constants.js';

import { addListener } from './listeners/add-word.js';
import { filterListener } from './listeners/filter-words.js';
import { resetListener } from './listeners/reset.js';

// this file is the program's Entry Point
debugger;

// attach event listeners
addListener(document.getElementById(ADD_ID));
filterListener(document.getElementById(QUERY_ID));
resetListener(document.getElementById(RESET_ID));
