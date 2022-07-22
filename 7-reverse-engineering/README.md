# Reverse Engineering

> [video guide](https://vimeo.com/585393648)
>
> _hint 1_: study `/isolate`, `/integrate`, `/stepped`, `/separated` before starting these exercises
>
> _hint 2_: study how to use [forms](https://javascript.info/forms-controls), almost all these exercises use them

In this chapter you will practice writing websites that have a single user interaction. You will be given a working demo with code that is very hard to read. Your task will be to study the program's behavior by using it (not reading the code!) then _reverse-engineer_ the same behavior starting from empty files.

Remember **Behavior, Strategy, Implementation**? Here it is all over again!

- **Behavior:** What user interactions does the web page support? What happens when the user interacts with the page?
- **Strategy:** How is the problem broken down and solved? A lot of the strategy is already decided for you by the empty folder structure and the steps listed below. You're on your own to create a strategy for body of each function ;)
- **Implementation:** What lines of code did you write to finally make the website work? Did you refactor your handler into utils and components?

---

## Use the site

Explore the site with your mouse, trying to describe the web page's behavior.

---

## Inspect Everything!

Half of the challenge in reverse engineering is understanding what you're rebuilding. You will want to inspect the demo at every step of your reverse-engineering to make sure you are building the best copy you can:

- Inspect the _sources_ to find out what HTML is written in the demo.
- Inspect the _styles_ of each element to reconstruct their classes (if you can't find it in the sources)
- Inspect each element in the DOM to find _event listeners_. Which elements have listeners? What type of listener is it?

You should spend at least as much time inspecting the demo as you do writing code.

---

## Incremental Development

Following these steps will give you some direction and make it easier to write from a blank page:

1. **Boilerplate:** Get everything ready to start coding. This includes the folder structure and boilerplate code, all the main entry points should be connected and there should be no errors in the console. For these exercises each one is already set up. If you want to try building a site that isn't already here, you can use the `/template` to get started.

   <details>
   <summary>example snippets</summary>

   ```css
   /* ./public/style.css */

   /* an empty CSS file */
   ```

   ```html
   <!--  ./index.html -->

   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <title></title>
       <link rel="stylesheet" href="./public/style.css" />
     </head>

     <body>
       <div id="user-interface"></div>
       <script type="module" src="./src/init/index.js"></script>
     </body>
   </html>
   ```

   ```js
   // ./src/init/index.js

   // an empty JS file
   ```

   </details>

2. **Data:** Does this user interaction require any data to be stored between interactions? Try planning this ahead of time and creating your `data.js` file _before_ you start developing the user interaction. You may need to change the data as you go, no problem! It takes lots of practice to plan a web page's data.

   <details>
   <summary>example snippet</summary>

   ```js
   // ./src/data.js

   export const data = {
     secret: 'water is blue',
   };
   ```

   </details>

   _PS. not all programs need data!_

3. **Initialize UI**: How does the page look when you open it, before any interactions? Make your page look exactly like that. Usually this will be something displayed in the UI, and will often include program data that you don't want too write directly into the HTML file.

    <details>
    <summary>example snippet</summary>

   ```css
   /* ./public/style.css */

   .centered {
     position: fixed;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
   }

   .framed {
     border: solid black 1px;
   }

   .hidden {
     color: white;
   }
   ```

   ```html
   <!-- index.html -->
   <!-- ... -->
   <div id="user-interface">
     <p id="the-secret" class="centered framed hidden"></p>
   </div>
   <!-- ... -->
   ```

   ```js
   // ./src/init/index.js

   import './ui.js';
   ```

   ```js
   // ./src/init/ui.js

   import { data } from '../data.js';

   document.getElementById('the-secret').innerText = data.secret;
   ```

    </details>

   To figure out what needs to happen when the page is initialized you can compare the pages _source_ to it's _DOM_.

4. **User Interaction:** Now that your boilerplate and data are ready, it's time to make the thing happen! You should practice implementing user interactions from the screen backwards - first writing what the user sees, then incrementally building up the code "behind" the UI to add interactivity.

   1. **Listeners:** Put in just enough code to make sure the user interaction is working, logging the user's event is enough. At this step you just need to make sure that the _entry point_ to your user interaction is working:

      <details>
      <summary>example snippets</summary>

      ```js
      // ./src/init/index.js

      import './ui.js';

      import '../listeners/display.js';
      import '../listeners/hide.js';
      ```

      ```js
      // ./src/listeners/display.js

      document
        .getElementById('the-secret')
        .addEventListener('mouseenter', (event) => {
          console.log(event);
        });
      ```

      ```js
      // ./src/listeners/hide.js

      document
        .getElementById('the-secret')
        .addEventListener('mouseout', (event) => {
          console.log(event);
        });
      ```

      </details>

   2. **Handlers:** Move the handler to a separate file and begin writing the user interaction in one big function.

      <details>
      <summary>example snippets</summary>

      ```js
      // ./src/listeners/display.js

      import { displaySecret } from '../handlers/display-secret.js';

      document
        .getElementById('the-secret')
        .addEventListener('mouseenter', displaySecret);
      ```

      ```js
      // ./src/listeners/hide.js

      import { hideSecret } from '../handlers/hide-secret.js';

      document
        .getElementById('the-secret')
        .addEventListener('mouseleave', hideSecret);
      ```

      ```js
      // ./src/handlers/display-secret.js

      export const displaySecret = (event) => {
        event.target.classList.toggle('hidden');
      };
      ```

      ```js
      // ./src/handlers/hide-secret.js

      export const hideSecret = (event) => {
        event.target.classList.toggle('hidden');
      };
      ```

      </details>

      You don't need to finish this step completely before starting to **refactor**, if you can already tell that you will need some utils or components you can start writing them at the same time as the handler.

   3. **Refactor:** Make your handler easier to read and your code more testable by getting rid of duplicate code, refactoring utils and UI components to separate files. (_hint: you don't always need to refactor! only when it makes your code simpler to understand, reuse, or when there is some tricky utils to test_)

      <details>
      <summary>example snippets</summary>

      Both handlers have the same code. Combining them into a single function and calling the same handler from both listeners will make the code easier to understand and maintain.

      ```js
      // ./src/listeners/display.js

      import { toggleHidden } from '../handlers/toggle-hidden.js';

      document
        .getElementById('the-secret')
        .addEventListener('mouseenter', toggleHidden);
      ```

      ```js
      // ./src/listeners/hide.js

      import { toggleHidden } from '../handlers/toggle-hidden.js';

      document
        .getElementById('the-secret')
        .addEventListener('mouseleave', toggleHidden);
      ```

      ```js
      // ./src/handlers/toggle-hidden.js

      export const toggleHidden = (event) => {
        event.target.classList.toggle('hidden');
      };
      ```

      </details>

---

## Hints

- inspecting the demos' DOM and event listeners can be very helpful
