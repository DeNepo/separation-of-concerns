'use strict';

const actual = (obj) => {
  const h2El = document.createElement('h2');
  h2El.innerHTML = obj.title;
  h2El.className = 'red';

  const buttonEl = document.createElement('button');
  buttonEl.innerHTML = 'learn about ' + obj.text;

  const aEl = document.createElement('a');
  aEl.href = obj.link;
  aEl.target = '_blank';
  aEl.appendChild(buttonEl);

  const divEl = document.createElement('div');
  divEl.appendChild(h2El);
  divEl.appendChild(aEl);

  return divEl;
};
