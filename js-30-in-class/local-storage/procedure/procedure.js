const populateList = (plates = [], platesList) => {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      } />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    })
    .join("");
};

export { populateList };
