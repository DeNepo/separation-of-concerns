import { renderLink } from './render-link.js';

describe('renderLink: renders a DOM anchor element', () => {
  describe('open google in a new tab (default target)', () => {
    const actual = renderLink('google it', 'https://www.google.com/');

    it('has tagName: "A"', () => {
      expect(actual.tagName).toEqual('A');
    });
    it('has innerText: "google it"', () => {
      expect(actual.innerText).toEqual('google it');
    });
    it('has href: "https://www.google.com/"', () => {
      expect(actual.href).toEqual('https://www.google.com/');
    });
    it('has target: "_blank" (default)', () => {
      expect(actual.target).toEqual('_blank');
    });
    it('has className: "heavy"', () => {
      expect(actual.className).toEqual('heavy');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
  });

  describe('open a pre-defined search in a new tab', () => {
    const actual = renderLink(
      'lmgtfy',
      'https://lmgtfy.com/?q=let+me+google+that+for+you&s=d',
      '_blank',
    );

    it('has tagName: "A"', () => {
      expect(actual.tagName).toEqual('A');
    });
    it('has innerText: "lmgtfy"', () => {
      expect(actual.innerText).toEqual('lmgtfy');
    });
    it('has href: "https://lmgtfy.com/?q=let+me+google+that+for+you&s=d"', () => {
      expect(actual.href).toEqual(
        'https://lmgtfy.com/?q=let+me+google+that+for+you&s=d',
      );
    });
    it('has target: "_blank"', () => {
      expect(actual.target).toEqual('_blank');
    });
    it('has className: "heavy"', () => {
      expect(actual.className).toEqual('heavy');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
  });

  describe('redirect to the HYF promo clip', () => {
    const actual = renderLink(
      'HYF Belgium',
      'https://www.youtube.com/watch?v=oHg5SJYRHA0',
      '_self',
    );

    it('has tagName: "A"', () => {
      expect(actual.tagName).toEqual('A');
    });
    it('has innerText: "HYF Belgium"', () => {
      expect(actual.innerText).toEqual('HYF Belgium');
    });
    it('has href: "https://www.youtube.com/watch?v=oHg5SJYRHA0"', () => {
      expect(actual.href).toEqual(
        'https://www.youtube.com/watch?v=oHg5SJYRHA0',
      );
    });
    it('has target: "_self"', () => {
      expect(actual.target).toEqual('_self');
    });
    it('has className: "heavy"', () => {
      expect(actual.className).toEqual('heavy');
    });
    it('has childElementCount: 0', () => {
      expect(actual.childElementCount).toEqual(0);
    });
  });
});
