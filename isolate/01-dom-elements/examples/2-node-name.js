'use strict';

/* element.nodeName

  .nodeName will tell you what kind of element something is
  it's kind of like typeof for DOM elements

*/


// you can create an element with lower or upper case letters
const divEl = document.createElement('Div');
// but the .nodeName will be in all capitals
console.log(divEl.nodeName, divEl);

// you can't modify the .nodeName property of an element
try {
  divEl.nodeName = '!potato!';
} catch (err) {
  console.log(err);
}

const pEl = document.createElement('P');
console.log(pEl.nodeName, pEl); // DIV

const buttonEl = document.createElement('bUTTOn');
console.log(buttonEl.nodeName, buttonEl); // BUTTON

const liEl = document.createElement('LI');
console.log(liEl.nodeName, liEl); // LI

const sectionEl = document.createElement('SeCtIoN');
console.log(sectionEl.nodeName, sectionEl); // SECTION

const inputEl = document.createElement('InpuT');
console.log(inputEl.nodeName, inputEl); // INPUT
