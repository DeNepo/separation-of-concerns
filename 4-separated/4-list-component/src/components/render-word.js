import { WORD_CLASS } from '../../data/constants.js';

/**
 *
 * @param {} word
 */
export const renderWord = (word = '') => {
  const container = document.createElement('text');
  container.innerText = word;
  container.className = WORD_CLASS;
  return container;
};
