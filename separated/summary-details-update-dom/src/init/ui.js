import { componentState } from '../data.js';

// render initial uiElement
const detailsEl = document.getElementById('ui-element');
detailsEl.open = componentState.isOpen;

const summaryEl = detailsEl.children[0];
summaryEl.innerHTML = componentState.summaryText;

const pEl = detailsEl.children[1];
pEl.innerHTML = componentState.mainText;

// render initial control pannel
document.getElementById('toggle-is-open').checked = componentState.isOpen;
document.getElementById('new-summary-text').value = componentState.summaryText;
document.getElementById('new-main-text').value = componentState.mainText;
