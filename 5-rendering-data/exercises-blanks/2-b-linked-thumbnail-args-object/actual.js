'use strict';

const actual = (argsObj) => {
  const divEl = document.createElement('div');
  divEl.className = 'thumbnail-container';

  const aEl = document.createElement('_');
  aEl.className = '_';
  aEl.target = '_';
  aEl.href = argsObj._;
  divEl.appendChild(aEl);

  const imgEl = document.createElement('_');
  imgEl.className = '_';
  imgEl.src = argsObj._;
  imgEl.alt = `the color ${argsObj._}`;
  aEl.appendChild(_);

  return divEl;
};
