import { wordsList } from './words-list.js';

describe('wordsList renders an array of strings into an unordered list', () => {
  describe('an empty array becomes an empty list', () => {
    const emptyList = wordsList([]);
    it('should be a DOM element', () => {
      expect(emptyList).toBeInstanceOf(Element);
    });
    it('should have nodeName "UL"', () => {
      expect(emptyList.nodeName).toBe('UL');
    });
    it('should have 0 children', () => {
      expect(emptyList.childElementCount).toBe(0);
    });
  });

  describe('it renders a list with "hello!"', () => {
    const helloList = wordsList(['hello!']);
    it('should be a DOM element', () => {
      expect(helloList).toBeInstanceOf(Element);
    });
    it('should have nodeName "UL"', () => {
      expect(helloList.nodeName).toBe('UL');
    });
    it('should have 1 child', () => {
      expect(helloList.childElementCount).toBe(1);
    });
    describe('the 1st child', () => {
      const firstChild = helloList.children[0];
      it('should be a DOM element', () => {
        expect(firstChild).toBeInstanceOf(Element);
      });
      it('should have nodeName "LI"', () => {
        expect(firstChild.nodeName).toBe('LI');
      });
      it('should have no children', () => {
        expect(firstChild.childElementCount).toBe(0);
      });
      it('should have innerHTML "hello!"', () => {
        expect(firstChild.innerHTML).toBe('hello!');
      });
    });
  });

  describe('it renders a list with "x", "y"', () => {
    const xyzList = wordsList(['x', 'y']);
    it('should be a DOM element', () => {
      expect(xyzList).toBeInstanceOf(Element);
    });
    it('should have nodeName "UL"', () => {
      expect(xyzList.nodeName).toBe('UL');
    });
    it('should have 2 children', () => {
      expect(xyzList.childElementCount).toBe(2);
    });
    describe('the 1st child', () => {
      const firstChild = xyzList.children[0];
      it('should be a DOM element', () => {
        expect(firstChild).toBeInstanceOf(Element);
      });
      it('should have nodeName "LI"', () => {
        expect(firstChild.nodeName).toBe('LI');
      });
      it('should have no children', () => {
        expect(firstChild.childElementCount).toBe(0);
      });
      it('should have innerHTML "x"', () => {
        expect(firstChild.innerHTML).toBe('x');
      });
    });
    describe('the 2nd child', () => {
      const secondChild = xyzList.children[1];
      it('should be a DOM element', () => {
        expect(secondChild).toBeInstanceOf(Element);
      });
      it('should have nodeName "LI"', () => {
        expect(secondChild.nodeName).toBe('LI');
      });
      it('should have no children', () => {
        expect(secondChild.childElementCount).toBe(0);
      });
      it('should have innerHTML "y"', () => {
        expect(secondChild.innerHTML).toBe('y');
      });
    });
  });

  describe('it renders a list with "a", "b","c"', () => {
    const abcList = wordsList(['a', 'b', 'c']);
    it('should be a DOM element', () => {
      expect(abcList).toBeInstanceOf(Element);
    });
    it('should have nodeName "UL"', () => {
      expect(abcList.nodeName).toBe('UL');
    });
    it('should have 3 children', () => {
      expect(abcList.childElementCount).toBe(3);
    });
    describe('the 1st child', () => {
      const firstChild = abcList.children[0];
      it('should be a DOM element', () => {
        expect(firstChild).toBeInstanceOf(Element);
      });
      it('should have nodeName "LI"', () => {
        expect(firstChild.nodeName).toBe('LI');
      });
      it('should have no children', () => {
        expect(firstChild.childElementCount).toBe(0);
      });
      it('should have innerHTML "a"', () => {
        expect(firstChild.innerHTML).toBe('a');
      });
    });
    describe('the 2nd child', () => {
      const secondChild = abcList.children[1];
      it('should be a DOM element', () => {
        expect(secondChild).toBeInstanceOf(Element);
      });
      it('should have nodeName "LI"', () => {
        expect(secondChild.nodeName).toBe('LI');
      });
      it('should have no children', () => {
        expect(secondChild.childElementCount).toBe(0);
      });
      it('should have innerHTML "b"', () => {
        expect(secondChild.innerHTML).toBe('b');
      });
    });
    describe('the 13rd child', () => {
      const thirdChild = abcList.children[2];
      it('should be a DOM element', () => {
        expect(thirdChild).toBeInstanceOf(Element);
      });
      it('should have nodeName "LI"', () => {
        expect(thirdChild.nodeName).toBe('LI');
      });
      it('should have no children', () => {
        expect(thirdChild.childElementCount).toBe(0);
      });
      it('should have innerHTML "c"', () => {
        expect(thirdChild.innerHTML).toBe('c');
      });
    });
  });
});
