const inputChips = document.querySelector(".input-chips");
const showChips = document.querySelector(".show-chips");

let chipArray = [];

inputChips.addEventListener("keypress", (e) => {
  const chip = e.target.value;

  showChips.innerHTML = `${chipArray
    .map((chip) => `<p class="chip">${chip} <span>&times</span></p>`)
    .join("")}<p class="chip">${chip} <span>&times</span></p>`;

  if (e.key === "Enter") {
    chipArray.push(chip);
    inputChips.value = "";
    // console.log(chipArray);
  }

  //   const deleteBtn = showChips.querySelector(".chip span");
  //   console.log(deleteBtn);
});
