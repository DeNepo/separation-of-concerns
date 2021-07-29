import { getParameterList } from './get-parameter-list.js';

describe('returns an array of strings with the parameter names for a function', () => {
  describe('no parameters', () => {
    it('arrow', () => {
      // implicit returns are parsed the same for this purpose
      const funky = () => {};
      expect(getParameterList(funky)).toEqual([]);
    });
    it('named function declaration', () => {
      function funky() {}
      expect(getParameterList(funky)).toEqual([]);
    });
    it('anonymous function expression', () => {
      const funky = function () {};
      expect(getParameterList(funky)).toEqual([]);
    });
    it('named function expression', () => {
      const funky = function funk() {};
      expect(getParameterList(funky)).toEqual([]);
    });
  });
  describe('one parameter', () => {
    it('arrow (with parens)', () => {
      // prettier-ignore
      const funky = (hi) => {};
      expect(getParameterList(funky)).toEqual(['hi']);
    });
    it('arrow (without parens)', () => {
      // prettier-ignore
      const funky = hi => {};
      expect(getParameterList(funky)).toEqual(['hi']);
    });
    it('named function declaration', () => {
      function funky(hi) {}
      expect(getParameterList(funky)).toEqual(['hi']);
    });
    it('anonymous function expression', () => {
      const funky = function (hi) {};
      expect(getParameterList(funky)).toEqual(['hi']);
    });
    it('named function expression', () => {
      const funky = function funk(hi) {};
      expect(getParameterList(funky)).toEqual(['hi']);
    });
  });
  describe('multiple parameters', () => {
    it('arrow', () => {
      const funky = (hi, bye, chai) => {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye', 'chai']);
    });
    it('named function declaration', () => {
      function funky(hi, bye, chai) {}
      expect(getParameterList(funky)).toEqual(['hi', 'bye', 'chai']);
    });
    it('anonymous function expression', () => {
      const funky = function (hi, bye, chai) {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye', 'chai']);
    });
    it('named function expression', () => {
      const funky = function funk(hi, bye, chai) {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye', 'chai']);
    });
  });
  describe('rest parameters', () => {
    it('arrow', () => {
      const funky = (hi, bye, ...chai) => {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye', '...chai']);
    });
    it('named function declaration', () => {
      function funky(hi, bye, ...chai) {}
      expect(getParameterList(funky)).toEqual(['hi', 'bye', '...chai']);
    });
    it('anonymous function expression', () => {
      const funky = function (hi, bye, ...chai) {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye', '...chai']);
    });
    it('named function expression', () => {
      const funky = function funk(hi, bye, ...chai) {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye', '...chai']);
    });
  });
  describe('default parameters', () => {
    it('arrow', () => {
      const funky = (hi = 1, bye = '') => {};
      expect(getParameterList(funky)).toEqual([
        { name: 'hi', default: 1 },
        { name: 'bye', default: '' },
      ]);
    });
    it('named function declaration', () => {
      function funky(hi = 1, bye = '') {}
      expect(getParameterList(funky)).toEqual([
        { name: 'hi', default: 1 },
        { name: 'bye', default: '' },
      ]);
    });
    it('anonymous function expression', () => {
      const funky = function (hi = 1, bye = '') {};
      expect(getParameterList(funky)).toEqual([
        { name: 'hi', default: 1 },
        { name: 'bye', default: '' },
      ]);
    });
    it('named function expression', () => {
      const funky = function funk(hi = 1, bye = '') {};
      expect(getParameterList(funky)).toEqual([
        { name: 'hi', default: 1 },
        { name: 'bye', default: '' },
      ]);
    });
  });
  describe('destructured parameters', () => {
    it('arrow', () => {
      const funky = ({ hi, bye }) => {};
      expect(getParameterList(funky)).toEqual([['hi', 'bye']]);
    });
    it('named function declaration', () => {
      function funky({ hi, bye }) {}
      expect(getParameterList(funky)).toEqual([['hi', 'bye']]);
    });
    it('anonymous function expression', () => {
      const funky = function ({ hi, bye }) {};
      expect(getParameterList(funky)).toEqual([['hi', 'bye']]);
    });
    it('named function expression', () => {
      const funky = function funk({ hi, bye }) {};
      expect(getParameterList(funky)).toEqual([['hi', 'bye']]);
    });
  });
  describe('destructured parameters with defaults', () => {
    it('arrow', () => {
      const funky = ({ hi = [], bye = '' }) => {};
      expect(getParameterList(funky)).toEqual([
        [
          { name: 'hi', default: '(used default value)' },
          { name: 'bye', default: '' },
        ],
      ]);
    });
    it('named function declaration', () => {
      function funky({ hi = [], bye = '' }) {}
      expect(getParameterList(funky)).toEqual([
        [
          { name: 'hi', default: '(used default value)' },
          { name: 'bye', default: '' },
        ],
      ]);
    });
    it('anonymous function expression', () => {
      const funky = function ({ hi = [], bye = '' }) {};
      expect(getParameterList(funky)).toEqual([
        [
          { name: 'hi', default: '(used default value)' },
          { name: 'bye', default: '' },
        ],
      ]);
    });
    it('named function expression', () => {
      const funky = function funk({ hi = [], bye = '' }) {};
      expect(getParameterList(funky)).toEqual([
        [
          { name: 'hi', default: '(used default value)' },
          { name: 'bye', default: '' },
        ],
      ]);
    });
  });
  describe('all together', () => {
    it('arrow', () => {
      const funky = (a, { b, c = '' }, d = 3, ...e) => {};
      expect(getParameterList(funky)).toEqual([
        'a',
        ['b', { name: 'c', default: '' }],
        { name: 'd', default: 3 },
        '...e',
      ]);
    });
    it('named function declaration', () => {
      function funky(a, { b, c = '' }, d = 3, ...e) {}
      expect(getParameterList(funky)).toEqual([
        'a',
        ['b', { name: 'c', default: '' }],
        { name: 'd', default: 3 },
        '...e',
      ]);
    });
    it('anonymous function expression', () => {
      const funky = function (a, { b, c = '' }, d = 3, ...e) {};
      expect(getParameterList(funky)).toEqual([
        'a',
        ['b', { name: 'c', default: '' }],
        { name: 'd', default: 3 },
        '...e',
      ]);
    });
    it('named function expression', () => {
      const funky = function funk(a, { b, c = '' }, d = 3, ...e) {};
      expect(getParameterList(funky)).toEqual([
        'a',
        ['b', { name: 'c', default: '' }],
        { name: 'd', default: 3 },
        '...e',
      ]);
    });
  });
});
