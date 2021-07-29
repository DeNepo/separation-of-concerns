'use strict';

const actual = (argsObj = {}) => {
  const divEl = document.createElement('div');
  divEl.className = 'thumbnail-container';

  const imgEl = document.createElement('img');
  imgEl.className = 'thumbnail to-the-right';
  imgEl.src = argsObj.url;
  imgEl.alt = `the color ${argsObj.color}`;
  divEl.appendChild(imgEl);

  return divEl;
};
