import { header } from './header.js';

describe('header: renders DOM headers of different levels', () => {
  describe('an H3 with text: "hello"', () => {
    // debugger;
    const actual = header(3, 'hello');
    it('has tagName "H3"', () => {
      expect(actual.tagName).toEqual('H3');
    });
    it('has innerHTML: "hello"', () => {
      expect(actual.innerHTML).toEqual('hello');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
  });
  describe('an H1 with text: "good bye"', () => {
    const actual = header(1, 'good bye');
    it('has tagName "H1"', () => {
      expect(actual.tagName).toEqual('H1');
    });
    it('has innerHTML: "good bye"', () => {
      expect(actual.innerHTML).toEqual('good bye');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
  });
  describe('does not allow invalid header levels', () => {
    it('throws an error if level is less than 1', () => {
      const shouldThrow = () => header(0, 'oops!');
      expect(shouldThrow).toThrowError(RangeError);
    });
    it('throws an error if level is greater than 6', () => {
      const shouldThrow = () => header(7, 'oops!');
      expect(shouldThrow).toThrowError(RangeError);
    });
  });
});
