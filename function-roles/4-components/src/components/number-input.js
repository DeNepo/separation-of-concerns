export const numberInputComponent = (initialValue = 0) => {
  const inputEl = document.createElement('input');
  inputEl.type = 'number';
  inputEl.value = initialValue;
  return inputEl;
};
