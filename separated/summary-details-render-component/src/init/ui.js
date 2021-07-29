import { componentState } from '../data.js';
import { infoElement } from '../components/info-element.js';

// render initial uiElement
const renderedState = infoElement(componentState);
document.getElementById('details-container').appendChild(renderedState);

// render initial control pannel
document.getElementById('toggle-is-open').checked = componentState.isOpen;
document.getElementById('new-summary-text').value = componentState.summaryText;
document.getElementById('new-main-text').value = componentState.mainText;
