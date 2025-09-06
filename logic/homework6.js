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
