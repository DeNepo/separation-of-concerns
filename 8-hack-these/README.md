# Hack These

You've made it! After weeks of practice with the debugger, coding challenges and (hopefully) some good habits it's time to make a website. Each of the projects in this directory are the finished code from a JS tutorial or beginner project online - you can find a link to their original source in each READMEs.

They already work, there's nothing left to write, so what are you supposed to do? You're supposed to hack them :) Practice exploring the code by making small changes, predicting what will happen, and stepping through to see what will actually happen.

## `debugger`

To help you find your way around the code each program has debugger statements at these important points:

1. _the top of the script:_ Pausing at the top of each script will give you a chance to step through the program's **initialization**
2. _the top of each event handler:_ Event handlers are the **entry point** for each user interaction. Pausing at the top of handlers will help you understand how each interaction is implemented.
3. _some timeouts:_ `setTimeout` is used in some of these programs to delay a function's execution by some milliseconds. You don't need to understand this perfectly just yet, you'll cover it in depth with the Asynchronous Programming module.

## Small Experiments

Don't just make random changes and hope for the best! Take your time and rehearse all the skills you've learned so far: reading code, analyzing variables, logging, stepping through, and predicting. So make small change, try them out and repeat.

Try asking and answering these questions for each of your explorations. You can either keep track of your experiments directly in the code files using a block comment or in a new section of the README:

1. **Name**: give your experiment a good name
2. **The Change**: what change will you be making?
   - Keep it small! It's better to do many small experiments on specific lines than to do one big experiment that changes many lines.
   - Small changes are also easier to undo if they break the program
3. **The Prediction**: How do you think your change will effect the program?
   - be sure to write this before running the code or it's not a prediction ;)
4. **The Behavior**: What actually changed in the program? How did your experiment change the program's behavior? be specific!
5. **The Explanation**: Why did your changes have the effect that they did? Was your prediction correct? Why or why not?

---

Looking for an extra challenge? Try refactoring these projects into separated files using ES6 modules.
