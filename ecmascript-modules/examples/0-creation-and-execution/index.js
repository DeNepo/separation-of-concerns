debugger;
console.log('executing index.js');

// imports are evaluated at creation
//  they will not take a step of execution
import { user } from './user.js';

// errors with import will prevent your script from executing
//  uncomment this line to see it happen
// import { frog } from './user.js';

const test = user === 'John';
console.assert(test, 'user should be "John"');
