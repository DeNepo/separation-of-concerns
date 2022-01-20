import { buildMadlib } from './utils';

describe('buildMadlib: creates a sentence using your words', () => {
  it('which type of word goes where?', () => {
    const actual = buildMadlib('"noun"', '"verb"', '"adjective"', '"adverb"');
    const expected =
      'When it rains "adverb", "adjective" "noun" never stops "verb"';
    expect(actual).toEqual(expected);
  });
  it('all empty strings', () => {
    const actual = buildMadlib('', '', '', '');
    const expected = 'When it rains ,   never stops ';
    expect(actual).toEqual(expected);
  });
  it('a nonsense sentence', () => {
    const actual = buildMadlib('dirt', 'grumbling', 'fluid', 'dryly');
    const expected = 'When it rains dryly, fluid dirt never stops grumbling';
    expect(actual).toEqual(expected);
  });
  it('a funny sentence', () => {
    const actual = buildMadlib('cat', 'smiling', 'grumpy', 'hardest');
    const expected = 'When it rains hardest, grumpy cat never stops smiling';
    expect(actual).toEqual(expected);
  });
});
