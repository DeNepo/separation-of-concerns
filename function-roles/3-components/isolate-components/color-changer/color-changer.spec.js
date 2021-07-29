import { colorChanger } from './color-changer.js';

/*
  Unit tests will test the DOM elements in your component, not handlers.
  color-changer.test.html will be for testing interactivity
*/

describe('colorChanger: renders a DIV with a given class', () => {
  describe('renders a DIV with className "hello"', () => {
    const actual = colorChanger('hello');
    it('is a DIV', () => {
      expect(actual.tagName).toEqual('DIV');
    });
    it('has no children', () => {
      expect(actual.childElementCount).toEqual(0);
    });
    it('has className "hello"', () => {
      expect(actual.className).toEqual('hello');
    });
    console.dir(actual);
  });
  describe('renders a DIV with className "good-bye"', () => {
    const actual = colorChanger('good-bye');
    it('is a DIV', () => {
      expect(actual.tagName).toEqual('DIV');
    });
    it('has no children', () => {
      expect(actual.childElementCount).toEqual(0);
    });
    it('has className "good-bye"', () => {
      expect(actual.className).toEqual('good-bye');
    });
    console.dir(actual);
  });
  describe('renders a DIV with className "hello"', () => {
    const actual = colorChanger('flat');
    it('is a DIV', () => {
      expect(actual.tagName).toEqual('DIV');
    });
    it('has no children', () => {
      expect(actual.childElementCount).toEqual(0);
    });
    it('has className "flat"', () => {
      expect(actual.className).toEqual('flat');
    });
    console.dir(actual);
  });
});
