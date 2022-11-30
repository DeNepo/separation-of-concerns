import { saveNoCopies } from './utils.js';

describe('saveNoCopies: ', () => {
  describe('adds a new items that are not in the array', () => {
    it('adds a "d" if there was not a "d"', () => {
      const expected = ['a', 'b', 'c', 'd'];
      const actual = saveNoCopies(['a', 'b', 'c'], 'd');
      expect(actual).toEqual(expected);
    });
    it('adds a "z" if there was not a "z"', () => {
      const expected = ['a', 'b', 'c', 'd', 'z'];
      const actual = saveNoCopies(['a', 'b', 'c', 'd'], 'z');
      expect(actual).toEqual(expected);
    });
  });
  describe('does not add items that are already in the array', () => {
    it('does not add entries that are at the beginning', () => {
      const expected = ['a', 'b', 'c'];
      const actual = saveNoCopies(['a', 'b', 'c'], 'a');
      expect(actual).toEqual(expected);
    });
    it('does not add entries that are in the middle', () => {
      const expected = ['a', 'b', 'c'];
      const actual = saveNoCopies(['a', 'b', 'c'], 'b');
      expect(actual).toEqual(expected);
    });
    it('does not add entries that are at the end', () => {
      const expected = ['a', 'b', 'c'];
      const actual = saveNoCopies(['a', 'b', 'c'], 'c');
      expect(actual).toEqual(expected);
    });
  });
  describe('uses the arguments correctly', () => {
    it('does not modify the argument', () => {
      const arg = ['a', 'b', 'c', 'd', 'e'];
      saveNoCopies(arg);
      expect(arg).toEqual(['a', 'b', 'c', 'd', 'e']);
    });
    it('returns a new array', () => {
      const arg = ['a', 'b', 'c', 'd', 'e'];
      const returned = saveNoCopies(arg);
      const areSameArray = arg === returned;
      expect(areSameArray).toEqual(false);
    });
  });
});
