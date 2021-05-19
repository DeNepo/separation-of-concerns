'use strict';

// https://www.w3schools.com/jsref/prop_checkbox_checked.asp
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/checkbox
// https://stackoverflow.com/a/8206578

const inputEl = document.createElement('input');
inputEl.type = 'checkbox';
console.log('initial input:', inputEl.cloneNode(true));


const toggleCheckedHandler = (event) => {
  // write code to reverse the boolean .checked value on the target element


};

inputEl.addEventListener('click', toggleCheckedHandler);


// "click" the button once
const clickEvent1 = new Event('click');
inputEl.dispatchEvent(clickEvent1);
console.log('after 1st click:', inputEl.cloneNode(true));
console.assert(inputEl.checked === true, 'Test 1: after first click');

// "click" the button again
const clickEvent2 = new Event('click');
inputEl.dispatchEvent(clickEvent2);
console.log('after 2nd click:', inputEl.cloneNode(true));
console.assert(inputEl.checked === false, 'Test 2: after second click');
