import { loadListener } from './listeners/load.js';
import { addNumberListener } from './listeners/add-number.js';
import { removeNumberListener } from './listeners/remove-number.js';

debugger; // entry point: attaching event listeners

loadListener();
addNumberListener('input-container');
removeNumberListener('output-container');
