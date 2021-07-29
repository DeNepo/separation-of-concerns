/**
 * Renders an anchor element with given text & URL.
 * You can optionally configure the target property.
 *
 * @param {string} text - The text to show in the link.
 * @param {string} url - The URL to open.
 * @param {string} [target='_blank'] - Where to open the link.
 * @returns {HTMLAnchorElement} A rendered anchor element.
 */
export const renderLink = (text, url, target = '_blank') => {
  const aEl = document.createElement('a');
  aEl.href = url;
  aEl.target = target;
  aEl.innerText = text;
  aEl.className = 'heavy';

  return aEl;
};
