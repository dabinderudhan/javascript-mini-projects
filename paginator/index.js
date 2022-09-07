import { createNav } from "../header.js";
createNav("paginator");

const displayPageNos = document.querySelector(".show-page-nos");
const addPageCount = document.querySelector("#page-no");
const addSibling = document.querySelector("#sibling");
const addBoundary = document.querySelector("#boundary");

let pageNos = [];

function getRangeValue(inputRange) {
  return inputRange.value;
}

addPageCount.addEventListener("input", () => {
  let value = getRangeValue(addPageCount);
  console.log(value);
});
