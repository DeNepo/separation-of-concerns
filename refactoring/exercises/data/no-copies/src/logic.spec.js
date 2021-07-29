import { saveNoCopies } from './logic.js';

describe('saveNoCopies: ', () => {
  describe("saveNoCopies: adds a new item to an array if it's not saved", () => {
    it('adds entries that do not exist', () => {
      const expected = ['a', 'b', 'c', 'd'];
      const actual = saveNoCopies(['a', 'b', 'c'], 'd');
      expect(actual).toEqual(expected);
    });
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
  describe('saveNoCopies has safety checks', () => {
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
