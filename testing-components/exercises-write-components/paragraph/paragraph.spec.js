import { paragraph } from './1-paragraph.js';

describe('paragraph: renders a paragraph with optional styling', () => {
  describe('"lorem ipsum", no classes', () => {
    const actual = paragraph('lorem ipsum');

    it('has tagName "P"', () => {
      expect(actual.tagName).toEqual('P');
    });
    it('has innerHTML: "lorem ipsum"', () => {
      expect(actual.innerHTML).toEqual('lorem ipsum');
    });
    it('has classList length 0', () => {
      expect(actual.classList.length).toEqual(0);
    });
    it('has className: ""', () => {
      expect(actual.className).toEqual('');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
  });

  describe('"lorem ipsum", 3 classes', () => {
    const actual = paragraph('lorem ipsum', ['fancy', 'hoverable', 'emphatic']);

    it('has tagName "P"', () => {
      expect(actual.tagName).toEqual('P');
    });
    it('has innerHTML: "lorem ipsum"', () => {
      expect(actual.innerHTML).toEqual('lorem ipsum');
    });
    it('has classList length 3', () => {
      expect(actual.classList).toHaveLength(3);
    });
    it('has class: "fancy"', () => {
      const hasFancyClass = actual.classList.contains('fancy');
      expect(hasFancyClass).toEqual(true);
    });
    it('has class: "hoverable"', () => {
      const hasHoverableClass = actual.classList.contains('hoverable');
      expect(hasHoverableClass).toEqual(true);
    });
    it('has class: "emphatic"', () => {
      const hasEmphaticClass = actual.classList.contains('emphatic');
      expect(hasEmphaticClass).toEqual(true);
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
  });

  describe('"hello user", 1 class', () => {
    const actual = paragraph('hello user', ['friendly']);

    it('has tagName "P"', () => {
      expect(actual.tagName).toEqual('P');
    });
    it('has text: "hello user"', () => {
      expect(actual.innerText).toEqual('hello user');
    });
    it('has classList length 1', () => {
      expect(actual.classList).toHaveLength(1);
    });
    it('has className: "friendly"', () => {
      expect(actual.className).toEqual('friendly');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
  });

  describe('"hello user", no class', () => {
    const actual = paragraph('hello user', []);

    it('has tagName "P"', () => {
      expect(actual.tagName).toEqual('P');
    });
    it('has text: "hello user"', () => {
      expect(actual.innerText).toEqual('hello user');
    });
    it('has className: ""', () => {
      expect(actual.className).toEqual('');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
  });
});
