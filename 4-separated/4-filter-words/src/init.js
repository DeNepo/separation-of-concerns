import { ADD_ID, QUERY_ID, RESET_ID } from '../data/constants.js';

import { addWordListener } from './listeners/add-word.js';
import { filterWordsListener } from './listeners/filter-words.js';
import { resetListener } from './listeners/reset.js';

// this file is the program's Entry Point
debugger;

// attach event listeners
addWordListener(document.getElementById(ADD_ID));
filterWordsListener(document.getElementById(QUERY_ID));
resetListener(document.getElementById(RESET_ID));
