# Separation of Concerns

> "The most important principle in Software Engineering is the Separation of Concerns (SoC):
> The idea that a software system must be decomposed into parts that overlap in functionality as little as possible."
>
> - [Effective Software Design](https://effectivesoftwaredesign.com/2012/02/05/separation-of-concerns/)

## Contents

- [Getting Started](#getting-started)
- [Study Tips](#study-tips)
- [Learning Objectives](#learning-objectives)
- [About the Projects](#about-the-projects)
- [Suggested Study](#suggested-study)
- Break-Down
  - [Week 1](#week-1)
  - [Week 2](#week-2)
  - [Week 3](#week-3)
- [Class Recordings](#class-recordings.md)
- [Curriculum](https://home.hackyourfuture.be/curriculum) (external)
- [HYF Home](https://home.hackyourfuture.be/) (external)

---

## Getting Started

How to study the code in this repo.

<details>
<summary>expand/collapse</summary>
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
> - `... /study.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should take care of it ; )

</details>
<br>

[TOP](#separation-of-concerns)

---

## Study Tips

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

- `// #not-done, still a few blanks left` - search for `#not-done` in VScode to find all the exercises you've started and not finished
- `// coercion is confusing, #review this again next week` - search for `#review` to find the files you need to study again
- ... anything goes! Find the hashtags that work for you

### Module Project Boards

If you create a fork of this repository you can open a project board in your fork to track your progress through the module. Just 3 columns can be enough: _Todo_, _Doing_, _Done_.

[TOP](#separation-of-concerns)

---

## Learning Objectives

What you can expect to learn in this module

<details>
<summary>expand/collapse</summary>

### Isolating JavaScript

- Creating DOM elements
- Reading & writing from DOM element properties
  - `.innerHTML`
  - `.value`
  - `.style`
  - ...
- Attaching event listeners to DOM objects
- Writing _event handlers_
  - Using `Event` objects as parameters
  - Structuring user interactions in handler functions
- Using template strings to create HTML strings

### Integrating JavaScript

- Document Life-Cycle
  - `<head>`: Scripts & styles are loaded top to bottom, before the `<body>`
  - `<body>`: Everything is executed/loaded top to bottom
  - so what? Any DOM script should be written/loaded _below_ the element it interacts with
- JS & the DOM
  - Adding event listeners to the DOM by `id`
  - Reading & Writing values from DOM elements
  - Using HTML strings and `.innerHTML` to update the DOM
  - Using template literal strings to render HTML
  - The beginnings of DOM manipulation
- Handling events:
  - Reading user data from events
  - Implementing user stories with this data
- Organizing your code based on it's _role_ in your program
  1. _DOM_: define the structure of your user interface
  2. _Styles_: define the display of your user interface
  3. _Event Listeners_: define _how_ users will interact with your program
  4. _Handlers_: define _what_ happens when a user interacts with your program
  5. _Logic_: define & test how user data is transformed
- Incremental Development 2.0:
  - Develop your projects one user-story at a time ...
  - AND develop your user stories one step at a time!
  - Carefully complete & test one piece of code before writing the next

</details>
<br>

[TOP](#separation-of-concerns)

---

## About the Projects

Projects in this module will be more challenging than in the last modules, adding even a little interactivity into a website will make things much more complicated! To help you deal with this complexity you will practice separating and organizing your JavaScript code into different files based on what role it plays in your application.

<details>
<summary>expand/collapse</summary>

### Interactive UI

You will learn how to create interactive User Interfaces by reading and writing from the DOM:

- Users will pass input to your programs directly from the UI (no more `prompt`)
- Users will see results displayed directly in the UI (no more `alert`)

Projects in this module will not include full DOM manipulation, you'll learn that in the next module. This module's projects will be limited to reading/writing `.innerHTML` & `.value`.

### Decoupled Code

In this module you will learn how to completely separate your JavaScript from your user interface. You will be using `.getElementById` and `.addEventListener` instead of the `onclick` attribute.

When using `onclick`, you need to write some JavaScript in your HTML - this is not a good practice because your UI and JavaScript are too interdependent. Using HTML `id`s and JavaScript _event listeners_ you can **decouple** your User Interface from the program logic.

### DOM Event Listeners

Web development is fundamentally _event driven_, this means things don't happen until a something else happens. In your previous projects the `prompt` didn't appear until the user clicked a button and a prompt appeared. You've probably noticed by now that this is a limiting way to write your programs. It's hard to gather interesting data from a user, and impossible to display it in a nice way.

You will learn how to use _DOM events_ to interact with users and to read more interesting data than just a few words or numbers. Things like mouse movements, the colors on a screen, and much more.

### Separating your Concerns

A working project is not enough! For projects in this module we will expect you to turn in code that is well organized in different files based on it's role. The first week's project will come with some starter-code to help you get used to the folder structure we expect. The `using-user-input` exercises will also act as a guide & practice for building well-structured projects.

### Development Strategy

Just like in the previous module, you will be expected to explain your development strategy in a separate file called `development-strategy.md`. Projects involving JavaScript are naturally more complicated than projects with only HTML and CSS, for this reason you will need to have more types of task (`type: _`) in your `development-strategy`.

### Git Branching

In this module’s project you have many more files and folders, and you’re learning how to break a single feature into more smaller pieces. To implement a single user story you will need HTML, CSS, data, event listener(s), handler(s) and possibly a logic function or a procedure. All of these smaller tasks are pull together into one user story.

So a PR for one user story may have changes in many folders and files. At first this will feel like more work than necessary, but after a while you will start to see how this way of working makes larger projects easier to understand.

Good luck!

</details>
<br>

[TOP](#separation-of-concerns)

---

## Suggested Study

Helpful links, examples and exercises.

<details>
<summary>expand/collapse</summary>
<br>

### In this Repo

- examples
  - 🥚 [/function-roles](./function-roles): learn the different ways you can use functions in your programs, not all functions play the same role
  - 🥚 [/stepped](./stepped): study HTML/CSS/JS projects built up step-by-step (only examples)
  - 🥚 [/separated](./separated): study HTML/CSS/JS projects that have been separated by concern (only examples)
  - 🥚 [/es5-vs-es6](./es5-vs-es6): explore the differences between projects using ES5 and ES6 in the debugger (only examples)
- exercises
  - 🥚 [/isolate](./isolate): focus on the DOM and events, isolating JavaScript in the debugger
  - 🐣 [/integrate](./integrate): learn how to integrate JS into user interfaces built with HTML and CSS
  - 🐣 [/break-these](./break-these): "learn by breaking" - it's a thing. This folder has finished code from some great online tutorials, follow the tutorial then explore their code in your debugger.

### The DOM

- [javascript.info/document](https://javascript.info/document)
- [super highly recommended DOM tutorial](https://dom-tutorials.appspot.com/static/index.html)
- [inspecting-the-dom](https://hackyourfuturebelgium.github.io/inspecting-the-dom/)
- [Zac Gordon](https://www.youtube.com/watch?v=l-0nPnSvbX8&list=PLruo2gSoqlej-QjRW25c97socsRiAUVuf&index=8)
- [Traversy](https://www.youtube.com/watch?v=0ik6X4DJKCc)
- [study.hackyourfuture.be](https://study.hackyourfuture.be/javascript/dom-manipulation)
- [Browser rendering behind the scenes](https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10/)
- also this: [Generating HTML with Template Literals](https://wesbos.com/template-strings-html)

### Events

- [what are events?](https://www.youtube.com/watch?v=gx0oAgvXyE4) (mmtuts)
- [domevents.dev](https://domevents.dev)
- [`onclick` vs. `.addEventListener('click', handler)`](https://www.youtube.com/watch?v=7UstS0hsHgI)
- [javascript.info/events](https://javascript.info/events)
- [javascript.inf/event-details](https://javascript.info/event-details)
- [inspecting event listeners](https://www.stanleyulili.com/javascript/how-to-find-event-listeners-on-a-dom-node-when-debugging/)
- [event breakpoints](https://www.youtube.com/watch?v=Q6QYrG-IYds)
- [MDN Building Blocks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [Event Delegation (mosh)](https://programmingwithmosh.com/javascript/javascript-event-bubbling-and-event-delegation/)
- [Bubble & Capture (dev.to)](https://dev.to/shimphillip/handing-javascript-events-efficiently-with-bubble-and-capture-4ha5)
- [Monitoring Events in Chrome](https://developers.google.com/web/updates/2015/05/quickly-monitor-events-from-the-console-panel)
- [Bubbling, capturing, once and propagation](https://www.youtube.com/watch?v=F1anRyL37lE)
- [Learn Form Validation](https://github.com/oliverjam/learn-form-validation)

### `import`/`export`

- [javascript.info](https://javascript.info/modules-intro)
- [Web Dev Simplified](https://www.youtube.com/watch?v=cRHQNNcYf6s)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [JavaScript Tutorial](https://www.javascripttutorial.net/es6/es6-modules/)

### Separation of Concerns

- [Jon Bellah](https://jonbellah.com/articles/separation-of-concerns/)
- [stackexchange](https://softwareengineering.stackexchange.com/questions/32581/how-do-you-explain-separation-of-concerns-to-others)
- [Machine Words](https://medium.com/machine-words/separation-of-concerns-1d735b703a60)
- [Colocation](https://kentcdodds.com/blog/colocation)
- [FunFunRant](https://www.youtube.com/watch?v=0ZNIQOO2sfA) (you're headed in this direction)

### Fun projects on YouTube

- [Code Explained](https://www.youtube.com/channel/UC8n8ftV94ZU_DJLOLtrpORA)
- Dev Ed: [todo list](https://www.youtube.com/watch?v=Ttf3CEsEwMQ), [rock paper scissors](https://www.youtube.com/watch?v=qWPtKtYEsN4&list=PLDyQo7g0_nsX8_gZAB8KD1lL4j4halQBJ&index=10)

### JavaScript 30

- [javascript30.com](https://javascript30.com/)
- [YouTube Playlist](https://www.youtube.com/playlist?list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH)
- [wesbos/JavaScript30](https://github.com/wesbos/JavaScript30)
- [Study Guide](https://github.com/HackYourFutureBelgium/javascript-30)
- [Group Project Starter Repo](https://github.com/HackYourFutureBelgium/javascript-30-starter)
- Looking for more like this?
  - [fun-javascript-projects.com](https://github.com/chrisdixon161/fun-javascript-projects.com) - stepped projects, :+1:
  - [bradtraversy/vanillawebprojects](https://github.com/bradtraversy/vanillawebprojects)
  - [aman-maharshi/vanilla-js](https://github.com/aman-maharshi/vanilla-js)
  - [MMTuts Calculator](https://www.youtube.com/watch?v=qQEYAOPWDzk) - youtube tutorial

### Some older exercises, take it or leave it

- [hyfbe/dom-manipulation](https://github.com/HackYourFutureBelgium/dom-manipulation)
- [hyfbe/listeners-and-handlers](https://github.com/HackYourFutureBelgium/listeners-and-handlers)
- [hyfbe/handler-refactors](https://github.com/HackYourFutureBelgium/handler-refactors)
- [hyfbe/using-user-events](https://github.com/HackYourFutureBelgium/using-user-events)

</details>
<br>

[TOP](#separation-of-concerns)

---

## Week 1

- Event listeners and event handlers
- Reading and writing from the DOM
- 3 roles a function can play in your projects
- Using the project repository (continuous integration)

<details>
<summary>expand/collapse</summary>

### Before Class

- [/function-roles](./function-roles): Look through the README

### During Class

#### Before Break

- [/function-roles](./function-roles)
  - handlers
  - procedures
  - logic
- `word-list` code-review checklist

#### After Break

- [/es5-vs-es6](./es5-vs-es6): a journey through the debugger

### After Class

[word-list](https://github.com/HackYourFutureBelgium/word-list): an individual project to practice working on a multi-file project and using Continuous Integration. You will be using this basic project structure until the final project, so no worries if you don't understand everything right away. There's still plenty of time to get used it.

There's only about 15-30 lines of JavaScript you need to write. That might not sound like it may not sound like a lot, but it will take some study to figure out what exactly to write where.

And the starter page is pretty ugly. Feel free to improve the HTML and CSS as much as you like! (just be careful not to break the id's ;)

```markdown
- [ ] [repo](https://github.com/_/_) (with a complete README)
- [ ] [live demo](https://_.github.io/_)
- [ ] [Docs](https://github.com/_/_/tree/_/DOCS.md)
- [/planning](https://github.com/_/_/tree/_/planning)
  - [ ] constraints
  - [ ] backlog
  - [ ] wireframe
  - [ ] development strategy
  - [ ] retrospective
- [ ] [project board](https://github.com/_/_/projects/1)
```

Suggested code to study:

- [/function-roles](./function-roles)
- [/isolate](./isolate): all of it
- [/integrate](./integrate): 1 & 2
- [/separated](./separated): it's just 3 examples

Somewhere to start with the DOM & Events

- [javascript.info/document](https://javascript.info/document)
- [javascript.info/events](https://javascript.info/events)
- [`onclick` vs. `.addEventListener('click', handler)`](https://www.youtube.com/watch?v=7UstS0hsHgI)
- [What are event listeners in JS?](https://www.youtube.com/watch?v=jqU3uaRgQyQ)
- [domevents.dev](https://domevents.dev)

</details>
<br>

[TOP](#separation-of-concerns)

---

## Week 2

practice refactoring single .js files to separate files

<details>
<summary>expand/collapse</summary>

### Before Class

- Read through the [javascript-30](https://github.com/HackYourFutureBelgium/javascript-30) project guide
- Take a look at the [javascript-30-starter repo](https://github.com/HackYourFutureBelgium/javascript-30-starter) (hint: it's basically the same as word-list)

### During Class

#### Before Break

Create a new repository using the [javascript-30-starter](https://github.com/HackYourFutureBelgium/javascript-30-starter) and begin refactoring one of the [JavaScript30](https://github.com/wesbos/JavaScript30). suggestions:

- [mouse-move-shadow.html](./js-30-in-class/mouse-move-shadow.html)

#### After Break

- Continue refactoring the project you started before break, or begin a new one. Maybe [click-and-drag.html](./js-30-in-class/click-and-drag.html).

### After Class

> nothing to submit, this is a practice week.

The main objective of this module is that you learn how to split your code across multiple files according to the role it plays in your program. After completing a JS 30 tutorial you will take the finished code as a starting point and refactor it into separate folders and files in the [javascript-30-starter](https://github.com/HackYourFutureBelgium/JavaScript-30-starter).

To keep track of your progress through the JS 30 and to store your refactored projects there's [HackYourFutureBelgium/javascript-30](https://github.com/HackYourFutureBelgium/JavaScript-30). In this repo you will find more detailed instructions on how to work your way through these projects.

You don't need to develop as a group this week, find what works for you. Maybe pair programming, individual study or collaborating with 2-3 people is best for you. Work your way through as many projects as you can. Here are some suggestions for this week:

- #1: JavaScript Drum Kit
- #3: CSS Variables
- #5: Flex Panel Gallery
- #8: Fun with HTML5 Canvas
- #10: Hold Shift and Check Checkboxes
- #13: Slide in on Scroll
- #16: Mouse Move Shadow
- #20: Speech Recognition
- #22: Follow Along Link Highlighter
- #28: Video Speed Controller

Suggested code to study:

- [/stepped](./stepped)
- [/separated](./separated)
- [/break-these](./break-these)
- Review `hoisting` from Behavior, Strategy, Implementation

</details>
<br>

[TOP](#separation-of-concerns)

---

## Week 3

- event delegation
- a group project

<details>
<summary>expand/collapse</summary>

### Before Class

- Study (pick your favorite links)
  - [js.info: Bubbling & Capturing](https://javascript.info/bubbling-and-capturing) (`event.target`)
  - [js.info: Event Delegation](https://javascript.info/event-delegation)
  - [Gordon: DOM Events](https://www.youtube.com/watch?v=QE1YQnhntgw)
  - [Griffith: JS Event Listeners](https://www.youtube.com/watch?v=EaRrmOtPYTM)
  - [Event Delegation (mosh)](https://programmingwithmosh.com/javascript/javascript-event-bubbling-and-event-delegation/)
  - [Event Delegation (all things JS)](https://www.youtube.com/watch?v=6NMSCh3DJug)
  - [Event Delegation (dcode)](https://www.youtube.com/watch?v=pKzf80F3O0U)
- [Integrate](./integrate) (examples)
  - Event Delegation

### During Class

#### Before Break

- [Integrate](./integrate): event delegation

#### After Break

- Begin refactoring the [local-storage.html](./js-30-in-class/local-storage.html) project all together.

### After Class

This week you will refactor one JS 30 project as a team using the [javascript-30-starter](https://github.com/hackyourfuturebelgium/javascript-30-starter). You will need to take time together to study the code before writing a development strategy and setting up your group repository with issues and labels.

Be careful with time management! Writing each file will probably not take too long, but then you will still need to review and test each other's code before mearging each file. This can take some time to coordinate and finish, you should aim to be ready for code reviews by Thursday.

Below is a selection of JS 30 projects that are best for larger group collaboration. Pick the one that looks most interesting to your team and go for it:

- #11; Custom Video Player
- #15: localStorage
- #23: Speech Synthesis
- #26: Stripe Follow-Along Nav
- #27: Click and Drag

#### Checklist

```markdown
- [ ] [repo](https://github.com/_/_) (with a complete README)
- [ ] [live demo](https://_.github.io/_)
- [/planning](https://github.com/_/_/tree/master/planning)
  - [ ] communication plan
  - [ ] constraints
  - [ ] backlog
  - [ ] wireframe
  - [ ] development strategy
  - [ ] retrospective
- [ ] [project board](https://github.com/_/_/projects/1)
```

</details>
<br>

[TOP](#separation-of-concerns)

---

# Class Recordings

- **Students**: Here you can find recordings of this module from past classes. Enjoy!
- **Coaches**: When sending your PR's with links please ...
  - Indicate which class you were teaching
  - Which week it was (if the module is more than 1 week)
  - Give your name
  - and a helpful description

## class-9-10

> [Laurent](https://github.com/LaurentVB), [Koen](https://github.com/koenvd), [Charles](https://github.com/cpauwels), [Evan](https://github.com/colevanderswands)

- Week 1
  - [DOM Elements & Event Listeners (isolate)](https://vimeo.com/444028096), [... continued](https://vimeo.com/444028460)
  - [Event Listeners & DOM Elements (integrate)](https://vimeo.com/444028594)
  - [.innerHTML vs. .value & Recap](https://vimeo.com/444029311)
- Week 2
  - [The `event` Parameter](https://vimeo.com/444026774)
  - [Event Delegation](https://vimeo.com/444027091/)
  - [Recap Integrate](https://vimeo.com/444027329/)

## class-11-12

> [Koen](https://github.com/koenvd), [Thibault](https://github.com/ThibaultLesuisse)

- Week 1
  - [Isolate: event listeners and handlers pt. 1](https://vimeo.com/488077137)
  - [Isolate: event listeners and handlers pt. 1](https://vimeo.com/488077846)
  - [Integrate: event listeners and handlers](https://vimeo.com/488078064)
  - [`import`/`export` and the JS 30](https://vimeo.com/488078314)
- Week 2
  1. [the event parameter, Koen](https://www.youtube.com/watch?v=iRaYKngUaS0&feature=youtu.be)
  2. [Thibault group - exercises](https://www.youtube.com/watch?v=1Wo9q0CNd-U&feature=youtu.be)
  3. [event delegation, with Koen](https://www.youtube.com/watch?v=J_-aqj7yLEU&feature=youtu.be)
  4. [full-class JS 30 refactor Pt. 1](https://www.youtube.com/watch?v=O1emyj8zhHo&feature=youtu.be)
  5. [Pt. 2](https://www.youtube.com/watch?v=auymy232kEU&feature=youtu.be)
  6. [Pt. 3](https://www.youtube.com/watch?v=LLki_rbxNf0&feature=youtu.be)
  
  ## Class-13-14
  > [Koen](https://github.com/koenvd)
- Week 1
  - [Part 1](https://vimeo.com/555091793)
  - [Part 2](https://vimeo.com/555631615)
  

[TOP](#separation-of-concerns)

---

![draino in the fridge](./assets/separation-of-concerns.png)
