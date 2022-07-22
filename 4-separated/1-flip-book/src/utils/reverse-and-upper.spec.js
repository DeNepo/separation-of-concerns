import { reverseAndUpper } from './reverse-and-upper.js';

describe('reverses a string ans sets the characters to upper case', () => {
  it('works with lower-case letters', () => {
    const actual = reverseAndUpper('asdf');
    expect(actual).toEqual('FDSA');
  });
  it('works with upper-case letters', () => {
    const actual = reverseAndUpper('ASDF');
    expect(actual).toEqual('FDSA');
  });
  it('works with mixed upper and lower-case letters', () => {
    const actual = reverseAndUpper('aSdF');
    expect(actual).toEqual('FDSA');
  });
  it('things that are not letters are just reversed', () => {
    const actual = reverseAndUpper('(-0-)');
    expect(actual).toEqual(')-0-(');
  });
});
