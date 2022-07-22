'use strict';

const actual = (height, width, radius) => {
  const canvasEl = document.createElement('_');
  const ctx = canvasEl.getContext('_');

  for (var i = 0; i < _; i++) {
    for (var j = 0; j < _; j++) {
      const greenVal = Math.floor(255 - (255 / _) * i);
      const blueVal = Math.floor(255 - (255 / _) * j);
      ctx.strokeStyle = `rgb(0, ${greenVal}, ${blueVal})`;
      ctx.beginPath();
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, _, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }

  return _;
};
