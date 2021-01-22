'use strict';

debugger;

import { hi as sayHi, bye as sayBye } from './greetings.js';

const hi = sayHi('John');
const bye = sayBye('John');

console.log(hi);
console.log(bye);
