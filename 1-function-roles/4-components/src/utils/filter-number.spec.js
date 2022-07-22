import { filterNumber } from './filter-number.js';

describe('filterNumber: removes all instances of a number in an array', () => {
  describe('correctly filters the array', () => {
    it('returns an empty for an empty array', () => {
      const expected = [];
      const actual = filterNumber([], 100);
      expect(actual).toEqual(expected);
    });
    it('removes nothing if the number is not present', () => {
      const expected = [1, 2, 3];
      const actual = filterNumber([1, 2, 3], 4);
      expect(actual).toEqual(expected);
    });
    it('removes everything when there are no other numbers', () => {
      const expected = [];
      const actual = filterNumber([3, 3, 3], 3);
      expect(actual).toEqual(expected);
    });
    it('removes only the correct number', () => {
      const expected = [4, 6];
      const actual = filterNumber([4, 5, 6, 5], 5);
      expect(actual).toEqual(expected);
    });
  });
  describe('there are no side-effects', () => {
    it('does not modify the array argument', () => {
      const arg = [1, 2, 3, 4];
      filterNumber(arg, 2);
      expect(arg).toEqual([1, 2, 3, 4]);
    });
    it('returns a new array', () => {
      const arg = [1, 2, 3, 4];
      const returned = filterNumber(arg, 2);
      expect(returned !== arg).toEqual(true);
    });
  });
});
