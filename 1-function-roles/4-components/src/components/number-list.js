import { LIST_CLASS } from '../../data/constants.js';

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
    listEl.appendChild(itemEl);
  }

  return listEl;
};
