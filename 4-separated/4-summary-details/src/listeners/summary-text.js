import { SUMMARY_EVENT } from '../../data/constants.js';

import { summaryTextHandler } from '../handlers/summary-text.js';

export const summaryText = (element) => {
  element.addEventListener(SUMMARY_EVENT, summaryTextHandler);
};
