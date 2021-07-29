/**
 *
 *
 *
 */
export const wordsList = (array = []) => {
  const ul = document.createElement('ul');
  for (let string of array) {
    const li = document.createElement('li');
    li.innerHTML = string;
    ul.appendChild(li);
  }
  return ul;
};
