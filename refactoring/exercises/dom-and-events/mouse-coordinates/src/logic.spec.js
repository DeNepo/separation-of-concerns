import { formatCoordinates } from './utils.js';

describe('formatCoordinates: formats two numbers into a coordinates string', () => {
  it('positive numbers', () => {
    const expected = 'X: 5\nY: 2';
    const actual = formatCoordinates(5, 2);
    expect(actual).toEqual(expected);
  });
  it('negative numbers', () => {
    const expected = 'X: -5\nY: -2';
    const actual = formatCoordinates(-5, -2);
    expect(actual).toEqual(expected);
  });
  it('decimal numbers', () => {
    const expected = 'X: 5.2\nY: 2.5';
    const actual = formatCoordinates(5.2, 2.5);
    expect(actual).toEqual(expected);
  });
  it('mixed', () => {
    const expected = 'X: 5.5\nY: -2';
    const actual = formatCoordinates(5.5, -2);
    expect(actual).toEqual(expected);
  });
});
