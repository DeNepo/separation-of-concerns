# Magic Variables

JavaScript has a few magic variables when you are working with the DOM. It's good to know they exist because some code you will read uses them, and because you might get a bug if you use one accidentally. It's not a good practice to rely on them because it it's not clear where the variable comes from and mistakes are more likely:

- [**`event`**](https://developer.mozilla.org/en-US/docs/Web/API/Window/event): You don't actually need to use an `event` parameter. The variable is globally available, referencing the current event in your browser! This can lead to bugs if you have declared a variable named `event` anywhere else in your program. It's also harder to read because it's not clear where `event` was defined.
- [**`id`**](https://dev.to/vuelancer/dom-element-id-as-global-variable-1kge): Browsers will create a global variable named after an element's id. This can be convenient, but is not good for the same reasons as using the magic `event` variable.

> hint: global variables are properties on the global object!
