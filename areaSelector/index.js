const root = document.querySelector("section");
const rows = window.innerHeight / 60 - 3;
const cols = window.innerWidth / 60 - 3;
const state = [];

// console.log({ innerHeight, innerWidth });
// console.log({ root, rows, cols, state });

//~% this will create a offscreen node which can be inserte into any document.
const fragment = document.createDocumentFragment();
// console.log(fragment);
//~> this first loop will create row element and we push the empty array in the state
for (let i = 0; i < rows; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  state.push([]);
  // console.log(state);
  // console.log(row);
  //~> second loop is to create columns push the set cols in each empty array created in the 1st loop.
  for (let j = 0; j < cols; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.dataset.x = i;
    box.dataset.y = j;
    // console.log(box);
    state[i].push(box);
    // console.log(state);
    row.appendChild(box);
    // console.log(row);
    state[i][j].style.backgroundColor = "white";
  }
  fragment.appendChild(row);
}

root.appendChild(fragment);

let x1, y1;
root.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("box")) {
    x1 = e.target.dataset.x;
    y1 = e.target.dataset.y;
    // console.log({ x1, y1 });
    markCells(x1, y1);
  }
});

root.addEventListener("mousemove", (e) => {
  if (x1 && y1) {
    if (e.target.classList.contains("box")) {
      const x2 = e.target.dataset.x;
      const y2 = e.target.dataset.y;
      // console.log({ x2, y2 });
      unmarkCells();
      markCells(x2, y2);
    }
  }
});

root.addEventListener("mouseup", clearAction);
root.addEventListener("mouseleave", clearAction);

//~? we initialize the value of x1 and y1 and change the backgroundcolor of all boxes to white.
function clearAction() {
  x1 = null;
  y1 = null;
  unmarkCells();
}

function markCells(x2, y2) {
  // console.log({ x1, y1, x2, y2 });
  //~^ first we check the value of x1, x2, y1, y2 if it is true, then we get the value of min and max for rows and cols.
  if (x1 && x2 && y1 && y2) {
    const minRow = Math.min(x1, x2);
    const maxRow = Math.max(x1, x2);
    const minCol = Math.min(y1, y2);
    const maxCol = Math.max(y1, y2);

    // console.log({ minRow, maxRow, minCol, maxCol });
    //~^ we run the loop using min-max of rows-cols and change the background color.
    for (let i = minRow; i <= maxRow; i++) {
      for (let j = minCol; j <= maxCol; j++) {
        state[i][j].style.backgroundColor = "skyblue";
        // console.log(state[i][j]);
      }
    }
  }
}

//~? function to change the background color to white.
function unmarkCells() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      state[i][j].style.backgroundColor = "white";
    }
  }
}
