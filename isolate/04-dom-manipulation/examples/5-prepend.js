'use strict';

/* .prepend()

  You can insert elements tags before the first element child, and also insert text at the beginning of the element text 

*/

const headerH2El = document.createElement('h2');
headerH2El.innerHTML = 'SUPPORT THE DEVELOPERS OF TOMORROW!';

const pEl = document.createElement('p');
pEl.innerHTML = 'Help refugees build digital and soft skills for a career in web development.';

const divEl = document.createElement('div');
divEl.appendChild(headerH2El);
divEl.appendChild(pEl);

console.log(divEl.nodeName, divEl.cloneNode(true));

const headerH1El = document.createElement('h1');
headerH1El.innerHTML = 'Hack Your Future Belgium';

divEl.prepend(headerH1El);

console.log(divEl.nodeName, divEl.cloneNode(true));

// also text can be inserted at the beginning instead of tag elements

headerH1El.prepend('Welcome to ');
console.log(headerH1El.innerHTML);

console.assert(divEl.children[0].nodeName === 'H1', 'Test 1st child: .nodeName');
console.assert(
  divEl.children[0].innerHTML === 'Welcome to Hack Your Future Belgium',
  'Test 1st child: .innerHTML'
);

console.assert(divEl.children[1].nodeName === 'H2', 'Test 2nd child: .nodeName');
console.assert(
  divEl.children[1].innerHTML === 'SUPPORT THE DEVELOPERS OF TOMORROW!',
  'Test 2nd child: .innerHTML'
);

console.assert(divEl.children[2].nodeName === 'P', 'Test 3rd child: .nodeName');
console.assert(
  divEl.children[2].innerHTML ===
    'Help refugees build digital and soft skills for a career in web development.',
  'Test 3rd child: .innerHTML'
);
