import { link } from './link.js';

describe('link: renders a DOM anchor element', () => {
  describe('open google in a new tab (default target)', () => {
    const actual = link('google it', 'https://www.google.com/');

    it('has tagName: "A"', () => {
      expect(actual.tagName).toEqual('A');
    });
    it('has innerHTML: "google it"', () => {
      expect(actual.innerHTML).toEqual('google it');
    });
    it('has href: "https://www.google.com/"', () => {
      expect(actual.href).toEqual('https://www.google.com/');
    });
    it('has target: "_blank" (default)', () => {
      expect(actual.target).toEqual('_blank');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
  });

  describe('open a pre-defined search in a new tab', () => {
    const actual = link(
      'lmgtfy',
      'https://lmgtfy.com/?q=let+me+google+that+for+you&s=d',
      '_blank',
    );

    it('has tagName: "A"', () => {
      expect(actual.tagName).toEqual('A');
    });
    it('has innerHTML: "lmgtfy"', () => {
      expect(actual.innerHTML).toEqual('lmgtfy');
    });
    it('has href: "https://lmgtfy.com/?q=let+me+google+that+for+you&s=d"', () => {
      expect(actual.href).toEqual(
        'https://lmgtfy.com/?q=let+me+google+that+for+you&s=d',
      );
    });
    it('has target: "_blank"', () => {
      expect(actual.target).toEqual('_blank');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
  });

  describe('redirect to the HYF promo clip', () => {
    const actual = link(
      'HYF Belgium',
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      '_self',
    );

    it('has tagName: "A"', () => {
      expect(actual.tagName).toEqual('A');
    });
    it('has innerHTML: "HYF Belgium"', () => {
      expect(actual.innerHTML).toEqual('HYF Belgium');
    });
    it('has href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"', () => {
      expect(actual.href).toEqual(
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      );
    });
    it('has target: "_self"', () => {
      expect(actual.target).toEqual('_self');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
  });
});
