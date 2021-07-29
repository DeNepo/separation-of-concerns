const sayHi = (user) => {
  return `Hello, ${user}!`;
};

const sayBye = (user) => {
  return `Bye, ${user}!`;
};

export { sayHi as hi, sayBye as bye };
