'use strict';

debugger; // once when the script is loaded

// wait, where does this handler come from?  not so clear without imports!

var doItListener = function (id) {
  debugger; // once when the listeners are attached

  document.getElementById(id).addEventListener('click', handleClick);
};

debugger;
