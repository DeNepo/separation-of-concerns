import { reverse } from './reverse.js';

describe('reverses a string', () => {
  it('empty string', () => {
    const actual = reverse('');
    expect(actual).toEqual('');
  });
  it('lower case words', () => {
    const actual = reverse('lower case words');
    expect(actual).toEqual('sdrow esac rewol');
  });
  it('upper case words', () => {
    const actual = reverse('UPPER CASE WORDS');
    expect(actual).toEqual('SDROW ESAC REPPU');
  });
  it('numbers and characters', () => {
    const actual = reverse('1324 &*()');
    expect(actual).toEqual(')(*& 4231');
  });
  it('cool patterns', () => {
    const actual = reverse('--""{}""--');
    expect(actual).toEqual('--""}{""--');
  });
});
