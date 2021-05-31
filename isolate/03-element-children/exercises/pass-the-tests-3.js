'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr>
        <td>w</td>
        <td>x</td>
      </tr>
      <tr>
        <td>y</td>
        <td>z</td>
      </tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName, divEl.cloneNode(true));

// --- write some code ---
//  you will need to access and update each <td> element

const chil1 = divEl.children[0].children[0].children[0].children[0];
chil1.innerHTML = 'a'
const chil2 = divEl.children[0].children[0].children[0].children[1];
chil2.innerHTML = 'b'
const chil3 = divEl.children[0].children[0].children[1].children[0];
chil3.innerHTML = 'c'
const chil4 = divEl.children[0].children[0].children[1].children[1];
chil4.innerHTML = 'd'


//check TRAVERSY


// --- --- --- --- --- ---

console.log(divEl.nodeName, divEl.cloneNode(true));

const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.children[0].children[0];
    const trEl = tbodyEL.children[i];
    const tdEl = trEl.children[j];
    const actual = tdEl.innerHTML;
    const expected = expectedInnerHTMLs.shift();
    console.assert(actual === expected, `expected "${expected}"`);
  }
}

//https://www.youtube.com/watch?v=0ik6X4DJKCc&t=1665s