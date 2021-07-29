import { filterHandler } from '../handlers/filter-words.js';

// attach handler to UI with event listener
document.getElementById('query-field').addEventListener('keyup', filterHandler);
