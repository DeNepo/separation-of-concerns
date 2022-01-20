'use strict';

debugger; // once when the script is loaded

/**
 * initialize the application when the DOM is ready
 * does anything that needs to happen only once
 * BEFORE any user interactions
 */
var initializeApp = function () {
  debugger; // once when the DOM content has finished loading

  // set the initial values for the form inputs using the program data
  var form = document.getElementById('removable');

  form.text.value = data.text;
  form.result.value = data.text;
};

/**
 * reads the user input from the form
 * computes the filtered text
 * and updates the UI for the user
 */
var handleTyping = function (event) {
  debugger; // each time a user types

  // declare all the variables
  var form;
  var removified;

  // read the form to a local variable for debugging
  //  no worries if you don't understand forms and events yet
  form = event.target.form;

  // update the program data with user input
  //  wait, where does 'data' come from? not clear without imports!
  data.text = form.text.value;
  data.toRemove = form.remove.value;

  // compute a new value using program data
  removified = data.text.replaceAll(data.toRemove, '');

  // update the UI
  form.result.value = removified;

  // log this interaction for developers
  console.log(data.text, data.toRemove, removified);
};

debugger;
