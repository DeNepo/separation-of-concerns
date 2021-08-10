import { saveNoCopies } from './logic.js';
import { data } from './data.js';

export const saveNoCopiesHandler = () => {
  // read & process user input
  let userInput = null;
  while (userInput === null) {
    userInput = prompt('enter a string to save');
  }
  saveNoCopies(userInput);
  // communicate result to user
  const message = data.noCopies.join(', ');
  alert(message);

  // log interaction
  console.log(data);
};
