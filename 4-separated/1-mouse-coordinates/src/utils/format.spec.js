import { format } from './format.js';

describe('formats two numbers into X/Y coordinates', () => {
  it('formats two positive numbers', () => {
    const actual = format(5, 2);
    expect(actual).toEqual('X: 5\nY: 2');
  });
  it('formats a positive and a negative', () => {
    const actual = format(12, -40);
    expect(actual).toEqual('X: 12\nY: -40');
  });
  it('formats two negative numbers', () => {
    const actual = format(-1, -1);
    expect(actual).toEqual('X: -1\nY: -1');
  });
  it('formats decimal numbers', () => {
    const actual = format(1.3, 4.9);
    expect(actual).toEqual('X: 1.3\nY: 4.9');
  });
});
