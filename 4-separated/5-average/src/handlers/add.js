import { average } from '../utils/average.js';
import { state } from '../../data/state.js';

export const addNumberHandler = (event) => {
  debugger;

  // read user input
  const newNumberStr = event.target.form.number.value;
  const newNumber = Number(newNumberStr);

  // read from numbers
  const validNumbers = state.validNumbers;
  const invalidNumbers = state.invalidNumbers;
  const currentAverage = state.average;

  // perform core logic
  let newAverage;
  if (Number.isNaN(newNumber)) {
    invalidNumbers.push(newNumberStr);
    newAverage = currentAverage;
  } else {
    validNumbers.push(newNumber);
    newAverage = average(validNumbers);
  }

  // update numbers
  state.validNumbers = validNumbers;
  state.invalidNumbers = invalidNumbers;
  state.average = newAverage;

  // re-render UI from numbers
  document.getElementById('current-average').innerHTML = state.average;
};
