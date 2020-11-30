# Using User Input

A series of exercises to help you explore how to create simple user interactions and how to use primitive types to create a basic user experience.  You will also get a gradual introduction to some JS best practices including:

- Logging & debugging the type _and_ value of your variables
- Structuring your code for user interactions
- Creating _event-driven_ user interactions
- Paying close attention to the type of your functions' parameters and return values
- Writing simple tests for your functions
- Documenting your functions using multi-line comments in the JSDoc format
- Separating the logic of your website from the user interaction

## Level 1: [User Input](./1-user-input)

In this set of exercises you will practice stepping through, understanding, and debugging basic JS scripts that run when the web page is opened.

At this level you will learn how to log the type _and_ value of your variables, as well as how to structure code for user interactions

## Level 2: [`onclick` Attribute](./2-onclick-attribute)

These exercises build on the last level by running the script only when the user clicks a button (now when the page is loaded).  This is possible because the script is wrapped in a function that is called by an `onclick` attribute in the user interface's button.

At this level you will learn how to create _event-driven_ user interactions

## Level 3: [Separated Logic](./3-separated-logic)

In this level there will be no user interactions, the focus will be on understanding and debugging simple functions using strict comparison (`===`) and `console.assert`.

At this level you will be introduced to _JSDoc_ strings, type-checking your functions' parameters & return value, and writing basic tests.

## Level 4: [All Together](./4-all-together)

All of it!  Practice completing and debugging scripts that have:

- a tested & documented _logic_ function
- a _interaction_ function that interacts with the user and calls the logic
- an `onclick` attribute that triggers the interaction when a user clicks a button

## Level 5: [Refactor](./5-refactor)

It's all on you now :)  You will be given a _level 1_ web page, your task is to re-write it like a _level 4_ web page.  Write your refactored the code for each `x-before.html` file into the `x-after.html` file, don't modify `x-before.html`!  It will be helpful to keep this around as a reference.  Ass a suggestion, try doing your refactor in steps:

1. Refactor the script in to a interaction function, you can call this function from the console to make sure it works.
2. Add a user interface that calls your interaction function, you can test it now by clicking the button. (notice what happened to the first alert in the `before-example.html`!)
3. Write & test a logic function based on the main logic of your interaction function (without changing the interaction function!  you will want to keep this as a reference)
4. Refactor your interaction function to call the logic.

## tips

- Set your browser's debugger to pause on exceptions
