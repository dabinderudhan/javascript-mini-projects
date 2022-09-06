import { createNav } from "../header.js";
createNav("star rating");

const stars = document.querySelectorAll(".stars svg");
const smiley = document.querySelector(".smiley");

stars.forEach((star, clickedId) => {
  star.addEventListener("click", () => {
    // console.log(`star ${clickedId} clicked`);

    Array.from(stars).filter((star, id) => {
      if (id <= clickedId) star.classList.add("star-selected");
      else star.classList.remove("star-selected");
    });

    if (clickedId === 0) {
      smiley.innerText = "😢";
    }
    if (clickedId === 1) {
      smiley.innerText = "😒";
    }
    if (clickedId === 2) {
      smiley.innerText = "😐";
    }
    if (clickedId === 3) {
      smiley.innerText = "😃";
    }
    if (clickedId === 4) {
      smiley.innerText = "😎";
    }
  });
});
