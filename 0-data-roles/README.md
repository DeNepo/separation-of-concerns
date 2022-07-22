# Data Roles

You will learn two roles that data can play in your applications, and how to separate this data into separate files. There are many ways to use data in an application but the two you will learn for now are:

## Constants

Constants are data the user does not interact with, but you use in your code to initialize or configure the application. Constants should not change while your application is running.

Some examples of constant data are: important user events, important DOM IDs or classes, fixed values used to render the UI.

Why do you want to use constants? There are two good reasons at least:

1. **Abstracting Away _Implementation Details_**: If you have a separate _constants.js_ file, then if you (for example) change an element's ID in your HTML file you only need to change it in one JS file. All the other files will automatically import the correct new value.
2. **Sort-Of Documentation**: If you have a well-written _constants.js_ file, your group mates can go to one place to understand a lot of the important info about how the code works.

## State

State is dat a that a user interacts with directly. It's the reason your application exists! State will usually change over time while the application is running.

Some examples of state are: the words in a list, the pieces in a game board, or the number in a counter.
