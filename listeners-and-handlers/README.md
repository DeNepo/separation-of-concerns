# Listeners & Handlers

This repository contains a some mini-websites for you to study and practice stepping through in the debugger. Each one has some HTML a few listeners and handlers with blanks to fill in, and each one is organized the same way. Your goal is to learn how to step through event handlers and to find data from the event argument.

- [How to do the exercises](#how-to-do-the-exercises)
- [The exercises](#the-exercises)

---

## How to do the exercises

Each `exercise-x.html` contains multiple blanks (`_`) to fill in. Your task is to replace each one with the correct value. All of the values you need to fill in the blanks are already somewhere in the code or in the debugger, you just need to find them!

For example in the first exercise:

```html
<body>
  <section id="user-interface">
    <button id="hi" class="secret">catch me if you can!</button>
  </section>

  <script id="handlers">
    const handler = (event) => {
      debugger;
      console.assert(event.target.innerHTML === '_', 'event.target.innerHTML');
      console.assert(event.target.nodeName === '_', 'event.target.nodeName');
      console.assert(event.target.id === 'hi', 'event.target.id');
      console.assert(event.target.className === 'secret', 'event.target._');
      console.assert(event.type === 'click', 'event.type');
    };
  </script>

  <script id="listeners">
    document.getElementById('_').addEventListener('_', _);
  </script>
</body>
```

The best way to solve the exercises is to start by studying the code in `<script id='handlers'>`, and working "backwards" from there. This will help you know what you are looking for in the rest of the file, for example in the code above:

- `event.type === 'click'` shows that you should be adding a "click" event, so you can fill in the event type like this: `document.getElementById('_').addEventListener('click', _);`
- `event.target` is the HTML element that the event is attached to. So when you see `event.target.id === 'hi'` in the handler, you can fill in the event listener like this: `document.getElementById('hi').addEventListener('click', _);`

An enormous part of programming is actually just reading! Spotting relationships between lines of code, or finding small changes or mistakes in a file of code is a crucial skill to develop.
