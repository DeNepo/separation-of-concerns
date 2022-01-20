import { numberInputComponent } from '../components/number-input.js';

export const loadHandler = () => {
  debugger; // entry point:  UI initialization

  const inputEl = numberInputComponent(0);
  document.getElementById('input-container').appendChild(inputEl);
};
