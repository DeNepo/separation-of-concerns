'use strict';

const actual = (arr) => {
  const olElement = document.createElement('ol');
  olElement.start = 0;
  arr.forEach((item) => {
    const liElement = document.createElement('li');
    liElement.innerText = item;
    olElement.appendChild(liElement);
  });
  return olElement;
};
