import { loadHandler } from '../handlers/load.js';

export const loadListener = () => {
  document.addEventListener('DOMContentLoaded', loadHandler);
};
