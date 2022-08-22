const password = document.querySelector(".password");
const strengthColor = document.querySelector(".strength-fill");

const strongRegex =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.{8,})/;

const lowerAlphabets = /(?=.*[a-z])/;
const upperAlphabets = /(?=.*[A-Z])/;
const numbers = /(?=.*[0-9])/;
const otherCharacters = /(?=.*[^a-zA-Z0-9])/;

password.addEventListener("keyup", (e) => {
  const value = e.target.value;

  if (!value) {
    strengthColor.style.width = 0;
    strengthColor.style.backgroundColor = "";
  } else {
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (value.length < 5) {
        strengthColor.style.width = 0;
        strengthColor.style.backgroundColor = "";
      }

      if (
        (lowerAlphabets.test(value) ||
          upperAlphabets.test(value) ||
          numbers.test(value) ||
          otherCharacters.test(value)) &&
        value.length >= 5
      ) {
        width = 20;
        strengthColor.style.width = width + "%";
        strengthColor.style.backgroundColor = "red";
      }

      if (
        (lowerAlphabets.test(value) ||
          upperAlphabets.test(value) ||
          numbers.test(value) ||
          otherCharacters.test(value)) &&
        value.length >= 8
      ) {
        width = 40;
        strengthColor.style.width = width + "%";
        strengthColor.style.backgroundColor = "orange";
      }

      if (
        lowerAlphabets.test(value) &&
        upperAlphabets.test(value) &&
        value.length >= 8
      ) {
        width = 60;
        strengthColor.style.width = width + "%";
        strengthColor.style.backgroundColor = "orange";
      }

      if (
        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value) ||
        /(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.{8,})/.test(value)
      ) {
        width = 80;
        strengthColor.style.width = width + "%";
        strengthColor.style.backgroundColor = "orange";
      }

      if (strongRegex.test(value)) {
        width = 100;
        strengthColor.style.width = width + "%";
        strengthColor.style.backgroundColor = "green";
      }

      clearInterval(id);
    }
  }
});
