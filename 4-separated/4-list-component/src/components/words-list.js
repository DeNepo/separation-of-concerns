import { LIST_CLASS } from '../../data/constants.js';

import { renderWord } from './render-word.js';

/**
 *
 *
 *
 */
export const wordsList = (array = []) => {
  const ul = document.createElement('ul');
  ul.className = LIST_CLASS;

  for (let nextWord of array) {
    const wordEl = renderWord(nextWord);

    const li = document.createElement('li');
    li.appendChild(wordEl);
    ul.appendChild(li);
  }

  return ul;
};
