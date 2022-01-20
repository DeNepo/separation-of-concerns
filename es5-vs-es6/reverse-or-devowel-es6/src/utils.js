debugger; // once when the module is loaded

/**
 * reverses a string
 * @param {string} text - the string to reverse
 * @returns {string} the reversed text
 */
export const reverseString = (text) => {
  debugger; // each time the function is called

  let reversedText = '';

  for (let index = text.length - 1; index > -1; index--) {
    const nextCharacter = text[index];
    reversedText = reversedText + nextCharacter;
  }
  return reversedText;
};
// test cases
console.assert(reverseString('abc') === 'cba', 'Test 1: reverse');
console.assert(reverseString('aaa') === 'aaa', 'Test 2: reverse');
console.assert(reverseString('_ _ ') === ' _ _', 'Test 3: reverse');

/**
 * removes all the vowels from a string
 * @param {string} text - the text to filter
 * @returns {string} a new string with no vowels
 */
export const removeVowels = (text) => {
  debugger; // each time the function is called

  const vowels = 'AEIOUaeiou';
  let devoweled = '';

  for (const character of text) {
    if (!vowels.includes(character)) {
      devoweled = devoweled + character;
    }
  }
  return devoweled;
};
// test cases
console.assert(removeVowels('bAnanA') === 'bnn', 'Test 1: removeVowels');
console.assert(removeVowels('yogurt!') === 'ygrt!', 'Test 2: removeVowels');
console.assert(removeVowels('xkcd') === 'xkcd', 'Test 3: removeVowels');
console.assert(removeVowels('123') === '123', 'Test 4: removeVowels');

debugger;
