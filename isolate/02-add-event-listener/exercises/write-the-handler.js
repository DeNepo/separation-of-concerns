'use strict';

// fill in the _s

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'are you honest?';
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));


const truthTestHandler = () => {

  const userHonest = confirm('Are you honest?'); // ask user if they are honest with true or false, that's why we use confirm 

  if (userHonest == true){ //Boolean(userHonest) - also works 
    alert('thanks for your answer')
  } else {
    alert('enter something')
  }

  // ask a user to confirm if they are honest
  // let them know what you think of their answer

};

buttonEl.addEventListener('click', truthTestHandler);


// "click" the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);

// "click" the button again
const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);
