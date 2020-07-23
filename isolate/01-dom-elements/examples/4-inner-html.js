'use strict';

/* element.innerHTML

  .innerHTML will let you read and write what is inside an element

*/


const divEl = document.createElement('Div');
divEl.innerHTML = "div time!";
console.log(divEl.nodeName, divEl);
console.log('.innerHTML:', divEl.innerHTML, '\n\n');

const pEl = document.createElement('P');
pEl.innerHTML = "i'm a p";
console.log(pEl.nodeName, pEl);
console.log('.innerHTML:', pEl.innerHTML, '\n\n');

const buttonEl = document.createElement('bUTTOn');
buttonEl.innerHTML = "big time sun";
console.log(buttonEl.nodeName, buttonEl);
console.log('.innerHTML:', buttonEl.innerHTML, '\n\n');

const liEl = document.createElement('LI');
liEl.innerHTML = 'third thing';
console.log(liEl.nodeName, liEl);
console.log('.innerHTML:', liEl.innerHTML, '\n\n');

const sectionEl = document.createElement('SeCtIoN');
sectionEl.innerHTML = ':)';
console.log(sectionEl.nodeName, sectionEl);
console.log('.innerHTML:', sectionEl.innerHTML, '\n\n');
