import { incrementCurrent } from '../handlers/increment-current.js';

document.getElementById('up').addEventListener('click', incrementCurrent);
document.getElementById('down').addEventListener('click', incrementCurrent);
