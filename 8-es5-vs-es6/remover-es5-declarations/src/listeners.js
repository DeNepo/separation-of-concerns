'use strict';

debugger; // once when the script is loaded

// wait, where do these handlers come from?  not so clear without imports!

function initListener(element) {
  debugger; // once when the listeners are attached

  element.addEventListener('DOMContentLoaded', initializeApp);
}

function removeCharactersListener(element) {
  debugger; // once when the listeners are attached

  element.addEventListener('input', handleTyping);
}

debugger;
