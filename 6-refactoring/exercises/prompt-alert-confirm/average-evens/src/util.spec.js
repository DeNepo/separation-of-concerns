import { averageEvens } from './utils.js';

describe('averageEvens: averages all even numbers in an array', () => {
  describe('averageEvens: correctly averages all even numbers', () => {
    it('an empty array returns 0', () => {
      const expected = 0;
      const actual = averageEvens([]);
      expect(actual).toEqual(expected);
    });
    it('only odd numbers returns 0', () => {
      const expected = 0;
      const actual = averageEvens([1, 3, 5, 7]);
      expect(actual).toEqual(expected);
    });
    it('only even numbers returns the average of all', () => {
      const expected = 6;
      const actual = averageEvens([2, 4, 6, 8, 10]);
      expect(actual).toEqual(expected);
    });
    it('averages evens and not odds', () => {
      const expected = 6;
      const actual = averageEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(actual).toEqual(expected);
    });
  });
  describe('averageEvens: uses arguments correctly', () => {
    it('does not modify the array argument', () => {
      const arg = [1, 2, 3, 4, 5];
      averageEvens(arg);
      expect(arg).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
