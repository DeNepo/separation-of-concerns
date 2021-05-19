'use strict';

debugger; // once when the script is loaded

/**
 * reads the user input from the form
 * computes the filtered text
 * and updates the UI for the user
 */
var handleTyping = function(event) {
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
