'use strict';

/* .addEventListener('click', handler)

  a better way to add user interactions is with event listeners
  this is a mechanism registers all user interactions in the browser
    event listeners are not stored as properties on the element
    you will learn how to inspect them in "integrate"

  .addEventListener takes two arguments
  1 - the type of event, represented as a string
  2 - the handler function to execute when the event is dispatched

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

// add a 'click' event listener to the button
//  notice the 'onclick' property is still null!
buttonEl.addEventListener('click', greetingHandler);

// ! event listeners do not appear on the element
//  they are stored somewhere else in the browser
//  you will see this in "integrate"
console.log(buttonEl.nodeName, buttonEl);



// you can simulate a user clicking the button
// this is a more advanced technique
//  you will not need to know it, just to understand it in these exercises
//  in "integrate", events are dispatched by actually clicking a button

// 1. create a new "click" event
const clickEvent = new Event('click');

// 2. dispatch the event from the button
buttonEl.dispatchEvent(clickEvent);
