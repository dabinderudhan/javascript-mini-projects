import { createNav } from "./header.js";
createNav("frontend mini challenges");

const challengeArray = [
  { name: "counter", link: "./counter/" },
  { name: "guess the number", link: "./guessTheNumber/" },
  { name: "form validation", link: "./formValidation/" },
  {
    name: "telephone formatter",
    link: "./telephoneNumberFormatter/",
  },
  { name: "light & dark mode", link: "./lightDarkMode/" },
  { name: "toast popup", link: "./toastPopup/" },
  { name: "css shapes", link: "./cssShapes/" },
  { name: "password strength", link: "./passwordStrength/" },
  { name: "star rating", link: "./starRating/" },
  { name: "pixel art", link: "./pixelArt" },
  { name: "color spotter", link: "./colorSpotter/" },
  { name: "todo list", link: "./toDoList/" },
  { name: "transfer list", link: "./transferList/" },
  { name: "tic-tac-toe", link: "./ticTacToe/" },
  { name: "chess board", link: "" },
  { name: "chips input", link: "./chipsInput/" },
  { name: "countdown timer", link: "./countdownTimer/" },
  { name: "area selector", link: "./areaSelector/" },
  { name: "carousel", link: "./carousel/" },
  { name: "paginator", link: "./paginator/" },
  { name: "comment box", link: "./commentBox/" },
  { name: "json creater", link: "" },
  { name: "array methods", link: "" },
  { name: "progress bar", link: "" },
  { name: "skeleton loader", link: "" },
  { name: "stepper", link: "" },
  { name: "accordion", link: "" },
  { name: "autocomplete", link: "" },
  { name: "dialog popup", link: "" },
  { name: "sort table", link: "" },
  { name: "calendar", link: "" },
  { name: "emoji editor", link: "" },
  { name: "infinite scroll", link: "" },
];

const challengesContainer = document.querySelector(".challenges");

challengesContainer.innerHTML = challengeArray
  .map((challenge) => {
    return `<a class="challenge ${!challenge.link ? "disable" : ""}" href="${
      challenge.link
    }">
                <h3>${challenge.name}</h3>
            </a>`;
  })
  .join("");
