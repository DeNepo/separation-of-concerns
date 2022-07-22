import { info } from './info.js';

describe('info: renders some info under a caption', () => {
  describe('several colors, no id', () => {
    const actual = info('several colors', 'red, orange, green, blue.');

    it('has tagName: "DETAILS"', () => {
      expect(actual.tagName).toEqual('DETAILS');
    });
    it('has id: ""', () => {
      expect(actual.id).toEqual('');
    });
    it('has childElementCount: 2', () => {
      expect(actual.childElementCount).toEqual(2);
    });

    describe(`.children[0]`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "SUMMARY"', () => {
        expect(actualChild.tagName).toEqual('SUMMARY');
      });
      it('has innerHTML: "several colors"', () => {
        expect(actualChild.innerHTML).toEqual('several colors');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild.childElementCount).toEqual(0);
      });
    });

    describe(`.children[1]`, () => {
      const actualChild = actual.children[1];
      it('has tagName: "P"', () => {
        expect(actualChild.tagName).toEqual('P');
      });
      it('has innerHTML: "red, orange, green, blue."', () => {
        expect(actualChild.innerHTML).toEqual('red, orange, green, blue.');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild.childElementCount).toEqual(0);
      });
    });
  });

  describe('several colors, id "colors"', () => {
    const actual = info(
      'several colors',
      'red, orange, green, blue.',
      'colors',
    );

    it('has tagName: "DETAILS"', () => {
      expect(actual.tagName).toEqual('DETAILS');
    });
    it('has id: "colors"', () => {
      expect(actual.id).toEqual('colors');
    });
    it('has childElementCount: 2', () => {
      expect(actual.childElementCount).toEqual(2);
    });

    describe(`.children[0]`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "SUMMARY"', () => {
        expect(actualChild.tagName).toEqual('SUMMARY');
      });
      it('has innerHTML: "several colors"', () => {
        expect(actualChild.innerHTML).toEqual('several colors');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild.childElementCount).toEqual(0);
      });
    });

    describe(`.children[1]`, () => {
      const actualChild = actual.children[1];
      it('has tagName: "P"', () => {
        expect(actualChild.tagName).toEqual('P');
      });
      it('has innerHTML: "red, orange, green, blue."', () => {
        expect(actualChild.innerHTML).toEqual('red, orange, green, blue.');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild.childElementCount).toEqual(0);
      });
    });
  });

  describe('what is javascript?, id "js"', () => {
    const actual = info('what is javascript?', 'a programming language!', 'js');

    it('has tagName: "DETAILS"', () => {
      expect(actual.tagName).toEqual('DETAILS');
    });
    it('has id: "js"', () => {
      expect(actual.id).toEqual('js');
    });
    it('has childElementCount: 2', () => {
      expect(actual.childElementCount).toEqual(2);
    });

    describe(`.children[0]`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "SUMMARY"', () => {
        expect(actualChild.tagName).toEqual('SUMMARY');
      });
      it('has innerHTML: "what is javascript?"', () => {
        expect(actualChild.innerHTML).toEqual('what is javascript?');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild.childElementCount).toEqual(0);
      });
    });

    describe(`.children[1]`, () => {
      const actualChild = actual.children[1];
      it('has tagName: "P"', () => {
        expect(actualChild.tagName).toEqual('P');
      });
      it('has innerHTML: "a programming language!"', () => {
        expect(actualChild.innerHTML).toEqual('a programming language!');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild.childElementCount).toEqual(0);
      });
    });
  });
});
