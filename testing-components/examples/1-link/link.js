/**
 * renders an anchor element with given text & URL
 *  you can optionally configure the target
 *
 * @param {string} text - the link text
 * @param {string} url - the link's URL
 * @param {string} [target='_blank'] - where to open the link
 *  defaults to '_blank'
 * @returns {HTMLAnchorElement} a rendered anchor element
 */
export const link = (text, url, target = '_blank') => {
  const aEl = document.createElement('a');
  aEl.href = url;
  aEl.target = target;
  aEl.innerHTML = text;

  return aEl;
};
