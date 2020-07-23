'use strict';

/* element.className

  .className allows you to change the class of an element
  this is useful for dynamic styling

*/



const divEl = document.createElement('div');
divEl.className = 'dark-widget';
console.log(divEl.nodeName, divEl);

const pEl = document.createElement('p');
pEl.className = 'social-media-thumbnail';
console.log(pEl.nodeName, pEl);

const buttonEl = document.createElement('button');
buttonEl.className = 'dark-text';
console.log(buttonEl.nodeName, buttonEl);

