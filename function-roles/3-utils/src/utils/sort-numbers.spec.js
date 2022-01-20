import { sortNumbers } from './sort-numbers.js';

describe('sortNumbers sorts an array of numbers', () => {
  describe('sorts positive numbers', () => {
    it('whole numbers', () => {
      const expected = [0, 1, 2, 3, 5];
      const received = sortNumbers([5, 2, 0, 3, 1]);
      expect(received).toEqual(expected);
    });
    it('decimal numbers', () => {
      const expected = [0, 1.11, 2.01, 3.8, 5.4];
      const received = sortNumbers([5.4, 2.01, 3.8, 0, 1.11]);
      expect(received).toEqual(expected);
    });
    it('mixed whole and decimal numbers', () => {
      const expected = [1, 2, 3.8, 5.4];
      const received = sortNumbers([5.4, 2, 3.8, 1]);
      expect(received).toEqual(expected);
    });
  });

  describe('sorts negative numbers', () => {
    it('whole numbers', () => {
      const expected = [-5, -3, -2, -1, 0];
      const received = sortNumbers([-1, 0, -3, -2, -5]);
      expect(received).toEqual(expected);
    });
    it('decimal numbers', () => {
      const expected = [-5.09, -3.01, -2.56, -1.4, 0];
      const received = sortNumbers([-1.4, -3.01, -2.56, 0, -5.09]);
      expect(received).toEqual(expected);
    });
    it('mixed whole and decimal numbers', () => {
      const expected = [-5.09, -3.01, -2, -1, 0];
      const received = sortNumbers([0, -1, -3.01, -2, -5.09]);
      expect(received).toEqual(expected);
    });
  });

  describe('sorts mixed positive and negative numbers', () => {
    it('whole numbers', () => {
      const expected = [-2, -1, 0, 1, 2];
      const received = sortNumbers([0, 1, -1, 2, -2]);
      expect(received).toEqual(expected);
    });
    it('decimal numbers', () => {
      const expected = [-2.34, -1.01, 0, 1.4, 2.99];
      const received = sortNumbers([0, 1.4, -1.01, 2.99, -2.34]);
      expect(received).toEqual(expected);
    });
    it('mixed whole and decimal numbers', () => {
      const expected = [-5.09, -1, 0, 2, 3.01];
      const received = sortNumbers([-1, 3.01, 0, 2, -5.09]);
      expect(received).toEqual(expected);
    });
  });

  describe('has no side-effects', () => {
    it('returns a new array', () => {
      const arg = [];
      const returned = sortNumbers(arg);
      const areDifferent = arg !== returned;
      expect(areDifferent).toEqual(true);
    });
    it('does not modify the argument', () => {
      const arg = [3, 2, 1];
      sortNumbers(arg);
      expect(arg).toEqual([3, 2, 1]);
    });
  });
});
