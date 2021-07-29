import { renderHeader } from './render-header.js';

describe('renderHeader: renders DOM headers of different levels', () => {
  describe('an H3 with text: "hello"', () => {
    // debugger;
    const actual = renderHeader(3, 'hello');
    it('has tagName "H3"', () => {
      expect(actual.tagName).toEqual('H3');
    });
    it('has innerHTML: "hello"', () => {
      expect(actual.innerHTML).toEqual('hello');
    });
    it('has className: "title"', () => {
      expect(actual.className).toEqual('title');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
    console.dir(actual);
  });

  describe('an H2 with text: "salud"', () => {
    const actual = renderHeader(2, 'salud');
    it('has tagName "H2"', () => {
      expect(actual.tagName).toEqual('H2');
    });

    it('has innerHTML: "salud"', () => {
      expect(actual.innerHTML).toEqual('salud');
    });
    it('has className: "title"', () => {
      expect(actual.className).toEqual('title');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
    console.dir(actual);
  });

  describe('an H1 with text: "good bye"', () => {
    const actual = renderHeader(1, 'good bye');
    it('has tagName "H1"', () => {
      expect(actual.tagName).toEqual('H1');
    });
    it('has innerHTML: "good bye"', () => {
      expect(actual.innerHTML).toEqual('good bye');
    });
    it('has className: "title"', () => {
      expect(actual.className).toEqual('title');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
    console.dir(actual);
  });
  describe('does not allow invalid header levels', () => {
    it('throws an error if level is less than 1', () => {
      const shouldThrow = () => renderHeader(0, 'oops!');
      expect(shouldThrow).toThrowError(RangeError);
    });
    it('throws an error if level is greater than 6', () => {
      const shouldThrow = () => renderHeader(7, 'oops!');
      expect(shouldThrow).toThrowError(RangeError);
    });
  });
});
