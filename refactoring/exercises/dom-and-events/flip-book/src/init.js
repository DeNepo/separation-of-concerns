document.getElementById('input').addEventListener('keyup', (event) => {
  debugger;
  // read and process user input
  const input = event.target.value;

  // execute core logic
  const upperCased = input.toUpperCase();
  const splitted = upperCased.split('');
  const reversed = splitted.reverse();
  const reversedUppercase = reversed.join('');

  // render result for user
  document.getElementById('output').innerHTML = reversedUppercase;

  // log result for developers
  console.log('\n --- user action ---');
  console.log('input:', input);
  console.log('reversedUppercase:', reversedUppercase);
});
