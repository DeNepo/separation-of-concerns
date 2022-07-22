import { getParameterList } from './get-parameter-list.js';

const getDestructuredArgs = (names, obj) => {
  const presentArgs = names.reduce((all, name) => {
    if (typeof name === 'string') {
      all[name] = obj[name];
    } else if (name.name in obj) {
      all[name.name] = obj[name.name];
    } else {
      all[name.name + ' (default)'] = name.default;
    }
    return all;
  }, {});

  if (presentArgs.length < names.length) {
  }
  return presentArgs;
};

const UNDEFINED_PLACEHOLDER = '1234567890!@#$%^&*()¡™£¢∞§¶•ªº–≠';

const stringifySafe = (thing) => {
  let newThing;
  if (thing === undefined) {
    newThing = UNDEFINED_PLACEHOLDER;
  } else if (typeof thing === 'function') {
    newThing = thing.name + ' (function)';
  } else if (Array.isArray(thing)) {
    newThing = thing.map(stringifySafe);
  } else if (typeof thing === 'object' && thing !== null) {
    newThing = Object.fromEntries(
      Object.entries(thing).map((entry) => [entry[0], stringifySafe(entry[1])]),
    );
  } else {
    newThing = thing;
  }

  return newThing;
};

export const showComponentTestCase = (
  // title,
  description,
  component,
  ...args
) => {
  if (typeof description !== 'string') {
    throw new TypeError('description must be a string');
  }
  if (typeof component !== 'function') {
    throw new TypeError('component must be a function');
  }

  const container = document.createElement('div');
  container.style =
    'background-color:#bdbdbd;border-radius:20px;padding:20px;margin:20px;border: 2px solid;';

  // add the title
  const titleEl = document.createElement('div');
  // titleEl.innerText = title;
  titleEl.innerText = component.name + ':';
  titleEl.style = 'font-size: large; font-weight: bold; padding-bottom: 5px;';
  container.appendChild(titleEl);

  // add the description
  const descriptionEl = document.createElement('p');
  descriptionEl.innerText = description;
  container.appendChild(descriptionEl);

  // add the argument list and values
  const argsTitleEl = document.createElement('div');
  argsTitleEl.innerText = 'Arguments:';
  argsTitleEl.style =
    'padding-top: 10px;font-size: large; padding-bottom: 5px;';
  container.appendChild(argsTitleEl);
  const argNames = getParameterList(component);
  const tableElement = document.createElement('table');
  tableElement.style =
    'background-color: white;border-collapse: collapse;width:100%;';
  for (let i = 0; i < argNames.length; i++) {
    let rest = false;

    const rowElement = document.createElement('tr');

    const argValueElement = document.createElement('td');
    argValueElement.style = 'border: 1px solid;  padding-left: 10px;';

    const argNameElement = document.createElement('pre');

    // is a destructured parameter
    if (Array.isArray(argNames[i])) {
      argNameElement.innerText = 'destructured:';
      argValueElement.innerHTML = `<pre>${JSON.stringify(
        stringifySafe(getDestructuredArgs(argNames[i], args[i])),
        null,
        2,
      ).replaceAll('"' + UNDEFINED_PLACEHOLDER + '"', 'undefined')}</pre>`;
    }
    // is a rest parameter
    else if (
      typeof argNames[i] === 'string'
        ? argNames[i].startsWith('...')
        : argNames[i].name.startsWith('...')
    ) {
      rest = true;
      argNameElement.innerText = argNames[i];
      argValueElement.innerHTML = `<pre>${JSON.stringify(
        stringifySafe(args.slice(i, args.length)),
        null,
        2,
      ).replaceAll('"' + UNDEFINED_PLACEHOLDER + '"', 'undefined')}</pre>`;
    }
    // is a normal parameter without default
    else if (typeof argNames[i] === 'string') {
      argNameElement.innerText = argNames[i];

      argValueElement.innerHTML = `<pre>${JSON.stringify(
        stringifySafe(args[i]),
        null,
        2,
      ).replaceAll('"' + UNDEFINED_PLACEHOLDER + '"', 'undefined')}</pre>`;
    }
    // is a normal parameter with default value
    else {
      const useDefault = i >= args.length;
      argNameElement.innerText = useDefault
        ? argNames[i].name + ' (default)'
        : argNames[i].name;

      const argValue = useDefault ? argNames[i].default : args[i];
      argValueElement.innerHTML = `<pre>${JSON.stringify(
        stringifySafe(argValue),
        null,
        2,
      ).replaceAll('"' + UNDEFINED_PLACEHOLDER + '"', 'undefined')}</pre>`;
    }

    const argNameContainer = document.createElement('td');
    argNameContainer.style = 'border: 1px solid; padding-left: 10px;';
    argNameContainer.appendChild(argNameElement);
    rowElement.appendChild(argNameContainer);

    rowElement.appendChild(argValueElement);

    tableElement.appendChild(rowElement);

    if (rest) {
      break;
    }
  }
  container.appendChild(tableElement);

  const componentTitle = document.createElement('div');
  componentTitle.innerText = 'Visual:';
  componentTitle.style =
    'padding-top: 10px;font-size: large; padding-bottom: 5px;';

  const visualContainerEl = document.createElement('div');
  visualContainerEl.style =
    'background-color: white; width:100%; border: 1px solid;';
  container.appendChild(componentTitle);

  try {
    const rendered = component(...args);
    if (!(rendered instanceof Element)) {
      throw new TypeError('component did not return a DOM element');
    }
    visualContainerEl.appendChild(rendered);
  } catch (err) {
    console.error(err);
    const errorMessage = document.createElement('pre');
    errorMessage.innerHTML = `${err.name}: ${err.message}\n\n- see console for callstack`;
    errorMessage.style.color = 'red';
    visualContainerEl.appendChild(errorMessage);
    componentTitle.innerHTML = 'Error:';
  }

  container.appendChild(visualContainerEl);
  document.body.appendChild(container);
};
