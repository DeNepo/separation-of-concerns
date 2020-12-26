'use strict';

/**
 * renders a summary/details element with a <p> in the body
 * @param {string} caption - the summary
 * @param {string} mainText - the full paragraph
 * @returns {string} an HTML string
 */
const renderSummaryDetails = (caption, mainText) => {
  return (
    `<details>\n` +
    `  <summary>${caption}</summary>\n` +
    `  <p>${mainText}</p>\n` +
    `</details>`
  );
};



const _1_tallThings = renderSummaryDetails('tall things', 'trees, buildings, mountains.');
console.assert(_1_tallThings === '<details>\n  <summary>tall things</summary>\n  <p>trees, buildings, mountains.</p>\n</details>',
  'Test 1: tall things');

const _2_shortThings = renderSummaryDetails('short things', 'ants, crumbs, sand.');
console.assert(_2_shortThings === '<details>\n  <summary>short things</summary>\n  <p>ants, crumbs, sand.</p>\n</details>',
  'Test 2: short things');



const divEl = document.createElement('div');

divEl.innerHTML = _1_tallThings;
divEl.innerHTML += _2_shortThings;
console.log(divEl);
