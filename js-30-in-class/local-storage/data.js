const items = JSON.parse(localStorage.getItem("items")) || [];

const storeItems = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};

export { items, storeItems };
