'use strict';

debugger;

import greetUser from './greet.js'; // not { greetUser }, just greetUser

const helloJohn = greetUser('John');
const test1 = helloJohn === 'hello John';
console.assert(test1, 'John was politely greeted');
