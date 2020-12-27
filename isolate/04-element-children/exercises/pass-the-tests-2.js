'use strict';

const divEl = document.createElement('div');
divEl.innerHTML = `
  <a href='#toop'>
    <button>back to the top</button>
  </a>
`;
console.log(divEl.nodeName, divEl.cloneNode(true));

// --- write some code ---
//https://www.w3schools.com/jsref/met_element_setattribute.asp

const divHref = divEl.children[0];
divHref.setAttribute('href', '#top');

const divText = divEl.children[0].children[0];
divText.innerHTML = 'to the top';

// --- --- --- --- --- ---

console.log(divEl.nodeName, divEl.cloneNode(true));

console.assert(divEl.children[0].getAttribute('href') === '#top',
  'Test: href');

console.assert(divEl.children[0].children[0].innerHTML === 'to the top',
  'Test: button innerHTML');

