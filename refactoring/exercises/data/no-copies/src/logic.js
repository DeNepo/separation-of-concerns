import { data } from './data.js';
/**
 *
 */
export const saveNoCopies = (userInput) => {
  // execute core logic
  const alreadySaved = data.noCopies.includes(userInput);
  if (!alreadySaved) {
    data.noCopies.push(userInput);
  }
};
