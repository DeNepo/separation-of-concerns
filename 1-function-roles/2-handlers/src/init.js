import { INPUT_ID, OUTPUT_ID } from '../data/constants.js';

import { addNumber } from './listeners/add-number.js';
import { removeNumber } from './listeners/remove-number.js';

debugger; // once when the program is initialized

// ===== a user can add a number to the list =====

addNumber(INPUT_ID);

// ===== a user can remove a number from the list =====

removeNumber(OUTPUT_ID);
