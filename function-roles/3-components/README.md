# Function Roles

Time for a new function role: **`component`**. Remember those messy UI procedures from the last module? They're gone!

From now on if you need to update the DOM programmatically you will do it in your handlers by _rendering_ new DOM elements using a **component** function, and updating the DOM with the new element.

---

## Components

Components are functions that return a _component_ of the user interface. The term "component" is very common in web development and depending on which language or framework you are using, it's exact definition can change. For now a component is just a function that returns a DOM element.

Remember _component-based design_ from UX/UI? This is it! In this module you will begin learning how to write functions that return the UI components planned by the designer. When you create a wireframe, you will need to think about how it can be broken into components. Once you have a plan for the components in your page you can begin developing and testing each component separately before integrating them into a full page.

Here is a little checklist to help you find out if a function is being used as a component:

- it returns a DOM element
- if it has parameters, they are plain JS data
- it may import _logic_, _handlers_, _components_ or _state_
- it may have unit tests or a `test.html` file

Even components can have different roles! You'll learn more about this in the following module (Single Page Apps) when your entire UI is rendered using components. No more HTML :) Here's a little preview:

### Testing Components

One huge benefit of developing your application with components is that you can test each part of the UI in isolation before integrating them into your website. For now you will learn to test your components in two different ways:

- **_Structure_**: Does your rendered component have the correct DOM structure? The right number of children, the right `.className`, the right `.tagName`, ... all with unit tests exactly like you learned for logic functions. You will use a file called `component-name.spec.js` to write your component unit tests.
- **_Behavior_**: Does your component do the right thing when rendered into a web page? Does it react to the user in the correct way? Does it look right when it's rendered with it's styles into a web page? You will test your component's _behavior_ by rendering it into an HTML document with different arguments and using/inspecting it to make sure it works correctly. You will do this in a file called `component-name.test.html`.

Check out [./isolate-components/color-changer](./isolate-components/color-changer) to see this in action.
