// data to refactor out of this file
const data = {
  foods: [
    'eggs',
    'milk',
    'bread',
    'sandwich',
    'shake',
    'fries',
    'chips',
    'red bull',
    'pasta',
    'pesto',
    'parmesan',
  ],
};

document.getElementById('begin-search').addEventListener('click', () => {
  // read & process user input
  const query = prompt('enter a search query');
  if (query === null || query === '') {
    return;
  }

  // execute core logic
  const results = data.foods
    .filter((food) => food.includes(query))
    .map((food) => `\n- ${food}`)
    .join('');

  // communicate result to user
  const message = `foods matching "${query}":${results}`;
  alert(message);

  // log the interaction
  console.log(query);
});
