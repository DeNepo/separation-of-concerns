/**
 * this function renders text into a DOM header with the given level
 * it will throw an error if the level is not in the range 1 -> 6
 *
 * @param {number} level - what header level to render
 * @param {string} text - the text to render into the header
 * @returns {HTMLHeadingElement} a rendered header element
 */
export const renderHeader = (level, text) => {
  if (level < 1 || 6 < level) {
    throw new RangeError('level must be in range: 1 -> 6');
  }

  const headerEl = document.createElement(`h${level}`);
  headerEl.innerHTML = text;
  headerEl.className = 'title';

  return headerEl;
};
