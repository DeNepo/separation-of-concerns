import { MOVE_EVENT } from '../../data/constants.js';

import { placeMove } from '../handlers/place-move.js';

export const placeMoveListener = (element) => {
  element.addEventListener(MOVE_EVENT, placeMove);
};
