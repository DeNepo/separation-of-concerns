import { TRANSFORM_EVENT } from '../../data/constants.js';

import { transformInput } from '../handlers/transform-input.js';

export const handleInput = (element) => {
  element.addEventListener(TRANSFORM_EVENT, transformInput);
};
