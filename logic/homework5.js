let statusForm = false;

const dataFromForm = {
  email: "",
  password: "",
};

function formData() {
  // Забрать данные с инпутов
  // Имитировать отправку данных
  // После поменять статус на true

  let exampleInputEmail1 = document.querySelector("#exampleInputEmail1");
  let exampleInputPassword1 = document.querySelector("#exampleInputPassword1");

  dataFromForm.email = exampleInputEmail1.value;
  dataFromForm.password = exampleInputPassword1.value;

  if (dataFromForm.email && dataFromForm.password) {
    statusForm = true;
  }
  checkStatusForm(true);
}

function checkStatusForm(flag) {
  const dataForm = document.querySelector(".form-mb-user");
  const spinnerBlock = document.querySelector(".spinner-block");

  if (flag) {
    spinnerBlock.style.display = "block";
    dataForm.style.display = "none";
  }
}

function takeInput() {
  const inputs = document.querySelectorAll("form input");

  const arrStr = [
    "Hello",
    "Bay",
    "Bob",
    "Mike",
    "Pink",
    "milk",
    "Banana",
    "Apple",
  ];

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].placeholder = arrStr[i];
  }
}

takeInput();
