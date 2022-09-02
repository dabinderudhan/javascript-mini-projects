const boxes = document.querySelectorAll(".col");
const resetBtn = document.querySelector(".reset-btn");
const showResult = document.querySelector(".result");

let right = false;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    right = !right;
    if (right) box.innerHTML = "x";
    else box.innerHTML = "o";
  });
});

resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => (box.innerHTML = ""));
});
