'use strict';

// or convert .children to an array and use array methods

// create a div with 3 children
const divEl = document.createElement('div');
divEl.innerHTML = '<h1>hello</h1>';
divEl.innerHTML += '<h2>goodbye</h2>';
divEl.innerHTML += '<h3>...</h3>';
console.log(divEl.nodeName, divEl.cloneNode(true));
console.log('.childElementCount', divEl.childElementCount);

// update each child using a for loop
const childrenArray = Array.from(divEl.children);
childrenArray.forEach(child => {
  // children are updated by reference
  child.innerHTML += '!';
});

// the changes are visible in the parent
console.log(divEl.nodeName, divEl.cloneNode(true));
console.log('.childElementCount', divEl.childElementCount);
