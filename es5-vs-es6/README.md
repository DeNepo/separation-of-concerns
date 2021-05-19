# ES5 vs ES6

> hint: review `/hoisting` from Behavior, Strategy, Implementation

The examples in this folder will help you to experience the differences between old (es5) and new (es6) ways of programming. these programs won't show all the different ways code can be written using es5 and es6 but will instead show (almost) the same program with a few important differences.

There are many nice things about ES6, but the most important differences for now have to do with _scoping_, _hoisting_, and _modules_:

- `let` and `const` do not become global variables
  - they can have _block_, _module_ and _script_ scope but will not become properties on the `global` object
  - using `let` and `const` correctly also gives extra information to other devs, letting them know where a variable is used and if it will ever change.
  - notice that functions using `var` will often have all variables declared (not always initialized) at the top of the funciton. This was a good practice because a `var` is _hoisted_, so it's better to show all the variables at the beginning since they can be used from the beginning - [bluepnume](https://bluepnume.medium.com/theres-no-need-to-define-all-javascript-vars-once-at-the-top-of-a-function-and-there-hasn-t-been-a66b31f21822), [eslint](https://eslint.org/docs/rules/vars-on-top)
- `() => {}` arrow functions can only be used as expressions, so they will never be hoisted and can be assigned to `const` variables
- `import`/`export` give you clear control over where variables are available
  - modules create a new scope, so variables declared inside it are not available elsewhere unless they are `export`ed (you will see this in the debugger)
  - with `import`/`export` it's easy to know where variables come from, if you are using something in a file you must import it. and imports are clear to read
  - you can also keep your HTML cleaner by just importing a single .js file, the imports and exports take care of the rest.
  - modules are automatically in strict mode, you don't need to write `'use strict'` anymore. that's nice
  - notice! modules load "backwards" from what you might expect, the _entry point_ (`init.js`) is actually loaded last

You'll see that both programs work just fine - the user certainly can't tell a difference. But a developer can, especially when using the debugger. The examples in this chapter have debugger statements at the beginning and end of each file so you can see how variables and functions are scoped differently, and each function has a debugger statement so you can step through then to see block scope.

Writing in the ES6 style may feel a little more complicated within a single file, but across many files an ES6 project will be much easier to understand and debug.
