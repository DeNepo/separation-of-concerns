import { addHandler } from '../handlers/add-word.js';

// attach handler to UI with event listener
document.getElementById('add-button').addEventListener('click', addHandler);
