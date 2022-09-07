import { createNav } from "../header.js";
createNav("paginator");

const displayPageNos = document.querySelector(".show-page-nos");
const addPageCount = document.querySelector("#page-no");
const addSibling = document.querySelector("#sibling");
const addBoundary = document.querySelector("#boundary");

let pageNos = [];

addPageCount.addEventListener("input", () => {
  let value = addPageCount.value;

  for (let i = 1; i <= value; i++) {
    pageNos.push(i);
    let uniqueValueArray = [...new Set(pageNos)];
    console.log(uniqueValueArray);
  }
});
