document.getElementById('average-evens').addEventListener('click', () => {
  // read & process user input
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

  // execute core logic
  let howManyEvens = 0;
  let sumOfEvens = 0;
  for (const num of allNumbers) {
    if (num % 2 === 0) {
      sumOfEvens = sumOfEvens + num;
      howManyEvens = howManyEvens + 1;
    }
  }
  const average = howManyEvens === 0 ? 0 : sumOfEvens / howManyEvens;

  // communicate result to user
  const message = `average of all evens: ${average}`;
  alert(message);
});
