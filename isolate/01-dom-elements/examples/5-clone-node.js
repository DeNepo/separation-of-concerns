'use strict';

/* element.cloneNode(true)

  DOM elements are stored by reference
  this means that sometimes logging them is not reliable
  changes that happen later might show up in an earlier log

  for this reason, it can be helpful to log a copy of the node
  this will print the node at that point in time

  hint: run this example using the [console] button
*/

const divEl = document.createElement('div');
console.log('clone:', divEl.cloneNode(true));
console.log('reference:', divEl, '\n\n');

divEl.innerHTML = 'corvette';
console.log('clone:', divEl.cloneNode(true));
console.log('reference:', divEl, '\n\n');

divEl.className = 'red-car';
console.log('clone:', divEl.cloneNode(true));
console.log('reference:', divEl, '\n\n');
