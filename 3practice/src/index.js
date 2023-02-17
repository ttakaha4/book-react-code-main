const buttonEl = document.createElement("button");
buttonEl.textContent = "ボタン";

const divEl = document.querySelector(".container");
divEl.appendChild(buttonEl);

const h1El = document.querySelector("#title");
const bodyEl = document.querySelector("body");
// bodyEl.removeChild(h1El);
// bodyEl.textContent = null;