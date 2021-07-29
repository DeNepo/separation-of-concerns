import { queryHandler } from '../handlers/query-words.js';

// attach handler to UI with event listener
document.getElementById('query-field').addEventListener('keyup', queryHandler);
