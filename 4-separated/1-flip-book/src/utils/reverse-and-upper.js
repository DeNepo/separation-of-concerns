/**
 *
 * @param {} str
 * @returns
 */
export const reverseAndUpper = (str) => {
  const upperCased = str.toUpperCase();
  const reversed = upperCased.split('').reverse().join('');
  return reversed;
};
