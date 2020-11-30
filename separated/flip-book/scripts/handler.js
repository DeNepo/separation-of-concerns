function handler(event) {
  // read user input from event
  const input = event.target.value;

  // execute core logic
  const reversedUppercase = reverseAndUpper(input);

  // render result for user
  document.getElementById('output').innerHTML = reversedUppercase;

  // log action for developers
  console.log('\n--- user action ---');
  console.log('input:', typeof input + ',', input);
  console.log('reversedUppercase:', typeof reversedUppercase + ',', reversedUppercase);
}
