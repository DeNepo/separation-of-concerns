document.getElementById('user-action').addEventListener('click', (event) => {
  debugger;
  // read & process user input
  const form = event.target.form;
  const intendedType = form.type.value;
  const stringToCast = form.value.value;

  // execute core logic
  let newValue;
  if (intendedType === 'string') {
    newValue = String(stringToCast);
  } else if (intendedType === 'number') {
    newValue = Number(stringToCast);
  } else if (intendedType === 'boolean') {
    newValue = Boolean(stringToCast);
  } else {
    newValue = undefined;
  }

  // communicate result to user
  document.getElementById('casted-value').innerHTML =
    typeof newValue + ': ' + newValue;

  // log action for developers
  console.log('\n-- user action --');
  console.log('stringToCast:', stringToCast);
  console.log('intendedType:', intendedType);
  console.log('newValue:', newValue);
});
