'use strict';

/* Multiple Listeners: different events

  in this example. the same handler is being added with different events

*/

// create a new button
const buttonEl = document.createElement('button');

// write two different handlers
const helloHandler = () => {
  alert('hello!');
};

// call the handler when the button is clicked
buttonEl.addEventListener('click', helloHandler);

// or when the button is hovered
buttonEl.addEventListener('hover', helloHandler);

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
