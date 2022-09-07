import { createNav } from "../header.js";
createNav("carousel");

const images = document.querySelectorAll(".image-gallery img");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const dots = document.querySelectorAll(".round-buttons button");

//% we set the imageId to 1
let imageId = 1;
showImages(imageId);

//~% function to the add the value of "id" to the value of "imageId" and pass it as argument to "ShowImages function"
function plusImages(id) {
  showImages((imageId += id));
}

//~^ assign the round button id to the imageId value and pass it as argument to the "showImages" function
function currentImage(id) {
  showImages((imageId = id));
  // console.log({ id, imageId });
}

function showImages(id) {
  // console.log({ id, imageId });
  //#=> if the id value is greater than images.length then set imageId to 1.
  if (id > images.length) imageId = 1;

  //>=> if the id value if less then 1 then set imageId equal to images.length.
  if (id < 1) imageId = images.length;

  //~? we loop over the images and round buttons and set all images display to none and remove the active class from all round buttons.
  images.forEach((img) => (img.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active-button"));

  //~# we set the current image to display block and add the active classs to current dot
  images[imageId - 1].style.display = "block";
  dots[imageId - 1].classList.add("active-button");
}

leftButton.addEventListener("click", () => {
  plusImages(-1); //> for left button we pass the negative value.
});

rightButton.addEventListener("click", () => {
  plusImages(1); //> for right button we pass the positive value.
});

dots.forEach((dot) =>
  dot.addEventListener("click", (e) => {
    currentImage(Number(e.target.dataset.id)); //> we get the data-id and pass it as argument to the currentImage function.
  })
);
