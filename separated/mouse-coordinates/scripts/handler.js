function handler(event) {
  // read user input from event
  const xValue = event.pageX;
  const yValue = event.pageY;

  // execute core logic
  const formattedCoordinates = format(xValue, yValue);

  // render result for user
  document.getElementById('mouse-position').innerHTML = formattedCoordinates;

  // log action for developers
  console.log('\n--- user action ---');
  console.log('xValue:', typeof xValue + ',', xValue);
  console.log('yValue:', typeof yValue + ',', yValue);
  console.log('formattedCoordinates:', typeof formattedCoordinates + ',', formattedCoordinates);
}
