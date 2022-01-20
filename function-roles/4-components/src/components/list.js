export const listComponent = (list = []) => {
  const listEl = document.createElement('ul');
  listEl.className = 'no-dots';

  for (const item of list) {
    const liEl = document.createElement('li');
    liEl.innerHTML = item;
    listEl.appendChild(liEl);
  }

  return listEl;
};
