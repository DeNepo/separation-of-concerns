'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p>
  <section></section>
  <h1></h1>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  replace the <p>
//  insert something before the <section>
//  remove the <h1>
//  append something to the end

//  replace the <p>

//const p = divEl.querySelector('p') // queryselector takes the first target/object
//const replacement = document.createElement('nav');
//p.parentNode.replaceChild(replacement, p);
// p.replaceWith(replacement);

//const replacement = document.createElement();
const preplace = document.createElement('nav');
const old = divEl.querySelector('p');
//first is new second is old
divEl.replaceChild(preplace, old);



const newDiv = document.createElement('h2');
const section = divEl.querySelector ('section');
divEl.insertBefore (newDiv, section);

const removeTe = divEl.querySelector('h1');
divEl.removeChild(removeTe);

const create = document.createElement ('p');
//const appendSome = divEl.querySelector('p');
divEl.appendChild(create);


// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4, 
  'Test: .childElementCount');

console.assert(divEl.children[0].nodeName === 'NAV',
  'Test: 1st child');
console.assert(divEl.children[1].nodeName === 'H2',
  'Test: 2nd child');
console.assert(divEl.children[2].nodeName === 'SECTION',
  'Test: 3rd child');
console.assert(divEl.children[3].nodeName === 'P',
  'Test: 4th child');
