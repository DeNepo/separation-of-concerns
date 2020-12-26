'use strict';

/**
 * renders a header HTML string with the given level and text
 * @param {number} level - the level of header to render
 * @param {string} text - the header text
 * @returns {string} rendered header tag
 */
const renderHeader = (level, text) => {
  return `<h${level}>${text}</h${level}>`;
};

const happyH1 = renderHeader(1, ':)');
console.assert(happyH1 === '<h1>:)</h1>',
  'Test 1: happy H1');

const sadH2 = renderHeader(2, ':(');
console.assert(sadH2 === '<h2>:(</h2>',
  'Test 2: sad H2');



const divEl = document.createElement('div');

divEl.innerHTML = happyH1;
divEl.innerHTML += sadH2;
console.log(divEl);
