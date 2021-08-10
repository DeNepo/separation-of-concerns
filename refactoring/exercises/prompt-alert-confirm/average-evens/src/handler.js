import { averageEvens } from './logic.js';

export const averageEvensHandler = () => {
  const allNumbers = [];
  let acceptingInput = true;
  while (acceptingInput) {
    const nextInput = prompt('enter a number');
    if (nextInput === null || nextInput === '') {
      acceptingInput = false;
      continue;
    }

    const nextNumber = Number(nextInput);
    if (Number.isNaN(nextNumber)) {
      alert(`"${nextInput}" is not a valid number`);
    } else {
      allNumbers.push(nextNumber);
    }
  }

  const newAverage = averageEvens(allNumbers);

  // communicate result to user
  const message = `average of all evens: ${newAverage}`;
  alert(message);
};
