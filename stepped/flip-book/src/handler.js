import { reverseAndUpper } from "./logic.js";

export const handlerFlip = (event) => {
  // read user input from event
  const input = event.target.value;

  //something happen if user input - action - fire logic
  const reverserUppercases = reverseAndUpper(input);

  // render result for user
  document.getElementById("output").innerHTML = reverserUppercases;

  // log action for developers
  //   console.log("\n--- user action ---");
  //   console.log("input:", typeof input + ",", input);
  //   console.log(
  //     "reversedUppercase:",
  //     typeof reversedUppercase + ",",
  //     reversedUppercase
  //   );
};

// export const handler = (event) => {
//   // read user input from event
//   const input = event.target.value;

//   // execute core logic
//   const reversedUppercase = reverseAndUpper(input);

//   // render result for user
//   document.getElementById("output").innerHTML = reversedUppercase;

//   // log action for developers
//   console.log("\n--- user action ---");
//   console.log("input:", typeof input + ",", input);
//   console.log(
//     "reversedUppercase:",
//     typeof reversedUppercase + ",",
//     reversedUppercase
//   );
// };
