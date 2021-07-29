import { linkedHeader } from './linked-header.js';

describe('linkedHeader: renders an anchor inside a heading', () => {
  describe('a header linked to google', () => {
    const actual = linkedHeader(_, _);

    it('has tagName: "H2"', () => {
      expect(actual.tagName).toEqual('H2');
    });
    it('has childElementCount: 1', () => {
      expect(actual.childElementCount).toEqual(1);
    });

    describe(`first child`, () => {
      const actualChild = _._[_];
      it('has tagName: "A"', () => {
        expect(actualChild.tagName).toEqual('A');
      });
      it('has href: "https://www.google.com/"', () => {
        expect(actualChild.href).toEqual('https://www.google.com/');
      });
      it('has target: "_blank" (default)', () => {
        expect(actualChild.target).toEqual('_blank');
      });
      it('has innerHTML: "google it"', () => {
        expect(actualChild.innerHTML).toEqual('google it');
      });
      it('has childElementCount: 0', () => {
        expect(actualChild.childElementCount).toEqual(0);
      });
    });
  });

  describe('a header linked to badgers', () => {
    const actual = linkedHeader(_, _, _);

    it('has tagName: "H2"', () => {
      _;
    });
    it('has childElementCount: 1', () => {
      _;
    });

    describe(`first child`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "A"', () => {
        _;
      });
      it('has href: "hhttps://badgerbadgerbadger.com/"', () => {
        _;
      });
      it('has target: "_self"', () => {
        _;
      });
      it('has innerHTML: "badger x 3"', () => {
        _;
      });
      it('has childElementCount: 0', () => {
        _;
      });
    });
  });
});
