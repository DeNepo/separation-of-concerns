'use strict';

// fill in the _s

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'log in';
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));


const authenticationHandler = () => {
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

buttonEl.addEventListener('hover', authenticationHandler);


// "hover" over the button once
const clickEvent1 = new Event('hover');
buttonEl.dispatchEvent(clickEvent1);

// "hover" over the button again
const clickEvent2 = new Event('hover');
buttonEl.dispatchEvent(clickEvent2);
