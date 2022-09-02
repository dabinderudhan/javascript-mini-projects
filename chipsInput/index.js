const inputChips = document.querySelector(".input-chips");
const showChips = document.querySelector(".show-chips");

let chipArray = [];

//~% Helper function
function printChip(chip) {
  return `<p class="chip">${chip} <span>&times</span></p>`;
}

//~> eventlistener to display print in the DOM
inputChips.addEventListener("keypress", (e) => {
  const chip = e.target.value;

  showChips.innerHTML = `${chipArray
    .map((chip) => printChip(chip))
    .join("")}${printChip(chip)}`;

  if (e.key === "Enter") {
    chipArray.push(chip);
    inputChips.value = "";
  }
});

//~> eventlistener to delete the chip from the array and DOM
showChips.addEventListener("click", (e) => {
  const chipValue = e.target.parentElement.innerText.slice(0, -2).toLowerCase();
  chipArray = chipArray.filter((chip) => chip !== chipValue);
  showChips.innerHTML = chipArray.map((chip) => printChip(chip)).join("");
});
