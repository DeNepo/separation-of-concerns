import { average } from './average.js';

describe('average: averages all numbers in an array', () => {
  it('returns 0 for an empty array', () => {
    expect(average([])).toBe(0);
  });
  it('works with negative numbers', () => {
    expect(average([-1, -2, -3])).toBe(-2);
  });
  it('works with positive numbers', () => {
    expect(average([1, 2, 3])).toBe(2);
  });
  it('works with positive and negative numbers', () => {
    expect(average([-1, 1, -2, 2, -3, 3])).toBe(0);
  });
  it('works with decimal numbers', () => {
    expect(average([1.5, 3.5, 9.5, 20.5])).toBe(8.75);
  });
});
