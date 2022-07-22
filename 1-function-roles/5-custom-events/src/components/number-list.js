import { REMOVE_EVENT, LIST_CLASS } from '../../data/constants.js';

import { remove } from '../custom-events/remove.js';

/**
 * Renders a list of numbers into an unordered list.
 *
 * @param {number[]} [nums=[]] - The numbers to render.
 * @returns {HTMLUListElement} A UL element listing the numbers.
 */
export const numberList = (nums = []) => {
  const listEl = document.createElement('ul');

  for (const number of nums) {
    const itemEl = document.createElement('li');
    itemEl.innerText = number;
    itemEl.className = LIST_CLASS;

    // either
    itemEl.addEventListener('click', (e) => {
      e.preventDefault();
      itemEl.dispatchEvent(remove(number));
    });

    // or
    itemEl.addEventListener('click', (e) => {
      e.preventDefault();
      itemEl.dispatchEvent(
        new CustomEvent(REMOVE_EVENT, {
          bubbles: true,
          detail: { number },
        }),
      );
    });

    listEl.appendChild(itemEl);
  }

  return listEl;
};
