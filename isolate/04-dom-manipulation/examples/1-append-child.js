'use strict';

/* .appendChild

  you can add children to an element without using template strings

*/


const headerEl = document.createElement('h1');
headerEl.innerHTML = 'Welcome!';

const pEl = document.createElement('p');
pEl.innerHTML = 'to HYF Be.';

const divEl = document.createElement('div');
divEl.appendChild(headerEl);
divEl.appendChild(pEl);

console.log(divEl.nodeName, divEl.cloneNode(true));

console.assert(divEl.children[0].nodeName === 'H1', 'Test 1st child: .nodeName');
console.assert(divEl.children[0].innerHTML === 'Welcome!', 'Test 1st child: .innerHTML');

console.assert(divEl.children[1].nodeName === 'P', 'Test 2nd child: .nodeName');
console.assert(divEl.children[1].innerHTML === 'to HYF Be.', 'Test 2nd child: .innerHTML');

