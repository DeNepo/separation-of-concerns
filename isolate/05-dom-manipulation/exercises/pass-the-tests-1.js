'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p> // replace
  <section></section> // insert before
  <h1><h1> // remove
`;
console.log(divEl.nodeName, divEl.cloneNode(true));

// --- write some code ---




// --- --- --- --- --- ---

console.log(divEl.nodeName, divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4,
  'Test: .childElementCount');

console.assert(divEl.children[0].nodeName === 'NAV',
  'Test: 1st child');
console.assert(divEl.children[0].nodeName === 'H1',
  'Test: 2nd child');
console.assert(divEl.children[0].nodeName === 'SECTION',
  'Test: 3rd child');
console.assert(divEl.children[0].nodeName === 'P',
  'Test: 4th child');
