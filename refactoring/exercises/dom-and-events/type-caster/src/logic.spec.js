import { typeCaster } from './logic.js';

describe('typeCaster: converts values to string, number or boolean', () => {
  describe('correctly casts valid types', () => {
    it('number -> string', () => {
      const expected = '34';
      const actual = typeCaster(34, 'string');
      expect(actual).toEqual(expected);
    });
    it('string -> string', () => {
      const expected = 'asdf';
      const actual = typeCaster('asdf', 'string');
      expect(actual).toEqual(expected);
    });
    it('number -> number', () => {
      const expected = 3;
      const actual = typeCaster(3, 'number');
      expect(actual).toEqual(expected);
    });
    it('string -> number', () => {
      const expected = 45;
      const actual = typeCaster('45', 'number');
      expect(actual).toEqual(expected);
    });
    it('boolean -> number', () => {
      const expected = 1;
      const actual = typeCaster(true, 'number');
      expect(actual).toEqual(expected);
    });
    it('undefined -> number', () => {
      const expected = NaN;
      const actual = typeCaster(undefined, 'number');
      expect(actual).toEqual(expected);
    });
    it('undefined -> boolean', () => {
      const expected = false;
      const actual = typeCaster(undefined, 'boolean');
      expect(actual).toEqual(expected);
    });
    it('number (1) -> boolean', () => {
      const expected = true;
      const actual = typeCaster(1, 'boolean');
      expect(actual).toEqual(expected);
    });
    it('number (0) -> boolean', () => {
      const expected = false;
      const actual = typeCaster(0, 'boolean');
      expect(actual).toEqual(expected);
    });
    it('string (" ") -> boolean', () => {
      const expected = true;
      const actual = typeCaster(' ', 'boolean');
      expect(actual).toEqual(expected);
    });
    it('string ("") -> boolean', () => {
      const expected = false;
      const actual = typeCaster('', 'boolean');
      expect(actual).toEqual(expected);
    });
  });
  describe('all invalid types return undefined', () => {
    it('no type', () => {
      const expected = undefined;
      const actual = typeCaster(12);
      expect(actual).toEqual(expected);
    });
    it('a number instead of a type string', () => {
      const expected = undefined;
      const actual = typeCaster(12, 4);
      expect(actual).toEqual(expected);
    });
    it('"object"', () => {
      const expected = undefined;
      const actual = typeCaster(12, 'object');
      expect(actual).toEqual(expected);
    });
  });
});
