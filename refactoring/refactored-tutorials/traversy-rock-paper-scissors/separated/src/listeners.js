import { play, clearModal, restartGame } from './handlers.js';

document
  .querySelectorAll('.choice')
  .forEach((choice) => choice.addEventListener('click', play));

window.addEventListener('click', clearModal);

document.getElementById('restart').addEventListener('click', restartGame);
