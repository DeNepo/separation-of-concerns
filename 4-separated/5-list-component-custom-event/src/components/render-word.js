import { WORD_CLASS } from '../../data/constants.js';

import { remove } from '../custom-events/remove.js';

/**
 *
 * @param {} word
 */
export const renderWord = (word = '') => {
  const container = document.createElement('text');
  container.innerText = word;
  container.className = WORD_CLASS;

  container.addEventListener('click', (e) => {
    e.preventDefault();
    e.dispatchEvent(remove(word));
  });

  return container;
};
