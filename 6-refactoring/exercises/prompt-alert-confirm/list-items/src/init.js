document.getElementById('list-things').addEventListener('click', () => {
  // read & process user input
  const allInputs = [];
  let acceptingInput = true;
  while (acceptingInput) {
    const nextInput = prompt('enter a list item, cancel when your are done');
    if (nextInput !== null) {
      allInputs.push(nextInput);
    } else {
      acceptingInput = false;
    }
  }

  // execute core logic
  let stringList = '';
  for (const input of allInputs) {
    stringList += `\n- ${input}`;
  }

  // communicate result to user
  const message = `all items:${stringList}`;
  alert(message);
});
