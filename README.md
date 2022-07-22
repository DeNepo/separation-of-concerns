# Separation of Concerns

> "The most important principle in Software Engineering is the Separation of Concerns \(SoC\): The idea that a software system must be decomposed into parts that overlap in functionality as little as possible."
>
> - [Effective Software Design](https://effectivesoftwaredesign.com/2012/02/05/separation-of-concerns/)

- [Learning Objectives](#learning-objectives)
- [Getting Started](#getting-started)
- [Study Tips](#study-tips)
- [Suggested Study](./suggested-study.md)

---

## Learning Objectives

<details>
<summary>Priorities: 🥚, 🐣, 🐥, 🐔 (click to learn more)</summary>
<br>

There is a lot to learn in this repository. If you can't master all the material
at once, that's expected! Anything you don't master now will always be waiting
for you to review when you need it. These 4 emoji's will help you prioritize
your study time and to measure your progress:

- 🥚: Understanding this material is required, it covers the base skills you'll
  need to move on. You do not need to finish all of them but should feel
  comfortable that you could with enough time.
- 🐣: You have started all of these exercises and feel you could complete them
  all if you just had more time. It may not be easy for you but with effort you
  can make it through.
- 🐥: You have studied the examples and started some exercises if you had time.
  You should have a big-picture understanding of these concepts/skills, but may
  not be confident completing the exercises.
- 🐔: These concepts or skills are not necessary but are related to this module.
  If you are finished with 🥚, 🐣 and 🐥 you can use the 🐔 exercises to push
  yourself without getting distracted from the module's main objectives.

---

</details>

- [ ] 🥚 **event-driven programming**: identify the concept in a JS program via listeners & handlers
- [ ]🥚 **entry points**: describe what an entry point is, there are 2 kinds in the programs for this module - initialization & interaction. identify them in a program
- 🥚 **function roles**: describe what function roles are and why they're important. they can identify a function's role given checklists for each role covered in this module:
  - [ ] **_listeners_**: functions that attach event listeners to the DOM
  - [ ] 🥚 **_handlers_**: entry point for user interactions
  - [ ] 🥚 **_utils_** _(utilities)_: pure functions to help do things with data
  - [ ] 🐣 **_components_**: render data into DOM elements to display for the user
  - [ ] 🐥 **_custom events_**: create custom events events in your components, passing useful data between components and handlers
- [ ] 🥚 **DOM access**: You read and write values from the DOM in an event handler
- [ ] 🥚 **es5 vs. es6**: You can demonstrate the change in developer-experience pre and post es6 by stepping through in the debugger and explaining differences in scoping \(global vs. script, block vs. local, modules\) between two programs with identical user experience but different implementations.
- [ ] 🥚 **Scope Hierarchy**: You is comfortable navigating different scopes in the browser's debugger to understand an existing application \(script, module, closure, local, block\)
- [ ] 🥚 **Code Splitting**: You can use ES Modules to split your code into multiple files & folders according to function role, data, listeners and initialization. They can use generated dependency diagrams and documentation to understand and navigate this folder structure.
- [ ] 🥚 **Dependency Graphs**: You can use a project's dependency graph to understand how it is organized and to navigate the source code.
- [ ] 🥚 **Development Strategies**: You can write development strategies that have all of the program's state defined at the beginning, and separate each user story into _interface_ and _interaction_ tasks.
- [ ] 🐣 **Naming Functions**: You can come up with clear and helpful names for the functions in your program. A good function name will take into account the function's role and the program's domain, like in the `/naming-variables` exercises from Debugging.
- [ ] 🐣 **DOM manipulation**: You can manipulate the DOM when implementing level-appropriate user interactions
- [ ] 🐣 **Isolating Components**: You can use a `test.html` file to render your components with different inputs
- [ ] 🐣 **Forms**: You can do basic handling of form data via `event.target.form`
- [ ] 🐣 **Handling events**: You can use the `event` argument to process user interactions, including bubbled events using `event.target`
- [ ] 🐣 **Passing Component Unit Tests**: You can write vanilla DOM component functions to pass provided unit tests
- [ ] 🐣 **refactoring**: refactor a single-script tutorial-style web page into multiple files using imports and exports
- [ ] 🐥 **reverse-engineering**: You can incrementally reverse-engineer a level-appropriate user interaction following these steps:
  - _init_
  - Listeners
  - Handlers
  - (possibly): Utils, Components, Custom Events
- [ ] 🐔 **From Spec**: given user stories, You can develop a site from scratch using a template repository.
- [ ] 🐔 **Writing Component Unit Tests**: You can write unit tests to validate your component functions using BDD syntax

[TOP](#separation-of-concerns)

---

## Getting Started

How to study the code in this repo.

<details>
<summary>setting up study-lenses</summary>
<br>

> You will need [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) on your computer to study this material
>
> Using a browser with good DevTools will make your life easier: [Chromium](http://www.chromium.org/getting-involved/download-chromium), [FireFox](https://www.mozilla.org/en-US/firefox/new/), [Edge](https://www.microsoft.com/edge), [Chrome](https://www.google.com/chrome/)

1. Install o update the `study-lenses` package globally
   - `$ npm install -g study-lenses` (if you do not have it installed)
   - `$ npm update -g study-lenses` (if you already have it installed)
   - Didn't work? you may need to try:
     - (mac) `$ sudo npm install -g study-lenses`
   - having trouble updating?
     - try this: `$ npm uninstall -g study-lenses && npm install -g study-lenses`
2. Fork and clone this repository:
   1. fork the HackYourFuture repository to your personal account
      - `git@github.com:HackYourFutureBelgium/separation-of-concerns.git`
   2. clone your fork to your computer
   3. when there are updates to the module:
      1. update your fork with a PR
      2. pull the changes from your fork to your computer
3. Navigate to the module repository in terminal
   - `$ cd separation-of-concerns`
4. Run the `study` command from your CLI
   - `$ study`
5. The material will open in your default browser, you're good to go!
   - you can read the `study-lenses` user guide from your browser by navigating to `localhost:xxxx?--help`

> If you use windows and get this error:
>
> - `..dy.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should take care of it ; )

### `npm run test -- path/to/file.spec.js`

You can run tests in this repository using the `test` script, it will run all the tests in the path you provide.

If you do `npm run test` or `npm run test -- ./` it will run every test in this repository. (there are a lot)

### `npm run document -- path/to/src`

> Pro Tip: do not use `npm run document` without a specific path, it is very slow!

This script will build a dependency graph for all the JavaScript files inside a specific `/src` folder. It can be very helpful to run the document script every time you add/remove a file or change the `import`/`export`s in an exercise.

If you run this script at a higher directory, like `./`, it will document all of the `/src` folders inside that directory.

### `npm run format -- path`

This script will format all of the code in the path you provide.

### Linting

There is no linting script in this repository. It's for practice only, no need to check every detail. Your project starter repositories will have linting scripts.

</details>

[TOP](#separation-of-concerns)

---

## Study Tips

<details>
<summary>expand/collapse</summary>

- Don't rush, understand! Programming is hard.
  - The examples and exercises will still be there to study later.
  - It's better to fail tests slowly and learn from your mistakes than to pass tests quickly and not understand why.
- Don't skip the examples! Understanding and experimenting with working code is a very effective way to learn programming.
- Practice [Pair Programming](https://study.hackyourfuture.be/collaborating/pair-programming): two people, one computer.
- Take a look through the [Learning From Code](https://study.hackyourfuture.be/learning/learning-from-code) guide for more study tips

### Priorities

If you can't finish all the material in this repository, that's expected! Anything you don't finish now will always be waiting for you to review when you need it. These 3 emoji's will help you prioritize your study time and to measure your progress:

- 🥚 `:egg:` - Understanding this material is required, it covers the base skills you'll need for this module and the next. You do not need to finish all of them but should feel comfortable that you could with enough time.
- 🐣 `:hatching_chick:` - Do your best to start this material. you don't need to master it or finish it but getting the main idea will be helpful for taking the next steps.
- 🐥 `:hatched_chick:` - Have you finished all the 🥚's and started all the 🐣's? push yourself with these challenges.

### Hashtags

There's sooo many examples and exercises in this repository, it's easy to forget of what you still need to finish or what you want to review again. Luckily VSCode is really good at searching through folders of code.

You can write hashtags in your comments while you're studying, then search for those hashtags later so you don't miss anything. Here's some ideas:

- `// #todo, still a few blanks left` - search for `#todo` in Study Lenses or VScode to find all the exercises you still need to study
- `// #review, coercion is confusing this again next week` - search for `#review` to find the files you need to study again
- ... anything goes! Find the hashtags that work for you

### Module Project Boards

If you create a fork of this repository you can open a project board in your fork to track your progress through the module. Just 3 columns can be enough: _Todo_, _Doing_, _Done_.

</details>

[TOP](#separation-of-concerns)

---

![draino in the fridge](./assets/draino-in-the-fridge.png)

[TOP](#separation-of-concerns)
