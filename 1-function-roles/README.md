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
3. With functions you can test your code using many different inputs to be sure it does what you expect. Some functions are harder to test than others, for now you only need to test your utils.

## The Roles

And finally, the function roles you will learn in this module:

- **Listeners**
- **Handlers**
- **Utils**
- **Components**
- **Custom Events**

As you study your way around the internet it's important to keep in mind that these 4 function roles are not standard everywhere. Different resources may use different terms, or may not even talk about function roles at all. These roles are just a helpful way for you to organize your thoughts as you read and write your first programs.

---

---

### 0. Single File

Not really a function, but this one is important. The `/init` files in your applications will be the _only_ file directly by your `.html` files. Init files are responsible for only one thing:

- Calling _Event Listener_ functions with the correct _constant_ DOM id's.

---

### 1. Event Listeners

JavaScript programs are [_event-driven_](https://en.wikipedia.org/wiki/Event-driven_programming). This is a fancy way to say that websites sit waiting for an event to occur, then they do something, then they go back to waiting. For example:

- ... a user _clicks_ a button then _the background changes color_ ...
- .. a user _hovers over_ a word then _an image is shown_ ...
- ... a user _types_ their search then _suggestions are displayed under the search bar_ ...

If these examples makes you think of a user story, then you're thinking in the right! Event listeners are functions that define what happens when a user makes a specific action. They do this by attaching an _event listener_ to the DOM that calls a Handler function each time that event occurs.

There are a few advantages to defining your event listeners in a separate function instead of attaching them directly in the `/init` files:

- You can pass DOM id's as an argument, _abstracting away_ the details of your UI. Now if you change your HTML id's you _only_ need to change the `/init` files.
- You can reuse the listener function multiple times if you need to.
- You can split your projects into smaller, more specific tasks making it easier to collaborate.

You can tell if it matches these criteria:

- it takes DOM elements as arguments
- it does not read from the DOM
- it does not return anything
- it _does not_ interact with the user directly or modify the DOM
- it can `import` functions from:
  - _utils_
  - _handlers_
- it can `import` data from:
  - _constants_
- it can `export` to:
  - `/init` files
  - `/handler` files

---

### 2. Event Handlers

Event handlers are the [**_entry point_**](https://en.wikipedia.org/wiki/Entry_point) for user interactions. "**Entry Point**" is just a fancy way to say "the first code that is executed". So when a user interacts with your web page a few things happen:

1. A new _event_ is created. Events are a special kind of object in JavaScript that have lots of useful information like where the event occurred on the screen, what type of interaction occurred, or what input a user provided. The browser will do this behind the scenes.
2. _Event Listeners_ respond to this new event by calling your handler functions, passing the event object as an argument.
3. Your handler function is executed and the users story is completed.

Event handlers are the functions responsible for reading user input from events and using other functions to make a user story happen. Here is a little checklist to help you know if a function is being used as an event handler:

- it is passed as a callback to `_.addEventListener('interaction', handler)`
- it does interact with the user by reading their input and updating the UI
- it takes either no parameters, or only one `event` parameter
- it can return `true` or `false`, but that's a technical thing for the browser
- it can `import` functions from:
  - _utils_
  - _business-logic_
  - _components_
  - _handlers_
- it can `import` data from:
  - _state_
  - _constants_
- it can `export` to:
  - _listeners_
  - _handlers_

---

### 3. Utils

These are **pure functions**, the kind of function you studied in Behavior, Strategy, Implementation. They take in JS data, transform it, and return a new value. Unlike _handlers_ or _procedures_ which can interact with the user interface, util functions are easy to test and document because their behavior is predictable - the same arguments will always give the same return value.

Writing programs that use util functions will make your code more readable, and unit testing your util gives confidence that you program works as it should.

Util functions are responsible for the many complicated things you may need to do with a user's data, for example finding their favorite movies from an array or making sure an email is valid . Here's a checklist you can use to see if a function is playing the role of **util** in your program:

- it must take in JS data as arguments
- it must return new JS data
- it has unit tests - `expect(actual).toEqual(expected)`
- it _does not_ interact with the user in any way (DOM, `prompt`, `alert`, `confirm`)
- it can `import` functions from:
  - _utils_
- it can `import` data from: _nowhere!_
- it can `export` to:
  - _anywhere_

---

### 4. Components

Components are functions that return a _component_ of the user interface. The term "component" is very common in web development and depending on which language or framework you are using, it's exact definition can change. For now a component is just a function that returns a DOM element.

Remember _component-based design_ from UX/UI? This is it! In this module you will begin learning how to write functions that return the UI components planned by the designer. When you create a wireframe, you will need to think about how it can be broken into components. Once you have a plan for the components in your page you can begin developing and testing each component separately before integrating them into a full page.

Here is a little checklist to help you find out if a function is being used as a component:

- it returns a DOM element
- if it has parameters, they are plain JS data
- it may have unit tests or a `test.html` file
- it does not modify the DOM, or read from any element other than itself
- it can `import` functions from:
  - _utils_
  - _components_
  - _custom-events_
- it can `import` data from:
  - _constants_
- it can `export` to:
  - _handlers_
  - _components_

Even components can have different roles! You'll learn more about this in the following module (Single Page Apps) when your entire UI is rendered using components. No more HTML :) Here's a little preview:

#### Testing Components

One huge benefit of developing your application with components is that you can test each part of the UI in isolation before integrating them into your website. For now you will learn to test your components in two different ways:

- **_Structure_**: Does your rendered component have the correct DOM structure? The right number of children, the right `.className`, the right `.tagName`, ... all with unit tests exactly like you learned for util functions. You will use a file called `component-name.spec.js` to write your component unit tests.
- **_Behavior_**: Does your component do the right thing when rendered into a web page? Does it react to the user in the correct way? Does it look right when it's rendered with it's styles into a web page? You will test your component's _behavior_ by rendering it into an HTML document with different arguments and using/inspecting it to make sure it works correctly. You will do this in a file called `component-name.test.html`.

---

### 5. Custom Events

Custom events are a very useful way to share data across different parts of your user interface. Custom Events behave just like native events (`click`, `mouseover`, ...) but can be customized to have a different `.type` and to carry any data you want in the `.detail` property.

<!-- something helpful about component contracts and abstraction -->

There are many interactions that would be complicated to implement without Custom Events that become easy once you figure them out. Stick with it! It's worth the effort.

- it returns a `CustomEvent`
- if it has parameters, they are plain JS data
- it may have unit tests
- it does not modify or read from the DOM
- it can `import` functions from:
  - _utils_
- it can `import` data from:
  - _constants_
- it can `export` to:
  - _components_
  - _handlers_

#### Documenting Custom Events

<details>
<summary>You need to document a custom event in two places.</summary>
<br>

1. _Document the function that returns the event:_

   ```js
   /**
    * Returns a new custom event for greeting someone.
    *
    * @param {string} [greeting=''] - The greeting to use.
    * @returns {CustomEvent#greet} - The event carrying the greeting.
    */
   export const greetEvent = (greeting = '') => {
     return new CustomEvent('greet', {
       bubbles: true,
       detail: { greeting },
     });
   };
   ```

1. _Document the component that uses it:_

   ```js
   import { greetEvent } from '../custom-events/greet.js';

   /**
    * Returns a new input element where a user can type their greeting.
    *
    * @param {string} [initialGreeting=''] - The greeting to set as initial value for the input.
    * @returns {HTMLInputElement} - The input where the user will write their greeting.
    * @fires CustomElement#greet
    */
   export const greetingInputComponent = (initialGreeting = '') => {
     const inputEl = document.createElement('input');
     inputEl.value = initialGreeting;

     // intercept the event each time the user changes the input's value
     inputEl.addEventListener('change', (event) => {
       // prevent the native 'change' event from bubbling up
       event.stopPropagation();
       // create a new custom event containing the new greeting
       const newGreetingEvent = greetEvent(inputEl.value);
       // dispatch the event so it bubbles up through the DOM
       inputEl.dispatchEvent(newGreetingEvent);
     });

     return inputEl;
   };
   ```

Then you can listen for this event like you would a native event:

```js
document.getElementById('input-root').addEventListener('greet', (event) => {
  // read the user data from the custom event's .detail property
  const greeting = event.detail.greeting;

  // do something with the user's data
  console.log(greeting);
});
```

</details>

---

---

### Bonus Role: _Procedures_

> None of the examples or exercises in this repo use procedures (except `/hack-these`) and you shouldn't either. It is better to use functions that have a more clearly-defined role and to limit the number of functions with side-effects.

Any function that does not fit one of the roles is just a procedure (for now).

"_Procedure_" is actually a general term in programming that refers to any function that does anything. So technically _handlers_, _utils_, _initialization_ are procedures too! It's sort of like cloth and clothes. Using the same fabric you can make a shirt, or pants, or a backpack, or many other things. Functions are the fabric, roles are the different ways you can use it.

For now you are only learning four specific roles (_listeners_, _handlers_, _utils_ and _components_), we'll call anything else a _procedure_ and give it a helpful name.

Procedures can be responsible for many things in a program. Many of the procedures you find in tutorials will read from or write to the user interface. Here's a short checklist to see if a function is being used as a _procedure_ in your program:

- it is a function
- it is not a listener
- it is not a handler
- it is not util
- it is not a component
- it is not a custom event

The more experience you have with designing programs (_architecture_) the more roles you will learn.
