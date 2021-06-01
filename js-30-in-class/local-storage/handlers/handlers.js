const addItem = (e) => {
  e.preventDefault();
  const text = e.currentTarget.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  e.currentTarget.reset();
};

export { addItem };
