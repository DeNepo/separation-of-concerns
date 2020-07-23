'use strict';

// fill in the _s

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'log in';
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));


const loginHandler = () => {
  const username = prompt('enter your user name');
  if (username === null) {
    return;
  }
  const password = prompt('enter your password');
  if (password === null) {
    return;
  }

  alert(`welcome, ${username}`);
};

// add the event listener to the button so a user can login
_;


// "click" the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);

// "click" the button again
const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);
