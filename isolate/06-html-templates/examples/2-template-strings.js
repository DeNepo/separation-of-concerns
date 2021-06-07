'use strict';

// you can use template literal strings to create HTML strings

const divEl = document.createElement('div');

const text = 'to the top';

// you can concatenate strings with template literals
const buttonString = `<button>${text}</button>`;
divEl.innerHTML = buttonString;
console.log(divEl.cloneNode(true));

// ... nest HTML children
const hrefButtonString = `<a href='#nav'>${buttonString}</a>`;
divEl.innerHTML = hrefButtonString;
console.log(divEl.cloneNode(true));


// ... or get fancy with arrays of strings
const _0_names = ['raoul', 'plankar', 'marshule'];
const _1_nameLis = _0_names.map(name => `<li>${name}</li>`);
const _2_namesListChildren = _1_nameLis.reduce((lis, next) => lis + next);
const _3_namesList = `<ul>${_2_namesListChildren}</ul>`;
divEl.innerHTML = _3_namesList;
console.log(divEl.cloneNode(true));
