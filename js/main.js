"use strict";
import { generateDeck, ul } from "./generateDeck.js";
import { selectCards } from "./flipCards.js";
import { startCounting, resetTimer } from "./timer.js";
import { changeScoreColor, displayHighScore } from "./scores.js";
import { rain } from "./lluvia.js";
const dealBtn = document.querySelector("#deal");
const winDiv = document.querySelector("#win");
const resetAfterWin = () => {
  // clearInterval(lluvia);
  generateDeck();
  selectCards(0);
  resetTimer();
  startCounting();
  rain(false);
};
dealBtn.addEventListener("click", (e) => {
  ul.innerHTML = "";
  winDiv.classList.add("behind");
  winDiv.classList.remove("infront");
  resetAfterWin();
});
displayHighScore();
changeScoreColor(); //pone la mejor marca si existe

export { resetAfterWin };
