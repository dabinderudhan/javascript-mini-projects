const minInTens = document.getElementById("min-in-tens");
const minsInOnes = document.getElementById("min-in-ones");
const secInTens = document.getElementById("sec-in-tens");
const secInOnes = document.getElementById("sec-in-ones");

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

const inputs = document.querySelectorAll(".timer input");

//~% => to get the value and check, and also to change the focus to next element on input
function eventFunction2(e) {
  let value = e.target.value;
  if (value === "") e.target.value = 0;
  if (e.target.id === "min-in-tens" && value > 5) e.target.value = 0;
  if (e.target.id === "sec-in-tens" && value > 5) e.target.value = 0;
  e.target.focus();
  e.target.select();

  if (e.target.nextElementSibling.nodeName === "INPUT") {
    e.target.nextElementSibling.select();
  }
}

minInTens.addEventListener("input", (e) => eventFunction2(e));
minsInOnes.addEventListener("input", (e) => eventFunction2(e));
secInTens.addEventListener("input", (e) => eventFunction2(e));
secInOnes.addEventListener("input", (e) => eventFunction2(e));

//~% => to select and fucos the text of input on click
function eventFunction(e) {
  e.target.focus();
  e.target.select();
}

minInTens.addEventListener("click", (e) => eventFunction(e));
minsInOnes.addEventListener("click", (e) => eventFunction(e));
secInTens.addEventListener("click", (e) => eventFunction(e));
secInOnes.addEventListener("click", (e) => eventFunction(e));

//~# starts the timer
function startTimer() {
  //~^ => get the values from the DOM and convert it to numbers.
  let minsInSeconds = +(minInTens.value + minsInOnes.value) * 60;
  let secInSeconds = +(secInTens.value + secInOnes.value);
  let duration = minsInSeconds + secInSeconds;

  if (!duration) return;
  else {
    let minutes, seconds;
    inputs.forEach((input) => input.classList.add("timer-started"));
    startBtn.classList.add("disable-btn");
    stopBtn.classList.remove("disable-btn");

    //~% with the use of "window.", we declare the setInterval function in global scope.
    window.countdownTimer = setInterval(function () {
      duration--;
      minutes = parseInt(duration / 60, 10);
      seconds = parseInt(duration % 60, 10);

      minInTens.value = Math.floor(minutes / 10);
      minsInOnes.value = minutes % 10;
      secInTens.value = Math.floor(seconds / 10);
      secInOnes.value = seconds % 10;
      // console.log("timer running");

      if (duration <= 0) {
        minInTens.value = 0;
        minsInOnes.value = 0;
        secInTens.value = 0;
        secInOnes.value = 0;
        stopTimer();
        //   console.log("timer stopped");
      }
    }, 1000);
  }
}

//~% => stop the timer
function stopTimer() {
  clearInterval(window.countdownTimer);
  inputs.forEach((input) => input.classList.remove("timer-started"));
  startBtn.classList.remove("disable-btn");
  stopBtn.classList.add("disable-btn");
  //   console.log("timer stopped");
}

//~> eventlisteners on start, stop and reset buttons.
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", () => {
  minInTens.value = 0;
  minsInOnes.value = 0;
  secInTens.value = 0;
  secInOnes.value = 0;
  stopTimer();
});
