import { MOVE_EVENT } from '../../data/constants.js';

import { updateCoordinates } from '../handlers/update-coordinates.js';

export const updateOnMove = (element) => {
  element.addEventListener(MOVE_EVENT, updateCoordinates);
};
