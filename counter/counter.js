const result = document.querySelector(".result");
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");
const input = document.querySelector("input");

// initializing the values
let value = 0;
let changeByValue = 1;

// event listener to get the value of input button
input.addEventListener("change", function (e) {
  changeByValue = Number(e.target.value);
});

// event listener to increase the counter
incrementBtn.addEventListener("click", () => {
  value = value + changeByValue;
  result.innerHTML = value;
});

// event listener to decrease the counter
decrementBtn.addEventListener("click", () => {
  value = value - changeByValue;
  result.innerHTML = value;
});

// event listener to reset the values.
resetBtn.addEventListener("click", () => {
  value = 0;
  input.value = 1;
  result.innerHTML = value;
});
