'use strict';

/* modifying the target

  putting this all together, you can now have an interactive DOM element!

*/


const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'initial text';
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));

const updateInnerHTMLHandler = () => {
  const newInnerHTML = prompt('enter new button text');
  if (newInnerHTML === null) {
    return;
  }

  const target = event.target;
  target.innerHTML = newInnerHTML;
};


buttonEl.addEventListener('click', updateInnerHTMLHandler);

// "click" the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));

// "click" the button again
const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));
