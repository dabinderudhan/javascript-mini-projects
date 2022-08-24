const stars = document.querySelectorAll(".stars svg");
const smiley = document.querySelector(".smiley");

stars.forEach((star, clickedId) => {
  star.addEventListener("click", () => {
    // console.log(`star ${clickedId} clicked`);

    stars.forEach((otherStar, otherId) => {
      if (otherId <= clickedId) {
        // console.log(otherId);
        otherStar.classList.add("star-selected");
      } else {
        otherStar.classList.remove("star-selected");
      }
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
