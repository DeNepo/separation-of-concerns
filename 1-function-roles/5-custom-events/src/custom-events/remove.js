import { REMOVE_EVENT } from '../../data/constants.js';

/**
 * Returns a new `remove` event containing the number to remove.
 *
 * @param {number} newNumber - The number to remove.
 * @returns {CustomEvent#remove} - An `remove` event with your number.
 */
export const remove = (toRemove = 0) => {
  return new CustomEvent(REMOVE_EVENT, {
    bubbles: true,
    detail: { number: toRemove },
  });
};
