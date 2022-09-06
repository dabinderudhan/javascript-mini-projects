import { createNav } from "../header.js";
createNav("telephone formatter");

const inputMobileNumber = document.querySelector(".input-mob-num");
const displayMobileNumber = document.querySelector(".display-mob-num");

inputMobileNumber.addEventListener("input", (e) => {
  const value = e.target.value;

  displayMobileNumber.innerHTML = formatMobileNumber(String(value));
});

const formatMobileNumber = (mobileNumberString) => {
  let cleaned = mobileNumberString.replace(/\D/g, "");

  let match = cleaned.match(/^(91|)?(1|)?(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    let indiaCode = match[1] ? "+91 " : "";
    let intlCode = match[2] ? "+1" : "";

    return `${intlCode ? intlCode : indiaCode} (${match[3]}) ${match[4]}-${
      match[5]
    }`;
    // return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }

  return null;
};
