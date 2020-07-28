'use strict';

/* .replaceChild

  you can replace a specific element

*/


// add a header
const headerEl = document.createElement('h1');
headerEl.innerHTML = 'Welcome!';

const divEl = document.createElement('div');
divEl.appendChild(headerEl);

console.log(divEl.nodeName, divEl.cloneNode(true));
console.assert(divEl.children[0].nodeName === 'H1', 'Test: before replacing');



// replace it with a <p> tag
const pEl = document.createElement('p');
pEl.innerHTML = 'to HYF Be.';

// first argument: the new element
// second arg: the old element to replace
divEl.replaceChild(pEl, headerEl);

console.log(divEl.nodeName, divEl.cloneNode(true));
console.assert(divEl.children[0].nodeName === 'P', 'Test: after replacing');
