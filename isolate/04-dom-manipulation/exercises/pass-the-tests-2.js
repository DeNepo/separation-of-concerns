'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <li> toad </li>
  <p>frog</p>
  <li>salamander</li>
  <li>fish</li>
`;
console.log(ulEl.nodeName + ' (before)', ulEl.cloneNode(true));

// --- write some code ---



const space = ulEl.children[0];
space.innerHTML = 'toad';


const remove = ulEl.children[3];
ulEl.removeChild(remove);

const createLi = document.createElement('li');
createLi.innerHTML = 'frog';
const old = ulEl.querySelector('p');
ulEl.replaceChild(createLi, old);


// --- --- --- --- --- ---

console.log(ulEl.nodeName + ' (after)', ulEl.cloneNode(true));
console.assert(ulEl.childElementCount === 3,
  'Test: .childElementCount should be 3');

const expectedInnerHTMLs = ['toad', 'frog', 'salamander'];
for (let i = 0; i < expectedInnerHTMLs.length; i++) {
  const actualNodeName = ulEl.children[i].nodeName;
  console.assert(actualNodeName === 'LI',
    `Test: child ${i} .nodeName`);
  const actualInnerHTML = ulEl.children[i].innerHTML;
  const expectedInnerHTML = expectedInnerHTMLs[i];
  console.assert(actualInnerHTML === expectedInnerHTML,
    `Test: child ${i} .innerHTML`);
}
