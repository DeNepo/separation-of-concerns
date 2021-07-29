'use strict';

const actual = (obj) => {
  const aElement = document.createElement('a');
  aElement.innerHTML = 'learn about ' + obj.text;
  aElement.href = obj.link;
  aElement.target = '_blank';
  return aElement;
};
