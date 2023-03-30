"use strict";
import { generateDeck, ul } from "./generateDeck.js";
import { selectCards } from "./flipCards.js";

const dealBtn = document.querySelector("#deal");
dealBtn.addEventListener("click", (e) => {
  console.dir(e);
  ul.innerHTML = "";
  generateDeck();
  selectCards();
});

generateDeck();
