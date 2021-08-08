# Reverse Engineering

> _hint 1_: study `/stepped` and `/separated` before starting these exercises
>
> _hint 2_: study how to use [forms](https://javascript.info/forms-controls), almost all these exercises use them

In this chapter you will practice writing websites that have a single user interaction. You will be given a working demo with code that is very hard to read. Your task will be to study the program's behavior by using it (not reading the code!) then _reverse-engineer_ the same behavior starting from empty files.

Remember **Behavior, Strategy, Implementation**? Here it is all over again!

- **Behavior:** What user interactions does the web page support? What happens when the user interacts with the page?
- **Strategy:** How is the problem broken down and solved? A lot of the strategy is already decided for you by the empty folder structure and the steps listed below. You're on your own to create a strategy for body of each function ;)
- **Implementation:** What lines of code did you write to finally make the website work? Did you refactor your handler into logic and components?

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

   ```js
   // ./src/init/index.js

   // an empty JS file
   ```

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

   </details>

2. **Data:** Does this user interaction require any data to be stored between interactions? Try planning this ahead of time and creating your `data.js` file _before_ you start developing the user interaction. You may need to change the data as you go, no problem! It takes lots of practice to plan a web page's data.

   <details>
   <summary>example snippet</summary>

   ```js
   // ./src/data.js

   export const data = {
     /* ... */
   };
   ```

   </details>

3. **Initialize**: Does anything happen when the page is loaded that requires JavaScript? Usually this will be something displayed in the UI, and will often include program data that you don't want too write directly into the HTML file.

   <details>
   <summary>example snippet</summary>

   ```html
   <div id="user-interface">
     <h1 id="welcome-header"></h1>
   </div>
   ```

   ```js
   // ./src/data.js

   export const data = {
     greeting: 'hello',
   };
   ```

   ```js
   // ./src/init/index.js

   import { data } from '../data.js';

   document.getElementById('welcome-header').innerHTML = data.greeting;
   ```

   </details>

4. **User Interaction:** Now that your boilerplate and data are ready, it's time to make the thing happen! You should practice implementing user interactions from the screen backwards - first writing what the user sees, then incrementally building up the code "behind" the UI to add interactivity.

   1. **UI:** Write the HTML & CSS for the user interface:

      <details>
      <summary>example snippets</summary>

      ```css
      /* ./public/style.css */

      .round {
        border-radius: 50%;
      }
      ```

      ```html
      <!-- ./index.html -->

      <button class="round">do it!</button>
      ```

      </details>

   2. **Interactions:** Put in just enough code to make sure the user interaction is working, logging the user's event is enough. At this step you just need to make sure that the _entry point_ to your user interaction is working:

      <details>
      <summary>example snippets</summary>

      ```js
      // ./src/listeners/do-something.js

      document
        .getElementById('do-something')
        .addEventListener('click', (event) => {
          console.log(event);
        });
      ```

      ```js
      // ./src/init/index.js

      import './listeners/do-something.js
      ```

      ```html
      <!-- ./index.html -->

      <button id="do-something" class="round">do it!</button>
      ```

      </details>

   3. **Behavior:** Move the handler to a separate file and beging writing the user interaction in one big function. You don't need to finish this step completely before starting to **refactor**, if you can already tell that you will need some logic or components you can start writing them at the same time as the handler.

      <details>
      <summary>example snippets</summary>

      ```js
      // ./src/handlers/do-it.js

      /**
       * ...
       */
      export const doItHandler = (event) => {
        // ... make the things happen
      };
      ```

      ```js
      // ./src/listeners/do-something.js

      import { doItHandler } from '../handlers/do-it.js';

      document
        .getElementById('do-something')
        .addEventListener('click', doItHandler);
      ```

      </details>

   4. **Refactor:** Make your handler easier to read and your code more testable by refactoring logic and UI components to separate files. (_hint: you don't always need to refactor! only when it makes your code simpler to understand, reuse, or when there is some tricky logic to test_)

      <details>
      <summary>example snippets</summary>

      ```js
      // ./src/logic/cleverness.js

      /**
       * ...
       */
      export const cleverness = () => {
        // ...
      };
      ```

      ```js
      // ./src/components/render-data.js

      /**
       * ...
       */
      export const renderData = () => {
        // ...
      };
      ```

      ```js
      // ./src/handlers/do-it.js

      import { cleverness } from '../logic/cleverness.js';
      import { renderData } from '../components/render-data.js';

      /**
       * ...
       */
      export const doItHandler = (event) => {
        // ... use the logic and component to make things happen
      };
      ```

      ```js
      // ./src/logic/cleverness.spec.js

      import { cleverness } from './cleverness.js';

      describe('cleverness: ...', () => {
        // ...
      });
      ```

      ```html
      <!-- ./src/components/render-data.test.html -->

      <!-- ... -->
      <script type="module">
        // ...
        showComponentTestCase(/* ... */);
        // ...
      </script>
      <!-- ... -->
      ```

      ```js
      // ./src/components/render-data.spec.js

      import { renderData } from './render-data.js';

      describe('renderData: ...', () => {
        // ...
      });
      ```

      </details>

---

## Hints

- inspecting the demos' DOM and event listeners can be very helpful
