import { testing } from '../../testing.js';
import { format } from './logic.js';

const formatTestCases = [
  { name: 'first', args: [5, 2], expected: 'X: 5\nY: 2' },
  { name: 'second', args: [12, -40], expected: 'X: 12\nY: -40' },
  { name: 'third', args: [-1999, 409], expected: 'X: -1999\nY: 409' },
  { name: 'fourth', args: [-1, -1], expected: 'X: -1\nY: -1' },
  { name: 'fifth', args: [1.3, 0], expected: 'X: 1.3\nY: 0' },
];

testing(format, formatTestCases);
