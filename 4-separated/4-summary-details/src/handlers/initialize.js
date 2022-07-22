import {
  CONTAINER_ID,
  MAIN_ID,
  SUMMARY_ID,
  TOGGLE_ID,
} from '../../data/constants.js';

import { state } from '../../data/state.js';

import { infoElement } from '../components/info-element.js';

export const initialize = () => {
  debugger;

  // render initial uiElement
  const renderedState = infoElement(state);
  document.getElementById(CONTAINER_ID).appendChild(renderedState);

  // render initial control panel
  document.getElementById(TOGGLE_ID).checked = state.isOpen;
  document.getElementById(SUMMARY_ID).value = state.summaryText;
  document.getElementById(MAIN_ID).value = state.mainText;
};
