import { replaceWith } from './utils.js';

describe('replaceWith: replaces characters', () => {
  it('replaces nothing in an empty string', () => {
    const expected = '';
    const actual = replaceWith('', 'a', 'x');
    expect(actual).toEqual(expected);
  });
  it('an empty oldThing does nothing', () => {
    const expected = 'hello';
    const actual = replaceWith('hello', '', 'x');
    expect(actual).toEqual(expected);
  });
  it('an empty newThing does nothing', () => {
    const expected = 'hello';
    const actual = replaceWith('hello', 'a', '');
    expect(actual).toEqual(expected);
  });
  it("replaces nothing when the oldThing isn't there", () => {
    const expected = 'hello';
    const actual = replaceWith('hello', 'a', 'x');
    expect(actual).toEqual(expected);
  });
  it('successfully replaces the oldThing', () => {
    const expected = 'flex';
    const actual = replaceWith('flea', 'a', 'x');
    expect(actual).toEqual(expected);
  });
});
