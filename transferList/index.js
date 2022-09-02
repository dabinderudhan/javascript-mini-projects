const leftBoxContainer = document.querySelector(".left-box");
const rightBoxContainer = document.querySelector(".right-box");
const transferAllLeftBtn = document.querySelector(".transfer-all-left");
const transferAllRightBtn = document.querySelector(".transfer-all-right");
const transferSelectedLeftBtn = document.querySelector(
  ".transfer-selected-left"
);
const transferSelectedRightBtn = document.querySelector(
  ".transfer-selected-right"
);

let leftBoxArray = ["js", "html", "css", "ts"];
let rightBoxArray = ["react", "angular", "vue", "svelte"];

function displayItems(container, array) {
  container.innerHTML = array
    .map(
      (item) => `<div>
                              <input type="checkbox" name="${item}" id="${item}" />
                              <label for="${item}">${item}</label>
                          </div>`
    )
    .join("");
}

displayItems(leftBoxContainer, leftBoxArray);
displayItems(rightBoxContainer, rightBoxArray);

transferAllLeftBtn.addEventListener("click", () => {
  rightBoxArray.forEach((item) => {
    leftBoxArray.push(item);
    rightBoxArray = [];
    displayItems(leftBoxContainer, leftBoxArray);
    displayItems(rightBoxContainer, rightBoxArray);
  });
});

transferAllRightBtn.addEventListener("click", () => {
  leftBoxArray.forEach((item) => {
    rightBoxArray.push(item);
    leftBoxArray = [];
    displayItems(leftBoxContainer, leftBoxArray);
    displayItems(rightBoxContainer, rightBoxArray);
  });
});

let itemIdArray = [];

leftBoxContainer.addEventListener("click", (e) => {
  if (e.target.checked) {
    // console.log("item clicked");
    itemIdArray.push(e.target.attributes.id.value);
    // console.log(itemIdArray);
    transferSelectedRightBtn.classList.remove("disable-btn");
  }
});

transferSelectedRightBtn.addEventListener("click", () => {
  // console.log("item transferred");
  leftBoxArray = leftBoxArray.filter((item) => !itemIdArray.includes(item));
  // console.log(leftBoxArray);
  rightBoxArray = [...rightBoxArray, ...itemIdArray];
  // console.log(rightBoxArray);
  displayItems(leftBoxContainer, leftBoxArray);
  displayItems(rightBoxContainer, rightBoxArray);
  transferSelectedRightBtn.classList.add("disable-btn");
  itemIdArray = [];
});

rightBoxContainer.addEventListener("click", (e) => {
  if (e.target.checked) {
    itemIdArray.push(e.target.attributes.id.value);
    transferSelectedLeftBtn.classList.remove("disable-btn");
  }
});

transferSelectedLeftBtn.addEventListener("click", () => {
  rightBoxArray = rightBoxArray.filter((item) => !itemIdArray.includes(item));
  leftBoxArray = [...leftBoxArray, ...itemIdArray];
  displayItems(leftBoxContainer, leftBoxArray);
  displayItems(rightBoxContainer, rightBoxArray);
  transferSelectedLeftBtn.classList.add("disable-btn");
  itemIdArray = [];
});
