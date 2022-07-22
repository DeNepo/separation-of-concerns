/**
 *
 * @param {} words
 */
export const wordList = (words = []) => {
  const list = document.createElement('ul');
  for (let word of words) {
    const li = document.createElement('li');
    li.innerHTML = word;
    list.appendChild(li);
  }
  return list;
};
