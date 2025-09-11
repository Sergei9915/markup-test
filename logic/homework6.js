const dataInput = {
  name: "",
  password: 0,
};

function dataSubmit() {
  const inputName = document.querySelector("#name");
  const inputPassword = document.querySelector("#password");

  const isNameValid =
    /^[a-zA-Zа-яА-ЯёЁ]+$/.test(inputName.value) && inputName.value;
  const isNumberValid =
    /^[0-9]+$/.test(inputPassword.value) && inputPassword.value;

  if (isNameValid) {
    dataInput.name = inputName.value;
    inputName.classList.remove("error");
    inputName.classList.add("valid");
  } else {
    inputName.classList.remove("valid");
    inputName.classList.add("error");
  }

  if (isNumberValid) {
    dataInput.password = inputPassword.value;
    inputPassword.classList.remove("error");
    inputPassword.classList.add("valid");
  } else {
    inputPassword.classList.remove("valid");
    inputPassword.classList.add("error");
  }
}

// const inputForm = document.querySelectorAll("#login-form input");

// function dataSubmit() {
//   const isNameValid = new RegExp(/^[a-zA-Zа-яА-ЯёЁ]+$/);
//   const isNumberValid = new RegExp(/^[0-9]+$/);

//   for (let i = 0; i < inputForm.length - 1; i++) {
//     if (inputForm[i].id === "name") {
//       isNameValid.test(inputForm[i].value)
//         ? inputForm[i].classList.replace("error", "validTwo")
//         : inputForm[i].classList.replace("validTwo", "error");
//     }
//     if (inputForm[i].id === "password") {
//       isNumberValid.test(inputForm[i].value)
//         ? inputForm[i].classList.replace("error", "validTwo")
//         : inputForm[i].classList.replace("validTwo", "error");
//     }
//   }
// }
