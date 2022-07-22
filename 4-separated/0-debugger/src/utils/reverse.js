/**
 * Reverses a string.
 *
 * @param {string} str - A string to reverse.
 * @returns {string} The string, reversed.
 */
export const reverse = (str = '') => {
  const arrayOfCharacters = str.split('');
  const reversedArray = arrayOfCharacters.reverse();
  const reversedString = reversedArray.join('');
  return reversedString;
};
