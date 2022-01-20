import { average } from './utils.js';

describe('average: computes the average of an array of numbers', () => {
  describe('average: correctly computes averages', () => {
    it('returns 0 for an empty array', () => {
      const expected = 0;
      const actual = average([]);
      expect(actual).toEqual(expected);
    });
    it('averages small numbers', () => {
      const expected = 2;
      const actual = average([1, 2, 3]);
      expect(actual).toEqual(expected);
    });
    it('averages large number', () => {
      const expected = 3000;
      const actual = average([10995, 5, 500, 500]);
      expect(actual).toEqual(expected);
    });
  });
  describe('has no side-effects', () => {
    it('does not modify the argument', () => {
      const arg = [1, 2, 3];
      average(arg);
      expect(arg).toEqual([1, 2, 3]);
    });
  });
});
