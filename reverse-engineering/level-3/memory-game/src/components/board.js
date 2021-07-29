/**
 * ...
 */
export const board = (x = 2, y = 2) => {
  // create array with shuffled pairs of numbers
  const maxNumber = Math.ceil((x * y) / 2);
  const numbers = [...Array(maxNumber).keys()].flatMap((index) => [
    index,
    index,
  ]);
  // https://javascript.info/task/shuffle
  const shuffledNumbers = [...numbers.sort(() => Math.random() - 0.5)];

  // create a table with the random numbers
  const tableEl = document.createElement('table');

  for (let rowIndex = 0; rowIndex < y; rowIndex++) {
    const rowEl = document.createElement('tr');

    for (let columnIndex = 0; columnIndex < x; columnIndex++) {
      const cellEl = document.createElement('td');
      cellEl.dataset.selected = 'no';
      cellEl.className = 'hidden';
      cellEl.innerHTML = shuffledNumbers.pop();

      rowEl.appendChild(cellEl);
    }
    tableEl.appendChild(rowEl);
  }

  return tableEl;
};
