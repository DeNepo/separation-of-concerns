import { state } from '../../data/state.js';

export const setStep = (event) => {
  debugger;

  // read user input
  const newStepInput = event.target.value;
  const newStep = Number(newStepInput);
  if (Number.isNaN(newStep)) {
    // this should never happen because the input is type number
    // but just in case
    return;
  }

  // update state
  state.step = newStep;
};
