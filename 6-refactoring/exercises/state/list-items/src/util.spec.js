import { list } from './util.js';

describe('list: generates a list string from an array of strings', () => {
  describe('list: correctly lists items', () => {
    it('an empty array returns an empty string', () => {
      const expected = '';
      const actual = list([]);
      expect(actual).toEqual(expected);
    });
    it('can list a single item', () => {
      const expected = '\n- hi';
      const actual = list(['hi'], '-');
      expect(actual).toEqual(expected);
    });
    it('can list many items', () => {
      const expected = '\n+ a\n+ b\n+ c\n+ d\n+ e';
      const actual = list(['a', 'b', 'c', 'd', 'e'], '+');
      expect(actual).toEqual(expected);
    });
    it('can use different bullet points', () => {
      const expected = '\n* a\n* b\n* c\n* d\n* e';
      const actual = list(['a', 'b', 'c', 'd', 'e'], '*');
      expect(actual).toEqual(expected);
    });
  });
  describe('list: uses arguments correctly', () => {
    it('does not modify the array argument', () => {
      const arg = ['a', 'b', 'c', 'd'];
      list(arg);
      expect(arg).toEqual(['a', 'b', 'c', 'd']);
    });
  });
});
