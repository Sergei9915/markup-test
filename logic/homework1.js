function addElement() {
  const newDiv = document.createElement("div");
  const newBtn = document.createElement("button");
  const newTitle = document.createElement("h1");

  newDiv.textContent = "Hello World!";
  newDiv.id = "myBox";

  newBtn.textContent = "Click me";
  newBtn.classList.add("toggleBtn");

  newTitle.textContent = "Old title";
  newTitle.id = "title";

  document.body.append(newDiv, newBtn, newTitle);

  return { newBtn, newDiv, newTitle };
}

const { newBtn, newDiv, newTitle } = addElement();

newBtn.addEventListener("click", () => {
  newDiv.classList.toggle("hidden");
});

function addClass() {
  const addClassDiv = document.getElementById("myBox");
  addClassDiv.classList.add("highlight");
}

addClass();

setTimeout(() => {
  newTitle.textContent = "New title";
  paragraph.textContent = "Change text";
}, 2000);

/* #5 */

const paragraph = document.querySelector("div.content p");

/* #6 */

const elementLi = document.createElement("li");
const elementUl = document.getElementsByClassName("myList");

elementLi.textContent = "New 3";

// console.log(elementUl[0], "elementUl");

elementUl[0].append(elementLi);

/* #7 */

const elementDiv = document.querySelector(".messageBox");
const elementBtnAddMessage = document.querySelector(".addMessage");

elementBtnAddMessage.addEventListener("click", () => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "New message";
  elementDiv.append(newParagraph);
});

/* ----------- */
function changeAddedStyle() {
  const blockCard = document.querySelector(".card-sector");
  blockCard.classList.toggle("changeColor");
}

function addNodeChild() {
  const elementUl = document.querySelectorAll(".list li");

  for (i = 0; i < elementUl.length; i++) {
    if (i === 0) {
      const li1 = document.createElement("li");
      li1.textContent = "1";
      li1.style.backgroundColor = "red";
      elementUl[i].before(li1);
    }
    if (i === elementUl.length - 1) {
      const li7 = document.createElement("li");
      li7.textContent = "7";
      li7.style.backgroundColor = "green";
      elementUl[i].after(li7);
    }
  }
}

addNodeChild();

/* ----------- */
