import { capSwap } from './utils.js';

describe('capSwap: makes uppercase lowercase, and lowercase uppercase', () => {
  it('returns an empty string for an empty string', () => {
    const expected = '';
    const actual = capSwap('');
    expect(actual).toEqual(expected);
  });
  it('changes nothing if there are no letters', () => {
    const expected = '1234567890.,;:\'"{}()[]/?!@#$%^&*';
    const actual = capSwap('1234567890.,;:\'"{}()[]/?!@#$%^&*');
    expect(actual).toEqual(expected);
  });
  it('makes upper case lower case', () => {
    const expected = 'qwertyuiopasdfghjklzxcvbnm';
    const actual = capSwap('QWERTYUIOPASDFGHJKLZXCVBNM');
    expect(actual).toEqual(expected);
  });
  it('makes lower case upper case', () => {
    const expected = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const actual = capSwap('qwertyuiopasdfghjklzxcvbnm');
    expect(actual).toEqual(expected);
  });
  it('works with mixed strings', () => {
    const expected = '.aA12Bb654Qq.';
    const actual = capSwap('.Aa12bB654qQ.');
    expect(actual).toEqual(expected);
  });
});
