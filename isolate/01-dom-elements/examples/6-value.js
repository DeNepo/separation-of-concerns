'use strict';

/* element.value

  .value is how you can read/write from input elements

*/


// the "input" element
const inputEl = document.createElement('input');
inputEl.value = 'hello :)';
console.log(inputEl.nodeName, inputEl);
console.log('.value:', inputEl.value);


// the "textarea" element
const textAreaEl = document.createElement('textarea');
textAreaEl.value = 'good bye :(';
console.log(textAreaEl.nodeName, textAreaEl);
console.log('.value:', textAreaEl.value);



// https://stackoverflow.com/questions/31225901/difference-between-innerhtml-and-value-in-js
