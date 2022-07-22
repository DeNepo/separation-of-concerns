// import jsdom from 'jsdom';
// import chai from 'chai';
import { infoElement } from './info-element.js';

// // build the DOM properties we will use in testing
// const { document, Element, Event } = new jsdom.JSDOM('').window;
// // create a global variable named `document` that behaves just like in the browser
// // you view function will not work without this
// global.document = document;

// // declare the `expect` variable for testing
// const expect = chai.expect;

describe('infoElement renders a summary/details element with a P tag.  it can be open or closed', () => {
  describe('an open element with "h" and "ello!"', () => {
    const renderedElement = infoElement({
      summaryText: 'h',
      mainText: 'ello!',
      isOpen: true,
    });
    it('should be a DOM element', () => {
      expect(renderedElement).toBeInstanceOf(Element);
    });
    it('should have nodeName "DETAILS"', () => {
      expect(renderedElement.nodeName).toBe('DETAILS');
    });
    it('should be open', () => {
      expect(renderedElement.open).toBe(true);
    });
    it('should have 2 children', () => {
      expect(renderedElement.childElementCount).toBe(2);
    });
    describe('the first child should be a SUMMARY element with "h"', () => {
      const firstChild = renderedElement.children[0];
      it('should be a DOM element', () => {
        expect(firstChild).toBeInstanceOf(Element);
      });
      it('should have nodeName "SUMMARY"', () => {
        expect(firstChild.nodeName).toBe('SUMMARY');
      });
      it('should have no children', () => {
        expect(firstChild.childElementCount).toBe(0);
      });
      it('should have innerHTML "h"', () => {
        expect(firstChild.innerHTML).toBe('h');
      });
    });
    describe('the second child should be a P element with "ello!"', () => {
      const secondChild = renderedElement.children[1];
      it('should be a DOM element', () => {
        expect(secondChild).toBeInstanceOf(Element);
      });
      it('should have nodeName "P"', () => {
        expect(secondChild.nodeName).toBe('P');
      });
      it('should have no children', () => {
        expect(secondChild.childElementCount).toBe(0);
      });
      it('should have innerHTML "ello!"', () => {
        expect(secondChild.innerHTML).toBe('ello!');
      });
    });
    describe('default "click" event behavior should be prevented', () => {
      let defaultWasPrevented = false;
      const eventSpy = new Event('click');
      eventSpy.preventDefault = () => {
        defaultWasPrevented = true;
      };
      renderedElement.dispatchEvent(eventSpy);
      it('should have prevented the default', () => {
        expect(defaultWasPrevented).toBe(true);
      });
    });
  });
  describe('an closed element with "b" and "ye."', () => {
    const renderedElement = infoElement({
      summaryText: 'b',
      mainText: 'ye.',
      isOpen: false,
    });
    it('should be a DOM element', () => {
      expect(renderedElement).toBeInstanceOf(Element);
    });
    it('should have nodeName "DETAILS"', () => {
      expect(renderedElement.nodeName).toBe('DETAILS');
    });
    it('should be closed', () => {
      expect(renderedElement.open).toBe(false);
    });
    it('should have 2 children', () => {
      expect(renderedElement.childElementCount).toBe(2);
    });
    describe('the first child should be a SUMMARY element with "b"', () => {
      const firstChild = renderedElement.children[0];
      it('should be a DOM element', () => {
        expect(firstChild).toBeInstanceOf(Element);
      });
      it('should have nodeName "SUMMARY"', () => {
        expect(firstChild.nodeName).toBe('SUMMARY');
      });
      it('should have no children', () => {
        expect(firstChild.childElementCount).toBe(0);
      });
      it('should have innerHTML "b"', () => {
        expect(firstChild.innerHTML).toBe('b');
      });
    });
    describe('the second child should be a P element with "ye."', () => {
      const secondChild = renderedElement.children[1];
      it('should be a DOM element', () => {
        expect(secondChild).toBeInstanceOf(Element);
      });
      it('should have nodeName "P"', () => {
        expect(secondChild.nodeName).toBe('P');
      });
      it('should have no children', () => {
        expect(secondChild.childElementCount).toBe(0);
      });
      it('should have innerHTML "ye."', () => {
        expect(secondChild.innerHTML).toBe('ye.');
      });
    });
    describe('default "click" event behavior should be prevented', () => {
      let defaultWasPrevented = false;
      const eventSpy = new Event('click');
      eventSpy.preventDefault = () => {
        defaultWasPrevented = true;
      };
      renderedElement.dispatchEvent(eventSpy);
      it('should have prevented the default', () => {
        expect(defaultWasPrevented).toBe(true);
      });
    });
  });
});
