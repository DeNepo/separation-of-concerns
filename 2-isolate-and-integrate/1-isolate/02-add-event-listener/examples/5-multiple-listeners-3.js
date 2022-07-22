'use strict';

/* Multiple Listeners: different events and handlers

  two handlers, two events, one element

*/

// create a new button
const buttonEl = document.createElement('button');

// write two different handlers
const firstHandler = () => {
  alert('first handler');
};

const secondHandler = () => {
  alert('second handler');
};

// add listeners
buttonEl.addEventListener('click', firstHandler);
buttonEl.addEventListener('click', secondHandler);

buttonEl.addEventListener('hover', firstHandler);
buttonEl.addEventListener('hover', secondHandler);

// .onclick is still empty!
console.log(buttonEl.nodeName, buttonEl);

// click the button once
//  how many times will you see an alert?
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);

// click the button again
//  many times will you see an alert?
const clickEvent2 = new Event('hover');
buttonEl.dispatchEvent(clickEvent2);
