const password = document.querySelector(".password");
const strengthColor = document.querySelector(".strength-fill");

let strongRegex =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.{8,})/;

password.addEventListener("keyup", (e) => {
  const value = e.target.value;

  if (!value) {
    strengthColor.style.width = 0;
    strengthColor.style.backgroundColor = "";
  } else {
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (
        (/(?=.*[a-z])/.test(value) && value.length >= 5) ||
        /(?=.*[a-z])(?=.*[A-Z])/.test(value)
      ) {
        width = 20;
        strengthColor.style.width = width + "%";
        strengthColor.style.backgroundColor = "red";
      }

      if (/(?=.*[a-z])/.test(value) && value.length >= 8) {
        width = 40;
        strengthColor.style.width = width + "%";
        strengthColor.style.backgroundColor = "orange";
      }

      if (/(?=.*[a-z])(?=.*[A-Z])/.test(value) && value.length >= 8) {
        width = 60;
        strengthColor.style.width = width + "%";
        strengthColor.style.backgroundColor = "orange";
      }

      if (
        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(value) &&
        value.length >= 8
      ) {
        width = 80;
        strengthColor.style.width = width + "%";
        strengthColor.style.backgroundColor = "orange";
      }

      if (
        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])/.test(value) &&
        value.length >= 8
      ) {
        width = 100;
        strengthColor.style.width = width + "%";
        strengthColor.style.backgroundColor = "green";
      }
      clearInterval(id);
    }
  }
});
