const password = document.querySelector(".password");
const strengthColor = document.querySelector(".strength-fill");

let singleTypeRegex = /[a-z]+|[A-Z]+|[0-9]+|[.]+/;

console.log(singleTypeRegex);

password.addEventListener("keyup", (e) => {
  const value = e.target.value;
  console.log(value);

  if (value.length > 3 && singleTypeRegex) {
    strengthColor.style.backgroundColor = "red";
    strengthColor.style.width = "10%";
  } else {
    strengthColor.style.backgroundColor = "";
    strengthColor.style.width = "";
  }
});
