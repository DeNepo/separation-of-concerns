import { handleMouseMove } from './handle-mouse-move.js';

/**
 * Renders a color-changing div that manages it's own color.
 *
 * @param {string} className - The class to assign to this element.
 * @returns {HTMLDivElement} A color-changing DIV.
 */
export const colorChanger = (className) => {
  const element = document.createElement('div');
  element.className = className;
  element.addEventListener('mousemove', handleMouseMove);

  return element;
};
