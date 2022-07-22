'use strict';

const actual = (virtualElement) => {
  const { name, attributes = {}, children = [] } = virtualElement;

  const el = document.createElement(_);

  for (const attributeName in attributes) {
    const attributeValue = attributes[_];
    el.setAttribute(_, _);
  }

  for (const child of children) {
    if (typeof child === 'string') {
      el.textContent += _;
    } else {
      // recursively render child elements
      const renderedChild = actual(_);
      el.appendChild(_);
    }
  }

  return el;
};
