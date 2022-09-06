import { createNav } from "../header.js";
createNav("form validation");

const inputBox = document.querySelectorAll(".input-box");
const submitBtn = document.querySelector(".submit-btn");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const userName = document.getElementById("user-name");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const email = document.getElementById("email");
const showSuccessMessage = document.querySelector(".success-message");
const showErrorMessage = document.querySelector(".error-message");

let validFirstName = false,
  validLastName = false,
  validUserName = false,
  validPassword = false,
  validConfirmPassword = false,
  validEmail = false;
let nameRegex = /^[A-Za-z]{3,15}$/;
let userRegex = /^[a-zA-Z][a-zA-Z0-9-_.]{5,14}$/;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
let clientObj = {};

firstName.addEventListener("blur", () => {
  clientObj.firstName = validateInput(firstName, "first name", nameRegex);
  if (clientObj.firstName) {
    validFirstName = true;
  }
});

lastName.addEventListener("blur", () => {
  clientObj.lastName = validateInput(lastName, "last name", nameRegex);
  if (clientObj.lastName) {
    validLastName = true;
  }
});

userName.addEventListener("blur", () => {
  clientObj.userName = validateInput(userName, "username", userRegex);
  if (clientObj.userName) {
    validUserName = true;
  }
});

password.addEventListener("blur", () => {
  clientObj.password = validateInput(password, "password", passwordRegex);
  if (clientObj.password) {
    validPassword = true;
  }
});

confirmPassword.addEventListener("blur", () => {
  const value = confirmPassword.value;

  if (!value) {
    confirmPassword.nextElementSibling.style.display = "block";
    confirmPassword.nextElementSibling.innerHTML = `<i class="fa fa-exclamation-circle"></i> Re-enter password`;
    confirmPassword.classList.add("error-box");
    validConfirmPassword = false;
  } else if (clientObj.password && !clientObj.password.match(value)) {
    confirmPassword.nextElementSibling.style.display = "block";
    confirmPassword.nextElementSibling.innerHTML = `Password does not match`;
    confirmPassword.classList.add("error-box");
    validConfirmPassword = false;
  } else {
    confirmPassword.nextElementSibling.style.display = "none";
    confirmPassword.classList.remove("error-box");
    validConfirmPassword = true;
  }
});

email.addEventListener("blur", () => {
  const value = email.value;
  let emailRegex = /^[a-zA-Z][a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/;

  if (!value) {
    email.nextElementSibling.style.display = "block";
    email.nextElementSibling.innerHTML = `<i class="fa fa-exclamation-circle"></i> Enter email`;
    email.classList.add("error-box");
    validEmail = false;
  } else if (value && !emailRegex.test(value)) {
    email.nextElementSibling.style.display = "block";
    email.nextElementSibling.innerHTML = `wrong email id`;
    email.classList.add("error-box");
    validEmail = false;
  } else {
    email.nextElementSibling.style.display = "none";
    email.classList.remove("error-box");
    validEmail = true;
  }
});

//~# form validation

function validateInput(inputField, inputFieldName, regex) {
  let errorMessage = inputField.nextElementSibling;
  let value = inputField.value;

  if (!value) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = `<i class="fa fa-exclamation-circle"></i> Enter ${inputFieldName}`;
    inputField.classList.add("error-box");
  } else if (value && !regex.test(value)) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = `please enter the correct ${inputFieldName}`;
    inputField.classList.add("error-box");
  } else {
    errorMessage.style.display = "none";
    inputField.classList.remove("error-box");
    return value;
  }
}

//~# FUNCTION TO CLEAR INPUT FIELDS
function clearInputFields(inputBox) {
  inputBox.forEach((input) => {
    input.firstElementChild.value = "";
  });
}

//~# EVENT LISTENER ON SUBMIT BUTTION
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    validFirstName &&
    validLastName &&
    validUserName &&
    validPassword &&
    validConfirmPassword &&
    validEmail
  ) {
    clearInputFields(inputBox);
    validFirstName = false;
    validLastName = false;
    validUserName = false;
    validPassword = false;
    validConfirmPassword = false;
    validEmail = false;

    showSuccess();
  } else {
    showError();
  }
});

function showSuccess() {
  showSuccessMessage.style.display = "block";
  setTimeout(() => (showSuccessMessage.style.display = "none"), 2000);
}

function showError() {
  showErrorMessage.style.display = "block";
  setTimeout(() => (showErrorMessage.style.display = "none"), 2000);
}
