debugger; // once when the module is loaded

// run the listener file
import './listener.js';

import { data } from './data.js';

/**
 * set the initial values for the form inputs using the program data
 */
const form = document.getElementById('removable');

form.text.value = data.text;
form.result.value = data.text;

debugger;
