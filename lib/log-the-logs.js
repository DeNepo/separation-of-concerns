import { logger } from './logger.js';

const logLogsContainer = document.createElement('div');
logLogsContainer.style = 'text-align:center;';
document.body.insertBefore(logLogsContainer, document.body.firstChild);

const logLogsButton = document.createElement('button');
logLogsButton.innerHTML = 'log the logs';
logLogsButton.addEventListener('click', () =>
  console.log('interactions:', logger.history),
);
logLogsContainer.appendChild(logLogsButton);
