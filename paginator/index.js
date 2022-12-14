import { createNav } from "../header.js";
createNav("paginator");

const paginationElement = document.getElementById("pagination");
const pagesElement = document.getElementById("pages");
const siblingsElement = document.getElementById("siblings");
const boundaryElement = document.getElementById("boundary");

class Paginator {
  constructor(
    paginatorElement,
    totalPages,
    siblingCount,
    boundary,
    activePage = 1
  ) {
    this.paginatorElement = paginatorElement;
    this.totalPages = totalPages;
    this.siblingCount = siblingCount;
    this.boundary = boundary;
    this.activePage = activePage;

    this.addListener();
    this.populate();
  }

  addListener() {
    this.paginatorElement.addEventListener("click", (event) => {
      if (event.target.classList.contains("page-number")) {
        this.activePage = +event.target.dataset.value;
        this.populate();
        return;
      }

      if (event.target.classList.contains("page-decrement")) {
        this.activePage = Math.max(1, this.activePage - 1);
        this.populate();
        return;
      }

      if (event.target.classList.contains("page-increment")) {
        this.activePage = Math.min(this.totalPages, this.activePage + 1);
        this.populate();
        return;
      }
    });
  }

  populate() {
    this.paginatorElement.innerHTML = "";
    const boundaryLength = this.siblingCount * 2 + 2 + this.boundary;
    let isLastDot = false;

    const fragment = document.createDocumentFragment();

    //~? created decrement button and appended it to fragment
    let button = document.createElement("button");
    button.classList.add("page-modifier");
    button.classList.add("page-decrement");
    button.textContent = "<";
    if (this.activePage === 1) {
      button.disabled = true;
    }
    fragment.appendChild(button);

    for (let i = 1; i <= this.totalPages; i++) {
      const button = document.createElement("button");
      let buttonValue = i;

      if (
        !(
          i <= this.boundary ||
          i > this.totalPages - this.boundary ||
          (this.activePage <= boundaryLength - this.siblingCount &&
            i <= boundaryLength) ||
          (this.activePage >
            this.totalPages - boundaryLength + this.siblingCount &&
            i > this.totalPages - boundaryLength) ||
          (i >= this.activePage - this.siblingCount &&
            i <= this.activePage + this.siblingCount)
        )
      ) {
        if (isLastDot) continue;

        buttonValue = "...";
        button.classList.add("dot");
        button.classList.add(this.activePage > i ? "dot-left" : "dot-right");
        button.dataset.value =
          this.activePage > i
            ? Math.max(1, this.activePage - boundaryLength)
            : Math.min(this.totalPages, this.activePage + boundaryLength);
      }

      button.textContent = buttonValue;
      if (typeof buttonValue === "number") {
        button.dataset.value = i;
        button.setAttribute("tabindex", 0);
      }
      isLastDot = typeof buttonValue === "string";
      button.classList.add("page-number");
      fragment.appendChild(button);
    }

    //~? created increment button and appended it to fragment
    button = document.createElement("button");
    button.classList.add("page-modifier");
    button.classList.add("page-increment");
    button.textContent = ">";
    if (this.activePage === this.totalPages) {
      button.disabled = true;
    }
    fragment.appendChild(button);

    this.paginatorElement.appendChild(fragment);
    const activeElement = this.paginatorElement.querySelector(
      `[data-value='${this.activePage}']`
    );
    activeElement.classList.add("active");
    activeElement.focus();
  }

  //~% => we get the values from the input and assign it to the contructor totalPages, boundary, siblingCount.
  setTotalPages(totalPages) {
    this.totalPages = totalPages;
    this.activePage = Math.min(this.activePage, this.totalPages);
    this.populate();
  }

  setBoundary(boundary) {
    this.boundary = boundary;
    this.populate();
  }

  setSiblingCount(siblingCount) {
    this.siblingCount = siblingCount;
    this.populate();
  }
}

const paginator = new Paginator(
  paginationElement,
  +pagesElement.value,
  +siblingsElement.value,
  +boundaryElement.value
);

//~% => get the value on input and pass it to the paginator instance.
pagesElement.addEventListener("input", () =>
  paginator.setTotalPages(+pagesElement.value)
);

siblingsElement.addEventListener("input", () =>
  paginator.setSiblingCount(+siblingsElement.value)
);

boundaryElement.addEventListener("input", () =>
  paginator.setBoundary(+boundaryElement.value)
);
