/**
 * Updates the background color of an element according to the mouse's position.
 *
 * @param {MouseMoveEvent} event - The user-generated `mousemove` event
 */
export const handleMouseMove = (event) => {
  const x = event.clientX;
  const y = event.clientY;
  event.target.style.backgroundColor = `rgb(${x},${y},100)`;
};
