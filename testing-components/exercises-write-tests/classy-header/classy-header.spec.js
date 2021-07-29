import { classyHeader } from './classy-header.js';

describe('classyHeader: renders DOM headers of different levels and classes', () => {
  describe('an H3 with text: "hello", and no classes', () => {
    const actual = classyHeader(3, 'hello');
    it('has tagName "H3"', () => {
      _;
    });
    it('has innerHTML: "hello"', () => {
      _;
    });
    it('has classList length 0', () => {
      _;
    });
    it('has className: ""', () => {
      _;
    });
    it('has childElementCount: 0', () => {
      _;
    });
  });
  describe('an H1 with text: "good bye", and two classes', () => {
    const actual = classyHeader(_, _, _);
    it('has tagName "H1"', () => {
      _;
    });
    it('has innerHTML: "good bye"', () => {
      _;
    });
    it('has classList length 2', () => {
      _;
    });
    it('have class: "fancy"', () => {
      _;
    });
    it('have class: "hover-right"', () => {
      _;
    });
    it('has childElementCount: 0', () => {
      _;
    });
  });
  describe('does not allow invalid header levels', () => {
    it('throws an error if level is less than 1', () => {
      const shouldThrow = () => classyHeader(0, 'oops!');
      expect(shouldThrow).toThrowError(RangeError);
    });
    it('throws an error if level is greater than 6', () => {
      const shouldThrow = () => classyHeader(7, 'oops!');
      expect(shouldThrow).toThrowError(RangeError);
    });
  });
});
