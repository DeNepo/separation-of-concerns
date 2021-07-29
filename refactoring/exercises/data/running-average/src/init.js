// data to refactor out of this file
const data = {
  average: 0,
  numbers: [],
};

document.getElementById('add-to-average').addEventListener('click', () => {
  // read & process user input
  const userInput = prompt('add a number to the running average');
  if (userInput === null) {
    alert('good bye');
    return;
  }

  const newNumber = Number(userInput);
  if (Number.isNaN(newNumber) || userInput === '') {
    alert(`"${userInput}" is not a valid number`);
    return;
  }

  // execute core logic
  data.numbers.push(newNumber);
  data.average =
    data.numbers.reduce((sum, next) => sum + next, 0) / data.numbers.length;

  // communicate result to user
  const message = `running average: ${data.average}`;
  alert(message);

  // log interaction
  console.log(data);
});
