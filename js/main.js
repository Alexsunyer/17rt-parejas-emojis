import { generateDeck, ul as cards } from "./generateDeck.js";
generateDeck();
const dealBtn = document.querySelector("#deal");
dealBtn.addEventListener("click", (e) => {
  console.dir(e);
  cards.innerHTML = "";

  generateDeck();
});
