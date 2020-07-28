'use strict';

/* the event keyword:  a messy JS secret

  you can actually access the event from a handler without a parameter

  while this is possible, it's not a good practice
  it's best to be very clear and to declare the event as a parameter

*/


const buttonEl = document.createElement('button');

const demoHandler = () => { // no parameter!
  // yet the function behaves no differently

  const eventType = event.type;

  const target = event.target;
  const nodeName = target.nodeName;

  const message = `you ${eventType}ed a ${nodeName}`;
  alert(message);
};

buttonEl.addEventListener('click', demoHandler);
buttonEl.addEventListener('mouseover', demoHandler);


const clickEvent = new Event('click');
buttonEl.dispatchEvent(clickEvent);

const hoverEvent = new Event('mouseover');
buttonEl.dispatchEvent(hoverEvent);
