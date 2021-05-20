> pro tip for studying the examples in this folder: collapse the script tags you aren't reading.

# Function Roles

Recognize this thing?

```js
const aFunction = () => {};
```

It's a function.

Functions can do all sorts of things depending on the parameters you pass, the code you write in the body, and what they return. But no matter how you use them, a function is still just a function. This folder won't help you learn anything new about how functions _work_, instead you'll learn about how to _use_ them in a program.

There is no magical "best way" to use functions. Here is just 3 common roles functions can play in simple JS programs. What you learn in this folder is enough to (mostly) make sense of what you find in the world of JS tutorials. In later modules you will learn about different function roles, but these 3 are enough for now. Let's get to it.

## Why use Functions?

Other developers should be able to know WHAT your code does without needing to now HOW it works. Functions are great for this. Writing short single-purpose functions with good names has a few benefits:

1. Your main program is easier to read: a single function call is simpler to read and understand than many lines of code.
2. You can re-use your function many times in many places, each time with different arguments. This helps to avoid repeated code.
3. With functions you can test your code using many different inputs to be sure it does what you expect. Some functions are harder to test than others, for now you only need to test your logic.

## The Roles

And finally, the 3 function roles you will learn in this module: **Handlers**, **Logic**, **Procedures**.

As you study your way around the internet it's important to keep in mind that these 3 function roles are not standard everywhere. Different resources may use different terms, or may not even talk about function roles at all. These roles are just a helpful way for you to organize your thoughts as you read and write your first programs.

---

### 1. Event Handlers

JavaScript programs are [_event-driven_](https://en.wikipedia.org/wiki/Event-driven_programming). This is a fancy way to say that websites react to what a user does. For example:

- **a `"click"` event**: when a user clicks a button the background changes color.
- **a `"mouseover"` event**: When a user hovers over a word an image is shown.
- **a `"keyup"` event**: As a user types their search suggestions are displayed under the search bar.

If these examples makes you think of a user story, then you're thinking in the right direction. Event handlers are often the [**_entry point_**](https://en.wikipedia.org/wiki/Entry_point) for user interactions. "**Entry Point**" is just a fancy way to say "the first thing that happens". So when a user interacts with your web page a few things happen:

1. A new _event_ is created. Events are a special kind of object in JavaScript that have lots of useful information like where the event occurred on the screen, what type of interaction occurred, or what input a user provided. The browser will do this behind the scenes.
2. Your event handler is called with this new event as an argument, the browser will also do this for you. And so a user story begins.

Event handlers are the functions responsible for reading user input from events and using other functions to make a user story happen. Here is a little checklist to help you know if a function is being used as an event handler:

- it is passed as a callback to `_.addEventListener('interaction', handler)`
- it takes either no parameters, or only one `event` parameter

> PS. Events and event handlers will replace `prompt`, `alert` and `confirm` in your programs from now on.

---

### 2. Logic

These are **pure functions**, the kind of function you studied in Behavior, Strategy, Implementation. They take in JS data, transform it, and return a new value. Unlike _handlers_ or _procedures_ which can interact with the user interface, logic functions are easy to test and document because their behavior is predictable - the same arguments will always give the same return value.

Writing programs that use logic functions will make your code more readable, and unit testing your logic gives confidence that you program works as it should.

Logic functions are responsible for the many complicated things you may need to do with a user's data, for example finding their favorite movies from an array or making sure an email is valid . Here's a checklist you can use to see if a function is playing the role of **logic** in your program:

- it _does not_ interact with the user in any way (DOM, `prompt`, `alert`, `confirm`)
- it takes in JS data as arguments and returns new JS data
- it has unit tests - `expect(actual).toEqual(expected)`
- it is called from inside other functions - handlers, logic or procedure

---

### 3. Procedures

Any other other function is a procedure (for now).

"_Procedure_" is actually a very general term in programming that refers to any function that does anything. So technically _handlers_, _logic_, _initialization_ are procedures too! It's sort of like cloth and clothes. Using the same fabric you can make a shirt, or pants, or a backpack, or many other things. Functions are the fabric, roles are the different ways you can use it.

For now you are only learning three specific roles (_handlers_, _logic_ and _initialization_), we'll call anything else a _procedure_ and give it a helpful name.

Procedures can be responsible for many things in a program. Many of the procedures you use in this module will read from or write to the user interface. Here's a short checklist to see if a function is being used as a _procedure_ in your program:

- it is not a handler
- it is not logic
- it is not initialization

The more experience you have with designing programs the more roles you will learn. For example in the State module you will learn to use _components_, functions that render JS data into DOM elements. In the Asynchronous Programming module you will learn to use functions that fetch data from an API.
