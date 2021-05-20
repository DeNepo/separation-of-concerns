"use strict";

/* .children

  you can access child elements using .children
  this works with [index] like arrays
  but it's not an array!

*/

const divEl = document.createElement("div");
divEl.innerHTML = "<h1>hello</h1>";
divEl.innerHTML += "<h2>goodbye</h2>";
divEl.innerHTML += "<h3>...</h3>";

console.log(divEl.nodeName, divEl.cloneNode(true));
console.log(".childElementCount", divEl.childElementCount);
console.log(".children", divEl.children);
console.log(".children[0]", divEl.children[0]);
console.log(".children[1]", divEl.children[1]);
console.log(".children[2]", divEl.children[2]);
