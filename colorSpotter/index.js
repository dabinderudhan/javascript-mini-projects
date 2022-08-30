const colorBox = document.querySelector(".color-box");
const inputBoxes = document.getElementById("boxes");
const boxesValue = document.querySelector(".boxes-value");
const scoreElement = document.querySelector(".score");
const maxScoreElement = document.querySelector(".max-score");

let value = 4;
let boxesArray = [];
let score = 0;
let maxScore = 0;
let randomBoxNo;

function createRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${blue}, ${green})`;
  return color;
}

function updateBoxArray(noOfBoxes) {
  noOfBoxes *= noOfBoxes;
  const div = document.createElement("div");
  div.classList.add("grid-box");

  for (let i = 0; i < noOfBoxes; i++) {
    boxesArray.push(div);
  }

  return boxesArray;
}

function createGridBoxes(noOfBoxes) {
  colorBox.style.gridTemplateColumns = `repeat(${noOfBoxes}, 1fr)`;
  colorBox.style.gridTemplateRows = `repeat(${noOfBoxes}, 1fr)`;

  boxesArray.map((box) => {
    box.style.backgroundColor = createRandomColor();
  });

  colorBox.innerHTML = boxesArray
    .map((box) => {
      return box.outerHTML;
    })
    .join("");

  randomBoxNo = Math.floor(Math.random() * boxesArray.length);
  const randomDivs = document.querySelectorAll("section div");
  randomDivs[randomBoxNo].classList.add("different-box");

  return randomBoxNo;
}

function initialGridValues() {
  updateBoxArray(value);
  createGridBoxes(value);
}

initialGridValues();

inputBoxes.addEventListener("change", (e) => {
  boxesArray = [];
  value = e.target.value;
  boxesValue.innerHTML = value;
  initialGridValues();
});

colorBox.addEventListener("click", (e) => {
  const correctBox = e.target.classList.contains("different-box");
  console.log(e.target);

  if (correctBox) {
    boxesArray = [];
    value++;
    initialGridValues();
    score++;
    scoreElement.innerHTML = score;
  } else {
    if (maxScore < score) maxScore = score;
    maxScoreElement.innerHTML = maxScore;
    value = 4;
    boxesArray = [];
    score = 0;
    scoreElement.innerHTML = score;
    initialGridValues();
  }
});
