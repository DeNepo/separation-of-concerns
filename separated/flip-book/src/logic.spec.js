import { testing } from '../../testing.js';

import { reverseAndUpper } from './logic.js';

const reverseAndUpperTests = [
  { name: 'first', args: ['fdsa'], expected: 'ASDF' },
  { name: 'second', args: ['./.'], expected: './.' },
  { name: 'third', args: ['FD-Df'], expected: 'FD-DF' },
  { name: 'fourth', args: [''], expected: '' },
  { name: 'fifth', args: ['1234'], expected: '4321' },
];

testing(reverseAndUpper, reverseAndUpperTests);
