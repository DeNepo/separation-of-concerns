import { RESET_EVENT } from '../../data/constants.js';

import { resetGame } from '../handlers/reset-game.js';

export const resetGameListener = (element) => {
  element.addEventListener(RESET_EVENT, resetGame);
};
