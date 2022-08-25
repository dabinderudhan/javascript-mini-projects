const main = document.querySelector("main");

class CreatePixelChart {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
  }

  // this will create and return an array of columns.
  createColsArray(col) {
    const colArray = [];

    const colDiv = document.createElement("div");
    colDiv.classList.add("col");

    for (let i = 0; i < col; i++) {
      colArray.push(colDiv);
    }

    return colArray;
  }

  // this will map the colArray and convert it into string and join them
  createCols(col) {
    const updatedColArray = this.createColsArray(col);
    // updatedColArray.map(
    //   (col) => (col.style.backgroundColor = this.createRandomColor())
    // );
    const newCol = updatedColArray.map((col) => col.outerHTML).join("");
    return newCol;
  }

  // this create rows
  createRows(row, col) {
    const rowArray = [];

    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let i = 0; i < row; i++) {
      rowArray.push(rowDiv);
    }

    // here we map the row array and add the columns in each row element.
    rowArray.map((row) => (row.innerHTML = this.createCols(col)));

    // we map again the updated row array and convert the elements into string and then join them.
    return rowArray.map((row) => row.outerHTML).join("");
  }

  // here we just pass the rows and cols values we receive to createRows method and return the value of createRows method
  printPixelChart() {
    return this.createRows(this.rows, this.cols);
  }

  // this generates a random color value
  createRandomColor() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

    return randomColor;
  }
}

// create new instance of class CreatePixelChart
const myPixelChart = new CreatePixelChart(9, 7);

// create a dom element
const pixelBox = document.createElement("div");
// add the instance to the innerHTML of dom element
pixelBox.innerHTML = myPixelChart.printPixelChart();
pixelBox.classList.add("pixel-box");

// append the dom element to the DOM element "main"
main.appendChild(pixelBox);

///////////////////////////////////////////////////////////
// created another instance of class CreatePixelChart
const myColorChart = new CreatePixelChart(1, 7);

const colorBox = document.createElement("div");
colorBox.classList.add("color");
colorBox.innerHTML = myColorChart.printPixelChart();

main.appendChild(colorBox);
