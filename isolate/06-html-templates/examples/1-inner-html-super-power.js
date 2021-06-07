'use strict';

// strings of valid HTML become DOM elements when added as innerHTML

const divEl = document.createElement('div');
console.log(divEl.cloneNode(true));

// you can add DOM elements
divEl.innerHTML = '<h1>hello</h1>';
console.log(divEl.cloneNode(true));

// you can replace DOM elements
divEl.innerHTML = '<h2>good bye</h2>';
console.log(divEl.cloneNode(true));

// you can append to innerHTML
divEl.innerHTML += '<p>thank you for visiting</p>';
console.log(divEl.cloneNode(true));

