'use strict';

/* .insertBefore

  you can add a node in front of another child

*/


// add a <p> tag
const pEl = document.createElement('p');
pEl.innerHTML = 'to HYF Be.';

const divEl = document.createElement('div');
divEl.appendChild(pEl);

console.log(divEl.nodeName, divEl.cloneNode(true));
console.assert(divEl.children[0].nodeName === 'P', 'Test: before inserting');



// append an <h1> before the <p>
const headerEl = document.createElement('h1');
headerEl.innerHTML = 'Welcome!';

// first argument: the new element
// second arg: the old element to place in front of
divEl.insertBefore(headerEl, pEl);

console.log(divEl.nodeName, divEl.cloneNode(true));
console.assert(divEl.children[0].nodeName === 'H1', 'Test: after inserting');
