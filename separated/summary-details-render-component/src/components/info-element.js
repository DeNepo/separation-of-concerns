import { preventDefault } from '../handlers/prevent-default.js';

/**
 *
 */
export const infoElement = ({ summaryText, mainText, isOpen }) => {
  const summaryEl = document.createElement('summary');
  summaryEl.innerHTML = summaryText;

  const mainTextEl = document.createElement('p');
  mainTextEl.innerHTML = mainText;

  const detailsEl = document.createElement('details');
  detailsEl.open = isOpen;
  detailsEl.appendChild(summaryEl);
  detailsEl.appendChild(mainTextEl);
  detailsEl.addEventListener('click', preventDefault);

  return detailsEl;
};
