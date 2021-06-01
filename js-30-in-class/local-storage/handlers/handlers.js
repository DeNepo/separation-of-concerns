import { populateList } from "../procedure/procedure.js";
import { items, storeItems } from "../data.js";
const addItem = (e) => {
  e.preventDefault();
  const text = e.currentTarget.querySelector("[name=item]").value;

  const item = {
    text,
    done: false,
  };

  const itemsList = document.querySelector(".plates");
  items.push(item);
  populateList(items, itemsList);
  storeItems(items);
  e.currentTarget.reset();
  //   e.preventDefault();
  //   const text = e.currentTarget.querySelector("[name=item]").value;
  //   const item = {
  //     text,
  //     done: false,
  //   };

  //   items.push(item);
  //   populateList(items, itemsList);
  //   localStorage.setItem("items", JSON.stringify(items));
  //   e.currentTarget.reset();
};

const toggleDone = (e) => {
  if (!e.target.matches("input")) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  storeItems(items);
};

// const toggleDone = (e) => {
//   if (!e.target.matches("input")) return; // skip this unless it's an input
//   const el = e.target;
//   const index = el.dataset.index;
//   items[index].done = !items[index].done;
//   storeItems(items);
//   e.currentTarget.reset();
// };

export { addItem, toggleDone };
