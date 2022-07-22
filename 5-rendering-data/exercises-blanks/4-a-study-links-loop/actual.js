'use strict';

const actual = (linksData) => {
  const divEl = document.createElement('_');

  const h3El = document.createElement('_');
  h3El.textContent = _;
  divEl.appendChild(h3El);

  const ulEl = document.createElement('_');
  for (const key in _) {
    const liEl = document.createElement('_');

    const aEl = document.createElement('_');
    aEl.textContent = key;
    aEl.href = linksData.links[_];
    aEl.target = '_blank';
    _.appendChild(_);

    _.appendChild(_);
  }
  _.appendChild(_);

  return divEl;
};
