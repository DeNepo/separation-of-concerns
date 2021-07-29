'use strict';

const actual = (summaryText, detailsText, isOpen) => {
  const details = document.createElement('details');
  details.open = isOpen;

  const summary = document.createElement('summary');
  summary.innerHTML = summaryText;
  details.appendChild(summary);
  details.innerHTML += detailsText;

  return details;
};
