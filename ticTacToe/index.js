const boxes = document.querySelectorAll(".col");
const resetBtn = document.querySelector(".reset-btn");
const showResult = document.querySelector(".result");

//~? initial values
let right = false;
let firstRowArray = [];
let secondRowArray = [];
let thirdRowArray = [];
let firstColArray = [];
let secondColArray = [];
let thirdColArray = [];
let leftToRightDiagonalArray = [];
let rightToLeftDiagonalArray = [];

//~% eventlistener on each box
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    myEventFunction(e, box);
  });
});

//~> event function to add the value of "x" or "o" to the each box and simultaneously add the values to the array and check the result.
function myEventFunction(e, box) {
  const id = Number(e.target.dataset.id);

  if (box.innerHTML !== "") return;
  else {
    right = !right;
    if (right) {
      box.innerHTML = "x";
      addValueToArray(id, e);
    } else {
      box.innerHTML = "o";
      addValueToArray(id, e);
    }
  }

  checkResult(firstRowArray, "x");
  checkResult(firstRowArray, "o");

  checkResult(secondRowArray, "x");
  checkResult(secondRowArray, "o");

  checkResult(thirdRowArray, "x");
  checkResult(thirdRowArray, "o");

  checkResult(firstColArray, "x");
  checkResult(firstColArray, "o");

  checkResult(secondColArray, "x");
  checkResult(secondColArray, "o");

  checkResult(thirdColArray, "x");
  checkResult(thirdColArray, "o");

  checkResult(leftToRightDiagonalArray, "x");
  checkResult(rightToLeftDiagonalArray, "o");

  checkResult(rightToLeftDiagonalArray, "x");
  checkResult(leftToRightDiagonalArray, "o");

  if (Array.from(boxes).every((box) => box.innerHTML !== "")) {
    showResult.innerHTML = "game draw";
    boxes.forEach((box) => (box.style.pointerEvents = "none"));
  }
}

//~> to add values to the array
function addValueToArray(id, e) {
  if (id === 1 || id === 2 || id === 3) firstRowArray.push(e.target.innerHTML);

  if (id === 4 || id === 5 || id === 6) secondRowArray.push(e.target.innerHTML);

  if (id === 7 || id === 8 || id === 9) thirdRowArray.push(e.target.innerHTML);

  if (id === 1 || id === 4 || id === 7) firstColArray.push(e.target.innerHTML);

  if (id === 2 || id === 5 || id === 8) secondColArray.push(e.target.innerHTML);

  if (id === 3 || id === 6 || id === 9) thirdColArray.push(e.target.innerHTML);

  if (id === 1 || id === 5 || id === 9)
    leftToRightDiagonalArray.push(e.target.innerHTML);

  if (id === 3 || id === 5 || id === 7)
    rightToLeftDiagonalArray.push(e.target.innerHTML);
}

//~> check and show result
function checkResult(array, value) {
  if (array.length === 3 && array.every((item) => item === value)) {
    showResult.innerHTML = `"${value}" wins the game.`;
    boxes.forEach((box) => (box.style.pointerEvents = "none"));
  }
}

//~% reset values to the original state.
resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => (box.innerHTML = ""));
  right = false;
  firstRowArray = [];
  secondRowArray = [];
  thirdRowArray = [];
  firstColArray = [];
  secondColArray = [];
  thirdColArray = [];
  leftToRightDiagonalArray = [];
  rightToLeftDiagonalArray = [];
  showResult.innerHTML = "";
  boxes.forEach((box) => (box.style.pointerEvents = "auto"));
});

// console.log({
//   firstRowArray,
//   secondRowArray,
//   thirdRowArray,
//   firstColArray,
//   secondColArray,
//   thirdColArray,
//   leftToRightDiagonalArray,
//   rightToLeftDiagonalArray,
// });
