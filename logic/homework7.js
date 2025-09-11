// --- classwork ---

function checkValidated() {
  const form = document.querySelector(".needs-validation");

  form.addEventListener("click", function (el) {
    if (!form.checkVisibility()) {
      el.preventDefault();
      el.stopPropagation();
    }

    form.classList.add("was-validated");
  });
}

// --- homework7 ---

const inputs = document.querySelectorAll(".needs-validation input");

const getData = async (url) => {
  let request = await fetch(url);

  let response = request.ok
    ? request.json()
    : Promise.reject(request.statusText);

  return response;
};

function usersData() {
  getData("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
      let twoUserData = data.slice(0, 2);

      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = twoUserData[i].name;
      }
    })
    .catch((err) => console.log(err));
}

usersData();
