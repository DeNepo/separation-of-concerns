'use strict';

debugger; // once when the script is loaded

// wait, where does this handler come from?  not so clear without imports!

var doItListener = function (element) {
  debugger; // once when the listeners are attached

  element.addEventListener('click', handleClick);
};

debugger;
