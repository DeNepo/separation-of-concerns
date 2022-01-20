import { handler } from './handler.js';

export const listener = () => {
  document.getElementById('input').addEventListener('keyup', handler);
};
