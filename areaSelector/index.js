const main = document.querySelector("main");

const section = document.createElement("section");
main.appendChild(section);

let width, height, noOfCols, noOfRows;

function getDimensions() {
  width = document.querySelector("main").offsetWidth;
  height = document.querySelector("main").offsetHeight;
  //   console.log({ width, height });

  noOfCols = width / 50;
  noOfRows = Math.floor(height / 50);
  //   console.log({ noOfCols, noOfRows });
}

function createBoxes() {
  //   console.log({ noOfCols, noOfRows });

  for (let i = 0; i < noOfRows; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row-div");
    section.appendChild(rowDiv);

    for (let i = 0; i < noOfCols; i++) {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col-div");
      rowDiv.appendChild(colDiv);
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getDimensions();
  createBoxes();

  const boxes = section.querySelectorAll(".col-div");
  //   console.log(boxes);

  boxes.forEach((box) => {
    // console.log(box);
    let moved = false;
    const downListener = () => {
      moved = false;
      console.log("clicked", moved);
    };
    const moveListener = () => {
      moved = true;
      if (moved) {
        box.classList.add("red");
        console.log("moving", moved);
      }
    };
    const upListener = () => {
      moved = false;
      console.log("click released", moved);
    };

    box.addEventListener("mousedown", downListener);
    box.addEventListener("mousemove", moveListener);
    box.addEventListener("mouseup", upListener);
  });
});

window.addEventListener("resize", () => {
  getDimensions();
  createBoxes();
});
