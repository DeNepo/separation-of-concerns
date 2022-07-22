/**
 * Filters out all values that are strictly equal to `remove`.
 * Returns a new array, does not modify `arrOfNumbers`.
 *
 * @param {number[]} [allNumbers=[]] - The numbers to filter.
 * @param {number} [remove=0] - The number to remove.
 * @returns {number[]} Rhe filtered numbers.
 */
export const filterNumber = (allNumbers = [], remove = 0) => {
  return allNumbers.filter((number) => number !== remove);
};
