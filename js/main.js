import { generateDeck, ul } from "./generateDeck.js";

let count = 0;
const dealBtn = document.querySelector("#deal");
dealBtn.addEventListener("click", (e) => {
  console.dir(e);
  ul.innerHTML = "";
  generateDeck();
});

generateDeck();
