export const reverseAndUpper = (str) => {
  const upperCased = str.toUpperCase();
  const reversed = upperCased.split("").reverse().join("");
  return reversed;
};

//  const reverseAndUpper = str => {
//         return str
//           .toUpperCase()
//           .split('')
//           .reverse()
//           .join('');
//       };
// console.assert(reverseAndUpper("fdsa") === "ASDF", "test 1");
// console.assert(reverseAndUpper("./.") === "./.", "test 2");
// console.assert(reverseAndUpper("Fd-Df") === "FD-DF", "test 3");
