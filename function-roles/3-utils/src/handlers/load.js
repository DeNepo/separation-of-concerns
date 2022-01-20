export const loadHandler = () => {
  debugger; // entry point:  UI initialization

  const inputEl = document.createElement('input');
  inputEl.type = 'number';
  inputEl.value = 0;

  document.getElementById('input-container').appendChild(inputEl);
};
