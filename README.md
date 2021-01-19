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

1. Install or update the `study-lenses` package globally
   - `npm install -g study-lenses` (if you do not have it already)
   - `npm update -g study-lenses` (if you already have it installed)
1. Clone this repository:
   - `git clone git@github.com:HackYourFutureBelgium/separation-of-concerns.git` (SSH) (recommended)
   - `git clone https://github.com/HackYourFutureBelgium/separation-of-concerns.git` (HTTPS)
   - `gh repo clone HackYourFutureBelgium/separation-of-concerns` (GH CLI)
1. `cd` into the repository
   - `cd separation-of-concerns`
1. Run the `study` command from your CLI
   - `study`
1. The material will open in your default browser, you're good to go!

> If you have a windows computer and get this error:
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
- Write lots of good comments, learn more about this in [./studying-javascript](https://github.com/HackYourFutureBelgium/debugging/tree/master/studying-javascript)
- Practice [Pair Programming](https://study.hackyourfuture.be/collaborating/pair-programming): two people, one computer.
- Take a look through the [Learning From Code](https://study.hackyourfuture.be/learning/learning-from-code) guide for more study tips

Not all assignments are created equal. These 3 emoji's will help you figure out how to spend your study time as effectively as possible.

- 🥚 `:egg:` - these assignments are required, they cover the base skills you'll need to move on.
- 🐣 `:hatching_chick:` - do your best to start these exercises. you don't need to finish or master them (yet) but getting the main idea will be helpful in coming weeks
- 🐥 `:hatched_chick:` - Have you finished all the 🥚's and started all the 🐣's? push yourself with these challenges!

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

<img alt='project diagram' src='./assets/architecture-schematic.png'>

Projects in this module will be more challenging than in the last module, adding even a little interactivity into a website will make things much more complicated! To help you deal with this complexity you will practice separating and organizing your JavaScript code into different files based on what role it plays in your application.

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

Just like in the previous module, you will be expected to explain your development strategy in a separate file called `development-strategy.md`. Projects involving JavaScript are naturally more complicated than projects with only `prompt` & `alert`, for this reason you will be expected to structure the user stories in your `development-strategy` files differently than you did in the last module. To get an idea of how to describe your strategies in this module, take a look at the `using-user-input` exercises. (psst, it's like writing documentation!)

### Git Branching

In this module’s project you have many more files and folders, and you’re learning how to break a single feature into more smaller pieces. To implement a single user story you will need HTML, CSS, event listener(s), handler(s) and possibly a logic function. All of these smaller tasks can be shared between different team mates.

The extra branching challenge this module is to create different branches for each user story like before, but then to also create branches off of the user story branches for the smaller units of work. This way your group can confirm your work before merging it into the feature, and confirm the feature before merging it to master

So it’s not about how many commits are on a branch, but how much work is on a branch. If you only commit once for your piece of work then there will be only commit on a branch, but that’s the measure

Good luck!

</details>
<br>

[TOP](#separation-of-concerns)

---

## Suggested Study

Helpful links, examples and exercises.

<details>
<summary>expand/collapse</summary>

- Separation of Concerns
  - [Jon Bellah](https://jonbellah.com/articles/separation-of-concerns/)
  - [stackexchange](https://softwareengineering.stackexchange.com/questions/32581/how-do-you-explain-separation-of-concerns-to-others)
  - [Machine Words](https://medium.com/machine-words/separation-of-concerns-1d735b703a60)
  - [Colocation](https://kentcdodds.com/blog/colocation)
- Code in this Repo
  - 🥚 [/isolate](./isolate?hyf): focus on the DOM and events, isolating JavaScript in the debugger
  - 🥚 [/integrate](./integrate?hyf): learn how to integrate JS into user interfaces built with HTML and CSS
  - 🥚 [/stepped](./stepped?hyf): study HTML/CSS/JS projects built up step-by-step (only examples)
  - 🥚 [/refactor-and-test](./refactor-and-test?hyf): practice refactoring the logic from user interactions and testing it in isolation
  - 🐣 [/import-export](./import-export?hyf): learn how to use `import` and `export` to separate your code into different files
  - 🥚 [/separated](./separated?hyf): study HTML/CSS/JS projects that have been separated by concern (only examples)
- JavaScript 30
  - [javascript30.com](https://javascript30.com/)
  - [YouTube Playlist](https://www.youtube.com/playlist?list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH)
  - [wesbos/JavaScript30](https://github.com/wesbos/JavaScript30)
  - [Group Project Guide](https://github.com/HackYourFutureBelgium/javascript-30)
  - [Group Project Starter Repo](https://github.com/HackYourFutureBelgium/javascript-30-starter)
  - Looking for more practice?
    - [fun-javascript-projects.com](https://github.com/chrisdixon161/fun-javascript-projects.com) - stepped projects, :+1:
    - [bradtraversy/vanillawebprojects](https://github.com/bradtraversy/vanillawebprojects)
    - [aman-maharshi/vanilla-js](https://github.com/aman-maharshi/vanilla-js)
    - [MMTuts Calculator](https://www.youtube.com/watch?v=qQEYAOPWDzk) - youtube tutorial
- Repos of practice
  - [hyfbe/dom-manipulation](https://github.com/HackYourFutureBelgium/dom-manipulation)
  - [hyfbe/listeners-and-handlers](https://github.com/HackYourFutureBelgium/listeners-and-handlers)
  - [hyfbe/handler-refactors](https://github.com/HackYourFutureBelgium/handler-refactors)
  - [hyfbe/using-user-events](https://github.com/HackYourFutureBelgium/using-user-events)
- [Generating HTML with Template Literals](https://wesbos.com/template-strings-html)
- The DOM
  - [javascript.info/document](https://javascript.info/document)
  - [super highly recommended DOM tutorial](https://dom-tutorials.appspot.com/static/index.html)
  - [inspecting-the-dom](https://hackyourfuturebelgium.github.io/inspecting-the-dom/)
  - [Zac Gordon](https://www.youtube.com/watch?v=l-0nPnSvbX8&list=PLruo2gSoqlej-QjRW25c97socsRiAUVuf&index=8)
  - [Traversy](https://www.youtube.com/watch?v=0ik6X4DJKCc)
  - [study.hackyourfuture.be](https://study.hackyourfuture.be/javascript/dom-manipulation)
  - [Browser rendering behind the scenes](https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10/)
- Events
  - [what are events?](https://www.youtube.com/watch?v=gx0oAgvXyE4) (mmtuts)
  - [`onclick` vs. `.addEventListener('click', handler)`](https://www.youtube.com/watch?v=7UstS0hsHgI)
  - [javascript.info/events](https://javascript.info/events)
  - [javascript.inf/event-details](https://javascript.info/event-details)
  - [MDN Building Blocks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
  - [Event Delegation (mosh)](https://programmingwithmosh.com/javascript/javascript-event-bubbling-and-event-delegation/)
  - [Bubble & Capture (dev.to)](https://dev.to/shimphillip/handing-javascript-events-efficiently-with-bubble-and-capture-4ha5)
  - [Monitoring Events in Chrome](https://developers.google.com/web/updates/2015/05/quickly-monitor-events-from-the-console-panel)
  - [Bubbling, capturing, once and propagation](https://www.youtube.com/watch?v=F1anRyL37lE)
- `import`/`export`
  - [javascript.info](https://javascript.info/modules-intro)
  - [Web Dev Simplified](https://www.youtube.com/watch?v=cRHQNNcYf6s)
  - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
  - [JavaScript Tutorial](https://www.javascripttutorial.net/es6/es6-modules/)
- [Learn Form Validation](https://github.com/oliverjam/learn-form-validation)
- Fun projects on YouTube
  - [Code Explained](https://www.youtube.com/channel/UC8n8ftV94ZU_DJLOLtrpORA)
  - Dev Ed: [todo list](https://www.youtube.com/watch?v=Ttf3CEsEwMQ), [rock paper scissors](https://www.youtube.com/watch?v=qWPtKtYEsN4&list=PLDyQo7g0_nsX8_gZAB8KD1lL4j4halQBJ&index=10)

</details>
<br>

[TOP](#separation-of-concerns)

---

## Week 1

- Big Picture
  - What does "Separation of Concerns" mean and why is it important?
  - What are Events, Handlers and Listeners?
  - How can you separate your code for collaboration
- Technical Skills
  - Reading and writing user data from the DOM
  - Basic DOM manipulation
  - Using _event listeners_ and _event handlers_
  - Using `import`/`export`

<details>
<summary>expand/collapse</summary>

### Before Class

- Study
  - [javascript.info/document](https://javascript.info/document)
  - [javascript.info/events](https://javascript.info/events)
  - [`onclick` vs. `.addEventListener('click', handler)`](https://www.youtube.com/watch?v=7UstS0hsHgI)
  - [What are event listeners in JS?](https://www.youtube.com/watch?v=jqU3uaRgQyQ)
- Practice
  - [isolate/01-dom-elements](../isolate/01-dom-elements)
  - [integrate/01-add-event-listener](../integrate/01-add-event-listener)
- Project Prep
  - Read through the [javascript-30](https://github.com/HackYourFutureBelgium/javascript-30) project guide
  - Take a look at the [javascript-30-starter](https://github.com/HackYourFutureBelgium/javascript-30-starter) repo

### During Class

#### Before Break

- [isolate/01-dom-elements](./isolate/01-dom-elements)
- [isolate/02-read-write-dom](./isolate/02-read-write-dom)

#### After Break

- [integrate/01-add-event-listener](./integrate/01-add-event-listener)
- [integrate/02-read-write-dom](./integrate/02-read-write-dom)
- JavaScript 30 Introduction

### After Class

There's an outstanding series of tutorials called [The JavaScript 30](https://javascript30.com/) put together by [Wes Bos](https://wesbos.com), it's 30 small frontend projects with video tutorials and finished code to study. You will learn a lot from Wes Bos but his tutorials are just the beginning of your study > : )

All of his finished code is in a single file, the main objective of this module is that you learn how to structure your projects across multiple files according to the **separation of concerns**. After completing his tutorials you will need to take his finished code as a starting point and refactor it into separate folders and files. _Hint: study [/stepped](./stepped?hyf), [/refactor-and-test](./refactor-and-test?hyf), [/import-export](./import-export?hyf) and [/separated](./separated?hyf) to prepare._

To keep track of your progress through the JS 30 and to store your refactored projects there's [HackYourFutureBelgium/javascript-30](https://github.com/HackYourFutureBelgium/JavaScript-30). In this repo you will find more detailed instructions on how to work your way through these projects, as well as a folder structure for your refactors and a checklist to keep track of your progress.

You don't need to develop as a group this week, find what works for you. Maybe pair programming, individual study or collaborating with 2-3 people is best for you. Work your way through as many projects as you can. Here are some suggestions for this week:

- #1: JavaScript Drum Kit
- #3: CSS Variables
- #5: Flex Panel Gallery
- #8: Fun with HTML5 Canvas
- #10: Hold Shift and Check Checkboxes
- #13: Slide in on Scroll
- #16: Mouse Move Shadow
- #18: Adding Up Times
- #20: Speech Recognition
- #22: Follow Along Link Highlighter
- #28: Video Speed Controller

</details>
<br>

[TOP](#separation-of-concerns)

---

## Week 2

- Using forms to handle more gather and process more user data.
- Working in groups on a larger project

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
- [Isolate](./isolate/index.html) (examples)
  - HTML Templates
  - Element Children
  - DOM Manipulation
- [Integrate](./integrate/index.html) (examples)
  - Read & Write DOM
  - Event Delegation

### During Class

#### Before Break

- Isolate: Event Parameter

#### After Break

- Integrate: Event Delegation

### After Class

This week you will refactor one JS 30 project as a team using the [javascript-30-starter](https://github.com/hackyourfuturebelgium/javascript-30-starter). You will need to take time together to study the code before writing a development strategy and setting up your group repository with issues and labels.

Be careful with time management! Writing each file will probably not take too long, but then you will still need to review and test each other's code before mearging each file. This can take some time to coordinate and finish, you should aim to be ready for code reviews by Wednesday.

Below is a selection of JS 30 projects that are best for larger group collaboration. Pick the one that looks most interesting to your team and go for it!

- #11; Custom Video Player
- #15: localStorage
- #23: Speech Synthesis
- #26: Stripe Follow-Along Nav
- #27: Click and Drag

#### Checklist

```md
- [ ] [repo](https://github.com/_/_) with a complete README
- [ ] [live demo](https://_.github.io/_)
- [ ] [project-planning](_https://github.com/_/_/tree/master/project-planning)
- [ ] [A project board](https://github.com/_/_/projects/X)
- [ ] [One issue per task](https://github.com/_/_/issues) (with labels and milestones)
- [ ] [One branch per issue](https://github.com/_/_/network)
- [ ] [One reviewed PR per completed issue](https://github.com/_/__/pulls?q=is%3Apr+is%3Aclosed)
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

[TOP](#separation-of-concerns)

---

![draino in the fridge](./assets/separation-of-concerns.png)
