'use strict';

/* careful! do not call your handler when you add an event listener

  .addEventLister is a higher order function
    it takes your handler as a callback, to be executed sometime in the future

  if you call the handler function when you pass it to .addEventListener ...
    you will get a mystery bug!
  in this example, you'd expect the handler to be called twice (because of two .dispatchEvents)
  instead it's only called once because you didn't actually pass a reference to the handler
    you called it directly when adding the event listener

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
//  oops!  greetingHandler was called on this line!
//  debugger will jump from here to greetingHandler
buttonEl.addEventListener('click', greetingHandler());


// debugger will not jump to the handler
//  it will continue to the next line
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);

// debugger will not jump to the handler
//  it will continue to the next line
const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);
