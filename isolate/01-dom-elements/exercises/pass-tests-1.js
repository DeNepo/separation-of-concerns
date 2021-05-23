'use strict';
const element = document.createElement('input');
element.placeholder = 'enter your username';
element.className = 'auth-field';


// the assertions are correct!  write code above to pass them
console.assert(element.nodeName === 'INPUT',
  'Test 1: nodeName');
console.assert(element.placeholder === 'enter your username',
  'Test 2: placeholder');
console.assert(element.className === 'auth-field',
  'Test 3: className');
