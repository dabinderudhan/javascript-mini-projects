const displayPixelChart = document.querySelector(".display-pixel-chart");
const rowsInput = document.getElementById("rows");
const colsInput = document.getElementById("columns");
const createChartBtn = document.querySelector("button");

let noOfRows, noOfCols;

rowsInput.addEventListener("change", (e) => {
  console.log(e.target.value);
  return (noOfRows = e.target.value);
});

colsInput.addEventListener("change", (e) => {
  console.log(e.target.value);
  return (noOfCols = e.target.value);
});

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

  // this create rows
  createRowsArray(row) {
    const rowArray = [];
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let i = 0; i < row; i++) {
      rowArray.push(rowDiv);
    }

    return rowArray;
  }

  // this will map the colArray and convert it into string and join them
  createColsString(col) {
    const newCol = this.createColsArray(col)
      .map((col) => col.outerHTML)
      .join("");
    return newCol;
  }

  createRowsString(rows, cols) {
    // here we map the row array and insert the columns in each row element.
    const updatedRow = this.createRowsArray(rows)
      .map((row) => {
        row.innerHTML = this.createColsString(cols);
        return row.outerHTML;
      })
      .join("");

    // console.log(updatedRow);

    return updatedRow;
  }

  // here we just pass the rows and cols values we receive to createRows method and return the value of createRows method
  printPixelChart() {
    return this.createRowsString(this.rows, this.cols);
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

//~% extended colorchart class
class CreateColorChart extends CreatePixelChart {
  constructor(rows, cols) {
    super(rows, cols);
  }

  createColsString(col) {
    return this.createColsArray(col)
      .map((col) => {
        col.style.backgroundColor = this.createRandomColor();
        return col.outerHTML;
      })
      .join("");
  }
}

createChartBtn.addEventListener("click", () => {
  displayPixelChart.innerHTML = "";
  if ((!noOfRows, !noOfCols)) {
    return;
  } else {
    //~? create new instance of respective classes
    const myPixelChart = new CreatePixelChart(noOfRows, noOfCols);

    const myColorChart = new CreateColorChart(1, noOfCols);

    insertChartToDom(myPixelChart, "pixel-box");
    insertChartToDom(myColorChart, "color-box");
  }
});

//~# Helper function to insert chart to DOM.
const insertChartToDom = (myBoxChart, boxClass) => {
  const chartBox = document.createElement("div");
  chartBox.classList.add(boxClass);
  chartBox.innerHTML = myBoxChart.printPixelChart();

  displayPixelChart.appendChild(chartBox);
};

// const name = "दबिंदर सिंग";
// const lastName = "उद्यान";
// console.log(name, lastName);
