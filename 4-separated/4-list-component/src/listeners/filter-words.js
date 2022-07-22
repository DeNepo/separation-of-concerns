import { FILTER_EVENT } from '../../data/constants.js';

import { filterHandler } from '../handlers/filter-words.js';

export const filterListener = (element) => {
  element.addEventListener(FILTER_EVENT, filterHandler);
};
