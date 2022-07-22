import { DELETE_EVENT } from '../../data/constants.js';

import { remove } from './remove.js';

describe('remove: returns a custom event containing a new word', () => {
  describe('remove the word "hello"', () => {
    const event = remove('hello');
    it('is an event', () => {
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it(`has type "${DELETE_EVENT}"`, () => {
      expect(event.type).toEqual(DELETE_EVENT);
    });
    it('bubbles', () => {
      expect(event.bubbles).toEqual(true);
    });
    it('details: word is 5', () => {
      expect(event.detail).toEqual('hello');
    });
  });
  describe('remove the word "bye"', () => {
    const event = remove('bye');
    it('is an event', () => {
      expect(event instanceof CustomEvent).toEqual(true);
    });
    it(`has type "${DELETE_EVENT}"`, () => {
      expect(event.type).toEqual(DELETE_EVENT);
    });
    it('bubbles', () => {
      expect(event.bubbles).toEqual(true);
    });
    it('details: word is "bye"', () => {
      expect(event.detail).toEqual('bye');
    });
  });
});
