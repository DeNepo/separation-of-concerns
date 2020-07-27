function handler(event) {
  // pause in the debugger to step through
  debugger;

  // read user input from event
  const input = event.target.value;

  // pass user input through core logic
  const reversed = reverse(input);

  // render result for user
  document.getElementById('output').innerHTML = reversed;

  // log action for developer
  console.log('--- user action ---');
  console.log('input:', typeof input + ',', input);
  console.log('output', typeof reversed + ',', reversed);
}
