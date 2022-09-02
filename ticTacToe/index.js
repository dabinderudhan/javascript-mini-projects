const boxes = document.querySelectorAll(".col");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id % 2) box.innerHTML = "x";
    else box.innerHTML = "o";
  });
});
