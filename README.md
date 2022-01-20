# Separation of Concerns

Examples, exercises and guides for the
[Separation of Concerns module](https://home.hackyourfuture.be/curriculum/separation-of-concerns)

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

## Materials

- examples
  - 🥚 [/function-roles](./function-roles): learn the different ways you can use functions in your programs, not all functions play the same role
  - 🥚 [/stepped](./stepped): study HTML/CSS/JS projects built up step-by-step (only examples)
  - 🥚 [/separated](./separated): study HTML/CSS/JS projects that have been separated by concern (only examples)
  - 🥚 [/es5-vs-es6](./es5-vs-es6): explore the differences between projects using ES5 and ES6 in the debugger (only examples)
  - 🐣 [/magic-variables](./magic-variables): the browser will magically create some variables when you work with the DOM, don't use them. Use locally declared variables.
- exercises
  - 🥚 [/isolate](./isolate): focus on the DOM and events, isolating JavaScript in the debugger
  - 🥚 [/dom-manipulation](./dom-manipulation): practice updating the DOM in a live web page.
  - 🥚 [/listeners-and-handlers](./listeners-and-handlers): learn how to navigate events in your browser's devtools.
  - 🐣 [/integrate](./integrate): learn how to integrate JS into user interfaces built with HTML and CSS
  - 🐣 [/rendering-data](./rendering-data): practice rendering JS data in to DOM components.
  - 🐣 [/refactoring](./refactoring): practice refactoring small websites from a single JS file to many files separated by concern.
  - 🐣 [/testing-components](./testing-components): learn how to write tests for DOM component functions.
  - 🐣 [/reverse-engineering](./reverse-engineering): use what you learned in `/stepped` and `/separated` to reverse-engineer user interactions in small web pages.
  - 🐥 [/hack-these](./hack-these): "learn by hacking" - it's a thing. This folder has finished code from some great online tutorials, follow the tutorial then explore their code in your debugger.

## Chapter 1

> no project, just study

Suggested code to study:

- [/function-roles](./function-roles)
- [/isolate](./isolate): all of it
- [/integrate](./integrate): 1 & 2
- [/stepped](./stepped) (1-2 hours)
- [/separated](./separated) (1-2 hours)
- [/dom-manipulation](./dom-manipulation): the exercises are pretty short
- [/listeners-and-handlers](./listeners-and-handlers): 4 exercises
- [/magic-variables](./magic-variables): it's just 2 examples

Somewhere to start with the DOM & Events

- [javascript.info/document](https://javascript.info/document)
- [javascript.info/events](https://javascript.info/events)
- [`onclick` vs. `.addEventListener('click', handler)`](https://www.youtube.com/watch?v=7UstS0hsHgI)
- [What are event listeners in JS?](https://www.youtube.com/watch?v=jqU3uaRgQyQ)
- [domevents.dev](https://domevents.dev)

## Chapter 2

- the rest of [/isolate](./isolate) and [/integrate](./integrate)
- [/stepped](./stepped) (1-2 hours)
- [/separated](./separated) (1-2 hours)
- [/refactoring](./refactoring)
- [/reverse-engineering](./separated)

## Chapter 3

- [/rendering-data](./rendering-data)
- [/testing-components](./testing-components)
- Take some time to study the **Custom Events** example from [/function-roles](./funciton-role)

looking for a challenge?

- [/hack-these](./hack-these)

[TOP](#separation-of-concerns)
