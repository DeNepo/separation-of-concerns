'use strict';

const actual = (argsObj = {}) => {
  const divEl = document.createElement('div');
  divEl.className = 'thumbnail-container';

  const imgEl = document._('img');
  imgEl._ = 'thumbnail to-the-right';
  imgEl._ = argsObj.url;
  imgEl.alt = `the color ${argsObj.color}`;
  divEl._(imgEl);

  return divEl;
};
