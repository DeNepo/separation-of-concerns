import { addItem } from "../handlers/handlers.js";

import { toggleDone } from "../handlers/handlers.js";

const addItems = document.querySelector(".add-items");
addItems.addEventListener("submit", addItem);

itemsList.addEventListener("click", toggleDone);
