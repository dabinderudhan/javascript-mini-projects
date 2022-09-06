import { createNav } from "../header.js";
createNav("toast popup");

const selectLeftRight = document.getElementById("left-right");
const selectTopBottom = document.getElementById("top-bottom");
const selectMessage = document.getElementById("message");
const toastBtn = document.querySelector(".toast-btn");
const inputToast = document.querySelector(".input-toast");
const toastContainerTopLeft = document.querySelector(
  ".toast-container-top-left"
);
const toastContainerBottomLeft = document.querySelector(
  ".toast-container-bottom-left"
);
const toastContainerTopRight = document.querySelector(
  ".toast-container-top-right"
);
const toastContainerBottomRight = document.querySelector(
  ".toast-container-bottom-right"
);

const arrayTopLeft = [];
const arrayBottomLeft = [];
const arrayTopRight = [];
const arrayBottomRight = [];

let leftRightValue = "left";
let topBottomValue = "top";
let messageValue = "success";
let inputValue = inputToast.value;

let id = 1;

function getSelectValue(select) {
  const value = select.value;
  return value;
}

function createToastMessage(id) {
  const div = document.createElement("div");
  div.setAttribute("data-id", id);
  div.classList.add("toast-message");
  if (messageValue === "success") div.classList.add("toast-messsage-success");
  if (messageValue === "error") div.classList.add("toast-message-error");
  if (messageValue === "warning") div.classList.add("toast-message-warning");
  if (messageValue === "info") div.classList.add("toast-message-info");
  const p = document.createElement("p");
  if (messageValue === "success") p.innerText = `😂 ${inputValue}`;
  if (messageValue === "error") p.innerText = `😡 ${inputValue}`;
  if (messageValue === "warning") p.innerText = `☹️ ${inputValue}`;
  if (messageValue === "info") p.innerText = `😐 ${inputValue}`;
  const span = document.createElement("span");
  span.innerText = " X";
  div.appendChild(p);
  div.appendChild(span);
  return div;
}

const showToastMessage = (array, container, toastClass) => {
  array.unshift(createToastMessage(id));
  id++;

  console.log("showToast", array);

  array.map((toast) => {
    console.log(toast);
    container.appendChild(toast);
    toast.classList.add(toastClass);
  });
};

const removeTopToastMessage = (array, container, toastClass) => {
  // console.log("removeToast", array);

  let timer = setInterval(() => {
    clearInterval(timer);
    id = 1;

    let poppedElement;
    if (array.length > 0) {
      poppedElement = array.pop();
      poppedElement.classList.add(toastClass);
      setTimeout(() => container.removeChild(poppedElement), 1000);
    }
    // else {
    //   poppedElement = "";
    //   id = 1;
    // }
  }, 8000);
};

const removeBottomToastMessage = (array, container, toastClass) => {
  // console.log("removeToast", array);

  let timer = setInterval(() => {
    clearInterval(timer);
    id = 1;

    let poppedElement;
    if (array.length > 0) {
      poppedElement = array.shift();
      poppedElement.classList.add(toastClass);
      setTimeout(() => container.removeChild(poppedElement), 1000);
    }
    // else {
    //   poppedElement = "";
    //   id = 1;
    // }
  }, 8000);
};

selectLeftRight.addEventListener(
  "change",
  () => (leftRightValue = getSelectValue(selectLeftRight))
);

selectTopBottom.addEventListener(
  "change",
  () => (topBottomValue = getSelectValue(selectTopBottom))
);

selectMessage.addEventListener(
  "change",
  () => (messageValue = getSelectValue(selectMessage))
);

inputToast.addEventListener("change", (e) => (inputValue = e.target.value));

toastBtn.addEventListener("click", () => {
  if (leftRightValue === "left" && topBottomValue === "top") {
    showToastMessage(
      arrayTopLeft,
      toastContainerTopLeft,
      "show-toast-message-top-left"
    );

    removeTopToastMessage(
      arrayTopLeft,
      toastContainerTopLeft,
      "remove-toast-top-left"
    );
  }

  if (leftRightValue === "left" && topBottomValue === "bottom") {
    showToastMessage(
      arrayBottomLeft,
      toastContainerBottomLeft,
      "show-toast-message-bottom-left"
    );

    removeBottomToastMessage(
      arrayBottomLeft,
      toastContainerBottomLeft,
      "remove-toast-bottom-left"
    );
  }

  if (leftRightValue === "right" && topBottomValue === "top") {
    showToastMessage(
      arrayTopRight,
      toastContainerTopRight,
      "show-toast-message-top-right"
    );

    removeTopToastMessage(
      arrayTopRight,
      toastContainerTopRight,
      "remove-toast-top-right"
    );
  }

  if (leftRightValue === "right" && topBottomValue === "bottom") {
    showToastMessage(
      arrayBottomRight,
      toastContainerBottomRight,
      "show-toast-message-bottom-right"
    );

    removeBottomToastMessage(
      arrayBottomRight,
      toastContainerBottomRight,
      "remove-toast-bottom-right"
    );
  }
});
