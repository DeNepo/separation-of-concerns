import { handlerFlip } from "./handler.js";

document.getElementById("input").addEventListener("keyup", handlerFlip);

document
  .getElementById("btn")
  .addEventListener("click", (event) => console.log(event));
