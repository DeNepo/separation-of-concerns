import { search } from './utils.js';

describe('search: searches an array of strings and returns formatted results', () => {
  describe('search: correctly finds and formats search results', () => {
    it('an empty array returns an empty string', () => {
      const expected = '';
      const actual = search([], 'chair');
      expect(actual).toEqual(expected);
    });
    it('an empty query returns an empty string', () => {
      const expected = '';
      const actual = search(['a', 's', 'd', 'f'], '');
      expect(actual).toEqual(expected);
    });
    it('returns all entries if they all match', () => {
      const expected = '\n- egg\n- pie\n- peanut';
      const actual = search(['egg', 'pie', 'peanut'], 'e');
      expect(actual).toEqual(expected);
    });
    it('returns no entries if none match', () => {
      const expected = '';
      const actual = search(['egg', 'pie', 'peanut'], 'x');
      expect(actual).toEqual(expected);
    });
    it('returns only matching entries', () => {
      const expected = '\n- peanut\n- pie';
      const actual = search(['toast', 'peanut', 'egg', 'pie', 'milk'], 'p');
      expect(actual).toEqual(expected);
    });
  });
  describe('search: uses arguments correctly', () => {
    it('does not modify the array argument', () => {
      const arg = ['a', 's', 'd', 'f'];
      search(arg);
      expect(arg).toEqual(['a', 's', 'd', 'f']);
    });
  });
});
