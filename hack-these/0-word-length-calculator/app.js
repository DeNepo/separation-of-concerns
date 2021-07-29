debugger; // once when the script is loaded

let button = document.getElementById('btn');

button.addEventListener('click', function () {
  debugger; // each time the user calculates the length of their word

  let word = document.getElementById('str').value;
  let count = word.length;
  let outputDiv = document.getElementById('output');

  outputDiv.innerHTML = `<h1>${count}</h1>`;
});
