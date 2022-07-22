import { REMOVE_EVENT } from '../../data/constants.js';

import { remove } from './remove.js';

describe('remove: returns a custom event containing a new number', () => {
  describe('remove the number 5', () => {
    const event = remove(5);
    it('is an event', () => {
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it(`has type "${REMOVE_EVENT}"`, () => {
      expect(event.type).toEqual(REMOVE_EVENT);
    });
    it('bubbles', () => {
      expect(event.bubbles).toEqual(true);
    });
    it('details: number is 5', () => {
      expect(event.detail).toEqual({ number: 5 });
    });
  });
  describe('remove the number -5', () => {
    const event = remove(-5);
    it('is an event', () => {
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it(`has type "${REMOVE_EVENT}"`, () => {
      expect(event.type).toEqual(REMOVE_EVENT);
    });
    it('bubbles', () => {
      expect(event.bubbles).toEqual(true);
    });
    it('details: number is -5', () => {
      expect(event.detail).toEqual({ number: -5 });
    });
  });
});
