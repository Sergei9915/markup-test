/* #1 */
function findBtn() {
  const btn = document.querySelector("#myBtn");
  console.log(btn.textContent);
}

findBtn();

/* #2 */

function removeClass() {
  const boxRed = document.querySelector("#box");
  boxRed.classList.remove("red-box");
}

/* #3 */

function greetUser(name) {
  console.log(`Hello, ${name}!`);
  const boxHello = document.querySelector(".hello-box");
  boxHello.textContent = `Hello, ${name}!`;
}

greetUser("Mike");
// greetUser("Bob");
// greetUser("Alex");

/* #4 */

let count = 0;

function incrementCount() {
  count++;
  // count += 1;
}
incrementCount(); // 1
console.log(count);
incrementCount(); // 2
console.log(count);
incrementCount(); // 3
incrementCount(); // 4
console.log(count);

/* #5 */

function changeText() {
  const text = document.querySelector("#message");
  text.innerText = "Hello World!";
}

/* #6 */

function addTextContainer() {
  const containerDiv = document.getElementById("container");
  containerDiv.innerHTML = `<h2>Welcome!</h2>`;
}

/* #7 */

let result = 0;

function sum() {
  let firstInp = document.querySelector(".first");
  let secondInp = document.querySelector(".second");
  let resultSpan = document.querySelector(".result");

  let a = +firstInp.value;
  let b = +secondInp.value;

  let result = a + b;

  resultSpan.innerHTML = `= ${result}`;

  console.log(result);
}

/* #8 */

// function clickHidden() {
//   const infoDiv = document.querySelector("#info");
//   infoDiv.classList.remove("hidden");
//   infoDiv.textContent = "You have opened the information!";
// }

const infoDiv = document.querySelector("#info");
const btnHidden = document.querySelector(".btn-hidden");
btnHidden.addEventListener("click", () => {
  console.log("Hello World");
  infoDiv.classList.remove("hidden");
  infoDiv.textContent = "You have opened the information!";
});

/* JS OBJECT #1 */

const userObj = {
  name: "Sergei",
  age: 26,
};

function createUserCard(user) {
  const cardUser = document.createElement("div");
  cardUser.innerHTML = ` <p>Name: ${user.name}</p> 
  <p>Age: ${user.age}</p> `;

  document.body.append(cardUser);
}

createUserCard(userObj);

/* JS OBJECT #2 */

const productsArr = [
  {
    title: "OneA",
    price: 10,
  },
  {
    title: "TwoB",
    price: 20,
  },
  {
    title: "ThreeC",
    price: 30,
  },
  {
    title: "FourD",
    price: 40,
  },
];

function renderProducts(products) {
  const elementUl = document.createElement("ul");
  products.forEach((product) => {
    const elementLi = document.createElement("li");

    elementLi.textContent = `${product.title} - ${product.price}$`;

    elementUl.append(elementLi);
  });

  document.body.appendChild(elementUl);
}

renderProducts(productsArr);

/* JS OBJECT #3 */

function showMessage(text) {
  const messageDiv = document.querySelector("#messages-text");
  const elementP = document.createElement("p");

  elementP.textContent = text;
  elementP.style.backgroundColor = "yellow";

  messageDiv.append(elementP);
}

showMessage("Hello Mike");

/* JS OBJECT #4 */

function addButton(label) {
  const addBtn = document.createElement("button");
  addBtn.textContent = label;

  document.body.appendChild(addBtn);

  addBtn.addEventListener("click", () => {
    alert(label);
  });
}

addButton("CLICK ME!");


/* JS OBJECT #5 */