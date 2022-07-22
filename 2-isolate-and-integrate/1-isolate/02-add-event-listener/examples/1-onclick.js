'use strict';

/* .onclick = actionHandler

  so far you have used the onclick attribute for interaction
    onclick="actionHandler"

  this works but is not the best practice
    you are mixing JS with your HTML
    it's only possible to add one click listener this way

  in the next file you will learn a better way to do this

*/

// create a new button
const buttonEl = document.createElement('button');

// write an event handler
const greetingHandler = () => {
  const userName = prompt('what is your name?');
  if (userName === null) {
    return;
  }
  const greeting = `hello ${userName}`;
  alert(greeting);
};

// set the .onclick property
buttonEl.onclick = greetingHandler;

// onclick attribute will not be displayed in the console
//  you can also see it in the debugger if you expand the button
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));

// you can simulate a user clicking the button
// this is a more advanced technique
//  you will not need to know it, just to understand it in these exercises
//  in "integrate", events are dispatched by actually clicking a button

// 1. create a new "click" event
const clickEvent = new Event('click');

// 2. dispatch the event from the button
buttonEl.dispatchEvent(clickEvent);

// -- with .onclick you can only add a single click handler --
//  assigning a different handler will replace the first one
const secondHandler = () => {
  alert('second handler!');
};

buttonEl.onclick = secondHandler;

const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);
