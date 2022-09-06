import { createNav } from "../header.js";
createNav("guess the number");

const guessNumber = document.querySelector(".guess-number");
const submitBtn = document.querySelector(".submit-btn");
const startGameBtn = document.querySelector(".startgame-btn");
const guessNumberRange = document.querySelector(".guess-number-range");
const result = document.querySelector(".result");

//~? initialize the values
let number = 0;
let randomNumber;
let guessNumberArray = [];

//~% function to generate random Number
function generateRandomNumber() {
  return Math.ceil(Math.random() * 99);
}

//~% function to disable start game btn
function disableStartBtn() {
  // startGameBtn.disabled = true;
  startGameBtn.classList.add("disable-btn");

  // submitBtn.disabled = false;
  submitBtn.classList.remove("disable-btn");

  guessNumber.disabled = false;
}

//~% function to enable start game btn
function enableStartBtn() {
  // startGameBtn.disabled = false;
  startGameBtn.classList.remove("disable-btn");

  // submitBtn.disabled = true;
  submitBtn.classList.add("disable-btn");

  guessNumber.disabled = true;
}

//~% function to display guess range text in DOM
function displayGuessRangeText(num, randomNum, guessRangeText) {
  if (num < randomNum) {
    guessRangeText.innerHTML = "Too Low!";
  }

  if (num > randomNum) {
    guessRangeText.innerHTML = "Too High!";
  }

  if (randomNum - num < 5 && randomNum - num > 0) {
    guessRangeText.innerHTML = "Low!";
  }

  if (randomNum - num > -5 && randomNum - num < 0) {
    guessRangeText.innerHTML = "high!";
  }

  if (num === randomNum) {
    guessRangeText.innerHTML = "You Won!";
    guessRangeText.classList.add("win-text");
    enableStartBtn();
  }
}

//~* event listener on loading window enable the startgame btn
window.addEventListener("DOMContentLoaded", () => {
  enableStartBtn();
  // disableStartBtn();
  // randomNumber = generateRandomNumber();
  //   console.log(randomNumber);
});

//~* event listener to get the input value
guessNumber.addEventListener("change", (e) => {
  number = Number(e.target.value);
});

//~* event listener to submit the input value
submitBtn.addEventListener("click", () => {
  guessNumberArray.push(number);
  //   console.log(guessNumberArray);

  if (guessNumberArray.length >= 10) {
    enableStartBtn();
  }

  result.innerHTML = `Your guesses : ${guessNumberArray
    .map((num) => num)
    .join(",")} ${
    guessNumberArray.length === 10 && number !== randomNumber
      ? ": You lost the game"
      : ""
  }`;

  displayGuessRangeText(number, randomNumber, guessNumberRange);
});

//~* event listener to Restart game if you lose the game.
startGameBtn.addEventListener("click", () => {
  disableStartBtn();
  number = 0;
  guessNumber.value = "";
  guessNumberArray = [];
  guessNumberRange.innerHTML = "";
  result.innerHTML = "";
  randomNumber = generateRandomNumber();
  guessNumberRange.classList.remove("win-text");
  //   console.log(randomNumber);
});
