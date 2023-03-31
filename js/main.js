"use strict";
import { generateDeck, ul } from "./generateDeck.js";
import { selectCards } from "./flipCards.js";
import { startCounting, resetTimer, chrono } from "./timer.js";
import { changeScoreColor, displayHighScore } from "./scores.js";
const dealBtn = document.querySelector("#deal");
const winDiv = document.querySelector("#win");
dealBtn.addEventListener("click", (e) => {
  ul.innerHTML = "";
  winDiv.classList.add("behind");
  winDiv.classList.remove("infront");
  clearInterval(chrono);
  generateDeck();
  selectCards(0);
  resetTimer();
  startCounting();
});
displayHighScore();
changeScoreColor(); //pone la mejor marca si existe
