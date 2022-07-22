import { LIST_CLASS } from '../../data/constants.js';

import { numberList } from './number-list.js';

describe('numberList: renders a list of numbers', () => {
  describe('it has no side-effects', () => {
    it('does not modify the arugment', () => {
      const arg = [1, 2, 3];
      numberList(arg);
      expect(arg).toEqual([1, 2, 3]);
    });
  });

  describe('renders no numbers', () => {
    const actual = numberList([]);

    it('has tagName: "UL"', () => {
      expect(actual.tagName).toEqual('UL');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
  });

  describe('renders 1 number', () => {
    const actual = numberList([-4]);

    it('has tagName: "UL"', () => {
      expect(actual.tagName).toEqual('UL');
    });
    it('has childElementCount: 1', () => {
      expect(actual.childElementCount).toEqual(1);
    });

    describe(`.children[0]`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "LI"', () => {
        expect(actualChild.tagName).toEqual('LI');
      });
      it(`has className: "${LIST_CLASS}"`, () => {
        expect(actualChild.className).toEqual(LIST_CLASS);
      });
      it('has text: "-4"', () => {
        expect(actualChild.innerText).toEqual('-4');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild.childElementCount).toEqual(0);
      });
    });
  });

  describe('renders 2 numbers', () => {
    const actual = numberList([5, 8]);

    it('has tagName: "UL"', () => {
      expect(actual.tagName).toEqual('UL');
    });
    it('has childElementCount: 2', () => {
      expect(actual.childElementCount).toEqual(2);
    });

    describe(`.children[0]`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "LI"', () => {
        expect(actualChild.tagName).toEqual('LI');
      });
      it(`has className: "${LIST_CLASS}"`, () => {
        expect(actualChild.className).toEqual(LIST_CLASS);
      });
      it('has text: "5"', () => {
        expect(actualChild.innerText).toEqual('5');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild.childElementCount).toEqual(0);
      });
    });
    describe(`.children[1]`, () => {
      const actualChild = actual.children[1];
      it('has tagName: "LI"', () => {
        expect(actualChild.tagName).toEqual('LI');
      });
      it(`has className: "${LIST_CLASS}"`, () => {
        expect(actualChild.className).toEqual(LIST_CLASS);
      });
      it('has text: "8"', () => {
        expect(actualChild.innerText).toEqual('8');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild.childElementCount).toEqual(0);
      });
    });
  });
});
