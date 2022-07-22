import { QUERY_EVENT } from '../../data/constants.js';

import { queryWords } from '../handlers/query-words.js';

export const query = (element) => {
  element.addEventListener(QUERY_EVENT, queryWords);
};
