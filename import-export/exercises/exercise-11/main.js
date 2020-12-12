'use strict';

// import the function from the other file to pass the assertions
import { greetUser } from './user.js';

const helloJohn = greetUser('John');
const test1 = helloJohn === 'hello John';
console.assert(test1, 'John was politely greeted');
