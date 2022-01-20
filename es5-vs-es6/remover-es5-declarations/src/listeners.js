'use strict';

debugger; // once when the script is loaded

// wait, where do these handlers come from?  not so clear without imports!

function initListener() {
  debugger; // once when the listeners are attached

  document.addEventListener('DOMContentLoaded', initializeApp);
}

function removeCharactersListener(id) {
  debugger; // once when the listeners are attached

  document.getElementById(id).addEventListener('input', handleTyping);
}

debugger;
