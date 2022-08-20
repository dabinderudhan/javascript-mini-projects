const main = document.querySelector("main");
const checkBox = document.querySelector(".checkbox");

const sectionCheckBox = document.querySelector(".sub-check .checkbox");

checkBox.addEventListener("click", () => {
  main.classList.toggle("dark-mode");
  if (main.classList.contains("dark-mode")) {
    sectionCheckBox.checked = true;
  } else {
    sectionCheckBox.checked = false;
  }
});
