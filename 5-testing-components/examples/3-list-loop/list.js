/**
 * renders an array of strings into an ordered list
 * @param {string[]} arr - the array of strings to render
 * @param {number} startNum - starting index for the list
 * @returns {HTMLOListElement} the rendered list
 */
export const list = (arr, startNum = 1) => {
  const olEl = document.createElement('ol');
  olEl.start = startNum;

  for (const string of arr) {
    const liEl = document.createElement('li');
    liEl.innerText = string;
    olEl.appendChild(liEl);
  }
  
  return olEl;
};
