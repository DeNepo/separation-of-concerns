import { ADD_ID, QUERY_ID, REMOVE_ID, RESET_ID } from '../data/constants.js';

import { add } from './listeners/add.js';
import { query } from './listeners/query.js';
import { remove } from './listeners/remove.js';
import { reset } from './listeners/reset.js';

// this file is the program's Entry Point
debugger;

add(document.getElementById(ADD_ID));
query(document.getElementById(QUERY_ID));
remove(document.getElementById(REMOVE_ID));
reset(document.getElementById(RESET_ID));
