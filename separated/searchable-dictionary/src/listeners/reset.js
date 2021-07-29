import { resetHandler } from '../handlers/reset.js';

// attach handler to DOM with event listener
document.getElementById('reset-button').addEventListener('click', resetHandler);
