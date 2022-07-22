/**
 * renders a header with a link
 *  you can optionally configure the target
 *
 * @param {string} text - the button's text
 * @param {string} url - the link's URL
 * @param {string} [target='_blank'] - where to open the link
 *  defaults to '_blank'
 * @returns {HTMLHeadingElement} a linked heading
 */
export const linkedHeader = (text, link, target = '_blank') => {
  const h2El = document.createElement('h2');

  const aEl = document.createElement('a');
  aEl.href = link;
  aEl.target = target;
  aEl.innerHTML = text;
  h2El.appendChild(aEl);

  return h2El;
};
