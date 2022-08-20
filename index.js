const challengeArray = [
  { name: "counter", link: "./counter/index.html" },
  { name: "guess the number", link: "./guessTheNumber/index.html" },
  { name: "form validation", link: "./formValidation/index.html" },
  {
    name: "telephone formatter",
    link: "./telephoneNumberFormatter/index.html",
  },
  { name: "light & dark mode", link: "./lightDarkMode/index.html" },
  { name: "toast popup", link: "./toastPopup/index.html" },
  { name: "css shapes", link: "./cssShapes/index.html" },
  { name: "password strength", link: "" },
  { name: "star rating", link: "" },
  { name: "pixel art", link: "" },
  { name: "color spotter", link: "" },
  { name: "todo list", link: "" },
  { name: "transfer list", link: "" },
  { name: "tic-tac-toe", link: "" },
  { name: "chess board", link: "" },
  { name: "chips input", link: "" },
  { name: "countdown timer", link: "" },
  { name: "area selector", link: "" },
  { name: "carousel", link: "" },
  { name: "paginator", link: "" },
  { name: "comment box", link: "" },
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
