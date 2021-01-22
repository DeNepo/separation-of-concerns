'use strict';

debugger;

import { months, MODULES_BECAME_STANDARD_YEAR } from './script.js';

const test1 = months[3] === _;
const test2 = months[5] === 'Sep';
const test3 = MODULES_BECAME_STANDARD_YEAR === _;

console.assert(test1, 'Test 1');
console.assert(test2, 'Test 2');
console.assert(test3, 'Test 3');
