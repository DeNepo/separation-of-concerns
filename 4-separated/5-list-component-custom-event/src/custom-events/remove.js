import { DELETE_EVENT } from '../../data/constants.js';

/**
 * Returns a new `remove` event containing the number to remove.
 *
 * @param {string} toRemove - The word to remove.
 * @returns {CustomEvent#remove} - An custom event with the word to remove saved to .detail.
 */
export const remove = (toRemove = '') =>
  new CustomEvent(DELETE_EVENT, {
    bubbles: true,
    detail: toRemove,
  });
