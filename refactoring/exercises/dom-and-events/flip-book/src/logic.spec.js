import { reverseAndUpper } from './utils.js';

describe('reverseAndUpper: reverses a string and upper-cases all the letters', () => {
  it('"lower-case letters"', () => {
    const expected = 'FDSA';
    const actual = reverseAndUpper('asdf');
    expect(actual).toEqual(expected);
  });
  it('upper-case letters', () => {
    const expected = 'FDSA';
    const actual = reverseAndUpper('ASDF');
    expect(actual).toEqual(expected);
  });
  it('not-letters', () => {
    const expected = '-(+)-';
    const actual = reverseAndUpper('-)+(-');
    expect(actual).toEqual(expected);
  });
  it('mixed', () => {
    const expected = '!OLLEH';
    const actual = reverseAndUpper('Hello!');
    expect(actual).toEqual(expected);
  });
});
