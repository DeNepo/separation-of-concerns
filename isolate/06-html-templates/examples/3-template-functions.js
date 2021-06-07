'use strict';

// or create functions that generate HTML strings
//  this is super powerful, don't underestimate it!


/**
 * renders an HTML string with an <a> tag and a nested <button>
 *  the <a> tag is an anchor link
 * @param {string} link - the value to use for anchor tag
 * @param {string} text - text for the link button
 * @returns {string} the rendered HTML string
 */
const renderNavButton = (link, text) => {
  return (
    `<a href='#${link}'>\n` +
    `  <button>${text}</button>\n` +
    `</a>`
  );
};
const smileButtonString = renderNavButton('top', ':)');
console.log(smileButtonString);

const frownyButtonString = renderNavButton('bottom', ':(');
console.log(frownyButtonString);


const divEl = document.createElement('div');

divEl.innerHTML = smileButtonString;
console.log(divEl.cloneNode(true));

divEl.innerHTML += frownyButtonString;
console.log(divEl.cloneNode(true));
